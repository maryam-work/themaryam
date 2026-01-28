import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X, Clock } from 'lucide-react';
import { matchProducts, MatchedProduct } from '../lib/aiService';
import SEO from '../components/SEO';

// Recently searched storage
const RECENT_SEARCHES_KEY = 'maryam_recent_searches';
const MAX_RECENT = 8;

const getRecentSearches = (): string[] => {
    try {
        const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const saveRecentSearch = (query: string): void => {
    try {
        const recent = getRecentSearches().filter(s => s.toLowerCase() !== query.toLowerCase());
        recent.unshift(query);
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)));
    } catch {
        // Ignore storage errors
    }
};

const clearRecentSearches = (): void => {
    try {
        localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
        // Ignore
    }
};

// Product Card Component - Responsive
const ProductCard: React.FC<{ product: MatchedProduct }> = ({ product }) => (
    <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
            />
            {/* AI Match Badge */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <span className="text-[10px]">✨</span>
                <span className="text-[10px] font-bold text-rose-600">{product.score}% Match</span>
            </div>
        </div>

        {/* Content */}
        <div className="p-3 lg:p-4">
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base line-clamp-2 mb-1 group-hover:text-rose-600 transition-colors">
                {product.name}
            </h3>
            <p className="text-rose-600 font-bold text-base lg:text-lg mb-1 lg:mb-2">₹{product.price.toLocaleString('en-IN')}</p>
            <p className="text-xs text-gray-500 line-clamp-1 italic hidden lg:block">"{product.reason}"</p>
        </div>
    </a>
);

// Loading Skeleton - Responsive
const ProductSkeleton: React.FC = () => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 animate-pulse">
        <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100"></div>
        <div className="p-3 lg:p-4 space-y-2 lg:space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-5 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-full hidden lg:block"></div>
        </div>
    </div>
);

