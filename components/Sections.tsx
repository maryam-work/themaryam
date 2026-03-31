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
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/valentine_hero_image_800x800.jpg?v=1769151013" alt="Valentine" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Valentine</span>
                            {/* Right divider */}
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/letters" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/letter_hero_image_800x800.jpg?v=1769150971" alt="Letters" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Letters</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/bouquets" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/bouquet_hero_image_800x800.jpg?v=1769151295" alt="Bouquets" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Bouquets</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/gift-hampers" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/hamper_hero_image_800x800.jpg?v=1769151314" alt="Hampers" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Hampers</span>
                        </a>
                    </div>

                    {/* Horizontal divider with margins */}
                    <div className="mx-2 my-1 h-px bg-rose-200"></div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-4 gap-0">
                        <a href="https://shop.themaryam.in/collections/cards" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/cards_hero_image_800x800.jpg?v=1769151376" alt="Cards" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Cards</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/wearables" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/wearables_hero_image_800x800.jpg?v=1769151421" alt="Wearables" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Wearables</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/frames" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/frames_hero_image_800x800.jpg?v=1769151477" alt="Frames" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Frames</span>
                            <div className="absolute right-0 top-2 bottom-2 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/customized" className="flex flex-col items-center py-3 px-1 text-center group hover:bg-rose-50 transition-colors">
                            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/personalised_hero_image_800x800.jpg?v=1769150941" alt="Customised" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs font-semibold text-gray-700 leading-tight group-hover:text-rose-500 transition-colors">Customised</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Ratings Banner - Mobile Only */}
            <div className="px-4 pb-4 lg:hidden flex justify-center">
                <a
                    href="https://maps.app.goo.gl/VMqijduYYiZZjSEB9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[85%] block transition-opacity duration-200 active:opacity-75"
                >
                    <img
                        src="/ratings_banner.png"
                        alt="Customer Ratings"
                        className="w-full h-auto rounded-xl"
                    />
                </a>
            </div>

            {/* Category Grid - Desktop Version (8 cols in one row) */}
            <div className="hidden lg:block relative z-20 px-8 py-6">
                <div className="border border-rose-400 rounded-2xl bg-white overflow-hidden p-4">
                    <div className="grid grid-cols-8 gap-0">
                        <a href="/valentine" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-24 h-24 mb-3 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/valentine_hero_image_800x800.jpg?v=1769151013" alt="Valentine" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Valentine</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/letters" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-24 h-24 mb-3 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/letter_hero_image_800x800.jpg?v=1769150971" alt="Letters" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Letters</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/bouquets" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-24 h-24 mb-3 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/bouquet_hero_image_800x800.jpg?v=1769151295" alt="Bouquets" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Bouquets</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/gift-hampers" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-24 h-24 mb-3 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/hamper_hero_image_800x800.jpg?v=1769151314" alt="Hampers" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Hampers</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/cards" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-24 h-24 mb-3 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/cards_hero_image_800x800.jpg?v=1769151376" alt="Cards" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Cards</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/wearables" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-24 h-24 mb-3 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/wearables_hero_image_800x800.jpg?v=1769151421" alt="Wearables" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Wearables</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/frames" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors relative">
                            <div className="w-24 h-24 mb-3 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/frames_hero_image_800x800.jpg?v=1769151477" alt="Frames" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Frames</span>
                            <div className="absolute right-0 top-3 bottom-3 w-px bg-rose-200"></div>
                        </a>
                        <a href="https://shop.themaryam.in/collections/customized" className="flex flex-col items-center py-4 px-3 text-center group hover:bg-rose-50 transition-colors">
                            <div className="w-24 h-24 mb-3 rounded-full flex items-center justify-center overflow-hidden">
                                <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/personalised_hero_image_800x800.jpg?v=1769150941" alt="Customised" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">Customised</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// =============================================================================
