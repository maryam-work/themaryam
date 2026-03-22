import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  User,
  Search,
  Heart,
  Menu,
  X,
  Sparkles,
  Zap,
  ArrowRight,
  Globe,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Mail,
  FileText,
  Phone,
  Shield,
  MapPin,
  Truck,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { Container } from './UI';

export const TopBar: React.FC = () => {
  return (
    <div className="hidden lg:block w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fef1f4 0%, #ffeef3 25%, #fff5f7 50%, #ffeef3 75%, #fef1f4 100%)' }}>
      {/* Background Image with Multiply Blend */}
      <img
        src="/header_background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 pointer-events-none"
      />

      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      {/* Decorative Hearts - Spread across entire banner */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left cluster */}
        <span className="absolute left-[5%] top-1/2 -translate-y-1/2 text-pink-300/50 text-xl">💕</span>
        <span className="absolute left-[8%] top-[30%] text-pink-200/40 text-sm">❤️</span>
        <span className="absolute left-[12%] top-[65%] text-rose-300/30 text-xs">💗</span>
        <span className="absolute left-[15%] top-1/2 -translate-y-1/2 text-pink-200/35 text-lg">💖</span>

        {/* Left-center */}
        <span className="absolute left-[25%] top-[25%] text-pink-300/25 text-sm">❤️</span>
        <span className="absolute left-[30%] top-[70%] text-rose-200/30 text-xs">💕</span>

        {/* Right-center */}
        <span className="absolute right-[30%] top-[30%] text-pink-200/30 text-xs">💗</span>
        <span className="absolute right-[25%] top-[65%] text-rose-300/25 text-sm">❤️</span>

        {/* Right cluster */}
        <span className="absolute right-[15%] top-1/2 -translate-y-1/2 text-pink-200/35 text-lg">💖</span>
        <span className="absolute right-[12%] top-[35%] text-rose-300/30 text-xs">💗</span>
        <span className="absolute right-[8%] top-[60%] text-pink-200/40 text-sm">❤️</span>
        <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-pink-300/50 text-xl">💕</span>
      </div>

      {/* Main content */}
      <Container className="relative z-10 flex justify-center items-center text-center py-2.5">
        <div className="flex items-center gap-3">
          {/* Truck Delivery Icon - Custom Tabler Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 flex-shrink-0">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            <path d="M3 9l4 0" />
          </svg>

          {/* Text - Original */}
          <p className="text-[14px] tracking-wide font-inter flex items-center gap-2">
            <span className="font-bold uppercase tracking-wider text-pink-600">99% DELIVERY DISCOUNT!!!</span>
            <span className="font-normal text-pink-700">You pay for the feeling. Gifts are on us.</span>
            <span>🤞🏻</span>
          </p>
        </div>
      </Container>

      {/* Bottom subtle border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />
    </div>
  );
};

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [placeholder, setPlaceholder] = useState('');

  // Typewriter animation for search bar
  useEffect(() => {
    const phrases = [
      "Girlfriend ke liye gift dhundho...",
      "Bhai ka birthday hai...",
      "₹500 mein best gift batao...",
      "Father's Day ke liye special...",
      "Sorry bolne ke liye gift...",
      "Long distance ke liye kuch...",
      "Office colleague ke liye thank you...",
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
        typingSpeed = 40;
      } else {
        setPlaceholder(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingSpeed = 80;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 400;
      }

      timer = setTimeout(type, typingSpeed);
    };

    timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Icon Components with micro-animations
  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:scale-110">
      <path fill="currentColor" fillRule="evenodd" d="M22 6a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m-6 6a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1m6 6a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1" clipRule="evenodd" />
    </svg>
  );

  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12">
      <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );

  const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-200 group-hover:scale-110 group-hover:text-rose-500">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  );

  const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-110">
      <path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" />
      <path d="M9 9a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3l0 -2" />
      <path d="M7 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M16 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  );

  const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-110">
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </svg>
  );

  // FNP Style Categories
  const categories = [
    'Birthday', 'Occasions', 'Anniversary', 'Flowers', 'Cakes',
    'Personalised', 'Corporate', 'Chocolates', 'Wearables', 'Hampers'
  ];

  return (
    <>
      {/* ===== MOBILE HEADER ===== */}
      <header className={`lg:hidden sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Menu + Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-gray-700 hover:text-gray-900 transition-colors group"
                aria-label="Open menu"
              >
                <MenuIcon />
              </button>
              <a href="/" className="flex items-center">
                <img
                  src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/themaryam_logo_header_main_production_800x800.png?v=1769321724"
                  alt="The Maryam"
                  className="h-5 w-auto object-contain transition-transform duration-200 hover:scale-105"
                />
              </a>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => navigate('/search')}
                className="p-2.5 text-gray-600 hover:text-gray-900 transition-all duration-200 group rounded-full hover:bg-gray-100"
                aria-label="Search"
              >
                <SearchIcon />
              </button>
              <a
                href="https://shop.themaryam.in/wishlist"
                className="p-2.5 text-gray-600 hover:text-rose-500 transition-all duration-200 group rounded-full hover:bg-rose-50"
                aria-label="Wishlist"
              >
                <HeartIcon />
              </a>
              <a
                href="https://shop.themaryam.in/cart"
                className="p-2.5 text-gray-600 hover:text-gray-900 transition-all duration-200 group rounded-full hover:bg-gray-100 relative"
                aria-label="Cart"
              >
                <CartIcon />
                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">0</span>
              </a>
              <a
                href="https://shop.themaryam.in/account"
                className="p-2.5 text-gray-600 hover:text-gray-900 transition-all duration-200 group rounded-full hover:bg-gray-100"
                aria-label="Account"
              >
                <ProfileIcon />
              </a>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Search Bar - Scrolls away */}
      <div className="lg:hidden px-4 pb-3 bg-white">
        <div
          className="relative cursor-pointer"
          onClick={() => navigate('/search')}
        >
          <div className="w-full bg-white border border-rose-300 rounded-xl py-3 pl-12 pr-14 text-[15px] font-medium text-gray-400 transition-all hover:border-rose-400 hover:shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            {placeholder || "Kuch bhi batao..."}
          </div>
          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 text-rose-400" />
          </div>
          {/* Voice/Mic Icon with Separator */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            <div className="w-[1px] h-6 bg-rose-200 mr-3"></div>
            <div className="text-rose-400 p-1">
              <i className="fas fa-microphone text-lg"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Delivery Banner - IMAGE - Mobile Only */}
      <img src="/HERO_BANNER.png" alt="100% Delivery Discount" className="lg:hidden w-[calc(100%-2rem)] mx-4 mt-0 mb-3" />

      {/* ===== DESKTOP HEADER ===== */}
      <header className={`hidden lg:block sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <Container className="flex items-center justify-between py-3">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center group">
              <img
                src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/themaryam_logo_header_main_production_800x800.png?v=1769321724"
                alt="The Maryam"
                className="h-7 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative group">
              <input
                type="text"
                placeholder={placeholder || "Kuch bhi batao..."}
                className="w-full bg-white border border-gray-300 rounded-xl py-3 pl-12 pr-14 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              {/* Search Icon */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              {/* Voice/Mic Icon with Separator */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                <div className="w-[1px] h-6 bg-gray-200 mr-3"></div>
                <button className="text-[#6B7D3A] hover:text-[#5a6b30] transition-colors p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => navigate('/search')}
              className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 group rounded-full hover:bg-gray-100"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <a
              href="https://shop.themaryam.in/wishlist"
              className="p-3 text-gray-600 hover:text-rose-500 transition-all duration-200 group rounded-full hover:bg-rose-50"
              aria-label="Wishlist"
            >
              <HeartIcon />
            </a>
            <a
              href="https://shop.themaryam.in/cart"
              className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 group rounded-full hover:bg-gray-100 relative"
              aria-label="Cart"
            >
              <CartIcon />
              <span className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </a>
            <a
              href="https://shop.themaryam.in/account"
              className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 group rounded-full hover:bg-gray-100"
              aria-label="Account"
            >
              <ProfileIcon />
            </a>
          </div>
        </Container>

        {/* Category Navigation - Apple Style */}
        <div className="bg-white border-t border-gray-100">
          <Container>
            <nav className="flex items-center justify-center gap-1 py-1">
              {categories.map((cat) => {
                const categoryThemes: Record<string, {
                  accent: string;
                  accentLight: string;
                  gradient: string;
                  image: string; // Image for dropdown header
                  iconPath: string; // Tabler icon path
                  link: string;
                  subItems: { name: string; link: string; desc: string; iconPath: string }[]
                }> = {
                  'Birthday': {
                    accent: 'text-purple-600',
                    accentLight: 'bg-purple-50',
                    gradient: 'from-purple-500 to-violet-500',
                    image: '/nav/birthday.png',
                    iconPath: 'M12 1a7 7 0 0 1 7 7c0 5.457 -3.028 10 -7 10c-3.9 0 -6.89 -4.379 -6.997 -9.703l-.003 -.297l.004 -.24a7 7 0 0 1 6.996 -6.76zm0 4a1 1 0 0 0 0 2l.117 .007a1 1 0 0 1 .883 .993l.007 .117a1 1 0 0 0 1.993 -.117a3 3 0 0 0 -3 -3z M12 16a1 1 0 0 1 .993 .883l.007 .117v1a3 3 0 0 1 -2.824 2.995l-.176 .005h-3a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 1 -2 0a3 3 0 0 1 2.824 -2.995l.176 -.005h3a1 1 0 0 0 .993 -.883l.007 -.117v-1a1 1 0 0 1 1 -1z',
                    link: '/birthday-gifts.html',
                    subItems: [
                      { name: 'Gifts for Him', link: 'https://shop.themaryam.in/collections/birthday?filter=him', desc: 'Best picks for men', iconPath: 'M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0 M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1 M15 5a3 3 0 0 1 -6 0' },
                      { name: 'Gifts for Her', link: 'https://shop.themaryam.in/collections/birthday?filter=her', desc: 'Curated for women', iconPath: 'M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z M6.201 18.425c.442 -1.828 2.017 -3.425 3.799 -3.425h4a3.5 3.5 0 0 1 3.799 3.425' },
                      { name: 'Milestone Birthdays', link: 'https://shop.themaryam.in/collections/birthday?filter=milestone', desc: '18th, 21st, 50th...', iconPath: 'M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' },
                      { name: 'Birthday Hampers', link: 'https://shop.themaryam.in/collections/birthday?filter=hampers', desc: 'Complete gift sets', iconPath: 'M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z M12 8l0 13 M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7' },
                    ]
                  },
                  'Occasions': {
                    accent: 'text-rose-600',
                    accentLight: 'bg-rose-50',
                    gradient: 'from-rose-500 to-pink-500',
                    image: '/nav/occasions.png',
                    iconPath: 'M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z',
                    link: 'https://shop.themaryam.in/collections/all',
                    subItems: [
                      { name: 'Valentine\'s Day', link: 'https://shop.themaryam.in/collections/valentines', desc: 'Express your love', iconPath: 'M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' },
                      { name: 'Mother\'s Day', link: 'https://shop.themaryam.in/collections/mothers-day', desc: 'For the best mom', iconPath: 'M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z M9 10h.01 M15 10h.01 M9.5 15a3.5 3.5 0 0 0 5 0' },
                      { name: 'Father\'s Day', link: 'https://shop.themaryam.in/collections/fathers-day', desc: 'For the hero', iconPath: 'M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5' },
                      { name: 'Raksha Bandhan', link: 'https://shop.themaryam.in/collections/rakhi', desc: 'Sibling love', iconPath: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0' },
                    ]
                  },
                  'Anniversary': {
                    accent: 'text-amber-600',
                    accentLight: 'bg-amber-50',
                    gradient: 'from-amber-500 to-orange-500',
                    image: '/nav/anniversary.png',
                    iconPath: 'M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M7 15v-11 M17 15v-11 M3 4h18',
                    link: '/anniversary-gifts.html',
                    subItems: [
                      { name: 'First Anniversary', link: 'https://shop.themaryam.in/collections/anniversary?filter=first', desc: 'Paper & love', iconPath: 'M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z' },
                      { name: 'Silver Jubilee', link: 'https://shop.themaryam.in/collections/anniversary?filter=silver', desc: '25 years of love', iconPath: 'M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5' },
                      { name: 'Golden Anniversary', link: 'https://shop.themaryam.in/collections/anniversary?filter=golden', desc: '50 golden years', iconPath: 'M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' },
                      { name: 'Custom Date Gifts', link: 'https://shop.themaryam.in/collections/anniversary?filter=custom', desc: 'Your special date', iconPath: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z M16 3v4 M8 3v4 M4 11h16' },
                    ]
                  },
                  'Flowers': {
                    accent: 'text-pink-600',
                    accentLight: 'bg-pink-50',
                    gradient: 'from-pink-500 to-rose-400',
                    image: '/nav/flowers.png',
                    iconPath: 'M12 1a4 4 0 0 1 4 4l-.002 .055l.03 -.018a3.97 3.97 0 0 1 2.79 -.455l.237 .056a3.97 3.97 0 0 1 2.412 1.865a4.01 4.01 0 0 1 -1.455 5.461l-.068 .036l.071 .039a4.01 4.01 0 0 1 1.555 5.27l-.101 .186a3.97 3.97 0 0 1 -5.441 1.468l-.03 -.02l.002 .057a4 4 0 0 1 -3.8 3.995l-.2 .005a4 4 0 0 1 -4 -4l.001 -.056l-.029 .019a3.97 3.97 0 0 1 -2.79 .456l-.236 -.056a3.97 3.97 0 0 1 -2.413 -1.865a4.01 4.01 0 0 1 1.453 -5.46l.07 -.038l-.071 -.038a4.01 4.01 0 0 1 -1.555 -5.27l.1 -.187a3.97 3.97 0 0 1 5.444 -1.468l.026 .018v-.055a4 4 0 0 1 3.8 -3.995zm0 8a3 3 0 1 0 0 6a3 3 0 0 0 0 -6',
                    link: '/flowers.html',
                    subItems: [
                      { name: 'Rose Bouquets', link: 'https://shop.themaryam.in/collections/flowers?filter=roses', desc: 'Classic romance', iconPath: 'M12 5a3 2 0 1 0 .002 -4.002 A3 2 0 1 0 12 5z M12 5c.328 3.344 2.672 5.656 3 9c.328 -3.344 -2.672 -5.656 -3 -9z M12 14v7' },
                      { name: 'Mixed Arrangements', link: 'https://shop.themaryam.in/collections/flowers?filter=mixed', desc: 'Colorful variety', iconPath: 'M12 10a4 4 0 1 0 -4 4h4v-4z M12 10a4 4 0 1 1 4 4h-4v-4z M12 10v10' },
                      { name: 'Premium Florals', link: 'https://shop.themaryam.in/collections/flowers?filter=premium', desc: 'Luxury blooms', iconPath: 'M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' },
                      { name: 'Eternal Roses', link: 'https://shop.themaryam.in/collections/flowers?filter=eternal', desc: 'Forever preserved', iconPath: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 3v9l3 3' },
                    ]
                  },
                  'Cakes': {
                    accent: 'text-orange-600',
                    accentLight: 'bg-orange-50',
                    gradient: 'from-orange-500 to-amber-500',
                    image: '/nav/cakes.png',
                    iconPath: 'M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197 M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737',
                    link: '/cakes.html',
                    subItems: [
                      { name: 'Photo Cakes', link: 'https://shop.themaryam.in/collections/cakes?filter=photo', desc: 'Your memories', iconPath: 'M15 8h.01 M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5' },
                      { name: 'Designer Cakes', link: 'https://shop.themaryam.in/collections/cakes?filter=designer', desc: 'Artistic creations', iconPath: 'M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z M3.6 9h16.8 M3.6 15h16.8' },
                      { name: 'Eggless Cakes', link: 'https://shop.themaryam.in/collections/cakes?filter=eggless', desc: 'Pure vegetarian', iconPath: 'M12 10a6 6 0 0 0 -6 6 M12 10a6 6 0 0 1 6 6 M12 10v-7' },
                      { name: 'Cake Combos', link: 'https://shop.themaryam.in/collections/cakes?filter=combos', desc: 'With flowers', iconPath: 'M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5' },
                    ]
                  },
                  'Personalised': {
                    accent: 'text-indigo-600',
                    accentLight: 'bg-indigo-50',
                    gradient: 'from-indigo-500 to-purple-500',
                    image: '/nav/personalised.png',
                    iconPath: 'M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z',
                    link: 'https://shop.themaryam.in/collections/personalised',
                    subItems: [
                      { name: 'Photo Frames', link: 'https://shop.themaryam.in/collections/personalised?filter=frames', desc: 'Memory keepers', iconPath: 'M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z M3 10h18 M10 3v18' },
                      { name: 'Custom Mugs', link: 'https://shop.themaryam.in/collections/personalised?filter=mugs', desc: 'Daily reminder', iconPath: 'M5 11h14v-3h-14z M17.5 11l-1.5 10h-8l-1.5 -10 M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1' },
                      { name: 'Engraved Jewelry', link: 'https://shop.themaryam.in/collections/personalised?filter=jewelry', desc: 'Elegant touch', iconPath: 'M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' },
                      { name: 'Name Lamps', link: 'https://shop.themaryam.in/collections/personalised?filter=lamps', desc: 'Light up love', iconPath: 'M9 16a5 5 0 1 1 6 0v1.5a2.5 2.5 0 0 1 -6 0v-1.5z M9.7 17h4.6 M9 21h6' },
                    ]
                  },
                  'Corporate': {
                    accent: 'text-blue-600',
                    accentLight: 'bg-blue-50',
                    gradient: 'from-blue-600 to-indigo-600',
                    image: '/nav/corporate.png',
                    iconPath: 'M3 21l18 0 M9 8l1 0 M9 12l1 0 M9 16l1 0 M14 8l1 0 M14 12l1 0 M14 16l1 0 M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16',
                    link: 'https://shop.themaryam.in/collections/corporate',
                    subItems: [
                      { name: 'Corporate Gifts', link: 'https://shop.themaryam.in/collections/corporate?filter=gifts', desc: 'Business gifting', iconPath: 'M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z M12 8l0 13' },
                      { name: 'Employee Rewards', link: 'https://shop.themaryam.in/collections/corporate?filter=rewards', desc: 'Team appreciation', iconPath: 'M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' },
                      { name: 'Bulk Orders', link: 'https://shop.themaryam.in/collections/corporate?filter=bulk', desc: 'Large quantities', iconPath: 'M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z M12 8l0 13 M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7' },
                      { name: 'Custom Branding', link: 'https://shop.themaryam.in/collections/corporate?filter=branding', desc: 'Your logo', iconPath: 'M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5' },
                    ]
                  },
                  'Chocolates': {
                    accent: 'text-amber-700',
                    accentLight: 'bg-amber-50',
                    gradient: 'from-amber-600 to-yellow-600',
                    image: '/nav/chocolates.png',
                    iconPath: 'M7.05 11.293l4.243 -4.243a2 2 0 0 1 2.828 0l2.829 2.83a2 2 0 0 1 0 2.828l-4.243 4.243a2 2 0 0 1 -2.828 0l-2.829 -2.831a2 2 0 0 1 0 -2.828 M16.243 9.172l3.086 -.772a1.5 1.5 0 0 0 .697 -2.516l-2.216 -2.217a1.5 1.5 0 0 0 -2.44 .47l-1.248 2.913 M9.172 16.243l-.772 3.086a1.5 1.5 0 0 1 -2.516 .697l-2.217 -2.216a1.5 1.5 0 0 1 .47 -2.44l2.913 -1.248',
                    link: 'https://shop.themaryam.in/collections/chocolates',
                    subItems: [
                      { name: 'Premium Chocolates', link: 'https://shop.themaryam.in/collections/chocolates?filter=premium', desc: 'Finest cocoa', iconPath: 'M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' },
                      { name: 'Assorted Boxes', link: 'https://shop.themaryam.in/collections/chocolates?filter=assorted', desc: 'Variety packs', iconPath: 'M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z M12 8l0 13' },
                      { name: 'Belgian Chocolates', link: 'https://shop.themaryam.in/collections/chocolates?filter=belgian', desc: 'Imported luxury', iconPath: 'M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0 M3.6 9h16.8 M3.6 15h16.8' },
                      { name: 'Chocolate Hampers', link: 'https://shop.themaryam.in/collections/chocolates?filter=hampers', desc: 'Sweet bundles', iconPath: 'M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z M12 8l0 13 M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7' },
                    ]
                  },
                  'Wearables': {
                    accent: 'text-rose-600',
                    accentLight: 'bg-rose-50',
                    gradient: 'from-rose-500 to-pink-600',
                    image: '/nav/wearables.png',
                    iconPath: 'M14.883 3.007l.095 -.007l.112 .004l.113 .017l.113 .03l6 2a1 1 0 0 1 .677 .833l.007 .116v5a1 1 0 0 1 -.883 .993l-.117 .007h-2v7a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .576 -.906l.108 -.043l6 -2a1 1 0 0 1 1.316 .949a2 2 0 0 0 3.995 .15l.009 -.24l.017 -.113l.037 -.134l.044 -.103l.05 -.092l.068 -.093l.069 -.08c.056 -.054 .113 -.1 .175 -.14l.096 -.053l.103 -.044l.108 -.032l.112 -.02z',
                    link: 'https://shop.themaryam.in/collections/wearables',
                    subItems: [
                      { name: 'Jewelry', link: 'https://shop.themaryam.in/collections/wearables?filter=jewelry', desc: 'Elegant pieces', iconPath: 'M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z' },
                      { name: 'Watches', link: 'https://shop.themaryam.in/collections/wearables?filter=watches', desc: 'Timeless style', iconPath: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 7v5l3 3' },
                      { name: 'Bags & Clutches', link: 'https://shop.themaryam.in/collections/wearables?filter=bags', desc: 'Fashion essentials', iconPath: 'M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12z M9 5v-2h6v2' },
                      { name: 'Accessories', link: 'https://shop.themaryam.in/collections/wearables?filter=accessories', desc: 'Complete look', iconPath: 'M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' },
                    ]
                  },
                  'Hampers': {
                    accent: 'text-teal-600',
                    accentLight: 'bg-teal-50',
                    gradient: 'from-teal-500 to-cyan-500',
                    image: '/nav/hampers.png',
                    iconPath: 'M15.949 3.684l1.104 3.316h1.947a3 3 0 0 1 2.962 3.477l-1.252 7.131a4 4 0 0 1 -3.954 3.392h-9.512a3.994 3.994 0 0 1 -3.95 -3.371l-1.258 -7.173a3 3 0 0 1 2.964 -3.456h1.945l1.105 -3.316a1 1 0 0 1 1.898 .632l-.895 2.684h5.893l-.895 -2.684a1 1 0 1 1 1.898 -.632m-3.949 7.316a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3',
                    link: 'https://shop.themaryam.in/collections/hampers',
                    subItems: [
                      { name: 'Gift Baskets', link: 'https://shop.themaryam.in/collections/hampers?filter=baskets', desc: 'Curated sets', iconPath: 'M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z M17 8c0 -3.333 -2 -5 -5 -5' },
                      { name: 'Gourmet Hampers', link: 'https://shop.themaryam.in/collections/hampers?filter=gourmet', desc: 'Food delights', iconPath: 'M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z M5 3v12h5c.023 -3.681 -.184 -7.406 -5 -12z M12 21v-9' },
                      { name: 'Spa Hampers', link: 'https://shop.themaryam.in/collections/hampers?filter=spa', desc: 'Relax & unwind', iconPath: 'M7 3c0 6 2 8 2 14 M12 5c0 8 -2.009 10 -2 16 M17 3c0 6 -2 8 -2 14' },
                      { name: 'Corporate Hampers', link: 'https://shop.themaryam.in/collections/hampers?filter=corporate', desc: 'Business gifts', iconPath: 'M3 21l18 0 M9 8l1 0 M9 12l1 0 M9 16l1 0 M14 8l1 0 M14 12l1 0 M14 16l1 0 M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16' },
                    ]
                  },
                };
                const theme = categoryThemes[cat] || { accent: 'text-gray-600', accentLight: 'bg-gray-50', gradient: 'from-gray-500 to-gray-600', image: '', iconPath: '', link: 'https://shop.themaryam.in', subItems: [] };

                return (
                  <div key={cat} className="relative group">
                    {/* Main Category Link with animated underline */}
                    <a
                      href={theme.link}
                      className="relative flex items-center gap-1 px-3.5 py-3.5 text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 whitespace-nowrap"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span className="relative z-10">{cat}</span>
                      <svg className="w-2 h-2 opacity-40 group-hover:opacity-70 transition-all duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>

                      {/* Animated gradient underline on hover */}
                      <span className={`absolute bottom-1.5 left-3 right-3 h-0.5 bg-gradient-to-r ${theme.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`} />
                    </a>

                    {/* Premium Dropdown with gradient header */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50 transform group-hover:translate-y-0 translate-y-2">
                      <div
                        className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[260px]"
                        style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.02)' }}
                      >
                        {/* Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />

                        {/* Image Header (placeholder - user will provide images) */}
                        <div className="relative h-24 overflow-hidden">
                          {/* Image or Gradient Fallback */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient}`} />
                          <img
                            src={theme.image}
                            alt={cat}
                            className={`absolute inset-0 w-full h-full object-cover ${cat === 'Birthday' || cat === 'Occasions' || cat === 'Anniversary' ? 'scale-150' : ''}`}
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          />
                          {/* Overlay for text visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-3 left-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/90">
                              <path d={theme.iconPath} />
                            </svg>
                            <div>
                              <h4 className="text-white font-semibold text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>{cat}</h4>
                              <p className="text-white/70 text-[10px] font-medium">Explore Collection</p>
                            </div>
                          </div>
                        </div>

                        {/* Sub Items with SVG icons */}
                        <div className="p-2">
                          {theme.subItems.map((item) => (
                            <a
                              key={item.name}
                              href={item.link}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-gray-50 group/item`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              <div className={`w-10 h-10 rounded-lg ${theme.accentLight} flex items-center justify-center ${theme.accent} transition-transform duration-200 group-hover/item:scale-110`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d={item.iconPath} />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-[13px] font-medium text-gray-800">{item.name}</div>
                                <div className="text-[10px] text-gray-400">{item.desc}</div>
                              </div>
                              <svg className="w-3.5 h-3.5 text-gray-300 group-hover/item:text-gray-400 group-hover/item:translate-x-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </a>
                          ))}
                        </div>

                        {/* View All Footer with accent color */}
                        <div className="border-t border-gray-100 p-2">
                          <a
                            href={theme.link}
                            className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl ${theme.accentLight} ${theme.accent} text-[12px] font-semibold transition-all duration-200 hover:opacity-80`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <span>View All {cat}</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* On Trend - Solid Pink Button */}
              <a
                href="https://shop.themaryam.in/collections/trending"
                className="ml-3 px-5 py-2 text-[13px] font-semibold text-white bg-pink-500 rounded-full whitespace-nowrap transition-all duration-200 shadow-md shadow-pink-500/30 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/40 hover:scale-105"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                On Trend
              </a>
            </nav>
          </Container>
        </div>
      </header >

      {/* Mobile Sidebar Menu - Superkicks Style (Persistent with CSS Transitions) */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[85%] max-w-[340px] bg-white text-black z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* Close Button Area */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-black" strokeWidth={2} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-8 py-8 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="space-y-6 mt-8">
              {/* Home Link */}
              <a href="/" className="group flex items-center justify-between cursor-pointer">
                <span className="text-lg font-bold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>HOME</span>
              </a>

              {/* Dynamic Categories - Bold & Outfit */}
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`https://shop.themaryam.in/collections/${cat.toLowerCase().replace(' ', '-')}`}
                  className="group flex items-center justify-between cursor-pointer"
                >
                  <span
                    className="text-lg font-bold tracking-widest uppercase"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {cat}
                  </span>
                  <ArrowRight className="w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" strokeWidth={2} />
                </a>
              ))}

              {/* On Trend */}
              <a href="https://shop.themaryam.in/collections/trending" className="group flex items-center justify-between cursor-pointer">
                <span className="text-lg font-bold tracking-widest uppercase text-rose-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  ON TREND
                </span>
                <Sparkles className="w-5 h-5 text-rose-600" />
              </a>

              {/* Utility Links */}
              <div className="pt-4 space-y-6">
                <a href="/pages/track-order" className="group flex items-center justify-between cursor-pointer">
                  <span className="text-xl font-medium tracking-wide">TRACK ORDER</span>
                </a>
                <a href="/contact.html" className="group flex items-center justify-between cursor-pointer">
                  <span className="text-xl font-medium tracking-wide">CONTACT US</span>
                </a>
              </div>
            </div>

            {/* Bottom Links (Account/Wishlist) */}
            <div className="mt-12 border-t border-gray-200 pt-8 space-y-5">
              <a href="https://shop.themaryam.in/account" className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wider text-gray-800">
                <User className="w-5 h-5" />
                <span>Account</span>
              </a>
              <a href="https://shop.themaryam.in/wishlist" className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wider text-gray-800">
                <Heart className="w-5 h-5" />
                <span>My Wishlist</span>
              </a>
            </div>

            {/* Socials - List Format */}
            <div className="mt-8 space-y-5">
              <a href="https://instagram.com/themaryam.in" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wider text-gray-800">
                <Instagram className="w-5 h-5" />
                <span>Instagram - @themaryam.in</span>
              </a>
              <a href="https://facebook.com/themaryam.in" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wider text-gray-800">
                <Facebook className="w-5 h-5" />
                <span>Facebook - @themaryam.in</span>
              </a>
              <a href="tel:+917359033087" className="flex items-center space-x-3 text-sm font-bold uppercase tracking-wider text-gray-800">
                <Phone className="w-5 h-5" />
                <span>Support - +91 73590 33087</span>
              </a>
            </div>
          </div>

          {/* Left Decorative Line (Optional, matches snippet style subtlety) */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
        </div>
      </div>

    </>
  );
};

// Birthday Gift Reminder Popup - Clean Minimal Design with HeroUI DatePicker
import { DatePicker } from '@heroui/date-picker';
import { HeroUIProvider } from '@heroui/system';
import { parseDate } from '@internationalized/date';

export const BirthdayReminderPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [birthday, setBirthday] = useState<any>(null);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('maryam_birthday_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Set seen flag IMMEDIATELY so it never shows again, even if page is reloaded
        localStorage.setItem('maryam_birthday_popup_seen', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Keyboard detection using visualViewport API
  useEffect(() => {
    if (!isVisible) return;

    const handleViewportChange = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const windowHeight = window.innerHeight;
        const keyboardHeight = windowHeight - viewportHeight;

        // Only apply offset if keyboard is actually open (height > 100px threshold)
        if (keyboardHeight > 100) {
          // Move popup up by keyboard height minus some padding
          setKeyboardOffset(keyboardHeight - 20);
        } else {
          setKeyboardOffset(0);
        }
      }
    };

    // Listen to visualViewport resize events
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
      window.visualViewport.addEventListener('scroll', handleViewportChange);
    }

    // Fallback: focus/blur events for older browsers
    const handleFocus = () => {
      // Small delay to let keyboard appear
      setTimeout(() => {
        if (window.visualViewport) {
          handleViewportChange();
        } else {
          // Fallback offset for older browsers
          setKeyboardOffset(280);
        }
      }, 100);
    };

    const handleBlur = () => {
      setTimeout(() => setKeyboardOffset(0), 100);
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
        window.visualViewport.removeEventListener('scroll', handleViewportChange);
      }
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [isVisible]);

  const handleSubmit = () => {
    if (birthday && phone.length >= 10) {
      // Flag already set in useEffect, just storing data
      localStorage.setItem('maryam_birthday_data', JSON.stringify({
        birthday: birthday?.toString() || '',
        phone,
        timestamp: new Date().toISOString()
      }));
      setSubmitted(true);
      setTimeout(() => handleClose(), 1200);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    // Flag already set in useEffect
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 600);
  };

  if (!isVisible) return null;

  const isFormValid = birthday && phone.length >= 10;

  // Tabler Filled Gift Icon
  const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#F472B6">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z" />
    </svg>
  );

  // Success Check SVG - Pink theme
  const CheckIcon = () => (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#F472B6" strokeWidth="2" fill="#FDF2F8" />
      <path d="M8 12L11 15L16 9" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <HeroUIProvider>
      {/* Mobile: center bottom, Desktop: left bottom */}
      <div className="fixed inset-0 z-[200] pointer-events-none flex items-end justify-center lg:justify-start pb-4 px-4 lg:pl-6 lg:pb-6">
        {/* Backdrop */}
        <div
          className={`absolute inset-0 pointer-events-auto ${isClosing ? 'giftpopup-backdrop-out' : 'giftpopup-backdrop-in'}`}
          onClick={handleClose}
          style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
        />

        {/* Card */}
        <div
          className={`relative w-full max-w-[360px] lg:max-w-[420px] bg-white rounded-[24px] shadow-xl pointer-events-auto ${isClosing ? 'giftpopup-card-out' : 'giftpopup-card-in'}`}
          style={{
            fontFamily: "'DM Sans', Inter, -apple-system, sans-serif",
            transform: `translateY(-${keyboardOffset}px)`,
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {/* Content */}
          <div className="px-7 pt-7 pb-6">

            {submitted ? (
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-800">You're all set!</h3>
                <p className="text-sm text-gray-500 mt-2">We'll remind you on their special day.</p>
              </div>
            ) : (
              <>
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <GiftIcon />
                </div>

                {/* Title */}
                <h2 className="text-[22px] font-extrabold text-gray-800 leading-tight tracking-tight">
                  Never Miss their Birthday
                </h2>

                {/* Description */}
                <p className="text-[15px] text-gray-500 mt-3 leading-relaxed">
                  Share their special date and your number. We'll remind you with exclusive gift deals.
                </p>

                {/* Birthday Input - HeroUI DatePicker */}
                <div className="mt-5">
                  <DatePicker
                    label="Their Birthday"
                    value={birthday}
                    onChange={setBirthday}
                    className="w-full"
                    classNames={{
                      base: "w-full",
                      inputWrapper: "bg-pink-50 hover:bg-pink-100 rounded-2xl h-[52px] border-2 border-pink-100 focus-within:border-pink-300",
                      input: "text-gray-800 text-[15px] font-medium",
                      label: "text-pink-400 text-xs font-semibold",
                      calendar: "bg-white shadow-xl border border-gray-100",
                      calendarContent: "bg-white",
                      popoverContent: "bg-white shadow-2xl rounded-2xl border border-pink-100"
                    }}
                    popoverProps={{
                      classNames: {
                        content: "bg-white shadow-2xl rounded-2xl p-0"
                      }
                    }}
                    calendarProps={{
                      classNames: {
                        base: "bg-white shadow-none",
                        headerWrapper: "bg-white",
                        header: "text-gray-800 font-semibold",
                        gridHeader: "bg-white",
                        gridHeaderCell: "text-gray-500 font-medium",
                        gridBody: "bg-white",
                        cell: "text-gray-800",
                        cellButton: "text-gray-800 hover:bg-pink-50 data-[selected=true]:bg-pink-400 data-[selected=true]:text-white"
                      }
                    }}
                    showMonthAndYearPickers
                  />
                </div>

                {/* Phone Input */}
                <div className="mt-3">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[15px] font-medium">+91</span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Your mobile number"
                      className="w-full h-[52px] pl-12 pr-4 bg-pink-50 border-2 border-pink-100 rounded-2xl text-gray-800 text-[15px] font-medium focus:border-pink-300 focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Buttons - Swapped: Later first, Remind Me second */}
                <div className="flex gap-3 mt-6">
                  {/* Later Button - Dark */}
                  <button
                    onClick={handleClose}
                    className="flex-1 h-[52px] rounded-full bg-gray-800 text-white text-[15px] font-bold transition-all duration-150 active:scale-95 hover:bg-gray-700"
                  >
                    Later
                  </button>

                  {/* Remind Me Button - Light Pink */}
                  <button
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    className={`flex-1 h-[52px] rounded-full text-[15px] font-bold transition-all duration-150 ${isFormValid
                      ? 'bg-pink-400 text-white active:scale-95 hover:bg-pink-500'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    Remind Me
                  </button>
                </div>

                {/* Privacy note */}
                <p className="text-[11px] text-gray-400 mt-4 text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Ultra Bouncy Animations */}
      <style>{`
        @keyframes giftBackdropIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes giftBackdropOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes giftBounceIn {
          0% {
            transform: translateY(100%) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(-16px) scale(1.04);
            opacity: 1;
          }
          70% {
            transform: translateY(8px) scale(0.98);
          }
          85% {
            transform: translateY(-4px) scale(1.01);
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes giftBounceOut {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          20% {
            transform: translateY(-12px) scale(1.03);
            opacity: 1;
          }
          100% {
            transform: translateY(110%) scale(0.95);
            opacity: 1;
          }
        }
        
        .giftpopup-backdrop-in {
          animation: giftBackdropIn 0.35s ease-out forwards;
        }
        
        .giftpopup-backdrop-out {
          animation: giftBackdropOut 0.5s ease-out forwards;
        }
        
        .giftpopup-card-in {
          animation: giftBounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .giftpopup-card-out {
          animation: giftBounceOut 0.6s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
        }
        
        /* HeroUI DatePicker Calendar Styles */
        [data-slot="popover"] {
          background: white !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
          border-radius: 20px !important;
          border: 1px solid #FCE7F3 !important;
          padding: 8px !important;
        }
        
        [data-slot="calendar"] {
          background: white !important;
          transform: scale(1.08);
          transform-origin: top center;
        }
        
        [data-slot="grid-body"] button {
          color: #1F2937 !important;
        }
        
        [data-slot="grid-header-cell"] {
          color: #6B7280 !important;
        }
        
        [data-slot="header"] button {
          color: #374151 !important;
        }
        
        [data-slot="cell-button"][data-selected="true"] {
          background: #F472B6 !important;
          color: white !important;
        }
        
        [data-slot="cell-button"]:hover {
          background: #FDF2F8 !important;
        }
      `}</style>
    </HeroUIProvider>
  );
};






export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-white text-gray-900 pt-20 pb-8 overflow-hidden border-t border-gray-100"
      itemScope
      itemType="https://schema.org/WPFooter"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <Container>
        {/* Top Section: CTA Swiss Style */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-16 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">System Operational • Worldwide Shipping</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-gray-900">
              Let's make memories <br /><span className="text-gray-400">tangible.</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0">
            <a
              href="https://shop.themaryam.in"
              className="group bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-xl"
              aria-label="Start shopping for personalized gifts"
            >
              Start Creating
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* SWISS GRID LINKS - 5 COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-l border-gray-200">

          {/* Column 1 - Products */}
          <nav className="border-r border-b lg:border-b-0 border-gray-200 p-6 md:p-8 hover:bg-gray-50 transition-colors duration-500" aria-label="Product Categories">
            <h4 className="text-gray-400 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Sparkles size={12} /> Products
            </h4>
            <ul className="space-y-4 md:space-y-5">
              {[
                { name: 'Neon Lights', href: '/collections/neon-lights' },
                { name: '3D Miniatures', href: '/collections/3d-miniatures' },
                { name: 'Photo Frames', href: '/collections/photo-frames' },
                { name: 'Custom Mugs', href: '/collections/mugs' },
                { name: 'Engraved Jewelry', href: '/collections/jewelry' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                    {item.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2 - Occasions */}
          <nav className="border-r border-b lg:border-b-0 border-gray-200 p-6 md:p-8 hover:bg-gray-50 transition-colors duration-500" aria-label="Shop by Occasion">
            <h4 className="text-gray-400 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Heart size={12} /> Occasions
            </h4>
            <ul className="space-y-4 md:space-y-5">
              {[
                { name: 'Birthday Gifts', href: '/collections/birthday' },
                { name: 'Anniversary Gifts', href: '/collections/anniversary' },
                { name: 'Wedding Gifts', href: '/collections/wedding' },
                { name: 'Diwali Gifts', href: '/collections/diwali' },
                { name: 'Valentine Gifts', href: '/collections/valentines-day' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                    {item.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 - Legal & Policies */}
          <nav className="border-r border-b lg:border-b-0 border-gray-200 p-6 md:p-8 hover:bg-gray-50 transition-colors duration-500" aria-label="Legal and Policies">
            <h4 className="text-gray-400 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <FileText size={12} /> Policies
            </h4>
            <ul className="space-y-4 md:space-y-5">
              <li>
                <a href="/policies/terms-of-service" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                  Terms of Service
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                </a>
              </li>
              <li>
                <a href="/policies/shipping-policy" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                  Shipping Policy
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                </a>
              </li>
              <li>
                <a href="/policies/return-refund-policy" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                  Return & Refund
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                </a>
              </li>
              <li>
                <a href="/policies/privacy-policy" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                  Privacy Policy
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4 - Support & Contact */}
          <nav className="border-r border-gray-200 p-6 md:p-8 hover:bg-gray-50 transition-colors duration-500" aria-label="Customer Support">
            <h4 className="text-gray-400 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Phone size={12} /> Support
            </h4>
            <ul className="space-y-4 md:space-y-5">
              <li>
                <a href="/policies/contact-information" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                  Contact Us
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                </a>
              </li>
              <li>
                <a href="/pages/track-order" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                  Track Order
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                </a>
              </li>
              <li>
                <a href="/pages/faq" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-600 transition-colors text-gray-800">
                  FAQs
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917359033087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-medium flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp Support
                </a>
              </li>
            </ul>
            {/* Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400 mb-2">Email</p>
              <a href="mailto:support@themaryam.in" className="text-sm hover:text-gray-600 transition-colors text-gray-800">support@themaryam.in</a>
              <p className="text-xs text-gray-400 mt-3 mb-2">Phone</p>
              <a href="tel:+917359033087" className="text-sm hover:text-gray-600 transition-colors text-gray-800">+91 7359033087</a>
            </div>
          </nav>

          {/* Column 5 - Connect & Social */}
          <div className="border-r border-gray-200 p-6 md:p-8 hover:bg-gray-50 transition-colors duration-500 col-span-2 md:col-span-1">
            <h4 className="text-gray-400 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Globe size={12} /> Connect
            </h4>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://www.instagram.com/themaryam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all text-gray-600"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/wrapy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all text-gray-600"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/wrapyindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all text-gray-600"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.youtube.com/@wrapyindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all text-gray-600"
                aria-label="Subscribe on YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Newsletter */}
            <h4 className="text-gray-400 text-xs mb-3 uppercase tracking-widest font-bold">Newsletter</h4>
            <form className="relative mb-6" action="#" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="bg-transparent border-b border-gray-300 w-full pb-2 text-sm focus:outline-none focus:border-gray-900 transition-colors text-gray-800 placeholder:text-gray-400"
                aria-label="Email for newsletter"
                required
              />
              <button type="submit" className="absolute right-0 bottom-2 text-gray-400 hover:text-gray-900" aria-label="Subscribe to newsletter">
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Address */}
            <div
              className="text-xs text-gray-500"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <div className="flex items-start gap-2 mb-2">
                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">B/47 Shanti Nagar Society, Near Haridham Mandir, Gorwa</span>,
                  <span itemProp="addressLocality"> Vadodara</span>,
                  <span itemProp="addressRegion"> Gujarat</span> -
                  <span itemProp="postalCode"> 390016</span>,
                  <span itemProp="addressCountry"> India</span>
                  <br />
                  <span className="text-[10px] text-gray-400 mt-1 block">(Registered Office)</span>
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges & Payment */}
        <div className="border-t border-gray-200 mt-0 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Shield size={14} className="text-green-500" />
                <span>100% Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Truck size={14} className="text-blue-500" />
                <span>Pan India Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Sparkles size={14} className="text-yellow-500" />
                <span>Premium Quality</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>We Accept:</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 font-medium">Visa</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 font-medium">Mastercard</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 font-medium">UPI</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 font-medium">COD</span>
            </div>
          </div>
        </div>

        {/* MASSIVE FOOTER TEXT */}
        <div className="relative w-full text-center border-t border-gray-100 pt-16 mt-4">
          <h1 className="text-[12vw] md:text-[15.5vw] font-heading font-black leading-none tracking-tighter text-gray-100 select-none pointer-events-none hover:text-gray-200 transition-colors duration-700" aria-hidden="true">
            THE MARYAM
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-8 absolute bottom-4 w-full px-4 font-mono uppercase tracking-wider">
            <p>© 2024-2026 The Maryam. All Rights Reserved. Made with Love in India.</p>
            <div className="flex gap-4 md:gap-6 mt-2 md:mt-0 flex-wrap justify-center">
              <a href="/policies/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="/policies/terms-of-service" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="/policies/return-refund-policy" className="hover:text-gray-900 transition-colors">Refunds</a>
              <a href="/sitemap.xml" className="hover:text-gray-900 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

// ============================================
// Mobile Bottom Navigation Bar
// Pixel-perfect replica of shop.themaryam.in bottom-nav
// Mobile-only (hidden on lg/desktop)
// ============================================
export const BottomNav: React.FC = () => {
  const [activePath, setActivePath] = useState('/');
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  useEffect(() => {
    setActivePath(window.location.pathname);

    const handlePopState = () => setActivePath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navItems = [
    {
      id: 'discover',
      label: 'Discover',
      href: '/',
      isInternal: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12v10H4V12"/>
          <path d="M2 7h20v5H2z"/>
          <path d="M12 22V7"/>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
        </svg>
      ),
    },
    {
      id: 'shop',
      label: 'Shop',
      href: 'https://shop.themaryam.in/pages/categories',
      isInternal: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5"/>
          <rect x="14" y="14" width="7" height="7" rx="1.5"/>
        </svg>
      ),
    },
    {
      id: 'search',
      label: 'Search',
      href: 'https://shop.themaryam.in/search',
      isInternal: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
    },
    {
      id: 'ideas',
      label: 'Ideas',
      href: 'https://shop.themaryam.in/pages/ideas',
      isInternal: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
        </svg>
      ),
    },
    {
      id: 'account',
      label: 'Account',
      href: 'https://shop.themaryam.in/account/login',
      isInternal: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M20 21a8 8 0 1 0-16 0"/>
        </svg>
      ),
    },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.id === 'discover') return activePath === '/' || activePath === '';
    if (item.isInternal) return activePath.startsWith(item.href);
    return false;
  };

  return (
    <>
      {/* Bottom Nav Bar - Mobile Only */}
      <nav
        className="flex items-center justify-around lg:hidden"
        aria-label="Mobile Navigation"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 'calc(64px + env(safe-area-inset-bottom, 0px))',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '0.5px solid rgba(0, 0, 0, 0.06)',
          boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.04)',
          transform: 'translateZ(0)',
          contain: 'layout style' as any,
        }}
      >
        {navItems.map((item) => {
          const active = isActive(item);
          const pressed = pressedItem === item.id;

          const commonProps = {
            key: item.id,
            'aria-label': item.label,
            onPointerDown: () => setPressedItem(item.id),
            onPointerUp: () => setPressedItem(null),
            onPointerLeave: () => setPressedItem(null),
            style: {
              display: 'flex',
              flexDirection: 'column' as const,
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              flex: 1,
              height: '100%',
              padding: '8px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: active ? '#000' : 'rgba(0, 0, 0, 0.5)',
              textDecoration: 'none',
              transition: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: pressed ? 'scale(0.95)' : 'scale(1)',
              minWidth: '48px',
              minHeight: '48px',
              WebkitTapHighlightColor: 'transparent',
            },
          };

          const content = (
            <>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                }}
              >
                {item.icon}
              </span>
              <span
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </span>
            </>
          );

          return (
            <a
              {...commonProps}
              href={item.href}
              {...(!item.isInternal ? { target: '_self' } : {})}
            >
              {content}
            </a>
          );
        })}
      </nav>

      {/* Spacer to prevent content from hiding behind bottom nav - Mobile Only */}
      <div
        className="lg:hidden"
        style={{
          height: 'calc(64px + env(safe-area-inset-bottom, 0px) + 16px)',
        }}
        aria-hidden="true"
      />
    </>
  );
};
