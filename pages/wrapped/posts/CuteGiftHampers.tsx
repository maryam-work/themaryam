import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Gift, Package, Sparkles, Star } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';
import SEO from '../../../components/SEO';

const CuteGiftHampers: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Cute Gift Hampers 2026: The Ultimate Guide";

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
                title="Cute Gift Hampers 2026 | Gift Hampers Online India | The Maryam"
                description="Discover the cutest gift hampers for every occasion. Chocolate hampers, spa hampers, birthday boxes & more. Premium packaging, same day delivery. The Maryam Guide."
                canonical="/wrapped/cute-hampers"
                type="article"
                publishedTime="2026-01-25T00:00:00+05:30"
                modifiedTime="2026-01-31T00:00:00+05:30"
                author="The Maryam Team"
                image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=80"
                keywords={["cute hampers", "gift hampers", "gift hampers online", "chocolate hampers", "gift boxes", "hampers online india", "themaryam", "maryam gifts"]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Cute Gift Hampers 2026: The Ultimate Guide",
                    "mainEntityOfPage": "https://themaryam.in/wrapped/cute-hampers",
                    "articleSection": "Gift Guide",
                    "author": { "@type": "Organization", "name": "The Maryam" }
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
                        <span className="flex items-center gap-1.5 bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-medium">
                            <Package className="w-3.5 h-3.5" />
                            Gift Guide
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 25, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            5 min read
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Cute Gift Hampers 2026: The Ultimate Guide to Curated Gifting
                    </h1>

                    {/* Featured Image */}
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=80" alt="Cute Gift Hampers" className="w-full h-full object-cover" />
                    </div>

                    {/* Author & Share */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold text-lg">M</div>
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
                            Gift hampers have evolved from boring corporate baskets to Instagram-worthy curated boxes that people actually get excited to receive. Here's everything you need to know about finding (or creating) the perfect hamper.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Gift Hampers Are Trending</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There's something magical about receiving a beautifully packaged box full of thoughtfully curated items. Unlike single gifts, hampers offer variety and show that someone put real thought into selecting multiple things just for you.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The unboxing experience matters too. In the age of social media, people love sharing their hamper reveals. That moment of opening layer after layer of carefully arranged goodies creates genuine excitement.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Gift Hampers</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Chocolate & Treats Hampers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The universal crowd-pleaser. Premium chocolates, artisan cookies, gourmet snacks, and sometimes a bottle of wine. Perfect for <a href="https://shop.themaryam.in/collections/hampers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">chocolate lovers</a> and anyone with a sweet tooth.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Spa & Self-Care Hampers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Bath bombs, scented candles, face masks, body lotions, and everything needed for a relaxing evening at home. These are particularly popular for birthdays and as "treat yourself" gifts.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Romantic Couple Hampers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Curated for date nights at home. Typically includes candles, chocolates, wine, matching items for two, and sometimes romantic games or activities. Perfect for anniversaries and Valentine's Day.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Birthday Celebration Hampers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Party-ready boxes with balloons, confetti, birthday banners, cake toppers, and treats. Some even include small gifts like photo frames or personalized items.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Gourmet Food Hampers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            For the foodie in your life. Artisan cheeses, specialty crackers, olive oils, gourmet spreads, and exotic ingredients they wouldn't normally buy for themselves.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Corporate Gift Hampers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Professional yet thoughtful. These balance premium quality with appropriateness for work relationships. Usually includes gourmet treats, stationery, and sometimes tech accessories.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Star className="w-5 h-5 text-amber-600" />
                                <span className="font-bold text-gray-900">Pro Tip</span>
                            </div>
                            <p className="text-gray-700">
                                The best hampers have a theme. Rather than throwing random items together, choose products that complement each other. A "cozy night in" hamper with tea, cookies, candles, and a soft blanket tells a story.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Makes a Hamper "Cute"?</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            It's all about the presentation and thoughtfulness. Here's what separates ordinary hampers from the ones people rave about:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li><strong>Premium packaging</strong> - Beautiful boxes, ribbons, and tissue paper</li>
                            <li><strong>Cohesive color scheme</strong> - Items that look good together</li>
                            <li><strong>Personal touches</strong> - Handwritten notes, personalized items</li>
                            <li><strong>Layered arrangement</strong> - Creates excitement during unboxing</li>
                            <li><strong>Quality over quantity</strong> - Few excellent items beat many mediocre ones</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When to Gift a Hamper</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Hampers work for almost any occasion, but they're particularly perfect when:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>You want to impress but don't know their exact preferences</li>
                            <li>Celebrating milestones (new job, new home, new baby)</li>
                            <li>Group gifting (everyone contributes to one amazing hamper)</li>
                            <li>Long-distance relationships (shipping-friendly)</li>
                            <li>Corporate gifting (professional yet personal)</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Maryam's Bestselling Hampers</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Based on customer favorites, these hamper categories consistently receive the best feedback:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Chocolate Lover's Paradise - Premium chocolates from around the world</li>
                            <li>Self-Care Sunday - Everything for a relaxing spa day at home</li>
                            <li>Romantic Date Night - Curated for couples</li>
                            <li>Birthday Bash Box - Party-ready celebrations</li>
                            <li>Coffee Connoisseur - For caffeine enthusiasts</li>
                        </ul>

                        <div className="bg-gray-900 text-white p-8 rounded-xl my-10">
                            <h3 className="text-xl font-bold mb-3">Need Help Choosing?</h3>
                            <p className="text-gray-300 mb-4">Tell us about the recipient and occasion, and our AI will recommend the perfect hamper.</p>
                            <Link to="/search" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                <Sparkles className="w-5 h-5" />
                                Try AI Gift Finder
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Same Day Delivery</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Forgot an important date? The Maryam offers same day delivery for select hampers across major cities. Your beautifully curated hamper will arrive on time, even if you ordered last minute.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Ready to explore our <a href="https://shop.themaryam.in/collections/hampers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">hamper collection</a>? Whether you're celebrating a birthday, anniversary, or just want to make someone's day - there's a perfect hamper waiting.
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Get More Gift Ideas</h3>
                        <p className="text-gray-600 mb-4">Subscribe to receive curated gift guides and exclusive offers.</p>
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
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/wrapped/gifts-for-boyfriend" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80" alt="Gifts for Boyfriend" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Best Gifts for Boyfriend 2026</h4>
                            </Link>
                            <Link to="/wrapped/gifts-for-girlfriend" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&q=80" alt="Gifts for Girlfriend" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Best Gifts for Girlfriend 2026</h4>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <WrappedFooter />
        </div>
    );
};

export default CuteGiftHampers;
