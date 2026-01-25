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
    <div className="hidden lg:block w-full py-2.5 relative overflow-hidden bg-gray-900">
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(236,72,153,0.2) 50%, transparent 100%)',
          animation: 'shimmer 4s infinite'
        }}
      />
      <Container className="relative z-10 flex justify-center items-center text-center px-2">
        <p className="text-[12px] tracking-wide whitespace-nowrap font-inter">
          <span className="font-bold uppercase tracking-wider text-white">99% DELIVERY DISCOUNT!!!</span>
          <span className="font-normal ml-1.5 text-white/80">You pay for the feeling. Gifts are on us.</span>
          <span className="ml-1">🤞🏻</span>
        </p>
      </Container>
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
      "Search for gifts...",
      "Birthday gifts...",
      "Valentine special...",
      "Gifts for her...",
      "Personalized gifts...",
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
    'Personalised', 'Plants', 'Chocolates', 'Luxe', 'Hampers'
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

        {/* Mobile Search Bar */}
        <div className="px-4 pb-3">
          <div
            className="relative cursor-pointer"
            onClick={() => navigate('/search')}
          >
            <div className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-11 pr-4 text-sm font-medium text-gray-400 transition-all hover:border-gray-300 hover:bg-gray-100" style={{ fontFamily: 'Inter, sans-serif' }}>
              {placeholder || "Search for gifts..."}
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
          </div>
        </div>
      </header>

      {/* ===== DESKTOP HEADER ===== */}
      <header className={`hidden lg:block sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <Container className="flex items-center justify-between py-3">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors group rounded-lg hover:bg-gray-100"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
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
            <div
              className="relative group cursor-pointer"
              onClick={() => navigate('/search')}
            >
              <div className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-12 pr-4 text-sm font-medium text-gray-500 transition-all group-hover:border-gray-300 group-hover:bg-gray-100 group-hover:shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                {placeholder || "Search for gifts..."}
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors">
                <SearchIcon />
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

        {/* Category Navigation */}
        <div className="bg-white border-t border-gray-100">
          <Container>
            <nav className="flex items-center justify-center gap-0 py-2 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => {
                const categoryLinks: Record<string, string> = {
                  'Birthday': '/birthday-gifts.html',
                  'Occasions': 'https://shop.themaryam.in/collections/all',
                  'Anniversary': '/anniversary-gifts.html',
                  'Flowers': '/flowers.html',
                  'Cakes': '/cakes.html',
                  'Personalised': 'https://shop.themaryam.in/collections/all',
                  'Plants': 'https://shop.themaryam.in/collections/all',
                  'Chocolates': 'https://shop.themaryam.in/collections/all',
                  'Luxe': 'https://shop.themaryam.in/collections/all',
                  'Hampers': 'https://shop.themaryam.in/collections/all',
                };
                return (
                  <a
                    key={cat}
                    href={categoryLinks[cat] || 'https://shop.themaryam.in'}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg whitespace-nowrap transition-all duration-200 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {cat}
                    <svg className="w-3 h-3 opacity-40 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </a>
                )
              })}
              <a href="https://shop.themaryam.in/collections/all" className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-full whitespace-nowrap hover:from-rose-600 hover:to-pink-600 transition-all duration-200 shadow-sm hover:shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                ✨ On Trend
              </a>
            </nav>
          </Container>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl animate-slide-in-left">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <img
                src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/themaryam_logo_header_main_800x800.png?v=1769320607"
                alt="The Maryam"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>
            {/* Menu Items */}
            <nav className="p-4 space-y-1">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {cat}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                </a>
              ))}
            </nav>
            {/* Bottom CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
              <a
                href="https://shop.themaryam.in"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
              >
                <Sparkles size={18} />
                Explore Gifts
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-black text-white pt-20 pb-8 overflow-hidden"
      itemScope
      itemType="https://schema.org/WPFooter"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <Container>
        {/* Top Section: CTA Swiss Style */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-16 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">System Operational • Worldwide Shipping</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Let's make memories <br /><span className="text-gray-600">tangible.</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0">
            <a
              href="https://shop.themaryam.in"
              className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-colors"
              aria-label="Start shopping for personalized gifts"
            >
              Start Creating
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* SWISS GRID LINKS - 5 COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-l border-gray-800">

          {/* Column 1 - Products */}
          <nav className="border-r border-b lg:border-b-0 border-gray-800 p-6 md:p-8 hover:bg-gray-900 transition-colors duration-500" aria-label="Product Categories">
            <h4 className="text-gray-500 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
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
                  <a href={item.href} className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors">
                    {item.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2 - Occasions */}
          <nav className="border-r border-b lg:border-b-0 border-gray-800 p-6 md:p-8 hover:bg-gray-900 transition-colors duration-500" aria-label="Shop by Occasion">
            <h4 className="text-gray-500 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
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
                  <a href={item.href} className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors">
                    {item.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 - Legal & Policies */}
          <nav className="border-r border-b lg:border-b-0 border-gray-800 p-6 md:p-8 hover:bg-gray-900 transition-colors duration-500" aria-label="Legal and Policies">
            <h4 className="text-gray-500 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <FileText size={12} /> Policies
            </h4>
            <ul className="space-y-4 md:space-y-5">
              <li>
                <a href="/policies/terms-of-service" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors" rel="nofollow">
                  Terms of Service
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="/policies/shipping-policy" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors">
                  Shipping Policy
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="/policies/refund-policy" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors">
                  Return & Refund
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="/policies/privacy-policy" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors" rel="nofollow">
                  Privacy Policy
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4 - Support & Contact */}
          <nav className="border-r border-gray-800 p-6 md:p-8 hover:bg-gray-900 transition-colors duration-500" aria-label="Customer Support">
            <h4 className="text-gray-500 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Phone size={12} /> Support
            </h4>
            <ul className="space-y-4 md:space-y-5">
              <li>
                <a href="/pages/contact" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors">
                  Contact Us
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="/pages/track-order" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors">
                  Track Order
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                </a>
              </li>
              <li>
                <a href="/pages/faq" className="text-sm md:text-base font-medium flex items-center justify-between group/link hover:text-gray-300 transition-colors">
                  FAQs
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917359033087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-medium flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp Support
                </a>
              </li>
            </ul>
            {/* Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-2">Email</p>
              <a href="mailto:support@themaryam.in" className="text-sm hover:text-gray-300 transition-colors">support@themaryam.in</a>
              <p className="text-xs text-gray-500 mt-3 mb-2">Phone</p>
              <a href="tel:+917359033087" className="text-sm hover:text-gray-300 transition-colors">+91 7359033087</a>
            </div>
          </nav>

          {/* Column 5 - Connect & Social */}
          <div className="border-r border-gray-800 p-6 md:p-8 hover:bg-gray-900 transition-colors duration-500 col-span-2 md:col-span-1">
            <h4 className="text-gray-500 text-xs mb-6 md:mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Globe size={12} /> Connect
            </h4>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://www.instagram.com/themaryam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/wrapy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/wrapyindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.youtube.com/@wrapyindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Subscribe on YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Newsletter */}
            <h4 className="text-gray-500 text-xs mb-3 uppercase tracking-widest font-bold">Newsletter</h4>
            <form className="relative mb-6" action="#" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="bg-transparent border-b border-gray-700 w-full pb-2 text-sm focus:outline-none focus:border-white transition-colors"
                aria-label="Email for newsletter"
                required
              />
              <button type="submit" className="absolute right-0 bottom-2 text-gray-400 hover:text-white" aria-label="Subscribe to newsletter">
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
                  <span itemProp="streetAddress">Gorwa</span>,
                  <span itemProp="addressLocality"> Vadodara</span>,
                  <span itemProp="addressRegion"> Gujarat</span> -
                  <span itemProp="postalCode"> 390016</span>,
                  <span itemProp="addressCountry"> India</span>
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges & Payment */}
        <div className="border-t border-gray-800 mt-0 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Shield size={14} className="text-green-500" />
                <span>100% Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Truck size={14} className="text-blue-400" />
                <span>Pan India Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Sparkles size={14} className="text-yellow-400" />
                <span>Premium Quality</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>We Accept:</span>
              <span className="px-2 py-1 bg-gray-800 rounded">Visa</span>
              <span className="px-2 py-1 bg-gray-800 rounded">Mastercard</span>
              <span className="px-2 py-1 bg-gray-800 rounded">UPI</span>
              <span className="px-2 py-1 bg-gray-800 rounded">COD</span>
            </div>
          </div>
        </div>

        {/* MASSIVE FOOTER TEXT */}
        <div className="relative w-full text-center border-t border-gray-900 pt-16 mt-4">
          <h1 className="text-[12vw] md:text-[15.5vw] font-heading font-black leading-none tracking-tighter text-white/5 select-none pointer-events-none hover:text-white/10 transition-colors duration-700" aria-hidden="true">
            THE MARYAM
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mt-8 absolute bottom-4 w-full px-4 font-mono uppercase tracking-wider">
            <p>© 2024-2026 The Maryam. All Rights Reserved. Made with Love in India.</p>
            <div className="flex gap-4 md:gap-6 mt-2 md:mt-0 flex-wrap justify-center">
              <a href="/policies/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/policies/terms-of-service" className="hover:text-white transition-colors">Terms</a>
              <a href="/policies/refund-policy" className="hover:text-white transition-colors">Refunds</a>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
