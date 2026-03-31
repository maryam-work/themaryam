// @ts-ignore
import rawProductsData from '../src/data/compressed_catalog.json';

// Get API keys from Vercel/Local env (comma separated if multiple)
const ENV_KEYS = import.meta.env.VITE_GEMINI_API_KEY || '';
const API_KEYS = ENV_KEYS ? ENV_KEYS.split(',').map((k: string) => k.trim()).filter(Boolean) : [];

let currentKeyIndex = 0;

function getNextApiKey(): string {
    if (API_KEYS.length === 0) return '';
    const key = API_KEYS[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    return key;
}

function getApiUrl(apiKey: string): string {
    return `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;
}

// ===================================================================
// PRODUCT TYPES
// ===================================================================
export interface ProductInfo {
    handle: string;
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    image: string;
    url: string;
    searchBlob: string;
}

export interface MatchedProduct extends ProductInfo {
    score: number;
    reason: string;
}

// Load products
const PRODUCT_CATALOG = rawProductsData as ProductInfo[];

// ===================================================================
// RESULT CACHE
// ===================================================================
const RESULT_CACHE = new Map<string, { results: MatchedProduct[]; timestamp: number }>();
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

function normalizeQuery(q: string): string {
    return q.toLowerCase().trim()
        .replace(/[^\w\s₹]/g, '')
        .replace(/\s+/g, ' ')
        .split(' ').sort().join(' ');
}

// ===================================================================
// COMPACT SYSTEM PROMPT - For Intent Extraction Only
// ===================================================================
// We no longer send ANY products to Gemini. This keeps tokens tiny (~50 tokens), 
// costs basically nothing, and avoids all rate limits.
const INTENT_EXTRACTOR_PROMPT = `You are an intent extractor for a gifting search engine.
Analyze the user's search query and extract parameters.

RULES:
- Return ONLY valid JSON, nothing else. No markdown formatting.
- Extract "budget_max" as a number if a budget is mentioned (e.g., "under 500" -> 500). If none, return null.
- Extract "recipient" (e.g., boyfriend, wife, brother) or null.
- Extract "occasion" (e.g., birthday, anniversary) or null.
- Extract "keywords": an array of 2-5 important descriptor words from the query.

OUTPUT FORMAT:
{"budget_max":null,"recipient":null,"occasion":null,"keywords":[]}`;

interface ExtractedIntent {
    budget_max: number | null;
    recipient: string | null;
    occasion: string | null;
    keywords: string[];
}

// ===================================================================
// LOCAL MATCHING ALGORITHM - Runs against the entire compressed catalog
// ===================================================================
function generateLocalMatches(queryText: string, intent: ExtractedIntent | null): MatchedProduct[] {
    const rawTokens = queryText.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    
    // Combine keywords from intent + raw query words to ensure we catch everything
    const searchTerms = new Set([...rawTokens]);
    if (intent?.keywords) {
        intent.keywords.forEach(k => searchTerms.add(k.toLowerCase()));
    }
    
    // If no intent was extracted, try to guess budget from raw text
    let budgetMax = intent?.budget_max;
    if (!budgetMax) {
        const budgetMatch = queryText.match(/(?:under|below|upto|tak|andar|max|within|budget)\s*(?:₹|rs\.?|inr)?\s*(\d+)/i)
            || queryText.match(/(?:₹|rs\.?|inr)\s*(\d+)/i)
            || queryText.match(/(\d{3,5})\s*(?:ke\s+andar|mein|me|tak|budget)/i);
        if (budgetMatch) {
            budgetMax = parseInt(budgetMatch[1]);
        }
    }

    const recipientSearch = intent?.recipient?.toLowerCase();
    const occasionSearch = intent?.occasion?.toLowerCase();

    const scoredProducts = PRODUCT_CATALOG.map(product => {
        let score = 0;
        let reasons: string[] = [];

        // 1. Budget Filter / Score
        if (budgetMax !== null && budgetMax !== undefined) {
            if (product.price > budgetMax) {
                // Heavy penalty for being over budget
                score -= 100;
            } else {
                score += 15;
                if (product.price > budgetMax * 0.7) {
                    score += 5; // Good fit, near top of budget
                }
                reasons.push('Fits budget');
            }
        }

        const exactBlob = product.searchBlob;

        // 2. Exact Query Phrase Match
        if (exactBlob.includes(queryText.toLowerCase().trim())) {
            score += 40;
            reasons.push('Exact match');
        }

        // 3. Recipient Match
        if (recipientSearch && exactBlob.includes(recipientSearch)) {
            score += 25;
            reasons.push(`Perfect for ${intent.recipient}`);
        }

        // 4. Occasion Match
        if (occasionSearch && exactBlob.includes(occasionSearch)) {
            score += 25;
            reasons.push(`Great for ${intent.occasion}`);
        }

        // 5. General Keyword Match
        let keywordMatches = 0;
        searchTerms.forEach(term => {
            if (['and', 'for', 'the', 'with', 'gift', 'under', 'rupees'].includes(term)) return;
            
            if (exactBlob.includes(term)) {
                score += 15;
                keywordMatches++;
            }
            if (product.name.toLowerCase().includes(term)) {
                score += 10;
            }
            if (product.category.toLowerCase().includes(term)) {
                score += 10;
            }
        });

        if (keywordMatches > 0 && reasons.length === 0) {
            reasons.push('Matches keywords');
        }

        // 6. Tiebreaker - Category presence
        if (!reasons.length) {
            reasons.push(product.category);
        }

        return {
            product,
            score,
            reason: reasons.length > 0 ? Array.from(new Set(reasons)).slice(0, 2).join(' • ') : product.category
        };
    });

    // Filter, sort, and slice
    return scoredProducts
        .filter(p => p.score > 0) // Must have some relevance (unless pure budget search)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map(p => ({
            ...p.product,
            score: Math.min(100, Math.max(10, p.score)), // Cap between 10-100 for UI purposes
            reason: p.reason
        }));
}

// Fallback products if totally unable to find matches
function getFallbackProducts(): MatchedProduct[] {
    const popularCategories = ['Chocolates', 'Jar Cakes', 'Bouquets'];
    return [...PRODUCT_CATALOG]
        .sort(() => 0.5 - Math.random()) // Randomize slightly
        .slice(0, 4)
        .map(p => ({
            ...p,
            score: 85,
            reason: popularCategories.includes(p.category) ? 'Popular choice' : 'Recommended'
        }));
}

// ===================================================================
// MAIN SEARCH FUNCTION (Query Extraction -> Local Search)
// ===================================================================
export async function matchProducts(userQuery: string): Promise<MatchedProduct[]> {
    if (!userQuery || userQuery.trim().length === 0) return [];

    // 1. Check Cache
    const normalizedKey = normalizeQuery(userQuery);
    const cached = RESULT_CACHE.get(normalizedKey);
    if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
        console.log('[AI Search] Cache Hit:', userQuery);
        return cached.results;
    }

    // 2. Extract Intent using Gemini
    let extractedIntent: ExtractedIntent | null = null;
    const apiKey = getNextApiKey();

    if (apiKey) {
        try {
            console.log('[AI Search] Extracting intent remotely for:', userQuery);
            
            const requestBody = {
                contents: [
                    {
                        parts: [
                            {
                                text: `${INTENT_EXTRACTOR_PROMPT}\n\nUSER QUERY: "${userQuery}"\nJSON:`
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.1,
                    topK: 10,
                    topP: 0.9,
                    maxOutputTokens: 128,
                }
            };

            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 6000); // 6s timeout since it's a tiny prompt

            const response = await fetch(getApiUrl(apiKey), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
                signal: controller.signal
            });

            clearTimeout(timeout);

            if (response.ok) {
                const data = await response.json();
                let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
                
                // Parse cleanly
                text = text.trim();
                if (text.startsWith('```json')) text = text.slice(7);
                if (text.startsWith('```')) text = text.slice(3);
                if (text.endsWith('```')) text = text.slice(0, -3);
                text = text.trim();

                try {
                    extractedIntent = JSON.parse(text) as ExtractedIntent;
                    console.log('[AI Search] Successfully extracted intent:', extractedIntent);
                } catch (e) {
                    console.warn('[AI Search] Failed to parse intent JSON from AI output:', text);
                }
            } else {
                console.warn(`[AI Search] Remote extraction failed. Status: ${response.status}`);
            }
        } catch (error) {
            console.error('[AI Search] Remote extraction error:', error);
            // Non-fatal. If API fails, we just do local matching without extracted parameters
        }
    } else {
        console.warn('[AI Search] No VITE_GEMINI_API_KEY found in .env, running purely local search');
    }

    // 3. Score against Local Compressed Catalog
    let localResults = generateLocalMatches(userQuery, extractedIntent);

    // 4. Fallback if absolutely nothing matches
    if (localResults.length === 0) {
        console.warn('[AI Search] Local scoring yielded 0 matches, returning fallbacks.');
        localResults = getFallbackProducts();
    }

    // 5. Cache and return
    RESULT_CACHE.set(normalizedKey, { results: localResults, timestamp: Date.now() });
    return localResults;
}
