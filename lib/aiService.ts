import productDataRaw from '../all_product.json';

// Multiple API keys for load balancing and rate limit handling
const API_KEYS = [
    'AIzaSyBCG0yxJxsC3wuEVskfF7jyvcpu7u6dfjs',
    'AIzaSyBjK20maKwuiEeeFlbQRJ8FUE0yorOavu8',
    'AIzaSyAuSmhurr0dRTWuqB6nKBdP4pHpF2U3aDo',
    'AIzaSyBrIjYTd3MFN24CCHSGrZSlqMreVXBAvSw',
    'AIzaSyD7Qfc9-DoY5CQW5ZPPpwsoNGOJcWUZsMs',
    'AIzaSyBWE1w8qViWpqUXAPgU8XogXRMajdLzLhE',
    'AIzaSyBIq08dZHBaDTxdWdd_v_3cTgn0xH8Pj5o',
    'AIzaSyDzUKT7Zx_NoinmXfid4hEkwoO7hACa2kY',
    'AIzaSyAkF8HW-C-gC77Ok494esRGMeXWBQjRJ34',
    'AIzaSyBHda9popNd53-bS4eE0Wv8voe4NWsnR94',
    'AIzaSyBN1MvU9szyWslbAgYEx7gr8OIi9YFsZ54',
    'AIzaSyC3kMunjzCdgbab144y3NWkqZnQnixXxPY'
];

let currentKeyIndex = 0;

