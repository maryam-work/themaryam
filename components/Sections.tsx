import React, { useEffect, useState, useRef } from 'react';
import { Container, Button, StarRating, Section, Marquee } from './UI';
import { ArrowRight, ArrowLeft, Sparkles, Send, Loader2, Gift, Zap, TrendingUp, Package, ShoppingBag, Star, Heart, Smartphone, Play, Gem, Mail, Clock, Smile, ScanLine, Box, Link, Wifi, Battery, Fingerprint } from 'lucide-react';
import { Product, Article, Category } from '../types';

// =============================================================================
// HERO SECTION (STRICTLY NO CHANGES - PRESERVED EXACTLY AS REQUESTED)
// =============================================================================

export const Hero = () => {
    const [inputText, setInputText] = useState("");
    const [placeholder, setPlaceholder] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const phrases = [
        "Mere bhai ka birthday hai, kuch unique customized chahiye...",
        "Ex ko jalana hai, kuch classy dikhao...",
        "Biwi naraz hai, sorry bolne ke liye gift...",
        "Pehli date hai, impress karna hai...",
        "Long distance boyfriend ke liye kuch special..."
    ];

    // Typewriter effect logic
    useEffect(() => {
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

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

            setTimeout(type, typingSpeed);
        };

        const timer = setTimeout(type, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText) return;

        setIsSearching(true);
        // Simulate AI processing
        setTimeout(() => {
            setIsSearching(false);
            setShowResults(true);
            // Smooth scroll to results
            document.getElementById('ai-results')?.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    };

    return (
        <div className="relative w-full overflow-hidden bg-[#FAFAFA]">
            {/* Advanced Aurora Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Soft Gradient Mesh */}
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-rose-200/40 via-pink-200/40 to-transparent blur-[80px] md:blur-[120px] animate-blob mix-blend-multiply"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-bl from-violet-200/40 via-purple-200/40 to-transparent blur-[80px] md:blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-t from-amber-100/60 via-orange-100/40 to-transparent blur-[80px] md:blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply"></div>

                {/* Subtle Grid Overlay for Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="relative z-10 min-h-[600px] md:h-[700px] flex flex-col items-center justify-center px-4 text-center pt-20 md:pt-0">

                {/* Premium Badge - Mobile Optimized */}
                <div className="animate-fade-in-up inline-flex items-center gap-1.5 md:gap-2 bg-white/80 backdrop-blur-xl border border-white/60 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-10 shadow-[0_2px_10px_rgba(0,0,0,0.03)] ring-1 ring-white">
                    <Sparkles size={12} className="text-yellow-500 fill-yellow-500 md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-xs font-bold tracking-wider text-gray-800 uppercase">India's 1st AI Gifting Store</span>
                </div>

                {/* Heading */}
                <h1 className="animate-fade-in-up [animation-delay:200ms] text-4xl md:text-7xl font-heading font-extrabold leading-[1.1] mb-6 max-w-4xl text-gray-900 tracking-tight select-none">
                    Dil ki baat, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">Gifts ke saath.</span>
                </h1>

                <p className="animate-fade-in-up [animation-delay:400ms] text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-xl leading-relaxed px-4 select-none">
                    Koi rootha hai? Ya bas pyaar jatana hai? <br className="hidden md:block" />
                    Bas batao kiske liye hai, baaki magic hum karenge.
                </p>

                {/* AI Input Interface - Boxy Style */}
                <div className="animate-fade-in-up [animation-delay:600ms] w-full max-w-xl relative group mx-auto mt-6 md:mt-8 mb-12 md:mb-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-[2rem] blur opacity-30 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>

                    <form onSubmit={handleSearch} className="relative bg-white rounded-[2rem] shadow-2xl p-5 md:p-8 flex flex-col min-h-[220px] md:min-h-[240px] text-left transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3 md:mb-4 select-none">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                                <Zap className="text-indigo-600 fill-indigo-600" size={16} />
                            </div>
                            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Likh do jo dil mein hai...</span>
                        </div>

                        {/* Text Area */}
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            className="w-full flex-1 text-xl md:text-3xl font-bold text-gray-900 placeholder-gray-300 focus:outline-none bg-transparent resize-none leading-tight font-heading"
                            placeholder={placeholder}
                            spellCheck={false}
                            rows={2}
                        />

                        {/* Footer Actions */}
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
                                {isSearching ? <Loader2 className="animate-spin" size={18} /> : <>Generate Gift <ArrowRight size={16} /></>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// --- Generated Results (Conditional) ---
const generatedProducts: Product[] = [
    { id: 'g1', name: 'Custom Spotify Plaque', description: 'With your song & photo', price: 699, rating: 5, image: 'https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', category: 'TRENDING' },
    { id: 'g2', name: '3D Miniature Doll', description: 'Hand-sculpted replica', price: 2499, rating: 4.8, image: 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', category: 'PREMIUM' },
    { id: 'g3', name: 'Personalized Wallet Combo', description: 'Name engraved leather', price: 999, rating: 4.5, image: 'https://images.pexels.com/photos/4638862/pexels-photo-4638862.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', category: 'MEN' },
    { id: 'g4', name: 'Couple Neon Light', description: 'Custom names glowing', price: 1800, rating: 5, image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', category: 'DECOR' },
];

export const AIResults = () => {
    return (
        <div id="ai-results" className="bg-white py-12 scroll-mt-24 border-t border-gray-100">
            <Container>
                <div className="flex items-center gap-2 mb-8 animate-fade-in-up select-none">
                    <Sparkles className="text-yellow-500" />
                    <h2 className="text-2xl font-bold">AI Recommended for you</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {generatedProducts.map((p, idx) => (
                        <div key={p.id} className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-3 aspect-square">
                                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                {idx === 0 && <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full">BEST MATCH</div>}
                                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <ShoppingBag size={16} />
                                </button>
                            </div>
                            <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight mb-1">{p.name}</h3>
                            <p className="text-xs text-gray-500 mb-2">{p.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold">₹{p.price}</span>
                                <StarRating rating={p.rating} size={12} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

// =============================================================================
// 1. SHOP BY RELATION - ARCH CARDS
// =============================================================================

const relations = [
    { title: "For Him", img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop" }, // Indian man stylish
    { title: "For Her", img: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop" }, // Indian woman jewelry
    { title: "Parents", img: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop" }, // Indian parents
    { title: "Couples", img: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop" }, // Indian couple
    { title: "Kids", img: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop" }, // Happy kid
    { title: "Besties", img: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop" }, // Friends laughing
]

export const CategoryArches = () => {
    return (
        <Section className="py-16 md:py-24">
            <h3 className="font-heading font-bold text-3xl mb-12 text-center md:text-left select-none">Shop by Relation</h3>
            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-2 snap-x snap-mandatory">
                {relations.map((c, i) => (
                    <div key={i} className="flex-shrink-0 w-44 md:w-56 group snap-start cursor-pointer">
                        <div className="w-full h-64 md:h-80 relative overflow-hidden rounded-t-full rounded-b-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img
                                src={c.img}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={c.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            <div className="absolute bottom-6 left-0 w-full text-center">
                                <span className="text-white font-heading font-bold text-xl tracking-wide group-hover:tracking-wider transition-all">{c.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
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
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 select-none">
                <div>
                    <span className="text-brand-dark font-bold uppercase tracking-widest text-xs mb-2 block">Trending Now</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold">Curated for You</h2>
                </div>
                <Button variant="outline" className="hidden md:flex">View All Collections</Button>
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
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]"></div>
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* LEFT: 3D Composition */}
                    <div className="order-2 lg:order-1 relative h-[600px] flex items-center justify-center">
                        <div className="relative w-80 h-full">

                            {/* Floating QR Glass Card */}
                            <div className="absolute top-10 -left-12 z-20 w-64 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-float transform rotate-[-6deg] hover:rotate-0 transition-all duration-500">
                                <div className="relative overflow-hidden rounded-xl bg-white p-2">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=Love-You-Forever" alt="QR" className="w-full h-auto opacity-90" />
                                    {/* Laser Scan Animation */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)] animate-scan z-30"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none"></div>
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <p className="text-xs font-mono text-white/70">SCANNING...</p>
                                </div>
                            </div>

                            {/* 3D Phone Mockup */}
                            <div className="absolute top-0 left-10 z-10 w-[300px] animate-float-delayed">
                                <div className="bg-black border-[6px] border-gray-800 rounded-[3rem] h-[580px] shadow-2xl overflow-hidden relative ring-1 ring-gray-700/50">
                                    {/* Screen Content */}
                                    <div className="absolute inset-0 bg-gray-900">
                                        <img src="https://images.pexels.com/photos/3585046/pexels-photo-3585046.jpeg?auto=compress&cs=tinysrgb&w=400&h=800&fit=crop" loading="lazy" className="w-full h-full object-cover opacity-60" alt="Memory" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 pb-12">
                                            <div className="flex gap-2 mb-4">
                                                <div className="w-8 h-1 bg-red-500 rounded-full animate-pulse"></div>
                                                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                            </div>
                                            <h3 className="text-3xl font-heading font-bold text-white mb-2">Happy 1st Anniversary!</h3>
                                            <p className="text-white/80 text-sm leading-relaxed mb-6">"Every moment with you is magic. Here is a little song that reminds me of us..."</p>

                                            {/* Audio Player UI */}
                                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/10">
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                                    <Play size={16} className="fill-black text-black ml-1" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-1 bg-white/20 rounded-full w-full overflow-hidden">
                                                        <div className="h-full bg-red-500 w-1/3"></div>
                                                    </div>
                                                    <div className="flex justify-between text-[10px] text-white/50 mt-1">
                                                        <span>1:20</span>
                                                        <span>3:45</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: Typography & Content */}
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-indigo-500"></div>
                            <span className="text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase">Next Gen Gifting</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-heading font-black mb-6 leading-[0.9] tracking-tighter select-none">
                            GIFTS THAT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-shimmer bg-[length:200%_auto]">SPEAK.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg border-l-2 border-gray-800 pl-6 select-none">
                            Embed a secret video message, voice note, or romantic playlist inside a physical card. <br />
                            <span className="text-white font-bold">They scan, they smile, they remember.</span>
                        </p>

                        <div className="flex flex-wrap gap-4 mb-16">
                            <Button variant="glow" size="lg">Create Magic</Button>
                            <div className="flex items-center gap-4 px-6 text-sm font-medium text-gray-400">
                                <Wifi size={16} className="animate-pulse" /> Instant Load
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-gray-900 pt-8">
                            <div className="text-center md:text-left">
                                <Fingerprint className="mb-2 text-gray-600" />
                                <h4 className="font-bold text-white">Unique ID</h4>
                            </div>
                            <div className="text-center md:text-left">
                                <Smartphone className="mb-2 text-gray-600" />
                                <h4 className="font-bold text-white">Mobile First</h4>
                            </div>
                            <div className="text-center md:text-left">
                                <Battery className="mb-2 text-gray-600" />
                                <h4 className="font-bold text-white">Lifetime</h4>
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