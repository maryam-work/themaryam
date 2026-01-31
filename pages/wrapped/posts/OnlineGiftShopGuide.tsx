import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Gift, Sparkles, Star, Heart, Package, Truck, ShoppingBag } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';
import SEO from '../../../components/SEO';

const OnlineGiftShopGuide: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "The Maryam - India's Best Online Gift Shop Guide";

        const shareUrls: Record<string, string> = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        };

        if (platform === 'copy') {
            navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } else {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thanks for subscribing!');
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            <SEO
                title="The Maryam - Best Online Gift Shop India 2026 | Maryam Gifts"
                description="Discover The Maryam, India's #1 AI-powered online gift shop. Personalized gifts, hampers, flowers & more. Same day delivery. Your guide to buying gifts online."
                canonical="/wrapped/online-gift-shop"
                type="article"
                publishedTime="2026-01-28T00:00:00+05:30"
                modifiedTime="2026-01-31T00:00:00+05:30"
                author="The Maryam Team"
                image="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80"
                keywords={["the maryam", "maryam gifts", "themaryam", "themariyam", "mariyam gift", "online gift shop", "gift shop india", "buy gifts online", "online gifts india"]}
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "The Maryam - India's Best Online Gift Shop Guide",
                            "mainEntityOfPage": "https://themaryam.in/wrapped/online-gift-shop",
                            "articleSection": "Gift Guide",
                            "author": { "@type": "Organization", "name": "The Maryam" }
                        },
                        {
                            "@type": "Organization",
                            "name": "The Maryam",
                            "alternateName": ["Maryam Gifts", "TheMaryam", "Mariyam Gift", "The Mariyam", "Maryam Gift Shop"],
                            "url": "https://themaryam.in",
                            "logo": "https://themaryam.in/android-chrome-512x512.png"
                        }
                    ]
                }}
            />
            <WrappedHeader onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="pt-14 md:pt-16">
                {/* Back Navigation */}
                <div className="max-w-3xl mx-auto px-4 md:px-6 pt-8">
                    <Link to="/wrapped" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Wrapped
                    </Link>
                </div>

                {/* Article Header */}
                <article className="max-w-3xl mx-auto px-4 md:px-6 py-8">
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
                            <Gift className="w-3.5 h-3.5" />
                            About Us
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 28, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            8 min read
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        The Maryam: India's Best Online Gift Shop - Complete Guide
                    </h1>

                    {/* Featured Image */}
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100 mb-8 flex items-center justify-center">
                        <div className="text-center">
                            <Gift className="w-20 h-20 text-pink-500 mx-auto mb-4" />
                            <h2 className="text-3xl font-bold text-gray-900">The Maryam</h2>
                            <p className="text-gray-600">India's #1 AI-Powered Gift Store</p>
                        </div>
                    </div>

                    {/* Author & Share */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-semibold text-lg">M</div>
                            <div>
                                <p className="font-medium text-gray-900">The Maryam Team</p>
                                <p className="text-sm text-gray-500">Gift Curation Experts</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500 mr-2">Share:</span>
                            <button onClick={() => handleShare('twitter')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Share on Twitter">
                                <Twitter className="w-4 h-4 text-gray-600" />
                            </button>
                            <button onClick={() => handleShare('facebook')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Share on Facebook">
                                <Facebook className="w-4 h-4 text-gray-600" />
                            </button>
                            <button onClick={() => handleShare('linkedin')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Share on LinkedIn">
                                <Linkedin className="w-4 h-4 text-gray-600" />
                            </button>
                            <button onClick={() => handleShare('copy')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Copy link">
                                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4 text-gray-600" />}
                            </button>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            Welcome to <strong>The Maryam</strong> - India's first AI-powered online gift shop. Whether you call us <strong>Maryam Gifts</strong>, <strong>TheMaryam</strong>, or <strong>Mariyam Gift Shop</strong>, we're on a mission to make gifting smarter, easier, and more meaningful.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is The Maryam?</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The Maryam is not just another online gift shop. We're India's first gift store that uses <strong>artificial intelligence to help you find the perfect gift</strong>. Simply describe the person you're buying for and the occasion, and our AI Gift Finder recommends exactly what you need.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            No more endless scrolling through hundreds of products. No more "I don't know what to get" moments. Just smart, personalized gift recommendations tailored to your specific situation.
                        </p>

                        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5 text-pink-600" />
                                <span className="font-bold text-gray-900">Try It Now</span>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Experience the future of gift shopping. Our AI Gift Finder is free to use and gives instant recommendations.
                            </p>
                            <Link to="/search" className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                                <Sparkles className="w-5 h-5" />
                                Open AI Gift Finder
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why People Choose The Maryam</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🤖 AI-Powered Gift Recommendations</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our proprietary AI analyzes thousands of gift options and matches them to the recipient's personality, your relationship with them, the occasion, and your budget. It's like having a personal gift shopping assistant available 24/7.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🚀 Same Day Delivery</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Forgot an important date? We offer same day delivery across 500+ cities in India. Order before noon, and your gift reaches the same evening. Emergency gifting, sorted.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">✨ Personalization Options</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Add names, photos, messages, and custom details to most of our products. <a href="https://shop.themaryam.in/collections/personalised" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">Personalized gifts</a> create emotional connections that generic products simply can't match.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🎁 Premium Packaging</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Every gift from The Maryam arrives beautifully packaged, ready to impress. We believe the unboxing experience is part of the gift itself.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Gift Categories</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We've curated gifts for every occasion and recipient:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 my-8">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-900 mb-2">🎂 By Occasion</h4>
                                <ul className="text-gray-700 space-y-1 text-sm">
                                    <li>• Birthday Gifts</li>
                                    <li>• Anniversary Gifts</li>
                                    <li>• Valentine's Day</li>
                                    <li>• Wedding Gifts</li>
                                    <li>• Diwali & Festivals</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-900 mb-2">👥 By Recipient</h4>
                                <ul className="text-gray-700 space-y-1 text-sm">
                                    <li>• <Link to="/wrapped/gifts-for-boyfriend" className="underline">Gifts for Boyfriend</Link></li>
                                    <li>• <Link to="/wrapped/gifts-for-girlfriend" className="underline">Gifts for Girlfriend</Link></li>
                                    <li>• Gifts for Parents</li>
                                    <li>• Gifts for Friends</li>
                                    <li>• Corporate Gifts</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-900 mb-2">📦 By Type</h4>
                                <ul className="text-gray-700 space-y-1 text-sm">
                                    <li>• <Link to="/wrapped/cute-hampers" className="underline">Gift Hampers</Link></li>
                                    <li>• Flower Bouquets</li>
                                    <li>• Personalized Gifts</li>
                                    <li>• Cakes & Chocolates</li>
                                    <li>• Jewelry & Accessories</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-900 mb-2">💰 By Budget</h4>
                                <ul className="text-gray-700 space-y-1 text-sm">
                                    <li>• Under ₹500</li>
                                    <li>• ₹500 - ₹1000</li>
                                    <li>• ₹1000 - ₹2000</li>
                                    <li>• ₹2000 - ₹5000</li>
                                    <li>• Premium (₹5000+)</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Buy Gifts Online from The Maryam</h2>
                        <ol className="list-decimal pl-6 text-gray-700 space-y-4 mb-6">
                            <li>
                                <strong>Use the AI Gift Finder</strong> - Describe your recipient and occasion. Get instant, personalized recommendations.
                            </li>
                            <li>
                                <strong>Browse Categories</strong> - Or explore our <a href="https://shop.themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">full catalog</a> by occasion, recipient, or product type.
                            </li>
                            <li>
                                <strong>Personalize Your Gift</strong> - Add names, photos, or custom messages to make it uniquely theirs.
                            </li>
                            <li>
                                <strong>Choose Delivery</strong> - Select same day, next day, or scheduled delivery.
                            </li>
                            <li>
                                <strong>Track Your Order</strong> - Get real-time updates on your gift's journey.
                            </li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>

                        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Is The Maryam the same as Maryam Gifts / TheMaryam?</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Yes! The Maryam, Maryam Gifts, TheMaryam, and Mariyam Gift are all different ways people refer to us. We're one store - India's AI-powered online gift destination.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Do you deliver across India?</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Yes! We deliver to 500+ cities across India. Same day delivery is available in major metros.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">How does the AI Gift Finder work?</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Simply describe the person (age, relationship, interests) and occasion. Our AI analyzes your description and recommends the most suitable gifts from our catalog. It's free and takes just seconds.
                        </p>

                        <div className="bg-gray-900 text-white p-8 rounded-xl my-10">
                            <h3 className="text-xl font-bold mb-3">Start Your Gift Journey</h3>
                            <p className="text-gray-300 mb-4">Ready to find the perfect gift? Let our AI help you in seconds.</p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/search" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                    <Sparkles className="w-5 h-5" />
                                    AI Gift Finder
                                </Link>
                                <a href="https://shop.themaryam.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                                    <ShoppingBag className="w-5 h-5" />
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Get Gift Ideas & Exclusive Offers</h3>
                        <p className="text-gray-600 mb-4">Subscribe to our newsletter for curated gift guides and special discounts.</p>
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                required
                            />
                            <button type="submit" className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Related Articles */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Explore Our Gift Guides</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/wrapped/gifts-for-boyfriend" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80" alt="Gifts for Boyfriend" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Best Gifts for Boyfriend 2026</h4>
                            </Link>
                            <Link to="/wrapped/cute-hampers" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80" alt="Gift Hampers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Cute Gift Hampers Guide</h4>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <WrappedFooter />
        </div>
    );
};

export default OnlineGiftShopGuide;
