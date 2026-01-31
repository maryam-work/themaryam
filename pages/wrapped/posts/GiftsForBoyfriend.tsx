import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Gift, Heart, Sparkles } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';
import SEO from '../../../components/SEO';

const GiftsForBoyfriend: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Best Gifts for Boyfriend 2026 - Ideas That Actually Work";

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
                title="Best Gifts for Boyfriend 2026 | Romantic Gift Ideas | The Maryam"
                description="Find the perfect gift for your boyfriend. From personalized surprises to practical presents - discover gift ideas that actually work. Expert tips from The Maryam."
                canonical="/wrapped/gifts-for-boyfriend"
                type="article"
                publishedTime="2026-01-20T00:00:00+05:30"
                modifiedTime="2026-01-31T00:00:00+05:30"
                author="Ayansh"
                image="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80"
                keywords={["gifts for boyfriend", "boyfriend gifts", "gift for bf", "romantic gifts for him", "personalized gifts boyfriend", "birthday gift boyfriend", "maryam gifts"]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Best Gifts for Boyfriend 2026 - Ideas That Actually Work",
                    "mainEntityOfPage": "https://themaryam.in/wrapped/gifts-for-boyfriend",
                    "articleSection": "Gift Guide",
                    "author": { "@type": "Person", "name": "Ayansh" }
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
                        <span className="flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                            <Gift className="w-3.5 h-3.5" />
                            Gift Guide
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 20, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            6 min read
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Best Gifts for Boyfriend 2026: Ideas That Actually Work
                    </h1>

                    {/* Featured Image */}
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80" alt="Gifts for Boyfriend" className="w-full h-full object-cover" />
                    </div>

                    {/* Author & Share */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-lg">A</div>
                            <div>
                                <p className="font-medium text-gray-900">Ayansh</p>
                                <p className="text-sm text-gray-500">Gift Expert at The Maryam</p>
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
                            Finding the perfect gift for your boyfriend can feel like solving a puzzle. He says he doesn't need anything, but you know he secretly loves receiving thoughtful presents. After helping thousands of people find the right gifts at The Maryam, I'm sharing what actually works.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding What Men Actually Want</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here's a truth most gift guides won't tell you: men appreciate gifts that show you pay attention. It's not about expensive brands or trending products. The gifts that hit differently are the ones connected to something he mentioned casually or something you noticed he needed.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Think about that one thing he's been putting off buying for himself. Or that hobby he's been curious about. These observations are worth more than any "top 10 gifts for men" list.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Categories That Work Every Time</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Personalized Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            <a href="https://shop.themaryam.in/collections/personalised" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">Custom items with his name, your anniversary date, or inside jokes</a> never fail. Think engraved wallets, custom photo frames with your favorite memories, or personalized keychains. These show effort and thought.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Tech & Gadgets</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Most guys appreciate useful tech. Wireless earbuds, a quality power bank, or smart accessories for his phone. The key is picking something he'll actually use daily, not just a random gadget that ends up in a drawer.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Experience Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Concert tickets, adventure activities, or a surprise date night. Experiences create memories that last longer than physical objects. Bonus: you get to enjoy it together.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Grooming & Self-Care</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Quality skincare sets, premium cologne, or beard grooming kits. Men are increasingly appreciating self-care products, especially when they come beautifully packaged as <a href="https://shop.themaryam.in/collections/hampers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">gift hampers</a>.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5 text-blue-600" />
                                <span className="font-bold text-gray-900">Pro Tip</span>
                            </div>
                            <p className="text-gray-700">
                                Can't decide? Use our <Link to="/search" className="text-blue-600 hover:text-blue-700 underline font-medium">AI Gift Finder</Link>. Just describe his personality and interests, and we'll recommend the perfect gift. It's like having a personal shopping assistant.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Budget-Friendly Ideas That Don't Look Cheap</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            You don't need to spend a fortune. Handwritten letters, a curated playlist, a photo book of your memories together, or cooking his favorite meal - these thoughtful gestures often mean more than expensive purchases.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li><strong>Generic gifts</strong> - Avoid "safe" choices like random ties or generic cologne</li>
                            <li><strong>Last-minute panic</strong> - Plan ahead to find something meaningful</li>
                            <li><strong>Asking directly</strong> - "What do you want?" ruins the surprise element</li>
                            <li><strong>Over-focusing on price</strong> - Thoughtfulness beats expensive every time</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Maryam's Top Picks for 2026</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Based on what's been selling and the feedback we receive, here are the gifts that consistently get the best reactions:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Personalized photo frames with your favorite memory</li>
                            <li>Custom leather wallets with engraved initials</li>
                            <li>Premium chocolate and snack hampers</li>
                            <li>Love letter kits for handwritten messages</li>
                            <li>Couple's experience vouchers</li>
                        </ul>

                        <div className="bg-gray-900 text-white p-8 rounded-xl my-10">
                            <h3 className="text-xl font-bold mb-3">Still Confused?</h3>
                            <p className="text-gray-300 mb-4">Let our AI help you find the perfect gift in seconds. Just describe your boyfriend and the occasion.</p>
                            <Link to="/search" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                <Sparkles className="w-5 h-5" />
                                Try AI Gift Finder
                            </Link>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Remember: the best gift is one that shows you truly know him. Take a moment to think about what would make his eyes light up, and you can't go wrong.
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
                            <Link to="/wrapped/valentine-gifts-2026" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80" alt="Valentine Gifts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Valentine's Day 2026: Skip the Clichés</h4>
                            </Link>
                            <Link to="/wrapped/best-gifts-girlfriend-2026" className="group">
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

export default GiftsForBoyfriend;