// CATEGORIES GRID - 18 Categories with Synchronized Scroll (Mobile 2 rows, Desktop 1 row)
// =============================================================================
export const CategoriesGrid: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // All 18 categories with functional search links
    const categories = [
        { id: 1, name: 'Anniversary', image: '/categories/anniversary.png', link: 'https://shop.themaryam.in/collections/anniversary' },
        { id: 2, name: 'Birthday', image: '/categories/birthday.png', link: 'https://shop.themaryam.in/collections/birthday' },
        { id: 3, name: 'Gift Sets', image: '/categories/gift-sets.png', link: 'https://shop.themaryam.in/collections/gift-sets' },
        { id: 4, name: 'Chocolates', image: '/categories/chocolates.png', link: 'https://shop.themaryam.in/collections/chocolates' },
        { id: 5, name: 'Customised', image: '/categories/personalised.png', link: 'https://shop.themaryam.in/collections/customized' },
        { id: 6, name: 'Bouquets', image: '/categories/bouquets.png', link: 'https://shop.themaryam.in/collections/bouquets' },
        { id: 7, name: 'Specials', image: '/categories/specials.png', link: 'https://shop.themaryam.in/collections/specials' },
        { id: 8, name: 'Valentine Gifts', image: '/categories/valentine-gifts.png', link: 'https://shop.themaryam.in/collections/valentine-gift' },
        { id: 9, name: 'Miss You', image: '/categories/miss-you.png', link: 'https://shop.themaryam.in/collections/miss-you' },
        { id: 10, name: 'Love You', image: '/categories/love-you.png', link: 'https://shop.themaryam.in/collections/love-you' },
        { id: 11, name: 'Congratulations', image: '/categories/congratulations.png', link: 'https://shop.themaryam.in/collections/congratulations' },
        { id: 12, name: 'Cakes', image: '/categories/cakes.png', link: 'https://shop.themaryam.in/collections/cakes' },
        { id: 13, name: 'Gift Hampers', image: '/categories/gift-hampers.png', link: 'https://shop.themaryam.in/collections/gift-hampers' },
        { id: 14, name: 'Frames', image: '/categories/frames.png', link: 'https://shop.themaryam.in/collections/frames' },
        { id: 15, name: 'Wedding Gifts', image: '/categories/wedding-gifts.png', link: 'https://shop.themaryam.in/collections/wedding-gifts' },
        { id: 16, name: 'Friendship', image: '/categories/friendship.png', link: 'https://shop.themaryam.in/collections/friendship' },
        { id: 17, name: 'Corporate Gifts', image: '/categories/corporate-gifts.png', link: 'https://shop.themaryam.in/collections/corporate-gift' },
        { id: 18, name: 'Letters', image: '/categories/letters.png', link: 'https://shop.themaryam.in/collections/letters' },
    ];

    // Split into 2 rows for mobile
    const topRow = categories.slice(0, 9);
    const bottomRow = categories.slice(9, 18);

    // Touch/Mouse handlers for synchronized scrolling
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    // Single category card component
    const CategoryCard = ({ category }: { category: typeof categories[0] }) => (
        <a
            href={category.link}
            className="flex-shrink-0 flex flex-col items-center group"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
        >
            <meta itemProp="position" content={String(category.id)} />
            <div className="w-[72px] h-[72px] lg:w-20 lg:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                <img
                    src={category.image}
                    alt={`${category.name} Gifts - Shop Now`}
                    itemProp="image"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <span
                className="mt-1.5 text-[11px] lg:text-xs font-medium text-gray-700 text-center leading-tight max-w-[72px] lg:max-w-20 group-hover:text-rose-500 transition-colors"
                itemProp="name"
            >
                {category.name}
            </span>
        </a>
    );

    return (
        <section
            className="w-full py-4"
            aria-label="Gift Categories"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <meta itemProp="numberOfItems" content={String(categories.length)} />
            <meta itemProp="name" content="Gift Categories - The Maryam" />

            {/* Mobile: 2 rows synchronized scroll */}
            <div className="lg:hidden">
                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="px-4 space-y-4" style={{ width: 'max-content' }}>
                        {/* Top Row - First 9 */}
                        <div className="flex gap-6">
                            {topRow.map(cat => (
                                <a
                                    key={cat.id}
                                    href={cat.link}
                                    className="flex-shrink-0 flex flex-col items-center group"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                >
                                    <meta itemProp="position" content={String(cat.id)} />
                                    <div className="w-[100px] h-[100px] rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                                        <img
                                            src={cat.image}
                                            alt={`${cat.name} Gifts - Shop Now`}
                                            itemProp="image"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <span
                                        className="mt-2 text-[13px] font-medium text-gray-700 text-center leading-tight max-w-[100px] group-hover:text-rose-500 transition-colors"
                                        itemProp="name"
                                    >
                                        {cat.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                        {/* Bottom Row - Last 9 */}
                        <div className="flex gap-6">
                            {bottomRow.map(cat => (
                                <a
                                    key={cat.id}
                                    href={cat.link}
                                    className="flex-shrink-0 flex flex-col items-center group"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                >
                                    <meta itemProp="position" content={String(cat.id)} />
                                    <div className="w-[100px] h-[100px] rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                                        <img
                                            src={cat.image}
                                            alt={`${cat.name} Gifts - Shop Now`}
                                            itemProp="image"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <span
                                        className="mt-2 text-[13px] font-medium text-gray-700 text-center leading-tight max-w-[100px] group-hover:text-rose-500 transition-colors"
                                        itemProp="name"
                                    >
                                        {cat.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop: Single row of 9 (first 9 only, or all in scroll) */}
            <div className="hidden lg:block px-4 xl:px-8 mt-6">
                <div className="grid grid-cols-9 gap-y-8 gap-x-2 xl:gap-x-6 justify-items-center max-w-[1600px] mx-auto">
                    {categories.map(cat => (
                        <a
                            key={cat.id}
                            href={cat.link}
                            className="flex flex-col items-center group w-full"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            <meta itemProp="position" content={String(cat.id)} />
                            <div className="w-24 h-24 xl:w-32 xl:h-32 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                                <img
                                    src={cat.image}
                                    alt={`${cat.name} Gifts - Shop Now`}
                                    itemProp="image"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <span
                                className="mt-3 text-sm xl:text-base font-medium text-gray-700 text-center leading-tight w-full px-1 group-hover:text-rose-500 transition-colors"
                                itemProp="name"
                            >
                                {cat.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =============================================================================
// PROMO BANNER CAROUSEL - Beautiful Auto-Sliding Banners (Mobile Only)
// =============================================================================
export const PromoCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);

    // 8 Real Banners
    const banners = [
        { id: 1, src: '/banners/valentine-banner.png', alt: 'Valentine Specials', link: '/valentine' },
        { id: 2, src: '/banners/birthday-banner.png', alt: 'Birthday Gifts', link: '#' },
        { id: 3, src: '/banners/corporate-banner.png', alt: 'Corporate Gifting', link: '#' },
        { id: 4, src: '/banners/customised-banner.png', alt: 'Customised Gifts', link: '#' },
        { id: 5, src: '/banners/frames-banner.png', alt: 'Photo Frames', link: '#' },
        { id: 6, src: '/banners/letters-banner.png', alt: 'Love Letters', link: '#' },
        { id: 7, src: '/banners/personalised-banner.png', alt: 'Customised Gifts', link: '#' },
        { id: 8, src: '/banners/wedding-banner.png', alt: 'Wedding Gifts', link: '#' },
    ];

    // Auto-slide with smooth loop handling
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev => {
                const nextSlide = prev + 1;
                // If going from last to first, disable transition temporarily
                if (nextSlide >= banners.length) {
                    setIsTransitioning(false);
                    setTimeout(() => setIsTransitioning(true), 50);
                    return 0;
                }
                return nextSlide;
            });
        }, 3500);

        return () => clearInterval(interval);
    }, [isAutoPlaying, banners.length]);

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsAutoPlaying(false);
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const swipeDistance = touchStart - touchEnd;
        const minSwipe = 50;

        if (swipeDistance > minSwipe) {
            // Swipe left - next
            const nextSlide = currentSlide + 1;
            if (nextSlide >= banners.length) {
                setIsTransitioning(false);
                setCurrentSlide(0);
                setTimeout(() => setIsTransitioning(true), 50);
            } else {
                setCurrentSlide(nextSlide);
            }
        } else if (swipeDistance < -minSwipe) {
            // Swipe right - previous
            const prevSlide = currentSlide - 1;
            if (prevSlide < 0) {
                setIsTransitioning(false);
                setCurrentSlide(banners.length - 1);
                setTimeout(() => setIsTransitioning(true), 50);
            } else {
                setCurrentSlide(prevSlide);
            }
        }

        setTimeout(() => setIsAutoPlaying(true), 5000);
        setTouchStart(0);
        setTouchEnd(0);
    };

    const goToSlide = (index: number) => {
        if (Math.abs(index - currentSlide) > banners.length / 2) {
            setIsTransitioning(false);
            setCurrentSlide(index);
            setTimeout(() => setIsTransitioning(true), 50);
        } else {
            setCurrentSlide(index);
        }
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    // Get dot size based on distance from current slide
    const getDotSize = (index: number): string => {
        const distance = Math.abs(index - currentSlide);
        if (distance === 0) return 'w-3 h-3'; // Current - biggest
        if (distance === 1) return 'w-2.5 h-2.5'; // Adjacent
        if (distance === 2) return 'w-2 h-2'; // 2 away
        return 'w-1.5 h-1.5'; // Far away - smallest
    };

    return (
        <section
            className="lg:hidden w-full py-4 px-4"
            aria-label="Promotional Banners Carousel"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <meta itemProp="numberOfItems" content={String(banners.length)} />

            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="relative overflow-hidden rounded-2xl shadow-lg"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Slides - Approx 1.45 aspect ratio (586x404) */}
                <div
                    className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {banners.map((banner, index) => (
                        <a
                            key={banner.id}
                            href={banner.link}
                            className="flex-shrink-0 w-full aspect-[586/404] relative group bg-gray-50"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                            aria-label={banner.alt}
                        >
                            <meta itemProp="position" content={String(index + 1)} />
                            <img
                                src={banner.src}
                                alt={banner.alt}
                                itemProp="image"
                                className="w-full h-full object-contain"
                                loading={index === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Dots Indicator - Like reference design with counter */}
            <div className="flex items-center justify-center gap-2 mt-3">
                {/* Page Counter */}
                <div className="bg-gray-100 px-2.5 py-1 rounded-full flex items-center">
                    <span className="text-xs font-bold text-gray-800">{currentSlide + 1}</span>
                    <span className="text-xs text-gray-400 mx-0.5">/</span>
                    <span className="text-xs text-gray-400">{banners.length}</span>
                </div>

                {/* Dots - Big to small based on distance */}
                <div className="flex items-center gap-1.5">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`rounded-full transition-all duration-300 ${getDotSize(index)} ${index === currentSlide
                                ? 'bg-gray-800'
                                : index === currentSlide - 1 || index === currentSlide + 1
                                    ? 'bg-gray-400'
                                    : 'bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
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
// 1. SHOP BY OCCASION - GRID LAYOUT (30 ITEMS)
// =============================================================================

// Exactly 30 occasions as specified by user
const allOccasions = [
    // Row 1: Recipients & Relationships (1-10) - ALL HAVE IMAGES
    { id: 1, title: "For Him", subtitle: "Gifts that speak his style", image: "/occasions/forhim.png" },
    { id: 2, title: "For Her", subtitle: "Curated picks she'll adore", image: "/occasions/forher.png" },
    { id: 3, title: "Couples", subtitle: "Celebrate your bond", image: "/occasions/couples.png" },
    { id: 4, title: "Birthday", subtitle: "Celebrate their day", image: "/occasions/birthday.png" },
    { id: 5, title: "Valentine Day", subtitle: "Day of love", image: "/occasions/valentine_day.png", date: "02-14", slug: "valentine-gift" },
    { id: 6, title: "Wedding", subtitle: "Make their day special", image: "/occasions/wedding.png", slug: "wedding-gifts" },
    { id: 7, title: "Anniversary", subtitle: "Cherish the moments", image: "/occasions/Anniversary.png" },
    { id: 8, title: "Engagement", subtitle: "New beginnings", image: "/occasions/Engagement.png", slug: "couples" },
    { id: 9, title: "Baby Shower", subtitle: "Welcome the little one", image: "/occasions/baby_shower.png" },
    { id: 10, title: "Graduation", subtitle: "Achievement unlocked", image: "/occasions/Graduation.png" },

    // Row 2: Life Events & Occasions (11-20) - ALL HAVE IMAGES
    { id: 11, title: "New Job", subtitle: "Career celebrations", image: "/occasions/New_job.png" },
    { id: 12, title: "Promotion", subtitle: "Moving up!", image: "/occasions/Promotion.png" },
    { id: 13, title: "Retirement", subtitle: "New chapter begins", image: "/occasions/Retirement.png" },
    { id: 14, title: "New Home Vibes", subtitle: "Housewarming gifts", image: "/occasions/New_home.png", slug: "new-home" },
    { id: 15, title: "Date Night", subtitle: "Romantic gestures", image: "/occasions/date_night.png" },
    { id: 16, title: "Farewell", subtitle: "Memories to cherish", image: "/occasions/Farewell.png" },
    { id: 17, title: "Get Well Soon", subtitle: "Sending love", image: "/occasions/get_well_soon.png" },
    { id: 18, title: "Thank You", subtitle: "Express gratitude", image: "/occasions/thank_you.png" },
    { id: 19, title: "Apology", subtitle: "Make it right", image: "/occasions/iam_sorry.png", slug: "im-sorry" },
    { id: 20, title: "Congratulations", subtitle: "Celebrate success", image: "/occasions/Congratulations.png" },

    // Row 3: Relationships & Festival (21-30) - ALL HAVE IMAGES NOW
    { id: 21, title: "Just Because", subtitle: "No reason needed", image: "/occasions/just_because.png" },
    { id: 22, title: "Parents", subtitle: "Love wrapped in memories", image: "/occasions/parents.png" },
    { id: 23, title: "Kids", subtitle: "Fun gifts they'll treasure", image: "/occasions/Kids.png" },
    { id: 24, title: "Grandparents", subtitle: "Honor their wisdom", image: "/occasions/Grandparents.png" },
    { id: 25, title: "Siblings", subtitle: "Sibling love", image: "/occasions/Siblings.png" },
    { id: 26, title: "Besties", subtitle: "For friends like family", image: "/occasions/besties.png" },
    { id: 27, title: "Colleagues", subtitle: "Work friendships", image: "/occasions/Colleagues.png" },
    { id: 28, title: "Boss", subtitle: "Professional appreciation", image: "/occasions/Boss.png" },
    { id: 29, title: "Teachers", subtitle: "Gratitude for mentors", image: "/occasions/Teachers.png" },
    { id: 30, title: "Diwali", subtitle: "Festival of lights", image: "/occasions/diwali.png", date: "11-01" },
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

// Sort occasions: upcoming festivals come first, then rest in original order
const getSortedOccasions = () => {
    const withUpcoming = allOccasions.map(o => ({
        ...o,
        ...isUpcoming((o as any).date)
    }));

    // Get upcoming festivals
    const upcomingFestivals = withUpcoming
        .filter(o => o.upcoming)
        .sort((a, b) => a.daysLeft - b.daysLeft);

    // Get non-upcoming items in original order
    const otherItems = withUpcoming.filter(o => !o.upcoming);

    // Merge: upcoming first, then others
    return [...upcomingFestivals, ...otherItems];
};

export const CategoryArches = () => {
    const sortedOccasions = getSortedOccasions();

    return (
        <Section className="py-16 md:py-24">
            {/* Section Header - Pink with Perfect Icon Alignment */}
            <div className="flex flex-col items-center mb-10 md:mb-14">
                {/* Title Row - Icon perfectly aligned with text baseline */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-pink-200/50 flex-shrink-0">
                        <Gift className="text-white" size={18} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-pink-500 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Shop by Occasion
                    </h3>
                </div>
                {/* Subtitle */}
                <p className="text-sm text-gray-400 font-medium mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Find the perfect gift for every celebration ✨
                </p>
            </div>

            {/* === MOBILE LAYOUT: Single Scroll Container with 3 Rows === */}
            <div className="md:hidden overflow-x-auto overflow-y-visible no-scrollbar -mx-4 px-4 py-3">
                <div className="flex flex-col gap-5" style={{ width: 'max-content' }}>
                    {/* Row 1: Items 1-10 */}
                    <div className="flex gap-4 pt-3 pr-4">
                        {sortedOccasions.slice(0, 10).map((c, i) => (
                            <OccasionCard key={c.id} occasion={c} index={i} />
                        ))}
                    </div>
                    {/* Row 2: Items 11-20 */}
                    <div className="flex gap-4 pt-3 pr-4">
                        {sortedOccasions.slice(10, 20).map((c, i) => (
                            <OccasionCard key={c.id} occasion={c} index={i + 10} />
                        ))}
                    </div>
                    {/* Row 3: Items 21-30 */}
                    <div className="flex gap-4 pt-3 pr-4">
                        {sortedOccasions.slice(20, 30).map((c, i) => (
                            <OccasionCard key={c.id} occasion={c} index={i + 20} />
                        ))}
                    </div>
                </div>
            </div>

            {/* === DESKTOP LAYOUT: 6 columns × 5 rows = 30 items === */}
            <div className="hidden md:grid grid-cols-6 gap-5">
                {sortedOccasions.slice(0, 30).map((c, i) => (
                    <OccasionCard key={c.id} occasion={c} index={i} isDesktop />
                ))}
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

// Individual Occasion Card Component
const OccasionCard = ({ occasion, index, isDesktop = false }: {
    key?: number;
    occasion: any;
    index: number;
    isDesktop?: boolean;
}) => {
    const { upcoming, daysLeft } = isUpcoming(occasion.date);
    const hasImage = !!occasion.image;

    // BIGGER SIZES: Mobile w-36 h-48, Desktop full responsive
    const sizeClasses = isDesktop
        ? "w-full aspect-[3/4]"
        : "flex-shrink-0 w-36 h-48";

    return hasImage ? (
        // === IMAGE BASED CARD ===
        <a
            href={`https://shop.themaryam.in/collections/${(occasion as any).slug || occasion.title.toLowerCase().replace(/ /g, '-')}`}
            className={`${sizeClasses} relative group transition-transform duration-300 transform hover:scale-105`}
        >
            {/* Upcoming Badge */}
            {upcoming && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-10">
                    🔥 {daysLeft === 0 ? 'TODAY!' : `${daysLeft}d`}
                </div>
            )}
            <img
                src={occasion.image}
                alt={occasion.title}
                className="w-full h-full object-contain drop-shadow-lg"
                draggable="false"
            />
        </a>
    ) : (
        // === ICON BASED CARD ===
        <a
            href={`https://shop.themaryam.in/collections/${(occasion as any).slug || occasion.title.toLowerCase().replace(/ /g, '-')}`}
            className={`
                ${sizeClasses} rounded-3xl ${occasion.color || 'bg-gray-100'}
                p-3 md:p-4 flex flex-col items-center justify-center
                shadow-lg hover:shadow-2xl transition-all duration-300
                transform hover:scale-105 hover:-translate-y-2
                group relative text-center
                ${upcoming ? 'ring-3 ring-yellow-400 ring-offset-2' : ''}
            `}
            style={upcoming ? { boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)' } : {}}
        >
            {/* Upcoming Badge */}
            {upcoming && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-10 animate-bounce">
                    🔥 {daysLeft === 0 ? 'TODAY!' : `${daysLeft}d`}
                </div>
            )}

            {/* Icon - BIGGER */}
            <span className={`text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform ${upcoming ? 'animate-bounce' : ''}`}>
                {occasion.icon}
            </span>

            {/* Title - BIGGER */}
            <h4 className="font-bold text-xs md:text-sm text-black leading-tight line-clamp-2">
                {occasion.title}
            </h4>
        </a>
    );
}

// =============================================================================
// 2. TRENDING - ULTRA-OPTIMIZED VERTICAL VIDEO REELS
// =============================================================================

const trendingVideos = [
    // First row
    { id: 'v1', name: 'HER HAMPER', video: 'https://cdn.shopify.com/videos/c/o/v/c93d99a5a7314a83829571f03d0e2227.mp4', link: 'https://shop.themaryam.in/products/her-hamper', loves: 'Loved by 122K People' },
    { id: 'v2', name: 'LETTERS', video: 'https://cdn.shopify.com/videos/c/o/v/c519459f0b7146958c9f64005b2833dc.mp4', link: 'https://shop.themaryam.in/products/letters', loves: 'Loved by 98K People' },
    { id: 'v3', name: 'FOLDS', video: 'https://cdn.shopify.com/videos/c/o/v/d1240e6bf5224aa192ddadf5688ed456.mp4', link: 'https://shop.themaryam.in/products/folds', loves: 'Loved by 1.3M People' },
    { id: 'v4', name: 'CARD', video: 'https://cdn.shopify.com/videos/c/o/v/a013f7125f2c4ae18820887b4dc6f541.mp4', link: 'https://shop.themaryam.in/products/card', loves: 'Loved by 77K People' },
    // Second row
    { id: 'v5', name: 'PHOTO LAMP', video: 'https://cdn.shopify.com/videos/c/o/v/dabc08df3c864fd8ab147a268ab3356f.mp4', link: 'https://shop.themaryam.in/products/photo-lamp', loves: 'Loved by 245K People' },
    { id: 'v6', name: 'PHOTO FRAME', video: 'https://cdn.shopify.com/videos/c/o/v/eafe0f3cb8854c0780c527a642029951.mp4', link: 'https://shop.themaryam.in/products/photo-frame', loves: 'Loved by 189K People' },
    { id: 'v7', name: 'WEARABLES', video: 'https://cdn.shopify.com/videos/c/o/v/4b636c4a7c814fe9875aa3a17a63a6c5.mp4', link: 'https://shop.themaryam.in/products/wearables', loves: 'Loved by 67K People' },
    { id: 'v8', name: 'SPECIALS', video: 'https://cdn.shopify.com/videos/c/o/v/8758e5ae763547c68699e99fa44cd57f.mp4', link: 'https://shop.themaryam.in/products/specials', loves: 'Loved by 312K People' },
]

// Ultra-Optimized Lazy Video Component - Play/Pause based on visibility
const LazyVideo = ({ src, className, loves }: { src: string; className: string; loves: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // IntersectionObserver for lazy loading AND play/pause control
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                });
            },
            { rootMargin: '50px', threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Play when in view, pause when out of view (prevents lag)
    useEffect(() => {
        if (!videoRef.current) return;

        if (isInView && isLoaded) {
            videoRef.current.play().catch(() => { });
        } else {
            videoRef.current.pause();
        }
    }, [isInView, isLoaded]);

    // Custom cursor tracking (Desktop only)
    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <div
            ref={containerRef}
            className={`${className} relative`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'none' }}
        >
            {/* Placeholder skeleton while loading */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-gray-100 to-orange-100 animate-pulse">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border-2 border-pink-200 border-t-pink-500 animate-spin" />
                    </div>
                </div>
            )}

            {/* Video - Only render when in viewport to prevent lag */}
            {isInView && (
                <video
                    ref={videoRef}
                    src={src}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsLoaded(true)}
                />
            )}

            {/* Custom Cursor - Desktop Only */}
            {isHovered && (
                <div
                    className="hidden md:flex pointer-events-none absolute z-50 items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-2xl"
                    style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#EC4899">
                        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
                    </svg>
                    <span className="text-gray-900 text-sm font-bold whitespace-nowrap">{loves}</span>
                </div>
            )}
        </div>
    );
};

export const TrendingLevitation = () => {
    return (
        <Section>
            {/* Section Header - Modern Fire Style */}
            <div className="flex items-center justify-between mb-8 md:mb-12">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                        {/* Fire/Flame Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                            <path d="M12 23c-4.5 0 -8 -3.5 -8 -8c0 -4 2.75 -7.25 5 -10c0 0 .5 2 2 4c1.5 2 3 2.5 3 2.5c.5 -1 1 -2 1 -4c0 -2 -.5 -4 -1 -6c3 1.5 6 4.5 6 11c0 4.5 -3.5 8 -8 8z" />
                            <path d="M12 23c-2.5 0 -4 -1.5 -4 -4c0 -2 1.5 -3.5 2.5 -5c.5 1 1 1.5 1.5 2c.5 .5 1 1 1 1c0 -.5 .5 -1 .5 -2c0 -1 0 -1.5 -.5 -2.5c1 .5 2.5 2 2.5 4.5c0 2.5 -1.5 4 -3.5 4z" fill="rgba(255,255,255,0.6)" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">What's Hot</h2>
                        <p className="text-[12px] md:text-sm text-gray-500 font-medium">Trending gifts everyone loves</p>
                    </div>
                </div>
                <a href="https://shop.themaryam.in/collections/trending" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-semibold rounded-full hover:from-pink-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Explore All Hot Picks
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>

            {/* Vertical Video Grid - 6 on mobile, 8 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                {trendingVideos.map((item, index) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className={`relative group block ${index >= 6 ? 'hidden md:block' : ''}`}
                    >
                        {/* Video Container */}
                        <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-100 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                            {/* Lazy Loaded Video with Viewport-based Play/Pause */}
                            <LazyVideo
                                src={item.video}
                                className="w-full h-full"
                                loves={item.loves}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                            {/* Product Name */}
                            <div className="absolute bottom-0 inset-x-0 p-4 pointer-events-none">
                                <h3 className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-lg">{item.name}</h3>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <span className="text-white/70 text-[11px] font-medium md:hidden">{item.loves}</span>
                                    <span className="text-white/80 text-xs font-medium hidden md:inline">Tap to shop</span>
                                    <svg className="w-3 h-3 text-white/80" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </div>

                            {/* Heart Button */}
                            <button
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2.5 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors duration-200 hover:scale-110 active:scale-95 z-10"
                                aria-label="Add to wishlist"
                            >
                                <Heart size={16} />
                            </button>

                            {/* Fire Badge */}
                            <div className="absolute top-3 left-3 flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 px-2.5 py-1 rounded-full shadow-md pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 23c-4.5 0 -8 -3.5 -8 -8c0 -4 2.75 -7.25 5 -10c0 0 .5 2 2 4c1.5 2 3 2.5 3 2.5c.5 -1 1 -2 1 -4c0 -2 -.5 -4 -1 -6c3 1.5 6 4.5 6 11c0 4.5 -3.5 8 -8 8z" />
                                </svg>
                                <span className="text-white text-[9px] font-bold">HOT</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Mobile View All Button - Gradient Style */}
            <div className="mt-8 flex justify-center md:hidden">
                <a href="https://shop.themaryam.in/collections/trending" className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-bold rounded-full hover:from-pink-600 hover:to-orange-600 transition-all shadow-lg active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 23c-4.5 0 -8 -3.5 -8 -8c0 -4 2.75 -7.25 5 -10c0 0 .5 2 2 4c1.5 2 3 2.5 3 2.5c.5 -1 1 -2 1 -4c0 -2 -.5 -4 -1 -6c3 1.5 6 4.5 6 11c0 4.5 -3.5 8 -8 8z" />
                    </svg>
                    Explore All Hot Picks
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>

            {/* Hide cursor on video hover */}
            <style>{`
                @media (min-width: 768px) {
                    .group:hover video { cursor: none; }
                }
            `}</style>
        </Section>
    )
}