// Main Search Page - Responsive for Mobile + Desktop
const SearchPage: React.FC = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const [query, setQuery] = useState('');
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const [products, setProducts] = useState<MatchedProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [placeholder, setPlaceholder] = useState('');
    const [isListening, setIsListening] = useState(false);

    // Load recent searches on mount
    useEffect(() => {
        setRecentSearches(getRecentSearches());
        inputRef.current?.focus();
    }, []);

    // Typing animation for placeholder
    useEffect(() => {
        const phrases = [
            "Bhai ka birthday aa raha hai...",
            "Ex ki shaadi mein kya gift du?",
            "Mummy ko kuch special dena hai...",
            "2000 mein girlfriend ke liye gift?",
            "Boss ko thank you bolna hai gift se..."
        ];

        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let timer: NodeJS.Timeout;

        const type = () => {
            const currentPhrase = phrases[currentPhraseIndex];
            let typingSpeed = 80;

            if (isDeleting) {
                setPlaceholder(currentPhrase.substring(0, currentCharIndex - 1));
                currentCharIndex--;
                typingSpeed = 30;
            } else {
                setPlaceholder(currentPhrase.substring(0, currentCharIndex + 1));
                currentCharIndex++;
            }

            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }

            timer = setTimeout(type, typingSpeed);
        };

        timer = setTimeout(type, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Speech to Text - Works on mobile and desktop
    const startListening = () => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert('Speech recognition is not supported in your browser. Please try Chrome or Edge.');
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.lang = 'hi-IN'; // Hindi + English
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.continuous = false;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setQuery(transcript);
            setIsListening(false);
            // Auto search after voice input
            setTimeout(() => handleSearch(transcript), 300);
        };

        recognition.onerror = (event: any) => {
            console.error('Speech error:', event.error);
            setIsListening(false);
            if (event.error === 'not-allowed') {
                alert('Microphone access denied. Please enable it in your browser settings.');
            }
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        try {
            recognition.start();
        } catch (err) {
            console.error('Speech start error:', err);
            setIsListening(false);
        }
    };

    // Handle search
    const handleSearch = async (searchQuery: string) => {
        const trimmed = searchQuery.trim();
        if (!trimmed) return;

        setIsLoading(true);
        setHasSearched(true);
        saveRecentSearch(trimmed);
        setRecentSearches(getRecentSearches());

        try {
            const results = await matchProducts(trimmed);
            setProducts(results);
        } catch (error) {
            console.error('Search error:', error);
            setProducts([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSearch(query);
    };

    const handleChipClick = (search: string) => {
        setQuery(search);
        handleSearch(search);
    };

    const handleClearRecent = () => {
        clearRecentSearches();
        setRecentSearches([]);
    };

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title={query ? `Search Results for "${query}" | The Maryam` : "Search Personalized Gifts | AI Gift Finder | The Maryam"}
                description="Search for the perfect personalized gifts. Use our AI-powered search to find customized frames, mugs, jewelry, and more. Free delivery across India."
                canonical="/search"
                keywords={['search gifts', 'gift finder', 'custom gift search', 'personalized gifts India']}
            />
            {/* Sticky Header with Search - Responsive */}
            <div className="sticky top-0 z-50 bg-white border-b border-rose-100 shadow-sm">
                <div className="max-w-4xl mx-auto flex items-center gap-3 px-4 py-3">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 hover:bg-rose-100 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    {/* Search Input */}
                    <form onSubmit={handleSubmit} className="flex-1 relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={placeholder || "Apni gift story batao..."}
                            className="w-full bg-white border border-rose-300 rounded-xl py-3 pl-11 pr-20 text-[15px] font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-400" />

                        {/* Right side buttons */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery('')}
                                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
                                >
                                    <X size={14} />
                                </button>
                            )}
                            {/* Mic Button - FontAwesome */}
                            <button
                                type="button"
                                onClick={startListening}
                                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isListening
                                    ? 'bg-rose-500 text-white animate-pulse'
                                    : 'bg-rose-50 text-rose-500 hover:bg-rose-100'
                                    }`}
                            >
                                <i className="fas fa-microphone"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Content - Responsive */}
            <div className="max-w-4xl mx-auto px-4 py-5">
                {/* Recent Searches */}
                {recentSearches.length > 0 && !hasSearched && (
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                                <Clock size={14} />
                                RECENTLY SEARCHED
                            </h3>
                            <button
                                onClick={handleClearRecent}
                                className="text-xs text-rose-500 hover:text-rose-600 font-medium"
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {recentSearches.map((search, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleChipClick(search)}
                                    className="px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-medium hover:bg-rose-100 transition-colors border border-rose-200"
                                >
                                    {search}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* AI Suggestions Hint - Beautiful Icon */}
                {!hasSearched && (
                    <div className="text-center py-12 lg:py-16">
                        <div className="text-6xl lg:text-7xl mb-4">🎁</div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">AI Gift Finder</h2>
                        <p className="text-gray-500 text-sm lg:text-base max-w-sm mx-auto">
                            Apni story batao — relation, occasion, budget — aur hum perfect gift dhundh lenge!
                        </p>
                    </div>
                )}

                {/* Loading State - Responsive Grid */}
                {isLoading && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                        {[...Array(4)].map((_, i) => (
                            <ProductSkeleton key={i} />
                        ))}
                    </div>
                )}

                {/* Search Results - Responsive Grid */}
                {!isLoading && hasSearched && products.length > 0 && (
                    <div>
                        <p className="text-sm text-gray-500 mb-4">
                            <span className="font-semibold text-rose-600">{products.length}</span> perfect matches found!
                        </p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                            {products.map((product, i) => (
                                <ProductCard key={i} product={product} />
                            ))}
                        </div>
                    </div>
                )}

                {/* No Results */}
                {!isLoading && hasSearched && products.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">No matches found</h3>
                        <p className="text-gray-500 text-sm">Try a different description or be more specific!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
