import React, { useEffect, useState, useRef } from 'react';
import { Container, Button, StarRating, Section, Marquee } from './UI';
import { ArrowRight, ArrowLeft, Sparkles, Send, Loader2, Gift, Zap, TrendingUp, Package, ShoppingBag, Star, Heart, Smartphone, Play, Gem, Mail, Clock, Smile, ScanLine, Box, Link, Wifi, Battery, Fingerprint, ExternalLink, MapPin, ChevronDown } from 'lucide-react';
import { Product, Article, Category } from '../types';
import { MatchedProduct } from '../lib/aiService';

// =============================================================================
// HERO SECTION (STRICTLY NO CHANGES - PRESERVED EXACTLY AS REQUESTED)
// =============================================================================

// Isolated Typewriter/Input Component to prevent Hero re-renders
const AnimatedSearchInput = ({
    onSearch
}: {
    onSearch: (text: string) => void
}) => {
    const [inputText, setInputText] = useState("");
    const [placeholder, setPlaceholder] = useState("");

    const phrases = [
        "Mere bhai ka birthday hai, kuch unique customized chahiye...",
        "Ex ko jalana hai, kuch classy dikhao...",
        "Biwi naraz hai, sorry bolne ke liye gift...",
        "Pehli date hai, impress karna hai...",
        "Long distance boyfriend ke liye kuch special..."
    ];

    // Typewriter effect logic - isolated here
    useEffect(() => {
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let timer: any;

        const type = () => {
            const currentPhrase = phrases[currentPhraseIndex];

            if (isDeleting) {
                setPlaceholder(currentPhrase.substring(0, currentCharIndex - 1));
                currentCharIndex--;
                typingSpeed = 50;
            } else {
                setPlaceholder(currentPhrase.substring(0, currentCharIndex + 1));
                currentCharIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(inputText);
    };

    return (
        <form onSubmit={handleSubmit} className="relative bg-white rounded-[2rem] shadow-2xl p-5 md:p-8 flex flex-col min-h-[220px] md:min-h-[240px] text-left transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-3 mb-3 md:mb-4 select-none">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="text-indigo-600 fill-indigo-600" size={16} />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Likh do jo dil mein hai...</span>
            </div>

            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full flex-1 text-xl md:text-3xl font-bold text-gray-900 placeholder-gray-300 focus:outline-none bg-transparent resize-none leading-tight font-heading"
                placeholder={placeholder}
                spellCheck={false}
                rows={2}
            />

            <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100 gap-4">
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0 select-none">
                    {['Bhai ka Birthday', 'Sorry Gift', 'Ex ki Shaadi'].map(tag => (
                        <span key={tag} onClick={() => setInputText(tag)} className="flex-shrink-0 text-[10px] font-bold bg-gray-50 hover:bg-gray-100 border border-gray-100 px-3 py-1.5 rounded-full text-gray-500 cursor-pointer transition-all uppercase tracking-wide whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto bg-black text-white px-6 py-3 md:px-8 rounded-full hover:bg-gray-900 transition-all flex items-center justify-center gap-2 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 whitespace-nowrap text-sm md:text-base"
                >
                    Generate Gift <ArrowRight size={16} />
                </button>
            </div>
        </form>
    );
};

export const Hero = ({ onSearch, isLoading }: { onSearch: (query: string) => void; isLoading?: boolean }) => {
    const [inputText, setInputText] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [selectedCity, setSelectedCity] = useState('Select Location');
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [locationSearch, setLocationSearch] = useState('');
    const [isGettingLocation, setIsGettingLocation] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const cities = ['Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];
    const filteredCities = cities.filter(city => city.toLowerCase().includes(locationSearch.toLowerCase()));

    // Typing animation
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
            let typingSpeed = 100;

            if (isDeleting) {
                setPlaceholder(currentPhrase.substring(0, currentCharIndex - 1));
                currentCharIndex--;
                typingSpeed = 50;
            } else {
                setPlaceholder(currentPhrase.substring(0, currentCharIndex + 1));
                currentCharIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000;
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

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowLocationDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim()) onSearch(inputText);
    };

    // Get current location using GPS
    const handleGetCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation not supported by your browser');
            return;
        }
        setIsGettingLocation(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    // Reverse geocoding to get city name
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
                    const data = await res.json();
                    const city = data.address?.city || data.address?.town || data.address?.state_district || data.address?.state || 'Your Location';
                    setSelectedCity(city);
                    setShowLocationModal(false);
                    setShowLocationDropdown(false);
                } catch {
                    setSelectedCity('Current Location');
                    setShowLocationModal(false);
                    setShowLocationDropdown(false);
                }
                setIsGettingLocation(false);
            },
            () => {
                alert('Unable to get location. Please enable GPS.');
                setIsGettingLocation(false);
            }
        );
    };

    const selectCity = (city: string) => {
        setSelectedCity(city);
        setShowLocationModal(false);
        setShowLocationDropdown(false);
        setLocationSearch('');
    };

    return (
        <div className="relative w-full overflow-hidden bg-white">

            {/* Mobile Location Modal - Full Screen */}
            {showLocationModal && (
                <div className="fixed inset-0 bg-white z-50 lg:hidden">
                    {/* Header */}
                    <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                        <button onClick={() => setShowLocationModal(false)} className="p-1">
                            <ArrowLeft size={24} className="text-gray-700" />
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={locationSearch}
                                onChange={(e) => setLocationSearch(e.target.value)}
                                placeholder="Enter area, street name..."
                                className="w-full text-base text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                                autoFocus
                            />
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Use Current Location */}
                    <button
                        onClick={handleGetCurrentLocation}
                        disabled={isGettingLocation}
                        className="w-full flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                            {isGettingLocation ? (
                                <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                            ) : (
                                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                                </svg>
                            )}
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-gray-900">Use Current Location</p>
                            <p className="text-xs text-gray-500">Using GPS</p>
                        </div>
                    </button>

                    {/* City List */}
                    <div className="p-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase mb-3">Popular Cities</p>
                        {filteredCities.map(city => (
                            <button
                                key={city}
                                onClick={() => selectCity(city)}
                                className="w-full text-left py-3 px-2 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>
            )}



            {/* Category Grid - Mobile Only (4x2 Grid) */}
            <div className="relative z-20 px-4 py-6 lg:hidden">
                <div className="border border-rose-400 rounded-2xl bg-white overflow-hidden p-3">
                    {/* Row 1 */}
                    <div className="grid grid-cols-4 gap-0">
                        <a href="/valentine" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-14 h-14 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/valentine_hero_image_800x800.jpg?v=1769151013" alt="Valentine" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Valentine</span>
                            {/* Right divider */}
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="/letters" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-14 h-14 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/letter_hero_image_800x800.jpg?v=1769150971" alt="Letters" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Letters</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="/bouquets" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-14 h-14 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/bouquet_hero_image_800x800.jpg?v=1769151295" alt="Bouquets" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Bouquets</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="/hampers" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors">
                            <div className="w-14 h-14 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/hamper_hero_image_800x800.jpg?v=1769151314" alt="Hampers" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Hampers</span>
                        </a>
                    </div>

                    {/* Horizontal divider with margins */}
                    <div className="mx-2 my-1 h-px bg-rose-200"></div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-4 gap-0">
                        <a href="/cards" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-14 h-14 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/cards_hero_image_800x800.jpg?v=1769151376" alt="Cards" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Cards</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="/wearables" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-14 h-14 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/wearables_hero_image_800x800.jpg?v=1769151421" alt="Wearables" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Wearables</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="/frames" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-14 h-14 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/frames_hero_image_800x800.jpg?v=1769151477" alt="Frames" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Frames</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="/personalised" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors">
                            <div className="w-14 h-14 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/personalised_hero_image_800x800.jpg?v=1769150941" alt="Personalised" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Personalised</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Category Grid - Desktop Version (8 cols in one row) */}
            <div className="hidden lg:block relative z-20 px-8 py-6">
                <div className="border border-rose-400 rounded-2xl bg-white overflow-hidden p-4">
                    <div className="grid grid-cols-8 gap-0">
                        <a href="/valentine" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/valentine_hero_image_800x800.jpg?v=1769151013" alt="Valentine" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Valentine</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="/letters" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/letter_hero_image_800x800.jpg?v=1769150971" alt="Letters" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Letters</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="/bouquets" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/bouquet_hero_image_800x800.jpg?v=1769151295" alt="Bouquets" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Bouquets</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="/hampers" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/hamper_hero_image_800x800.jpg?v=1769151314" alt="Hampers" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Hampers</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="/cards" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/cards_hero_image_800x800.jpg?v=1769151376" alt="Cards" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Cards</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="/wearables" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/wearables_hero_image_800x800.jpg?v=1769151421" alt="Wearables" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Wearables</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="/frames" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/frames_hero_image_800x800.jpg?v=1769151477" alt="Frames" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Frames</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="/personalised" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/personalised_hero_image_800x800.jpg?v=1769150941" alt="Personalised" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Personalised</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Premium Lazy Loading Image Component with Retry ---
const OptimizedImage = ({
    src,
    alt,
    className = ""
}: {
    src: string;
    alt: string;
    className?: string;
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [imageSrc, setImageSrc] = useState(src);
    const imgRef = useRef<HTMLDivElement>(null);
    const maxRetries = 5;

    // Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px', threshold: 0.01 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Retry loading with cache-busting
    const handleError = () => {
        if (retryCount < maxRetries) {
            const delay = Math.min(500 * Math.pow(1.5, retryCount), 3000);
            setTimeout(() => {
                setRetryCount(prev => prev + 1);
                const separator = src.includes('?') ? '&' : '?';
                setImageSrc(`${src}${separator}_r=${Date.now()}`);
            }, delay);
        }
    };

    return (
        <div ref={imgRef} className="relative w-full h-full overflow-hidden bg-gray-100">
            {/* Skeleton Loader */}
            <div
                className={`absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"
                    style={{ backgroundSize: '200% 100%' }}
                />
            </div>

            {/* Image - loads when in viewport */}
            {isInView && (
                <img
                    src={imageSrc}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)}
                    onError={handleError}
                    className={`
                        ${className}
                        transition-all duration-500 ease-out
                        ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}
                    `}
                    loading="lazy"
                    decoding="async"
                />
            )}
        </div>
    );
};

export const AIResults = ({ visible, products }: { visible: boolean; products: MatchedProduct[] }) => {
    if (!visible || products.length === 0) return null;

    return (
        <div id="ai-results" className="bg-white py-10 md:py-14 scroll-mt-24">
            <Container>
                {/* Minimal Header */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center">
                            <Gift className="text-white" size={18} />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-xl font-bold text-gray-900">Handpicked for You</h2>
                            <p className="text-[11px] md:text-xs text-gray-400">Based on what you described</p>
                        </div>
                    </div>
                    <span className="text-xs text-gray-400 hidden md:block">{products.length} results</span>
                </div>

                {/* Mobile: Full Width Sliding Carousel (1 product at a time) */}
                <div className="md:hidden -mx-4">
                    <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
                        {products.map((p, idx) => (
                            <a
                                key={p.handle}
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 w-[85vw] mx-2 first:ml-4 last:mr-4 snap-center"
                            >
                                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                                    {/* Image */}
                                    <div className="relative aspect-square overflow-hidden">
                                        <OptimizedImage
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Top Pick Badge */}
                                        {idx === 0 && (
                                            <div className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                                <Star size={10} className="fill-white" /> TOP PICK
                                            </div>
                                        )}
                                        {/* Match Score */}
                                        <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                                            {p.score}% Match
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 text-base leading-tight mb-1 line-clamp-2">{p.name}</h3>
                                        <p className="text-sm text-gray-500 mb-3 line-clamp-1">{p.reason}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold text-gray-900">₹{p.price}</span>
                                            <div className="flex items-center gap-1 text-gray-900 text-sm font-medium">
                                                View <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    {/* Scroll Dots */}
                    <div className="flex justify-center gap-1.5 mt-2">
                        {products.map((_, idx) => (
                            <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-gray-900' : 'bg-gray-200'}`} />
                        ))}
                    </div>
                </div>

                {/* Desktop: 4-Column Grid */}
                <div className="hidden md:grid grid-cols-4 gap-5">
                    {products.map((p, idx) => (
                        <a
                            key={p.handle}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer block"
                        >
                            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 group-hover:shadow-lg group-hover:border-gray-200 transition-all duration-300">
                                <div className="relative aspect-square overflow-hidden">
                                    <OptimizedImage
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {idx === 0 && (
                                        <div className="absolute top-2 left-2 bg-gray-900 text-white text-[9px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                            <Star size={8} className="fill-white" /> TOP PICK
                                        </div>
                                    )}
                                    <div className="absolute top-2 right-2 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                                        {p.score}%
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1 line-clamp-2">{p.name}</h3>
                                    <p className="text-[11px] text-gray-400 mb-2 line-clamp-1">{p.reason}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-gray-900">₹{p.price}</span>
                                        <ArrowRight size={14} className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </div>
    )
}

// =============================================================================
// 1. SHOP BY OCCASION - SMART AUTO-HIGHLIGHT CAROUSEL
// =============================================================================

// All occasions with optional dates (MM-DD format for recurring events)
const allOccasions = [
    // === ALWAYS TOP (no date, priority items) ===
    { title: "For Him", subtitle: "Gifts that speak his style", color: "bg-[#f0adfa]", icon: "👔", priority: true },
    { title: "For Her", subtitle: "Curated picks she'll adore", color: "bg-[#d7f271]", icon: "💎", priority: true },
    { title: "Couples", subtitle: "Celebrate your bond", color: "bg-[#ffd6e0]", icon: "💕", priority: true },
    { title: "Birthday", subtitle: "Celebrate their day", color: "bg-[#e0ccff]", icon: "🎂", priority: true },

    // === INDIAN FESTIVALS ===
    { title: "Diwali", subtitle: "Festival of lights", color: "bg-[#fff3b0]", icon: "🪔", date: "11-01" },
    { title: "Holi", subtitle: "Colors of joy", color: "bg-[#ff9a9e]", icon: "🎨", date: "03-14" },
    { title: "Raksha Bandhan", subtitle: "Bond of protection", color: "bg-[#ffd6e0]", icon: "🧵", date: "08-19" },
    { title: "Ganesh Chaturthi", subtitle: "Welcome Lord Ganesha", color: "bg-[#ffcc80]", icon: "🐘", date: "09-07" },
    { title: "Navratri", subtitle: "Nine nights of devotion", color: "bg-[#ff8a80]", icon: "🔱", date: "10-03" },
    { title: "Durga Puja", subtitle: "Goddess Durga's blessings", color: "bg-[#ea80fc]", icon: "🙏", date: "10-10" },
    { title: "Dussehra", subtitle: "Victory of good", color: "bg-[#ffab40]", icon: "🏹", date: "10-12" },
    { title: "Karwa Chauth", subtitle: "Love & devotion", color: "bg-[#ff80ab]", icon: "🌙", date: "10-20" },
    { title: "Bhai Dooj", subtitle: "Sibling love", color: "bg-[#80d8ff]", icon: "🤗", date: "11-03" },
    { title: "Makar Sankranti", subtitle: "Harvest festival", color: "bg-[#b9f6ca]", icon: "🪁", date: "01-14" },
    { title: "Pongal", subtitle: "Thai Pongal celebrations", color: "bg-[#fff59d]", icon: "🍚", date: "01-15" },
    { title: "Lohri", subtitle: "Bonfire festival", color: "bg-[#ffcc80]", icon: "🔥", date: "01-13" },
    { title: "Onam", subtitle: "Kerala's grand festival", color: "bg-[#c5e1a5]", icon: "🌸", date: "09-05" },
    { title: "Eid", subtitle: "Festival of joy", color: "bg-[#b2dfdb]", icon: "🌙", date: "04-10" },
    { title: "Christmas", subtitle: "Season of giving", color: "bg-[#ef9a9a]", icon: "🎄", date: "12-25" },

    // === GLOBAL CELEBRATIONS ===
    { title: "New Year", subtitle: "Fresh beginnings", color: "bg-[#b2ebf2]", icon: "🎊", date: "01-01" },
    { title: "Valentine's Day", subtitle: "Day of love", color: "bg-[#f8bbd9]", icon: "❤️", date: "02-14" },
    { title: "Mother's Day", subtitle: "Celebrate mom", color: "bg-[#f48fb1]", icon: "👩", date: "05-11" },
    { title: "Father's Day", subtitle: "Honor dad", color: "bg-[#90caf9]", icon: "👨", date: "06-15" },
    { title: "Friendship Day", subtitle: "For your besties", color: "bg-[#c5f9d7]", icon: "🤝", date: "08-03" },
    { title: "Women's Day", subtitle: "Celebrate her", color: "bg-[#ce93d8]", icon: "👑", date: "03-08" },
    { title: "Teacher's Day", subtitle: "Thank your guru", color: "bg-[#81d4fa]", icon: "📚", date: "09-05" },
    { title: "Children's Day", subtitle: "For little ones", color: "bg-[#fff176]", icon: "🧸", date: "11-14" },

    // === LIFE EVENTS ===
    { title: "Wedding", subtitle: "Make their day special", color: "bg-[#ffe4cc]", icon: "💒" },
    { title: "Anniversary", subtitle: "Cherish the moments", color: "bg-[#cce0ff]", icon: "💍" },
    { title: "Engagement", subtitle: "New beginnings", color: "bg-[#f3e5f5]", icon: "💎" },
    { title: "Baby Shower", subtitle: "Welcome the little one", color: "bg-[#fff9c4]", icon: "👶" },
    { title: "Graduation", subtitle: "Achievement unlocked", color: "bg-[#dcedc8]", icon: "🎓" },
    { title: "New Job", subtitle: "Career celebrations", color: "bg-[#b3e5fc]", icon: "💼" },
    { title: "Promotion", subtitle: "Moving up!", color: "bg-[#c8e6c9]", icon: "📈" },
    { title: "Retirement", subtitle: "New chapter begins", color: "bg-[#ffe0b2]", icon: "🏖️" },
    { title: "Housewarming", subtitle: "New home vibes", color: "bg-[#d4f0d4]", icon: "🏡" },

    // === OCCASIONS ===
    { title: "Date Night", subtitle: "Romantic gestures", color: "bg-[#ffcce0]", icon: "🌹" },
    { title: "Farewell", subtitle: "Memories to cherish", color: "bg-[#f0e0d0]", icon: "✈️" },
    { title: "Get Well Soon", subtitle: "Sending love", color: "bg-[#e1f5fe]", icon: "💐" },
    { title: "Thank You", subtitle: "Express gratitude", color: "bg-[#fff8e1]", icon: "🙏" },
    { title: "Apology", subtitle: "Make it right", color: "bg-[#fce4ec]", icon: "💝" },
    { title: "Congratulations", subtitle: "Celebrate success", color: "bg-[#e8f5e9]", icon: "🎉" },
    { title: "Just Because", subtitle: "No reason needed", color: "bg-[#f3e5f5]", icon: "✨" },

    // === RELATIONSHIPS ===
    { title: "Parents", subtitle: "Love wrapped in memories", color: "bg-[#77d2f3]", icon: "🏠" },
    { title: "Kids", subtitle: "Fun gifts they'll treasure", color: "bg-[#fff3b0]", icon: "🎈" },
    { title: "Grandparents", subtitle: "Honor their wisdom", color: "bg-[#d7ccc8]", icon: "👴" },
    { title: "Siblings", subtitle: "Sibling love", color: "bg-[#b2dfdb]", icon: "👫" },
    { title: "Besties", subtitle: "For friends like family", color: "bg-[#c5f9d7]", icon: "🤝" },
    { title: "Colleagues", subtitle: "Work friendships", color: "bg-[#cfd8dc]", icon: "👥" },
    { title: "Boss", subtitle: "Professional appreciation", color: "bg-[#d1c4e9]", icon: "🤵" },
    { title: "Teachers", subtitle: "Gratitude for mentors", color: "bg-[#b2ebf2]", icon: "✏️" },
];

// Function to check if an occasion is upcoming (within next 30 days)
const isUpcoming = (dateStr: string | undefined): { upcoming: boolean; daysLeft: number } => {
    if (!dateStr) return { upcoming: false, daysLeft: 999 };

    const today = new Date();
    const currentYear = today.getFullYear();
    const [month, day] = dateStr.split('-').map(Number);

    // Create date for this year
    let eventDate = new Date(currentYear, month - 1, day);

    // If date has passed this year, check next year
    if (eventDate < today) {
        eventDate = new Date(currentYear + 1, month - 1, day);
    }

    const diffTime = eventDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return { upcoming: daysLeft <= 30 && daysLeft >= 0, daysLeft };
};

// Sort occasions: priority first, then 2 closest upcoming festivals, then non-festivals, then all festivals at end
const getSortedOccasions = () => {
    const priorityItems = allOccasions.filter(o => o.priority);
    const otherItems = allOccasions.filter(o => !o.priority);

    // Separate festivals (items with dates) from non-festivals
    const festivals = otherItems.filter(o => o.date);
    const nonFestivals = otherItems.filter(o => !o.date);

    // Find upcoming festivals sorted by days left, take top 2
    const upcomingFestivals = festivals
        .map(o => ({ ...o, ...isUpcoming(o.date) }))
        .filter(o => o.upcoming)
        .sort((a, b) => a.daysLeft - b.daysLeft)
        .slice(0, 2); // Only top 2 closest

    // Get festival titles that are being highlighted
    const highlightedTitles = new Set(upcomingFestivals.map(f => f.title));

    // Remaining festivals (not in top 2 upcoming)
    const remainingFestivals = festivals.filter(f => !highlightedTitles.has(f.title));

    return { priorityItems, upcomingFestivals, nonFestivals, remainingFestivals };
};

export const CategoryArches = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);

    const { priorityItems, upcomingFestivals, nonFestivals, remainingFestivals } = getSortedOccasions();
    // Order: Priority → 2 Closest Upcoming Festivals → Non-Festival Items → All Other Festivals
    const sortedOccasions = [...priorityItems, ...upcomingFestivals, ...nonFestivals, ...remainingFestivals];

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        const rect = scrollContainerRef.current.getBoundingClientRect();
        setStartX(e.clientX - rect.left);
        setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const rect = scrollContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    return (
        <Section className="py-16 md:py-24">
            {/* Section Header - Minimal Style */}
            <div className="flex items-center justify-between mb-8 md:mb-12">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center">
                        <span className="text-base">📅</span>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">Shop by Occasion</h3>
                        <p className="text-[11px] md:text-xs text-gray-400">Find the perfect gift for every celebration</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
                    <span>Drag to explore</span>
                    <ArrowRight size={14} />
                </div>
            </div>

            {/* Draggable Carousel */}
            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className={`
                    flex gap-4 md:gap-5 overflow-x-auto no-scrollbar 
                    py-6 -my-6 
                    -mx-4 px-4 md:-mx-8 md:px-8
                    ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}
                `}
                style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
            >
                {sortedOccasions.map((c, i) => {
                    const { upcoming, daysLeft } = isUpcoming((c as any).date);
                    const isHighlighted = upcoming && !(c as any).priority;

                    return (
                        <a
                            key={i}
                            href={`/collections/${c.title.toLowerCase().replace(/ /g, '-')}`}
                            className={`
                                flex-shrink-0 w-52 md:w-64 h-72 md:h-80 rounded-3xl 
                                ${c.color} 
                                p-5 md:p-7 flex flex-col justify-between
                                shadow-md hover:shadow-2xl transition-all duration-300
                                transform hover:scale-[1.05] hover:-translate-y-2
                                group relative
                                ${isHighlighted ? 'ring-4 ring-yellow-400 ring-offset-2 animate-pulse' : ''}
                            `}
                            onClick={(e) => { if (isDragging) e.preventDefault(); }}
                            draggable="false"
                            style={isHighlighted ? {
                                animation: 'glow 2s ease-in-out infinite alternate',
                                boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)'
                            } : {}}
                        >
                            {/* Coming Soon Badge for Highlighted */}
                            {isHighlighted && (
                                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg animate-bounce z-10">
                                    🔥 {daysLeft === 0 ? 'TODAY!' : daysLeft === 1 ? 'TOMORROW!' : `${daysLeft} days`}
                                </div>
                            )}

                            {/* Index or Star Badge */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${(c as any).priority ? 'bg-black text-white' : 'bg-black/10 text-black'
                                }`}>
                                {(c as any).priority ? '★' : i + 1}
                            </div>

                            {/* Icon */}
                            <div className="flex-1 flex items-center justify-center">
                                <span className={`text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 ${isHighlighted ? 'animate-bounce' : ''}`}>
                                    {c.icon}
                                </span>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h4 className="font-heading font-bold text-lg md:text-xl text-black mb-1 leading-tight">
                                    {c.title}
                                </h4>
                                <p className="text-xs md:text-sm text-black/60 leading-tight">
                                    {c.subtitle}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Mobile swipe indicator */}
            <div className="flex md:hidden items-center justify-center gap-1 mt-6 text-gray-400 text-xs">
                <span>←</span>
                <span>Swipe to see more</span>
                <span>→</span>
            </div>
        </Section>
    )
}

// =============================================================================
// 2. TRENDING - LEVITATING STAGGERED GRID
// =============================================================================

const trendingItems = [
    { id: 't1', name: "Neon Vibes", price: 1800, img: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop", height: "h-80 md:h-96" }, // Neon sign
    { id: 't2', name: "Memory Map", price: 1200, img: "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop", height: "h-64 md:h-72" }, // Map frame
    { id: 't3', name: "Soundwave Art", price: 999, img: "https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop", height: "h-72 md:h-80" }, // Music plaque
    { id: 't4', name: "Engraved Wood", price: 1400, img: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop", height: "h-88 md:h-[420px]" }, // Wood craft
]

export const TrendingLevitation = () => {
    return (
        <Section>
            {/* Section Header - Minimal Style */}
            <div className="flex items-center justify-between mb-10 md:mb-14">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center">
                        <TrendingUp className="text-white" size={18} />
                    </div>
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">Trending Right Now</h2>
                        <p className="text-[11px] md:text-xs text-gray-400">What everyone is loving today</p>
                    </div>
                </div>
                <Button variant="outline" className="hidden md:flex text-xs">View All</Button>
            </div>

            <div className="columns-2 md:columns-4 gap-6 space-y-6">
                {trendingItems.map((item, i) => (
                    <div key={item.id} className="break-inside-avoid relative group cursor-pointer">
                        <div className={`w-full ${item.height} rounded-2xl overflow-hidden relative shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2`}>
                            <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                                <Heart size={18} />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-white font-bold text-lg">{item.name}</h3>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-white/90 text-sm">₹{item.price}</span>
                                    <span className="text-xs bg-white text-black px-2 py-1 rounded-full font-bold">Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center md:hidden">
                <Button variant="outline">View All Collections</Button>
            </div>
        </Section>
    )
}

// =============================================================================
// 3. TECH LOVE - CREATIVE COSMIC UPGRADE
// =============================================================================

export const TechLove = () => {
    return (
        <div className="w-full bg-[#050505] text-white py-32 overflow-hidden relative perspective-1000">
            {/* Cosmic Background */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[100px]"></div>
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* LEFT: 3D Composition (Mobile in Front, QR Behind) */}
                    <div className="order-2 lg:order-1 relative h-[600px] flex items-center justify-center -ml-12 md:ml-0">
                        <div className="relative w-80 h-full flex items-center justify-center">

                            {/* BACK: Floating QR Card (The Source) */}
                            <div className="absolute top-20 right-[-40px] z-0 w-64 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-float-delayed transform rotate-[12deg] opacity-60 hover:opacity-100 transition-all duration-500 scale-90">
                                <div className="relative overflow-hidden rounded-lg bg-white/90 p-2 opacity-80">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=Love-You-Forever" alt="QR" className="w-full h-auto" />
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="text-[10px] font-mono text-white/50 tracking-widest">SECRET MESSAGE INSIDE</p>
                                </div>
                            </div>

                            {/* FRONT: 3D Phone Glass Mockup (The Scanner/Viewer) */}
                            <div className="absolute top-0 left-4 z-20 w-[300px] animate-float">
                                {/* Glass Body */}
                                <div className="bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl border border-white/20 rounded-[3rem] h-[580px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden relative ring-1 ring-white/10">

                                    {/* Screen Content - The Website View */}
                                    <div className="absolute inset-0 bg-transparent flex flex-col relative z-10">
                                        {/* Website Hero Image */}
                                        <div className="h-1/2 relative group">
                                            <img src="https://images.pexels.com/photos/3585046/pexels-photo-3585046.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop" loading="lazy" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" alt="Memory" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent"></div>

                                            {/* Floating Hearts Animation inside Phone */}
                                            <div className="absolute bottom-10 right-4 animate-bounce">
                                                <Heart className="fill-red-500 text-red-500 drop-shadow-lg" size={24} />
                                            </div>
                                        </div>

                                        {/* Website Body */}
                                        <div className="h-1/2 bg-black/40 backdrop-blur-md p-6 flex flex-col">
                                            <div className="flex gap-1 mb-4 justify-center">
                                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                                <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                                                <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                                            </div>

                                            <h3 className="text-2xl font-heading font-bold text-white mb-2 text-center leading-tight">
                                                Happy Birthday <br /><span className="text-pink-500">Meri Jaan! ❤️</span>
                                            </h3>

                                            <div className="bg-white/10 rounded-xl p-4 mt-2 border border-white/5">
                                                <p className="text-white/90 text-xs italic leading-relaxed text-center">
                                                    "Tumhare liye ek chhota sa surprise. Scroll down to see our best memories..."
                                                </p>
                                            </div>

                                            {/* Fake Audio Player */}
                                            <div className="mt-4 flex items-center gap-3 bg-white/5 rounded-full p-2 border border-white/10">
                                                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                                                    <Play size={12} className="fill-white text-white ml-0.5" />
                                                </div>
                                                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                                                    <div className="h-full bg-pink-500 w-2/3 animate-[shimmer_2s_infinite]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scan Line Effect Overlay (Scanning the QR behind) */}
                                    <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-[20%] w-full animate-scan opacity-30"></div>

                                    {/* Dynamic Island */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50 flex items-center justify-center gap-2 shadow-lg">
                                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: Typography & Content */}
                    <div className="order-1 lg:order-2 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-pink-500"></div>
                            <span className="text-pink-400 font-bold tracking-[0.2em] text-sm uppercase">The Ultimate Surprise</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-[1] tracking-tighter select-none">
                            EK SCAN, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-shimmer bg-[length:200%_auto]">DHER SAARA PYAAR.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
                            Gift ke saath ek <span className="text-white font-bold underline decoration-pink-500 underline-offset-4">custom website</span> banaao. <br /><br />
                            <span className="text-gray-400 text-base">
                                1. Hum aapko ek pyara sa QR Code denge.<br />
                                2. Woh scan karenge.<br />
                                3. Aur ek <b className="text-white">beautiful animated website</b> khulegi sirf unke liye. With photos, music & your customized letter.
                            </span>
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-4 mb-16 justify-center md:justify-start">
                            <Button variant="glow" size="lg" className="w-full md:w-auto">Create Your Website Gift</Button>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                <ScanLine size={16} /> Scan Demo
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-gray-900 pt-8">
                            <div className="text-center md:text-left p-2 bg-white/5 rounded-lg border border-white/5">
                                <Smartphone className="mb-2 text-pink-500 mx-auto md:mx-0" size={20} />
                                <h4 className="font-bold text-white text-sm">Mobile Optimized</h4>
                            </div>
                            <div className="text-center md:text-left p-2 bg-white/5 rounded-lg border border-white/5">
                                <Link className="mb-2 text-blue-500 mx-auto md:mx-0" size={20} />
                                <h4 className="font-bold text-white text-sm">Lifetime URL</h4>
                            </div>
                            <div className="text-center md:text-left p-2 bg-white/5 rounded-lg border border-white/5">
                                <Heart className="mb-2 text-red-500 mx-auto md:mx-0" size={20} />
                                <h4 className="font-bold text-white text-sm">Total Privacy</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

// =============================================================================
// 4. CRAFT COLLECTIONS - BENTO GRID
// =============================================================================

export const CollectionsBento = () => {
    return (
        <Section className="bg-gray-50/50">
            <div className="text-center mb-16 select-none">
                <h2 className="text-4xl font-heading font-bold mb-4">Unique Like Your Bond</h2>
                <p className="text-gray-500">From handcrafted letters to neon signs, every piece tells a story.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

                {/* Large Item: Wearable Love (Jewelry) */}
                <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Jewelry" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg inline-block mb-4">
                            <Gem className="text-white" />
                        </div>
                        <h3 className="text-white text-3xl font-bold mb-2">Wearable Love</h3>
                        <p className="text-white/80 mb-6 max-w-sm">Custom name necklaces, jhumkas, and bracelets that carry your story.</p>
                        <Button variant="white" size="sm">Shop Jewelry</Button>
                    </div>
                </div>

                {/* Wide Item: Light & Paper (Jhilmil Cards) */}
                <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-orange-50 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.pexels.com/photos/6479589/pexels-photo-6479589.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" alt="Cards" />
                    <div className="absolute top-0 left-0 p-8 z-10">
                        <h3 className="text-gray-900 text-2xl font-bold mb-1 drop-shadow-sm">Paper & Light</h3>
                        <p className="text-gray-900 text-sm font-medium">Jhilmil cards, vintage letters & frames.</p>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                        <Mail className="text-orange-500" />
                    </div>
                </div>

                {/* Small Item: Timeless (Clocks/Wallets) */}
                <div className="relative group overflow-hidden rounded-3xl bg-blue-50 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.pexels.com/photos/4638862/pexels-photo-4638862.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop" loading="lazy" className="w-full h-full object-cover mix-blend-multiply opacity-60 transition-transform duration-700 group-hover:scale-110" alt="Wallet" />
                    <div className="absolute bottom-6 left-6">
                        <Clock className="mb-2 text-blue-900" />
                        <h3 className="text-blue-900 font-bold text-lg">Timeless Gifts</h3>
                        <p className="text-blue-700 text-xs">Clocks, Wallets & Pens</p>
                    </div>
                </div>

                {/* Small Item: Little Joys (Scrunchies etc) */}
                <div className="relative group overflow-hidden rounded-3xl bg-pink-50 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop" loading="lazy" className="w-full h-full object-cover mix-blend-multiply opacity-60 transition-transform duration-700 group-hover:scale-110" alt="Keychains" />
                    <div className="absolute bottom-6 left-6">
                        <Smile className="mb-2 text-pink-900" />
                        <h3 className="text-pink-900 font-bold text-lg">Little Joys</h3>
                        <p className="text-pink-700 text-xs">Scrunchies, Keychains & Ties</p>
                    </div>
                </div>

            </div>
        </Section>
    )
}

// =============================================================================
// 5. PROCESS - HOLOGRAPHIC GLASS UPGRADE
// =============================================================================

export const ProcessFlow = () => {
    return (
        <Section className="py-32 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-purple-50/30 to-white pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="text-center mb-20 select-none">
                    <span className="text-purple-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">The Journey</span>
                    <h2 className="text-5xl md:text-7xl font-heading font-black text-gray-900">
                        Magic in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">3 Steps</span>
                    </h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                    {/* Connecting Dashed Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-purple-200 -translate-y-1/2 z-0"></div>

                    {/* Step 1 */}
                    <div className="group relative z-10 flex flex-col items-center text-center md:translate-y-12 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-32 h-32 relative mb-8 cursor-pointer">
                            <div className="absolute inset-0 bg-purple-100 rounded-full animate-ping opacity-20"></div>
                            <div className="relative w-full h-full bg-white border-4 border-purple-100 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                                <Sparkles size={40} className="text-purple-600" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">1</div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">Tell Your Story</h3>
                        <p className="text-gray-500 max-w-xs leading-relaxed px-4">Just describe your feelings. Our AI creates the perfect gift concept instantly.</p>
                    </div>

                    {/* Step 2 - Center Elevated */}
                    <div className="group relative z-10 flex flex-col items-center text-center md:-translate-y-12 transition-all duration-500 hover:-translate-y-16">
                        <div className="w-32 h-32 relative mb-8 cursor-pointer">
                            <div className="absolute inset-0 bg-pink-100 rounded-full animate-ping opacity-20 animation-delay-2000"></div>
                            <div className="relative w-full h-full bg-white border-4 border-pink-100 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                                <Smartphone size={40} className="text-pink-600" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">2</div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-pink-600 transition-colors">See It Real-Time</h3>
                        <p className="text-gray-500 max-w-xs leading-relaxed px-4">Watch your customized gift come alive instantly on your screen.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="group relative z-10 flex flex-col items-center text-center md:translate-y-12 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-32 h-32 relative mb-8 cursor-pointer">
                            <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping opacity-20 animation-delay-4000"></div>
                            <div className="relative w-full h-full bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                                <Box size={40} className="text-indigo-600" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">3</div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">Delivered with Love</h3>
                        <p className="text-gray-500 max-w-xs leading-relaxed px-4">Premium packaging, handled with care, reaching their doorstep.</p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

// =============================================================================
// 6. TESTIMONIALS - WALL OF LOVE MARQUEE
// =============================================================================

const reviews = [
    { text: "The quality of the 3D doll was insane! My husband cried.", author: "Priya S.", loc: "Delhi", avatar: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { text: "Best customized store in India. The QR code card is genius.", author: "Rahul K.", loc: "Mumbai", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { text: "Packaging was so premium, felt like opening a luxury brand.", author: "Ananya M.", loc: "Bangalore", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { text: "AI suggestions actually worked. Found the perfect gift in seconds.", author: "Vikram R.", loc: "Pune", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { text: "Jhilmil cards are pure magic. The lights are so pretty.", author: "Sneha T.", loc: "Jaipur", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
]

export const LoveWall = () => {
    return (
        <Section className="py-24 overflow-hidden">
            <div className="text-center mb-16 select-none">
                <Heart className="mx-auto text-red-500 fill-red-500 mb-4 animate-pulse-slow" size={32} />
                <h2 className="text-4xl font-heading font-bold">Wall of Love</h2>
            </div>

            <Marquee className="mb-8" direction="left">
                {reviews.map((r, i) => (
                    <div key={i} className="w-[350px] md:w-[400px] bg-white border border-gray-100 p-8 rounded-2xl shadow-sm flex-shrink-0 hover:shadow-lg transition-all">
                        <StarRating rating={5} />
                        <p className="text-lg font-medium text-gray-800 mt-4 mb-6 leading-relaxed">"{r.text}"</p>
                        <div className="flex items-center gap-3">
                            <img src={r.avatar} alt={r.author} loading="lazy" className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100" />
                            <div>
                                <p className="font-bold text-sm">{r.author}</p>
                                <p className="text-xs text-gray-400">{r.loc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </Section>
    )
}

// =============================================================================
// 7. UNBOXING - INFINITE SCROLL
// =============================================================================

export const UnboxingStream = () => {
    const unboxingImages1 = [
        "https://images.pexels.com/photos/6479589/pexels-photo-6479589.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    ];

    const unboxingImages2 = [
        "https://images.pexels.com/photos/4638862/pexels-photo-4638862.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/6479594/pexels-photo-6479594.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/6479578/pexels-photo-6479578.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/6479566/pexels-photo-6479566.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    ];

    return (
        <div className="py-24 border-t border-gray-100 bg-black text-white">
            <Container className="mb-12 flex justify-between items-center select-none">
                <h2 className="text-3xl font-heading font-bold">Unboxing Joy</h2>
                <a href="#" className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors">
                    Follow us @themaryam.in <ArrowRight size={14} />
                </a>
            </Container>

            <div className="flex flex-col gap-6">
                {/* Row 1 - Left */}
                <Marquee direction="left">
                    {unboxingImages1.map((src, i) => (
                        <div key={i} className="w-64 h-80 bg-gray-900 rounded-xl overflow-hidden relative group flex-shrink-0 cursor-pointer">
                            <img src={src} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt="Unboxing" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="fill-white text-white ml-1" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>

                {/* Row 2 - Right */}
                <Marquee direction="right">
                    {unboxingImages2.map((src, i) => (
                        <div key={i} className="w-64 h-80 bg-gray-900 rounded-xl overflow-hidden relative group flex-shrink-0 cursor-pointer">
                            <img src={src} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt="Unboxing" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="fill-white text-white ml-1" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