function getNextApiKey(): string {
    const key = API_KEYS[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    return key;
}

function getApiUrl(apiKey: string): string {
    return `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;
}

// Product data from JSON
const productData = productDataRaw as any;

// ===================================================================
// PRODUCT TYPES
// ===================================================================
export interface ProductInfo {
    handle: string;
    name: string;
    price: number;
    image: string;
    url: string;
    category: string;
    description: string;
}

export interface AIMatchResult {
    handle: string;
    score: number;
    reason: string;
}

export interface AIResponse {
    matches: AIMatchResult[];
    query_analysis: {
        recipient: string | null;
        gender: string | null;
        occasion: string | null;
        budget: number | null;
        budget_tier: string | null;
        mood: string | null;
        keywords: string[];
    };
}

export interface MatchedProduct extends ProductInfo {
    score: number;
    reason: string;
}

// ===================================================================
// PRODUCT MAP — For quick handle -> full product lookup
// ===================================================================
const PRODUCT_MAP: Record<string, ProductInfo> = {};
productData.products.forEach((p: any) => {
    PRODUCT_MAP[p.handle] = {
        handle: p.handle,
        name: p.name,
        price: p.price,
        image: p.images?.[0] || '',
        url: p.product_url,
        category: p.category,
        description: p.description
    };
});

// ===================================================================
// LOCAL SEARCH INDEX — For fast local matching + pre-filtering
// Each product gets a flat searchable text blob (lowercase)
// ===================================================================
interface SearchableProduct {
    handle: string;
    name: string;
    price: number;
    category: string;
    priceTier: string;
    searchBlob: string; // All searchable text combined, lowercase
    suitableFor: string[];
    relationships: string[];
    occasions: string[];
    mood: string[];
    keywords: string[];
}

const SEARCH_INDEX: SearchableProduct[] = productData.products.map((p: any) => {
    const allText = [
        p.name,
        p.full_name || '',
        p.category,
        p.subcategory || '',
        p.description || '',
        ...(p.suitable_for || []),
        ...(p.relationships || []),
        ...(p.occasions || []),
        ...(p.mood || []),
        ...(p.keywords || []),
        p.price_tier || '',
        `₹${p.price}`,
        ...(p.age_group || [])
    ].join(' ').toLowerCase();

    return {
        handle: p.handle,
        name: p.name,
        price: p.price,
        category: p.category,
        priceTier: p.price_tier || 'mid',
        searchBlob: allText,
        suitableFor: (p.suitable_for || []).map((s: string) => s.toLowerCase()),
        relationships: (p.relationships || []).map((s: string) => s.toLowerCase()),
        occasions: (p.occasions || []).map((s: string) => s.toLowerCase()),
        mood: (p.mood || []).map((s: string) => s.toLowerCase()),
        keywords: (p.keywords || []).map((s: string) => s.toLowerCase()),
    };
});

// ===================================================================
// RESULT CACHE — Avoid repeated API calls for same/similar queries
// ===================================================================
const RESULT_CACHE = new Map<string, { results: MatchedProduct[]; timestamp: number }>();
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

function normalizeQuery(q: string): string {
    return q.toLowerCase().trim()
        .replace(/[^\w\s₹]/g, '')
        .replace(/\s+/g, ' ')
        .split(' ').sort().join(' ');
}

function getCachedResult(query: string): MatchedProduct[] | null {
    const key = normalizeQuery(query);
    const cached = RESULT_CACHE.get(key);
    if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
        console.log('[AI] Cache hit for:', query);
        return cached.results;
    }
    return null;
}

function setCachedResult(query: string, results: MatchedProduct[]): void {
    const key = normalizeQuery(query);
    RESULT_CACHE.set(key, { results, timestamp: Date.now() });
    // Keep cache size bounded
    if (RESULT_CACHE.size > 100) {
        const oldest = RESULT_CACHE.keys().next().value;
        if (oldest) RESULT_CACHE.delete(oldest);
    }
}

// ===================================================================
// LOCAL FUZZY MATCHING — Zero API cost, instant results, always works
// Scores each product based on keyword overlap with user query
// ===================================================================
function localMatch(userQuery: string): MatchedProduct[] {
    const queryLower = userQuery.toLowerCase().trim();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 1);

    // Extract budget from query (e.g. "under 500", "₹1000", "500 ke andar")
    let budgetMax: number | null = null;
    const budgetMatch = queryLower.match(/(?:under|below|upto|tak|andar|max|within|budget)\s*(?:₹|rs\.?|inr)?\s*(\d+)/i)
        || queryLower.match(/(?:₹|rs\.?|inr)\s*(\d+)/i)
        || queryLower.match(/(\d{3,5})\s*(?:ke\s+andar|mein|me|tak|budget)/i);
    if (budgetMatch) {
        budgetMax = parseInt(budgetMatch[1]);
    }

    // Score each product
    const scored = SEARCH_INDEX.map(product => {
        let score = 0;
        let matchReasons: string[] = [];

        // Budget filter — if user specified budget and product exceeds it, heavy penalty
        if (budgetMax !== null && product.price > budgetMax) {
            score -= 50;
        } else if (budgetMax !== null && product.price <= budgetMax) {
            score += 10;
            matchReasons.push('fits budget');
        }

        // Full query match in search blob (best signal)
        if (product.searchBlob.includes(queryLower)) {
            score += 30;
            matchReasons.push('exact match');
        }

        // Individual word matches
        for (const word of queryWords) {
            // Skip common filler words
            if (['ke', 'ki', 'ka', 'liye', 'hai', 'me', 'mein', 'kuch', 'wala', 'wali', 'for', 'the', 'and', 'gift', 'gifts'].includes(word)) {
                continue;
            }

            if (product.searchBlob.includes(word)) {
                score += 5;
            }

            // Category match (strong signal)
            if (product.category.toLowerCase().includes(word)) {
                score += 15;
                matchReasons.push(product.category);
            }

            // Name match (strong signal)
            if (product.name.toLowerCase().includes(word)) {
                score += 12;
            }

            // Relationship match
            if (product.relationships.some(r => r.includes(word))) {
                score += 8;
                matchReasons.push('relationship match');
            }

            // Occasion match
            if (product.occasions.some(o => o.includes(word))) {
                score += 8;
                matchReasons.push('occasion match');
            }

            // Mood match
            if (product.mood.some(m => m.includes(word))) {
                score += 5;
            }

            // Keyword match
            if (product.keywords.some(k => k.includes(word))) {
                score += 6;
            }
        }

        // Multi-word phrase matching (e.g. "chocolate bouquet", "photo frame")
        for (let i = 0; i < queryWords.length - 1; i++) {
            const bigram = queryWords[i] + ' ' + queryWords[i + 1];
            if (product.searchBlob.includes(bigram)) {
                score += 15; // Bonus for phrase match
            }
        }

        const reason = matchReasons.length > 0 ? [...new Set(matchReasons)].slice(0, 2).join(', ') : product.category;

        return {
            handle: product.handle,
            score: Math.min(Math.max(score, 0), 100),
            reason
        };
    });

    // Sort by score descending, take top 6
    const topMatches = scored
        .filter(s => s.score > 5)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);

    // Map to full product info
    return topMatches.map(match => {
        const product = PRODUCT_MAP[match.handle];
        if (!product) return null;
        return {
            ...product,
            score: match.score,
            reason: match.reason
        };
    }).filter(Boolean) as MatchedProduct[];
}

// ===================================================================
// ULTRA-COMPRESSED AI PROMPT — Sends only pre-filtered candidates
// Instead of 250 products (~50K tokens), sends ~20 candidates (~2K tokens)
// ===================================================================
function buildCompressedContext(candidates: SearchableProduct[]): string {
    // Ultra compact format: one line per product
    // Format: HANDLE|Name|₹Price|Category|key1,key2,key3
    return candidates.map(p => {
        const topKeywords = p.keywords.slice(0, 8).join(',');
        const topOccasions = p.occasions.slice(0, 5).join(',');
        const topRelations = p.relationships.slice(0, 5).join(',');
        const moods = p.mood.slice(0, 4).join(',');
        return `${p.handle}|${p.name}|₹${p.price}|${p.category}|${p.priceTier}|R:${topRelations}|O:${topOccasions}|M:${moods}|K:${topKeywords}`;
    }).join('\n');
}

function preFilterCandidates(userQuery: string, maxCandidates: number = 25): SearchableProduct[] {
    const queryLower = userQuery.toLowerCase().trim();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 1);

    // Quick score for pre-filtering
    const scored = SEARCH_INDEX.map(product => {
        let score = 0;
        if (product.searchBlob.includes(queryLower)) score += 20;
        for (const word of queryWords) {
            if (product.searchBlob.includes(word)) score += 3;
            if (product.category.toLowerCase().includes(word)) score += 10;
            if (product.name.toLowerCase().includes(word)) score += 8;
        }
        return { product, score };
    });

    // Sort by score and take top candidates
    return scored
        .sort((a, b) => b.score - a.score)
        .slice(0, maxCandidates)
        .map(s => s.product);
}

const COMPACT_SYSTEM_PROMPT = `You are a gift matching engine. Analyze user query and return matching products from the CANDIDATES list below.

RULES:
- Return ONLY valid JSON, no markdown
- Use ONLY handles from candidates
- Return 4-8 products sorted by relevance
- Score 0-100 based on match quality

OUTPUT FORMAT:
{"matches":[{"handle":"xxx","score":95,"reason":"short reason"}],"query_analysis":{"recipient":null,"gender":null,"occasion":null,"budget":null,"budget_tier":null,"mood":null,"keywords":[]}}`;

// ===================================================================
// MAIN SEARCH FUNCTION — Hybrid: Cache → AI (with pre-filter) → Local fallback
// ===================================================================
export async function matchProducts(userQuery: string): Promise<MatchedProduct[]> {
    // 1. Check cache first
    const cached = getCachedResult(userQuery);
    if (cached) return cached;

    // 2. Pre-filter candidates for AI (reduces 250 products → ~25)
    const candidates = preFilterCandidates(userQuery, 25);

    // 3. Build ultra-compact prompt with only filtered candidates
    const compressedContext = buildCompressedContext(candidates);
    const allHandles = candidates.map(c => c.handle);

    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: `${COMPACT_SYSTEM_PROMPT}

CANDIDATE HANDLES: ${allHandles.join(', ')}

CANDIDATES (handle|name|price|category|tier|relations|occasions|moods|keywords):
${compressedContext}

USER QUERY: "${userQuery}"

Return JSON:`
                    }
                ]
            }
        ],
        generationConfig: {
            temperature: 0.2,
            topK: 30,
            topP: 0.9,
            maxOutputTokens: 512,
        }
    };

    // 4. Try AI with key rotation
    let lastError: Error | null = null;
    const triedKeys = new Set<number>();

    while (triedKeys.size < API_KEYS.length) {
        const keyIndex = currentKeyIndex;
        const apiKey = getNextApiKey();
        triedKeys.add(keyIndex);

        try {
            console.log(`[AI] Trying key ${keyIndex + 1}/${API_KEYS.length} (${candidates.length} candidates, ~${compressedContext.length} chars)`);

            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout

            const response = await fetch(getApiUrl(apiKey), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
                signal: controller.signal
            });

            clearTimeout(timeout);

            // Rate limit or quota — try next key
            if (response.status === 429 || response.status === 403) {
                console.warn(`[AI] Key ${keyIndex + 1} rate limited (${response.status})`);
                continue;
            }

            if (!response.ok) {
                const errorText = await response.text();
                if (errorText.includes('quota') || errorText.includes('limit') || errorText.includes('exceeded')) {
                    console.warn(`[AI] Key ${keyIndex + 1} quota exceeded`);
                    continue;
                }
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();

            if (data.error?.message?.includes('quota') || data.error?.message?.includes('limit')) {
                console.warn(`[AI] Key ${keyIndex + 1} quota in response body`);
                continue;
            }

            // Extract and parse response
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            let jsonStr = text.trim();
            if (jsonStr.startsWith('```json')) jsonStr = jsonStr.slice(7);
            if (jsonStr.startsWith('```')) jsonStr = jsonStr.slice(3);
            if (jsonStr.endsWith('```')) jsonStr = jsonStr.slice(0, -3);
            jsonStr = jsonStr.trim();

            const aiResponse: AIResponse = JSON.parse(jsonStr);

            // Map to full product info
            const matchedProducts: MatchedProduct[] = [];
            for (const match of aiResponse.matches) {
                const productInfo = PRODUCT_MAP[match.handle];
                if (productInfo) {
                    matchedProducts.push({
                        ...productInfo,
                        score: match.score,
                        reason: match.reason
                    });
                }
            }

            const results = matchedProducts.slice(0, 6);
            console.log(`[AI] ✅ Success with key ${keyIndex + 1}, found ${results.length} products`);

            // Cache the result
            setCachedResult(userQuery, results);
            return results;

        } catch (error: any) {
            lastError = error;
            if (error.name === 'AbortError') {
                console.warn(`[AI] Key ${keyIndex + 1} timed out`);
            } else {
                console.error(`[AI] Key ${keyIndex + 1} error:`, error.message);
            }
        }
    }

    // 5. All API keys failed → Fall back to LOCAL matching (always works!)
    console.warn('[AI] ⚠️ All API keys failed, using local matching');
    const localResults = localMatch(userQuery);

    if (localResults.length > 0) {
        console.log(`[AI] Local matching found ${localResults.length} products`);
        setCachedResult(userQuery, localResults);
        return localResults;
    }

    // 6. Absolute last resort — return popular products
    console.warn('[AI] Local matching also returned 0, using fallback');
    return getFallbackProducts();
}

// Fallback products if everything fails
function getFallbackProducts(): MatchedProduct[] {
    const fallbackHandles = [
        'led-letter-lights-glass-box',
        'all-chocolate-bouquet',
        'vintage-book-personalized',
        'folds-custom-qr-card'
    ];

    return fallbackHandles.map(handle => {
        const product = PRODUCT_MAP[handle];
        if (!product) return null;
        return {
            ...product,
            score: 80,
            reason: 'Popular gift choice'
        };
    }).filter(Boolean) as MatchedProduct[];
}
