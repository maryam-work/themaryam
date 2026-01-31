import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Gift, Heart, Lightbulb, Brain, MapPin, Cpu, ArrowRight, Mail, Home, ShoppingBag, BookOpen, ExternalLink, Clock, ChevronRight } from 'lucide-react';

// Blog posts data
const blogPosts = [
    {
        slug: 'valentine-gifts-2026',
        title: "Valentine's Day 2026: Skip the Clichés",
        description: 'Every year, February 14th turns into a mad rush. Here is what actually lands.',
        category: 'Relationships',
        categoryIcon: Heart,
        author: 'Richa Sharma',
        date: 'Jan 15, 2026',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
        featured: true,
        gradient: 'from-rose-500 to-pink-600',
    },
    {
        slug: 'gifts-for-boyfriend',
        title: "Best Gifts for Boyfriend 2026: Ideas That Actually Work",
        description: 'Finding the perfect gift for your boyfriend doesn\'t have to be complicated. Here\'s what actually works.',
        category: 'Gift Guide',
        categoryIcon: Gift,
        author: 'Ayansh',
        date: 'Jan 20, 2026',
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
        featured: true,
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        slug: 'gifts-for-girlfriend',
        title: "Best Gifts for Girlfriend 2026: Make Her Feel Like a Queen",
        description: 'From flowers to personalized jewelry — find the perfect gift that makes her heart melt.',
        category: 'Gift Guide',
        categoryIcon: Heart,
        author: 'Richa Sharma',
        date: 'Jan 22, 2026',
        readTime: '7 min',
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80',
        featured: true,
        gradient: 'from-pink-500 to-rose-600',
    },
    {
        slug: 'cute-hampers',
        title: "Cute Gift Hampers 2026: The Ultimate Guide to Curated Gifting",
        description: 'Gift hampers have evolved from boring corporate baskets to Instagram-worthy curated boxes.',
        category: 'Gift Guide',
        categoryIcon: Gift,
        author: 'The Maryam Team',
        date: 'Jan 25, 2026',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80',
        featured: true,
        gradient: 'from-amber-500 to-orange-600',
    },
    {
        slug: 'online-gift-shop',
        title: "The Maryam: India's Best Online Gift Shop - Complete Guide",
        description: 'Discover India\'s #1 AI-powered online gift shop. Personalized gifts, hampers, flowers & more.',
        category: 'About',
        categoryIcon: ShoppingBag,
        author: 'The Maryam Team',
        date: 'Jan 28, 2026',
        readTime: '8 min',
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
        featured: true,
        gradient: 'from-pink-500 to-purple-600',
    },
    {
        slug: 'best-gifts-girlfriend-2026',
        title: "How to Actually Pick a Gift She'll Love",
        description: 'Most guys approach gifting like a puzzle. That is where things go wrong.',
        category: 'Gift Guide',
        categoryIcon: Gift,
        author: 'Arjun Mehta',
        date: 'Jan 12, 2026',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
        featured: false,
        gradient: 'from-violet-500 to-purple-600',
    },
    {
        slug: 'birthday-gift-ideas-2026',
        title: "Birthday Gifting: It's About the Memory",
        description: 'Why some gifts become treasured keepsakes while others get regifted.',
        category: 'Psychology',
        categoryIcon: Brain,
        author: 'Priya Nair',
        date: 'Jan 10, 2026',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        featured: false,
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        slug: 'vadodara-gift-delivery',
        title: 'Same-Day Gift Delivery in Vadodara',
        description: "Three years of handling local delivery. Here is what actually works.",
        category: 'Local',
        categoryIcon: MapPin,
        author: 'Karan Patel',
        date: 'Jan 8, 2026',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80',
        featured: false,
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        slug: 'ai-gift-finder-guide',
        title: "I Let AI Pick Gifts for a Month",
        description: "A month-long experiment with AI recommendations. The honest results.",
        category: 'Technology',
        categoryIcon: Cpu,
        author: 'Sneha Iyer',
        date: 'Jan 5, 2026',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        featured: false,
        gradient: 'from-orange-500 to-amber-500',
    },
    {
        slug: 'flowers',
        title: "Fresh Flower Bouquets: The Complete Guide to Sending Flowers",
        description: 'From roses to lilies — everything you need to know about flower gifting.',
        category: 'Flowers',
        categoryIcon: Heart,
        author: 'The Maryam Team',
        date: 'Jan 30, 2026',
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
        featured: false,
        gradient: 'from-rose-500 to-pink-500',
    },
    {
        slug: 'chocolates-cakes',
        title: "Premium Chocolates & Cakes: The Ultimate Sweet Gifting Guide",
        description: 'Artisan chocolates, birthday cakes, and everything sweet for celebrations.',
        category: 'Sweets',
        categoryIcon: Gift,
        author: 'The Maryam Team',
        date: 'Jan 29, 2026',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80',
        featured: false,
        gradient: 'from-amber-500 to-yellow-500',
    },
    {
        slug: 'personalized-gifts',
        title: "Personalized Gifts: Creating Memories That Last Forever",
        description: 'Custom names, photos, and messages — make any gift uniquely theirs.',
        category: 'Personalized',
        categoryIcon: Gift,
        author: 'The Maryam Team',
        date: 'Jan 28, 2026',
        readTime: '7 min',
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
        featured: false,
        gradient: 'from-purple-500 to-indigo-500',
    },
    {
        slug: 'anniversary-gifts',
        title: "Anniversary Gift Ideas: Celebrating Every Year of Your Love",
        description: 'From traditional gifts by year to modern romantic surprises.',
        category: 'Anniversary',
        categoryIcon: Heart,
        author: 'The Maryam Team',
        date: 'Jan 27, 2026',
        readTime: '8 min',
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
        featured: false,
        gradient: 'from-red-500 to-rose-600',
    },
];

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
const WrappedHeader: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-14 md:h-16">
                    <div className="flex items-center gap-1">
                        <button onClick={onMenuClick} className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200" aria-label="Open menu">
                            <Menu className="w-5 h-5" />
                        </button>
                        <Link to="/wrapped" className="flex items-center">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/Wrapped_by_Maryam_logo_png_shop_for_gifts_best_gifts_ai_800x800.png?v=1769315332"
                                alt="Wrapped"
                                className="h-24 md:h-28 w-auto"
                            />
                        </Link>
                    </div>
                    <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="text-gray-500 font-light text-sm md:text-base tracking-wide">MARYAM</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

