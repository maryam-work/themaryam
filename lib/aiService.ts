import productDataRaw from '../all_product.json';

// Multiple API keys for load balancing and rate limit handling
const API_KEYS = [
    'AIzaSyBCG0yxJxsC3wuEVskfF7jyvcpu7u6dfjs', // Original key
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

// Get next API key (round-robin rotation)
function getNextApiKey(): string {
    const key = API_KEYS[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    return key;
}

// Get API URL with current key
function getApiUrl(apiKey: string): string {
    return `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`;
}

// Product data from JSON
const productData = productDataRaw as any;

// Build product catalog from JSON for quick lookup
export interface ProductInfo {
    handle: string;
    name: string;
    price: number;
    image: string;
    url: string;
    category: string;
    description: string;
}

// Create a map of handle -> product info for quick lookup
const PRODUCT_MAP: Record<string, ProductInfo> = {};
productData.products.forEach((p: any) => {
    PRODUCT_MAP[p.handle] = {
        handle: p.handle,
        name: p.name,
        price: p.price,
        image: p.images?.[0] || '', // First image from Shopify CDN
        url: p.product_url,
        category: p.category,
        description: p.description
    };
});

// Get list of all valid handles
const ALL_HANDLES = productData.products.map((p: any) => p.handle);

// System prompt for AI
const SYSTEM_PROMPT = `You are a product matching engine for TheMaryam gift store. Your ONLY job is to analyze user queries and return matching product handles from the product database.

## YOUR ROLE

- You are NOT a chatbot
- You do NOT have conversations
- You ONLY analyze queries and return matching product handles
- You return structured JSON output, nothing else

## AVAILABLE PRODUCT HANDLES (use ONLY these exact handles):
${ALL_HANDLES.map((h: string) => `- ${h}`).join('\n')}

## INPUT

User will provide a query like:
- "bhai ke liye gift"
- "girlfriend birthday under 1000"
- "rakhi pe behen ko kuch premium"
- "chocolate wala kuch"
- "romantic anniversary gift"

## OUTPUT FORMAT

You MUST return ONLY this JSON structure, nothing else. Return 4-8 matching products sorted by relevance:

{
  "matches": [
    {
      "handle": "product-handle-here",
      "score": 95,
      "reason": "short reason why matched"
    }
  ],
  "query_analysis": {
    "recipient": "identified recipient or null",
    "gender": "male/female/unisex/null",
    "occasion": "identified occasion or null",
    "budget": "number or null",
    "budget_tier": "budget/mid/premium/null",
    "mood": "identified mood or null",
    "keywords": ["extracted", "keywords"]
  }
}

IMPORTANT:
- Return ONLY valid JSON, no markdown, no explanations
- Use ONLY handles from the list above
- Return 4-8 products maximum
- Sort by relevance score (highest first)`;

// Build product context for AI
function buildProductContext(): string {
    const products = productData.products;
    return products.map((p: any) => {
        return `HANDLE: ${p.handle}
Name: ${p.name}
Price: ₹${p.price}
Category: ${p.category}
For: ${p.suitable_for?.join(', ') || 'anyone'}
Relationships: ${p.relationships?.slice(0, 10).join(', ') || ''}
Occasions: ${p.occasions?.slice(0, 10).join(', ') || ''}
Mood: ${p.mood?.slice(0, 5).join(', ') || ''}
Keywords: ${p.keywords?.slice(0, 15).join(', ') || ''}`;
    }).join('\n\n---\n\n');
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

// Call Gemini API to match products with automatic key rotation and failover
export async function matchProducts(userQuery: string): Promise<MatchedProduct[]> {
    const productContext = buildProductContext();

    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: `${SYSTEM_PROMPT}

## PRODUCT DATABASE:
${productContext}

## USER QUERY:
"${userQuery}"

Return ONLY the JSON response, nothing else:`
                    }
                ]
            }
        ],
        generationConfig: {
            temperature: 0.3,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
        }
    };

    // Try all API keys until one works
    let lastError: Error | null = null;
    const triedKeys = new Set<number>();

    while (triedKeys.size < API_KEYS.length) {
        const keyIndex = currentKeyIndex;
        const apiKey = getNextApiKey();
        triedKeys.add(keyIndex);

        try {
            console.log(`[AI] Trying API key ${keyIndex + 1}/${API_KEYS.length}`);

            const response = await fetch(getApiUrl(apiKey), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            // Check for rate limit or quota errors
            if (response.status === 429 || response.status === 403) {
                console.warn(`[AI] Key ${keyIndex + 1} rate limited (${response.status}), trying next key...`);
                continue; // Try next key
            }

            if (!response.ok) {
                const errorText = await response.text();
                // Check if error message indicates quota exceeded
                if (errorText.includes('quota') || errorText.includes('limit') || errorText.includes('exceeded')) {
                    console.warn(`[AI] Key ${keyIndex + 1} quota exceeded, trying next key...`);
                    continue; // Try next key
                }
                throw new Error(`API error: ${response.status} - ${errorText}`);
            }

            const data = await response.json();

            // Check for quota error in response body
            if (data.error?.message?.includes('quota') || data.error?.message?.includes('limit')) {
                console.warn(`[AI] Key ${keyIndex + 1} quota error in response, trying next key...`);
                continue; // Try next key
            }

            // Extract text from Gemini response
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

            // Parse JSON from response (handle markdown code blocks)
            let jsonStr = text.trim();
            if (jsonStr.startsWith('```json')) {
                jsonStr = jsonStr.slice(7);
            }
            if (jsonStr.startsWith('```')) {
                jsonStr = jsonStr.slice(3);
            }
            if (jsonStr.endsWith('```')) {
                jsonStr = jsonStr.slice(0, -3);
            }
            jsonStr = jsonStr.trim();

            const aiResponse: AIResponse = JSON.parse(jsonStr);

            // Map AI response to product info with REAL Shopify images
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

            console.log(`[AI] Success with key ${keyIndex + 1}, found ${matchedProducts.length} products`);

            // Return top 4 products
            return matchedProducts.slice(0, 4);

        } catch (error) {
            lastError = error as Error;
            console.error(`[AI] Error with key ${keyIndex + 1}:`, error);
            // Continue to next key
        }
    }

    // All keys failed
    console.error('[AI] All API keys exhausted, returning fallback products');
    return getFallbackProducts();
}

// Fallback products if AI fails - using real products from catalog
function getFallbackProducts(): MatchedProduct[] {
    const fallbackHandles = [
        'led-letter-lights-glass-box',
        'all-chocolate-bouquet',
        'vintage-book-personalized',
        'folds-custom-qr-card'
    ];

    return fallbackHandles.map(handle => {
        const product = PRODUCT_MAP[handle];
        if (!product) {
            return null;
        }
        return {
            ...product,
            score: 80,
            reason: 'Popular gift choice'
        };
    }).filter(Boolean) as MatchedProduct[];
}
