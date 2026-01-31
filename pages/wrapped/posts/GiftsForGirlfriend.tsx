import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Gift, Heart, Sparkles, Crown } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';
import SEO from '../../../components/SEO';

const GiftsForGirlfriend: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Best Gifts for Girlfriend 2026 - Make Her Feel Special";

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
                title="Best Gifts for Girlfriend 2026 | Romantic Gift Ideas | The Maryam"
                description="Find the perfect romantic gift for your girlfriend. From flowers to personalized jewelry - discover gift ideas that will make her heart melt. Expert tips from The Maryam."
                canonical="/wrapped/gifts-for-girlfriend"
                type="article"
                publishedTime="2026-01-22T00:00:00+05:30"
                modifiedTime="2026-01-31T00:00:00+05:30"
                author="Richa Sharma"
                image="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1200&q=80"
                keywords={["gifts for girlfriend", "girlfriend gifts", "gift for gf", "romantic gifts for her", "personalized gifts girlfriend", "birthday gift girlfriend", "maryam gifts", "themaryam"]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Best Gifts for Girlfriend 2026 - Make Her Feel Special",
                    "mainEntityOfPage": "https://themaryam.in/wrapped/gifts-for-girlfriend",
                    "articleSection": "Gift Guide",
                    "author": { "@type": "Person", "name": "Richa Sharma" }
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
                            <Heart className="w-3.5 h-3.5" />
                            Gift Guide
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 22, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            7 min read
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Best Gifts for Girlfriend 2026: Make Her Feel Like a Queen
                    </h1>

                    {/* Featured Image */}
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1200&q=80" alt="Gifts for Girlfriend" className="w-full h-full object-cover" />
                    </div>

                    {/* Author & Share */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-semibold text-lg">R</div>
                            <div>
                                <p className="font-medium text-gray-900">Richa Sharma</p>
                                <p className="text-sm text-gray-500">Gift Curator at The Maryam</p>
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
                            Every woman deserves to feel special. But finding that perfect gift that makes her eyes light up? That's where most people struggle. After helping thousands of couples at The Maryam, I'm sharing the secrets to finding gifts that truly resonate.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Art of Choosing Her Gift</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here's what I've learned: women appreciate gifts that show emotional intelligence. It's not about the price tag. It's about paying attention to what she loves, what she's mentioned wanting, or what would make her life a little more beautiful.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Does she love reading but never buys herself new books? Is she into skincare but uses whatever's available? Does she mention wanting to try a new hobby? These clues are gold.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Gift Categories That Never Fail</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Fresh Flowers & Bouquets</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Classic for a reason. A beautiful <a href="https://shop.themaryam.in/collections/flowers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">flower bouquet</a> instantly brightens any day. But don't just go for red roses unless she specifically loves them. Consider her favorite colors or flowers she's mentioned liking.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Personalized Jewelry</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            <a href="https://shop.themaryam.in/collections/personalised" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">Custom jewelry</a> with her name, initials, or a meaningful date creates something she'll treasure forever. Dainty necklaces, bracelets with coordinates of where you met, or rings with special engravings.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Luxury Skincare & Spa Sets</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Self-care is never out of style. Premium skincare products, bath bombs, scented candles, and face masks packaged in a beautiful <a href="https://shop.themaryam.in/collections/hampers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">gift hamper</a> shows you care about her wellbeing.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Photo Memories</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Custom photo albums, framed pictures of your favorite moments together, or a photo collage of your relationship journey. These sentimental gifts often mean more than expensive purchases.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Experience Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Spa day vouchers, cooking classes, concert tickets, or a surprise weekend getaway. Experiences create memories that last a lifetime and show you value quality time together.
                        </p>

                        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Crown className="w-5 h-5 text-pink-600" />
                                <span className="font-bold text-gray-900">Pro Tip</span>
                            </div>
                            <p className="text-gray-700">
                                Not sure what she'd love? Our <Link to="/search" className="text-pink-600 hover:text-pink-700 underline font-medium">AI Gift Finder</Link> can analyze her personality and suggest the perfect gift. It's like having a personal shopping assistant who knows exactly what she needs.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Gifts for Different Occasions</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Birthday Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Go big on her birthday. This is the day to pull out all stops. A combination gift works best - flowers delivered in the morning, a personalized gift for the main event, and dinner at her favorite restaurant.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Anniversary Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Focus on your relationship journey. Photo books, jewelry with meaningful dates, or recreating your first date. Sentimental value matters most here.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Just Because Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Sometimes the best gifts are unexpected. A random Tuesday bouquet or a small thoughtful gift "just because" can mean more than any birthday present.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Avoid</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li><strong>Household items</strong> - Unless she specifically asked, avoid gifting things like kitchen appliances</li>
                            <li><strong>Wrong-sized clothing</strong> - Very risky unless you're 100% sure</li>
                            <li><strong>Generic perfumes</strong> - Fragrance is personal; don't guess</li>
                            <li><strong>Gym memberships</strong> - Just don't. Trust me.</li>
                            <li><strong>Last-minute gas station gifts</strong> - We can all tell</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Maryam's Bestsellers for Her</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Based on customer favorites and feedback, these gifts consistently get the best reactions:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Rose bouquets with premium chocolates</li>
                            <li>Personalized jewelry boxes with her name</li>
                            <li>Luxury spa gift hampers</li>
                            <li>Custom photo frames with relationship milestones</li>
                            <li>Handwritten love letter kits</li>
                        </ul>

                        <div className="bg-gray-900 text-white p-8 rounded-xl my-10">
                            <h3 className="text-xl font-bold mb-3">Find Her Perfect Gift</h3>
                            <p className="text-gray-300 mb-4">Tell us about her personality, and let our AI recommend the gift that'll make her day.</p>
                            <Link to="/search" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                <Sparkles className="w-5 h-5" />
                                Try AI Gift Finder
                            </Link>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            The secret to the perfect gift isn't the price – it's the thought behind it. Take time to really think about what would make her smile, and you'll find something perfect.
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
                            <Link to="/wrapped/gifts-for-boyfriend" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80" alt="Gifts for Boyfriend" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Best Gifts for Boyfriend 2026</h4>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <WrappedFooter />
        </div>
    );
};

export default GiftsForGirlfriend;