// Ultra Smooth Sidebar
const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
            <div className={`fixed top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white z-[101] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center"><Gift className="w-4 h-4 text-white" /></div>
                        <span className="font-bold text-gray-900 text-lg">Menu</span>
                    </div>
                    <button onClick={onClose} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"><X className="w-5 h-5" /></button>
                </div>
                <div className="overflow-y-auto h-[calc(100%-64px)]">
                    <nav className="p-4">
                        <ul className="space-y-1">
                            {sidebarLinks.map((link, index) => (
                                <li key={link.name} style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms', opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateX(0)' : 'translateX(-20px)', transition: 'opacity 400ms ease-out, transform 400ms ease-out' }}>
                                    {link.external ? (
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={onClose} className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                                            <div className="flex items-center gap-3"><link.icon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" /><span className="font-medium">{link.name}</span></div>
                                            <ExternalLink className="w-4 h-4 text-gray-400" />
                                        </a>
                                    ) : (
                                        <Link to={link.href} onClick={onClose} className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                                            <link.icon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" /><span className="font-medium">{link.name}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mx-4 border-t border-gray-100"></div>
                    <div className="p-4">
                        <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Categories</h3>
                        <ul className="space-y-1">
                            {sidebarCategories.map((category, index) => (
                                <li key={category.name} style={{ transitionDelay: isOpen ? `${(index + sidebarLinks.length) * 50}ms` : '0ms', opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateX(0)' : 'translateX(-20px)', transition: 'opacity 400ms ease-out, transform 400ms ease-out' }}>
                                    <button onClick={onClose} className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                                        <category.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-600" /><span className="text-sm">{category.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mx-4 border-t border-gray-100"></div>
                    <div className="p-4">
                        <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" onClick={onClose} className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200">
                            <Lightbulb className="w-4 h-4" />Find Perfect Gift
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

// Image Placeholder Component
const ImagePlaceholder: React.FC<{ gradient: string; icon?: React.ReactNode; className?: string }> = ({ gradient, icon, className = '' }) => (
    <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
        {icon || <Gift className="w-8 h-8 text-white/50" />}
    </div>
);

// Featured Carousel - Auto-sliding between featured posts
const FeaturedCarousel: React.FC<{ posts: typeof blogPosts }> = ({ posts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % posts.length);
        }, 4000); // Change slide every 4 seconds
        return () => clearInterval(timer);
    }, [posts.length]);

    return (
        <div className="relative">
            {/* Carousel Card */}
            <div className="overflow-hidden rounded-3xl">
                {/* Slides Container */}
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {posts.map((post) => {
                        const CategoryIcon = post.categoryIcon;
                        return (
                            <Link
                                key={post.slug}
                                to={`/wrapped/${post.slug}`}
                                className="group block w-full flex-shrink-0"
                            >
                                <article className="relative overflow-hidden min-h-[280px] md:min-h-[340px] flex flex-col justify-end">
                                    {/* Background Image */}
                                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

                                    {/* Content */}
                                    <div className="relative z-10 p-6 md:p-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                                                <CategoryIcon className="w-3 h-3" />
                                                {post.category}
                                            </span>
                                        </div>

                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                                            {post.title}
                                        </h2>

                                        <p className="text-white/80 text-sm leading-relaxed mb-3 max-w-xl line-clamp-2">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center gap-3 text-white/70 text-xs">
                                            <span className="font-medium text-white">{post.author}</span>
                                            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                        <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Dots Indicator - Outside Card */}
            <div className="flex justify-center gap-2 mt-4">
                {posts.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-gray-900 w-6'
                            : 'bg-gray-300 w-2 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// Horizontal Card - Image Left, Content Right
const HorizontalCard: React.FC<{ post: typeof blogPosts[0] }> = ({ post }) => {
    const CategoryIcon = post.categoryIcon;
    return (
        <Link to={`/wrapped/${post.slug}`} className="group block">
            <article className="flex gap-4 bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                {/* Image Placeholder */}
                <div className="w-28 md:w-36 flex-shrink-0">
                    {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                        <ImagePlaceholder gradient={post.gradient} className="w-full h-full min-h-[120px]" icon={<CategoryIcon className="w-6 h-6 text-white/60" />} />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 py-4 pr-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                            <CategoryIcon className="w-3 h-3" />
                            {post.category}
                        </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-snug mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 hidden md:block">
                        {post.description}
                    </p>
                </div>
            </article>
        </Link>
    );
};

// Vertical Card - Image Top, Content Bottom
const VerticalCard: React.FC<{ post: typeof blogPosts[0] }> = ({ post }) => {
    const CategoryIcon = post.categoryIcon;
    return (
        <Link to={`/wrapped/${post.slug}`} className="group block">
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] overflow-hidden">
                    {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                        <ImagePlaceholder gradient={post.gradient} className="w-full h-full" icon={<CategoryIcon className="w-10 h-10 text-white/60" />} />
                    )}
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full flex items-center gap-1">
                            <CategoryIcon className="w-3 h-3" />
                            {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>

                    <h3 className="font-semibold text-gray-900 text-base md:text-lg leading-snug mb-2 group-hover:text-gray-700 transition-colors">
                        {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.description}
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs font-semibold">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

// Gradient Card - Dark with gradient
const GradientCard: React.FC<{ post: typeof blogPosts[0] }> = ({ post }) => {
    const CategoryIcon = post.categoryIcon;
    return (
        <Link to={`/wrapped/${post.slug}`} className="group block">
            <article className="relative overflow-hidden rounded-2xl min-h-[180px] flex flex-col justify-between">
                {/* Background Image */}
                <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>

                <div className="relative z-10 p-5 flex flex-col justify-between h-full min-h-[180px]">
                    <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                            <CategoryIcon className="w-3 h-3" />
                            {post.category}
                        </span>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white text-lg leading-snug mb-2 group-hover:translate-x-1 transition-transform">
                            {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/70 text-xs">
                            <span>{post.author}</span>
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all z-10">
                    <ChevronRight className="w-4 h-4 text-white" />
                </div>
            </article>
        </Link>
    );
};

// Footer
const WrappedFooter: React.FC = () => (
    <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <Link to="/wrapped" className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center"><Gift className="w-5 h-5 text-white" /></div>
                        <span className="text-gray-900 font-semibold text-xl">Wrapped</span>
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
                    <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">themaryam.in</a>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-10 pt-6 text-center">
                <p className="text-gray-500 text-xs">© 2026 The Maryam. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

const WrappedListPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thanks for subscribing!');
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            <WrappedHeader onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="pt-14 md:pt-16">
                {/* Hero Section */}
                <section className="relative overflow-hidden min-h-[50vh] md:min-h-[45vh] flex items-center">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img src="https://cdn.shopify.com/s/files/1/0801/4931/5828/files/TheMaryam_Wrapped_blogs_background_800x800.png?v=1769313503" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-6">
                                <Lightbulb className="w-4 h-4" />
                                <span>The Maryam Team</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                                <span className="block">Gifting.</span>
                                <span className="block mt-1">But <span className="underline decoration-white/50 decoration-4 underline-offset-4">actually</span> helpful.</span>
                            </h1>
                            <p className="text-white/95 text-lg md:text-xl leading-relaxed mb-3 font-medium">
                                Let's be real. Finding the right gift can be stressful.
                            </p>
                            <p className="text-white/80 text-base md:text-lg leading-relaxed">
                                We write about what works, what doesn't, and the little things that make someone's day. No gyan, just real talk.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="px-4 md:px-6 py-8 md:py-10 max-w-6xl mx-auto">

                    {/* Featured Carousel */}
                    {featuredPosts.length > 0 && (
                        <div className="mb-8">
                            <FeaturedCarousel posts={featuredPosts} />
                        </div>
                    )}

                    {/* Section: Latest Articles - Horizontal Cards */}
                    <div className="mb-10">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-lg font-bold text-gray-900">All Articles</h2>
                        </div>
                        <div className="space-y-4">
                            {blogPosts.map(post => (
                                <HorizontalCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-8 mb-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Find the Perfect Gift</h3>
                                <p className="text-gray-400 text-sm">Let AI help you discover meaningful gifts in seconds.</p>
                            </div>
                            <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 whitespace-nowrap">
                                <Lightbulb className="w-4 h-4" />
                                Try AI Gift Finder
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-gray-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Get gifting insights</h3>
                                <p className="text-gray-500 text-sm">No spam, just useful ideas.</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
                            <button type="submit" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200">Subscribe</button>
                        </form>
                    </div>
                </section>
            </main>

            <WrappedFooter />
        </div>
    );
};

export default WrappedListPage;
