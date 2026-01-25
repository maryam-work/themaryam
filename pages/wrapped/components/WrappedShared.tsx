import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Gift, Lightbulb, Heart, Brain, MapPin, Cpu, Home, ShoppingBag, BookOpen, ExternalLink } from 'lucide-react';

// Sidebar Menu Items
const sidebarLinks = [
    { name: 'Home', href: '/', icon: Home, external: false },
    { name: 'AI Gift Finder', href: 'https://themaryam.in', icon: Lightbulb, external: true },
    { name: 'Shop Gifts', href: 'https://shop.themaryam.in', icon: ShoppingBag, external: true },
    { name: 'All Articles', href: '/wrapped', icon: BookOpen, external: false },
];

const sidebarCategories = [
    { name: 'Relationships', icon: Heart },
    { name: 'Gift Guide', icon: Gift },
    { name: 'Psychology', icon: Brain },
    { name: 'Local', icon: MapPin },
    { name: 'Technology', icon: Cpu },
];

// Custom Header for Wrapped Section - Croma Unboxed Style
export const WrappedHeader: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'
                }`}
            style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-14 md:h-16">
                    {/* Left Side - Hamburger + Wrapped Logo */}
                    <div className="flex items-center">
                        {/* Hamburger Menu Button */}
                        <button
                            onClick={onMenuClick}
                            className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
                            aria-label="Open menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>

                        {/* Wrapped Logo */}
                        <Link to="/wrapped" className="flex items-center">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/Wrapped_by_Maryam_logo_png_shop_for_gifts_best_gifts_ai_800x800.png?v=1769315332"
                                alt="Wrapped"
                                className="h-24 md:h-28 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Right Side - MARYAM */}
                    <a
                        href="https://themaryam.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                    >
                        <span className="text-gray-500 font-light text-sm md:text-base tracking-wide">
                            MARYAM
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
};

// Ultra Smooth Sidebar
export const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white z-[101] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                            <Gift className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Menu</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Sidebar Content */}
                <div className="overflow-y-auto h-[calc(100%-64px)]">
                    {/* Main Links */}
                    <nav className="p-4">
                        <ul className="space-y-1">
                            {sidebarLinks.map((link, index) => (
                                <li
                                    key={link.name}
                                    style={{
                                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                                        transition: 'opacity 400ms ease-out, transform 400ms ease-out'
                                    }}
                                >
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={onClose}
                                            className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <link.icon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                                                <span className="font-medium">{link.name}</span>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-gray-400" />
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            onClick={onClose}
                                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                                        >
                                            <link.icon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                                            <span className="font-medium">{link.name}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Divider */}
                    <div className="mx-4 border-t border-gray-100"></div>

                    {/* Categories */}
                    <div className="p-4">
                        <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            Categories
                        </h3>
                        <ul className="space-y-1">
                            {sidebarCategories.map((category, index) => (
                                <li
                                    key={category.name}
                                    style={{
                                        transitionDelay: isOpen ? `${(index + sidebarLinks.length) * 50}ms` : '0ms',
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                                        transition: 'opacity 400ms ease-out, transform 400ms ease-out'
                                    }}
                                >
                                    <button
                                        onClick={onClose}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                                    >
                                        <category.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                                        <span className="text-sm">{category.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divider */}
                    <div className="mx-4 border-t border-gray-100"></div>

                    {/* CTA */}
                    <div className="p-4">
                        <a
                            href="https://themaryam.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200"
                            style={{
                                transitionDelay: isOpen ? `${(sidebarCategories.length + sidebarLinks.length) * 50}ms` : '0ms',
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
                                transition: 'opacity 400ms ease-out, transform 400ms ease-out, background-color 200ms'
                            }}
                        >
                            <Lightbulb className="w-4 h-4" />
                            Find Perfect Gift
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div className="p-4 mt-auto">
                        <div className="flex gap-4 px-4 text-xs text-gray-400">
                            <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                                themaryam.in
                            </a>
                            <span>·</span>
                            <a href="https://shop.themaryam.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                                shop.themaryam.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Footer for Wrapped - Light Theme
export const WrappedFooter: React.FC = () => (
    <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <Link to="/wrapped" className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
                            <Gift className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-900 font-semibold text-xl" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>Wrapped</span>
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">A publication by The Maryam about the culture and craft of meaningful gifts.</p>
                </div>
                <div>
                    <h4 className="text-gray-900 font-semibold mb-4 text-sm">Explore</h4>
                    <ul className="space-y-3">
                        <li><a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">AI Gift Finder</a></li>
                        <li><a href="https://shop.themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Gift Shop</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-900 font-semibold mb-4 text-sm">Connect</h4>
                    <div className="flex gap-4">
                        <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">themaryam.in</a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-10 pt-6 text-center">
                <p className="text-gray-500 text-xs">© 2026 The Maryam. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
