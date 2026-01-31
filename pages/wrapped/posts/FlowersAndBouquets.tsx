import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Flower2, Heart, Sparkles, MapPin } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';
import SEO from '../../../components/SEO';

const FlowersAndBouquets: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Best Flower Bouquets for Every Occasion | The Maryam";

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
                title="Fresh Flower Bouquets Online 2026 | Same Day Flower Delivery | The Maryam"
                description="Order fresh flower bouquets online. Roses, lilies, orchids & mixed bouquets with same day delivery. Premium arrangements for birthdays, anniversaries & special occasions."
                canonical="/wrapped/flowers"
                type="article"
                publishedTime="2026-01-30T00:00:00+05:30"
                modifiedTime="2026-01-31T00:00:00+05:30"
                author="The Maryam Team"
                image="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&q=80"
                keywords={["flowers", "flower bouquet", "flowers online", "rose bouquet", "flower delivery", "send flowers", "fresh flowers", "birthday flowers", "anniversary flowers", "themaryam flowers"]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Fresh Flower Bouquets Online - The Complete Guide",
                    "mainEntityOfPage": "https://themaryam.in/wrapped/flowers",
                    "articleSection": "Gift Guide",
                    "author": { "@type": "Organization", "name": "The Maryam" }
                }}
            />
            <WrappedHeader onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="pt-14 md:pt-16">
                <div className="max-w-3xl mx-auto px-4 md:px-6 pt-8">
                    <Link to="/wrapped" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Wrapped
                    </Link>
                </div>

                <article className="max-w-3xl mx-auto px-4 md:px-6 py-8">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-1.5 bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-medium">
                            <Flower2 className="w-3.5 h-3.5" />
                            Flowers
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 30, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            6 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Fresh Flower Bouquets Online: The Complete Guide to Sending Flowers
                    </h1>

                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&q=80" alt="Fresh Flower Bouquets" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-semibold text-lg">M</div>
                            <div>
                                <p className="font-medium text-gray-900">The Maryam Team</p>
                                <p className="text-sm text-gray-500">Flower Experts</p>
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

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            Nothing says "I'm thinking of you" quite like a beautiful bouquet of fresh flowers. Whether it's for a birthday, anniversary, or just to brighten someone's day, flowers remain the most universally appreciated gift.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Flowers Never Go Out of Style</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There's science behind the joy flowers bring. Studies show that receiving flowers triggers genuine, immediate happiness. The visual beauty, the fragrance, and the gesture itself combine to create a powerful emotional response.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Unlike other gifts that might miss the mark, <a href="https://shop.themaryam.in/collections/flowers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">fresh flowers</a> are universally appreciated. They work for virtually every relationship and occasion.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Popular Flower Types for Every Occasion</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🌹 Roses</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The classic choice for romance. Red roses symbolize deep love, while pink represents grace and gratitude. Yellow roses are perfect for friendship, and white roses convey purity and new beginnings.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🌸 Lilies</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Elegant and fragrant, lilies represent purity and refined beauty. Oriental lilies are particularly stunning in bouquets and fill a room with their sweet scent.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🌻 Sunflowers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Bright, cheerful, and impossible to ignore. Sunflowers symbolize adoration, loyalty, and longevity. Perfect for conveying warmth and happiness.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🌷 Tulips</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Simple elegance. Tulips represent perfect love and are available in a rainbow of colors. Each color carries its own meaning, making them versatile for any message.
                        </p>

                        <div className="bg-rose-50 border-l-4 border-rose-500 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Heart className="w-5 h-5 text-rose-600" />
                                <span className="font-bold text-gray-900">Pro Tip</span>
                            </div>
                            <p className="text-gray-700">
                                Mixed bouquets often create the biggest impact. Combining different flower types, colors, and textures adds visual interest and shows thoughtfulness in selection.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Flowers for Different Occasions</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Birthday Flowers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Bright, colorful arrangements work best for birthdays. Consider their birth flower (each month has one) for a personalized touch. Pair with chocolates or a <a href="https://shop.themaryam.in/collections/hampers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">gift hamper</a> for extra impact.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Anniversary Flowers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Red roses remain the classic choice. For longer marriages, consider the traditional flowers by year (e.g., carnations for the first anniversary, daisies for the fifth).
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Just Because Flowers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The most meaningful flowers are often unexpected. A surprise bouquet on a random Tuesday says "I was thinking of you" louder than any occasion-mandated gift.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Same Day Flower Delivery</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Forgot an important date? The Maryam offers same day flower delivery across major cities in India. Order before noon, and your flowers arrive the same evening - fresh and beautiful.
                        </p>

                        <div className="bg-gray-900 text-white p-8 rounded-xl my-10">
                            <h3 className="text-xl font-bold mb-3">Order Fresh Flowers Now</h3>
                            <p className="text-gray-300 mb-4">Browse our collection of premium flower bouquets with same day delivery available.</p>
                            <a href="https://shop.themaryam.in/collections/flowers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                <Flower2 className="w-5 h-5" />
                                Shop Flowers
                            </a>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Sending Flowers</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li><strong>Add a personal message</strong> - A handwritten note makes all the difference</li>
                            <li><strong>Consider the recipient's space</strong> - Larger bouquets need ample display area</li>
                            <li><strong>Check for allergies</strong> - Some people are sensitive to certain flowers</li>
                            <li><strong>Timing matters</strong> - Morning deliveries ensure maximum freshness</li>
                            <li><strong>Include care instructions</strong> - Help them keep the flowers fresh longer</li>
                        </ul>
                    </div>

                    <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Get Flower Inspiration</h3>
                        <p className="text-gray-600 mb-4">Subscribe for seasonal flower guides and exclusive offers.</p>
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

                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/wrapped/gifts-for-girlfriend" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&q=80" alt="Gifts for Girlfriend" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Best Gifts for Girlfriend 2026</h4>
                            </Link>
                            <Link to="/wrapped/valentine-gifts-2026" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80" alt="Valentine Gifts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Valentine's Day 2026: Skip the Clichés</h4>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <WrappedFooter />
        </div>
    );
};

export default FlowersAndBouquets;
