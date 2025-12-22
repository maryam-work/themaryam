import React, { useState, useEffect } from 'react';
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
  Mail
} from 'lucide-react';
import { Container } from './UI';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-2 hidden md:block">
      <Container className="flex justify-between items-center text-[11px] font-medium tracking-wide">
        <div className="flex items-center gap-2">
          <Zap size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="animate-pulse">AI-Powered Customization is here!</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Track Order</a>
          <a href="#" className="hover:text-gray-300">Support</a>
        </div>
      </Container>
    </div>
  );
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'}`}>
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <a href="#" className="text-2xl font-heading font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
            themaryam.in
          </a>
        </div>

        {/* Desktop Nav - Functional */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-800">
          <a href="#" className="hover:text-brand-dark transition-colors font-semibold">Custom Frames</a>
          <a href="#" className="hover:text-brand-dark transition-colors font-semibold">Neon Lights</a>
          <a href="#" className="hover:text-brand-dark transition-colors font-semibold">3D Dolls</a>
          <a href="#" className="hover:text-brand-dark transition-colors font-semibold">Corporate</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Premium Expandable Search - Desktop */}
          <div className="hidden md:flex items-center relative">
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${searchOpen
                  ? 'w-56 bg-gray-100/90 backdrop-blur-sm rounded-full border border-gray-200/60 shadow-sm'
                  : 'w-9 h-9'
                }`}
            >
              {/* Search Icon Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 ease-out ${searchOpen
                    ? 'text-gray-500 hover:text-gray-700'
                    : 'text-gray-600 hover:text-brand-dark hover:bg-gray-100'
                  }`}
                aria-label={searchOpen ? 'Close search' : 'Open search'}
              >
                {searchOpen ? (
                  <X size={16} className="transition-transform duration-200" />
                ) : (
                  <Search size={18} className="transition-transform duration-200" />
                )}
              </button>

              {/* Search Input */}
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                className={`bg-transparent text-xs font-medium text-gray-700 placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out ${searchOpen ? 'w-full pr-3 opacity-100' : 'w-0 opacity-0'
                  }`}
                onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
              />
            </div>
          </div>

          {/* Mobile Search Icon */}
          <button
            className="md:hidden text-gray-600 hover:text-brand-dark transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <button className="hidden sm:block hover:text-brand-dark transition-colors"><User size={20} /></button>
          <button className="hidden sm:block hover:text-brand-dark transition-colors relative">
            <Heart size={20} />
          </button>
          <button className="hover:text-brand-dark transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-brand-dark text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </button>
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Search Overlay - Slides Down */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-out ${searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 rounded-full py-2.5 pl-10 pr-4 text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-dark/20 transition-all"
            />
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fade-in-down">
          <a href="#" className="text-lg font-medium">Custom Frames</a>
          <a href="#" className="text-lg font-medium">Neon Lights</a>
          <a href="#" className="text-lg font-medium">3D Dolls</a>
          <a href="#" className="text-lg font-medium">Occasions</a>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 overflow-hidden">
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
            <button className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Start Creating
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* SWISS GRID LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-gray-800">

          {/* Column 1 */}
          <div className="border-r border-gray-800 p-8 hover:bg-gray-900 transition-colors duration-500 group">
            <h4 className="text-gray-500 text-xs mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Sparkles size={12} /> Products
            </h4>
            <ul className="space-y-6">
              {['Neon Lights', '3D Miniatures', 'Spotify Plaques', 'QR Cards', 'Vintage Letters'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg font-medium flex items-center justify-between group/link">
                    {item}
                    <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="border-r border-gray-800 p-8 hover:bg-gray-900 transition-colors duration-500">
            <h4 className="text-gray-500 text-xs mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Globe size={12} /> Company
            </h4>
            <ul className="space-y-6">
              {['Our Story', 'Careers', 'Blog', 'Press', 'Sitemap'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg font-medium flex items-center justify-between group/link">
                    {item}
                    <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="border-r border-gray-800 p-8 hover:bg-gray-900 transition-colors duration-500">
            <h4 className="text-gray-500 text-xs mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <Mail size={12} /> Connect
            </h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"><Youtube size={18} /></a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"><Linkedin size={18} /></a>
            </div>
            <h4 className="text-gray-500 text-xs mb-4 uppercase tracking-widest font-bold">Newsletter</h4>
            <div className="relative">
              <input type="email" placeholder="Email address" className="bg-transparent border-b border-gray-700 w-full pb-2 text-sm focus:outline-none focus:border-white transition-colors" />
              <button className="absolute right-0 bottom-2 text-gray-400 hover:text-white"><ArrowRight size={16} /></button>
            </div>
          </div>

          {/* Column 4 - Support */}
          <div className="border-r border-gray-800 p-8 hover:bg-gray-900 transition-colors duration-500">
            <h4 className="text-gray-500 text-xs mb-8 uppercase tracking-widest font-bold flex items-center gap-2">
              <User size={12} /> Support
            </h4>
            <ul className="space-y-6">
              {['Help Center', 'Track Order', 'Returns', 'Shipping Info', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg font-medium flex items-center justify-between group/link">
                    {item}
                    <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-gray-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MASSIVE FOOTER TEXT */}
        <div className="relative w-full text-center border-t border-gray-900 pt-20 mt-0">
          <h1 className="text-[12vw] md:text-[15.5vw] font-heading font-black leading-none tracking-tighter text-white/5 select-none pointer-events-none hover:text-white/10 transition-colors duration-700">
            THE MARYAM
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mt-8 absolute bottom-4 w-full px-4 font-mono uppercase tracking-wider">
            <p>© 2024 The Maryam Inc. Crafted with Love & AI.</p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};