// =============================================================================
// 2.5. EXPLORE GIFTS - SPECIALLY CRAFTED SECTION
// =============================================================================

export const ExploreGifts = () => {
    return (
        <Section className="bg-white py-20 md:py-28">
            {/* Header - Elegant Typography */}
            <div className="text-center mb-16 md:mb-24">
                <span className="inline-block py-1 px-3 rounded-full bg-pink-50 text-pink-600 text-xs font-bold tracking-widest uppercase mb-4">
                    Handpicked for You
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic font-medium text-gray-900 mb-4 tracking-tight">
                    Explore Gifts specially crafted for you
                </h2>
                <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl mx-auto">
                    Because some feelings are too special for <span className="text-gray-900 font-semibold border-b-2 border-pink-200">ordinary gifts</span>
                </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4 md:px-8">

                {/* Card 1 - Letters */}
                <a href="https://shop.themaryam.in/collections/letters" className="group relative block">
                    <div className="relative h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-gray-200">

                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Star size={80} className="text-gray-900" />
                        </div>

                        {/* Badge */}
                        <div className="absolute top-8 left-8 z-10">
                            <span className="bg-gray-900/90 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                                NEW
                            </span>
                        </div>

                        {/* Product Images - 2 Floating Letters */}
                        <div className="relative aspect-[16/10] mb-8 flex items-center justify-center mt-4">
                            <div className="relative z-10 flex items-center justify-center w-full translate-y-2">
                                {/* Letter 1 - Left */}
                                <div className="absolute w-32 h-36 md:w-36 md:h-40 transform -rotate-6 -translate-x-12 md:-translate-x-16 group-hover:-rotate-12 group-hover:-translate-x-14 md:group-hover:-translate-x-20 transition-all duration-700 ease-out will-change-transform">
                                    <img
                                        src="/for_you/Letter1.png"
                                        alt="Letter Gift 1"
                                        className="w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-white"
                                    />
                                </div>
                                {/* Letter 2 - Right */}
                                <div className="absolute w-32 h-36 md:w-36 md:h-40 transform rotate-6 translate-x-12 md:translate-x-16 group-hover:rotate-12 group-hover:translate-x-14 md:group-hover:translate-x-20 transition-all duration-700 ease-out z-10 will-change-transform">
                                    <img
                                        src="/for_you/Letter2.png"
                                        alt="Letter Gift 2"
                                        className="w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-white"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Name & CTA */}
                        <div className="text-center relative z-20">
                            <h3 className="text-2xl md:text-3xl font-heading italic font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                                Letters
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium group-hover:text-gray-900 transition-colors">
                                <span>View Collection</span>
                                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </a>

                {/* Card 2 - Folds */}
                <a href="https://shop.themaryam.in/collections/folds" className="group relative block">
                    <div className="relative h-full bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-red-100">

                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Heart size={80} className="text-red-500" />
                        </div>

                        {/* Badge */}
                        <div className="absolute top-8 left-8 z-10">
                            <span className="bg-red-500/90 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                                HOT
                            </span>
                        </div>

                        {/* Product Images - Folds */}
                        <div className="relative aspect-[16/10] mb-8 flex items-center justify-center mt-4">
                            <div className="relative z-10 flex items-center justify-center w-full translate-y-2">
                                <div className="absolute w-32 h-36 md:w-36 md:h-40 transform -rotate-6 -translate-x-12 md:-translate-x-16 group-hover:-rotate-12 group-hover:-translate-x-14 md:group-hover:-translate-x-20 transition-all duration-700 ease-out will-change-transform">
                                    <img
                                        src="/for_you/folds1.png"
                                        alt="Fold Gift 1"
                                        className="w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-white"
                                    />
                                </div>
                                <div className="absolute w-32 h-36 md:w-36 md:h-40 transform rotate-6 translate-x-12 md:translate-x-16 group-hover:rotate-12 group-hover:translate-x-14 md:group-hover:translate-x-20 transition-all duration-700 ease-out z-10 will-change-transform">
                                    <img
                                        src="/for_you/folds2.png"
                                        alt="Fold Gift 2"
                                        className="w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-white"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Name & CTA */}
                        <div className="text-center relative z-20">
                            <h3 className="text-2xl md:text-3xl font-heading italic font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                Folds
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium group-hover:text-gray-900 transition-colors">
                                <span>View Collection</span>
                                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </a>

                {/* Card 3 - Her Hamper */}
                <a href="https://shop.themaryam.in/collections/gift-hampers" className="group relative block">
                    <div className="relative h-full bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-pink-100">

                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <Sparkles size={80} className="text-pink-500" />
                        </div>

                        {/* Badge */}
                        <div className="absolute top-8 left-8 z-10">
                            <span className="bg-pink-500/90 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                                POPULAR
                            </span>
                        </div>

                        {/* Product Images - Hamper */}
                        <div className="relative aspect-[16/10] mb-8 flex items-center justify-center mt-4">
                            <div className="relative z-10 flex items-center justify-center w-full translate-y-2">
                                <div className="absolute w-32 h-36 md:w-36 md:h-40 transform -rotate-6 -translate-x-12 md:-translate-x-16 group-hover:-rotate-12 group-hover:-translate-x-14 md:group-hover:-translate-x-20 transition-all duration-700 ease-out will-change-transform">
                                    <img
                                        src="/for_you/hamper1.jpg"
                                        alt="Hamper Gift 1"
                                        className="w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-white"
                                    />
                                </div>
                                <div className="absolute w-32 h-36 md:w-36 md:h-40 transform rotate-6 translate-x-12 md:translate-x-16 group-hover:rotate-12 group-hover:translate-x-14 md:group-hover:translate-x-20 transition-all duration-700 ease-out z-10 will-change-transform">
                                    <img
                                        src="/for_you/hamper2.png"
                                        alt="Hamper Gift 2"
                                        className="w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-white"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Name & CTA */}
                        <div className="text-center relative z-20">
                            <h3 className="text-2xl md:text-3xl font-heading italic font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                                Her Hamper
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium group-hover:text-gray-900 transition-colors">
                                <span>View Collection</span>
                                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </a>

            </div>
        </Section>
    );
};


// =============================================================================
// 3. TECH LOVE - CREATIVE COSMIC UPGRADE
// ============================================================================

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
                <h2 className="text-4xl font-heading font-bold mb-4">Home & Living Gifts</h2>
                <p className="text-gray-500">Decor that speaks your language.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

                {/* Large Item: Neon Light Gifts (2x2) */}
                <a href="https://shop.themaryam.in/collections/neon-lights" className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 h-[400px] md:h-auto">
                    <img src="https://static-assets-prod.fnp.com/assets/images/custom/new-home-2025/home-living/Untitled_170125.jpg" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Neon Light Gifts" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <h3 className="text-white text-3xl font-bold mb-2">Neon Light Gifts</h3>
                        <p className="text-white/80 mb-6 max-w-sm font-medium tracking-wide">Light up their world with custom neon magic.</p>
                        <Button variant="white" size="sm" className="shadow-lg hover:bg-pink-50 transition-colors">Shop Now</Button>
                    </div>
                </a>

                {/* Wide Item: Photo Frames (2x1) */}
                <a href="https://shop.themaryam.in/collections/photo-frames" className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 h-[250px] md:h-auto">
                    <img src="https://static-assets-prod.fnp.com/assets/images/custom/new-home-2025/home-living/photoframes_170125.jpg" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Photo Frames" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <h3 className="text-white text-2xl font-bold mb-1">Photo Frames</h3>
                        <p className="text-white/80 text-sm mb-4 font-medium">Preserve every precious moment.</p>
                        <Button variant="white" size="sm" className="shadow-lg hover:bg-pink-50 transition-colors">Shop Now</Button>
                    </div>
                </a>

                {/* Small Item: Home Decor (1x1) */}
                <a href="https://shop.themaryam.in/collections/home-decor" className="relative group overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 h-[250px] md:h-auto">
                    <img src="https://apkamart.com/cdn/shop/files/peacock_showpiece_apkamart_25.jpg?v=1725950851" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Home Decor" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h3 className="text-white text-xl font-bold mb-1">Home Decor</h3>
                        <p className="text-white/80 text-xs mb-3 font-medium">Artistic & Elegant</p>
                        <Button variant="white" size="sm" className="scale-90 origin-bottom-left shadow-lg hover:bg-pink-50 transition-colors">Shop Now</Button>
                    </div>
                </a>

                {/* Small Item: Forever Flowers (1x1) */}
                <a href="https://shop.themaryam.in/collections/dried-flowers" className="relative group overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 h-[250px] md:h-auto">
                    <img src="https://static-assets-prod.fnp.com/assets/images/custom/new-home-2025/home-living/Dried-Flowers_170125.jpg" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Forever Flowers" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h3 className="text-white text-xl font-bold mb-1">Forever Flowers</h3>
                        <p className="text-white/80 text-xs mb-3 font-medium">Blooms eternal</p>
                        <Button variant="white" size="sm" className="scale-90 origin-bottom-left shadow-lg hover:bg-pink-50 transition-colors">Shop Now</Button>
                    </div>
                </a>

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
