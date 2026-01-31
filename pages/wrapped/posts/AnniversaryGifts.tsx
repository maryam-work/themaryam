import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Heart, Gift, Sparkles, Star } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';
import SEO from '../../../components/SEO';

const AnniversaryGifts: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Anniversary Gift Ideas That Celebrate Your Love | The Maryam";

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
                title="Anniversary Gift Ideas 2026 | Romantic Gifts for Couples | The Maryam"
                description="Find the perfect anniversary gift to celebrate your love. From traditional gifts by year to modern romantic ideas. Same day delivery for anniversary surprises."
                canonical="/wrapped/anniversary-gifts"
                type="article"
                publishedTime="2026-01-27T00:00:00+05:30"
                modifiedTime="2026-01-31T00:00:00+05:30"
                author="The Maryam Team"
                image="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&q=80"
                keywords={["anniversary gifts", "anniversary gift ideas", "wedding anniversary", "romantic anniversary gifts", "anniversary gifts for husband", "anniversary gifts for wife", "couple gifts", "themaryam anniversary"]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Anniversary Gift Ideas That Celebrate Your Love",
                    "mainEntityOfPage": "https://themaryam.in/wrapped/anniversary-gifts",
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
                        <span className="flex items-center gap-1.5 bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                            <Heart className="w-3.5 h-3.5" />
                            Anniversary
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 27, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            8 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Anniversary Gift Ideas: Celebrating Every Year of Your Love
                    </h1>

                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&q=80" alt="Anniversary Gifts" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-semibold text-lg">M</div>
                            <div>
                                <p className="font-medium text-gray-900">The Maryam Team</p>
                                <p className="text-sm text-gray-500">Romance Experts</p>
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
                            Each anniversary marks another year of love, growth, and shared memories. Finding the perfect gift to celebrate this milestone can feel daunting, but with the right approach, you can create magic.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Traditional Anniversary Gifts by Year</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There's a beautiful tradition of specific gift themes for each anniversary year. Here's your guide:
                        </p>

                        <div className="bg-gray-50 rounded-xl p-6 my-6">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="space-y-2">
                                    <p><strong>1st:</strong> Paper (love letters, books)</p>
                                    <p><strong>2nd:</strong> Cotton (clothing, bedding)</p>
                                    <p><strong>3rd:</strong> Leather (wallets, bags)</p>
                                    <p><strong>4th:</strong> Fruit/Flowers</p>
                                    <p><strong>5th:</strong> Wood (furniture, art)</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>10th:</strong> Tin/Aluminum</p>
                                    <p><strong>15th:</strong> Crystal</p>
                                    <p><strong>20th:</strong> China</p>
                                    <p><strong>25th:</strong> Silver</p>
                                    <p><strong>50th:</strong> Gold</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Anniversary Gifts for Her</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Women tend to appreciate gifts that show emotional thought and effort:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li><strong>Jewelry</strong> - <a href="https://shop.themaryam.in/collections/personalised" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">Personalized pieces</a> with your anniversary date</li>
                            <li><strong>Flowers</strong> - <a href="https://shop.themaryam.in/collections/flowers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">Fresh bouquets</a> never fail</li>
                            <li><strong>Spa experiences</strong> - Pampering sessions for relaxation</li>
                            <li><strong>Photo memories</strong> - Albums or frames of your journey</li>
                            <li><strong>Weekend getaways</strong> - Quality time together</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Anniversary Gifts for Him</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Men often appreciate practical yet thoughtful gifts:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li><strong>Personalized watches</strong> - Engraved with special dates</li>
                            <li><strong>Experience gifts</strong> - Adventure or dining experiences</li>
                            <li><strong>Tech gadgets</strong> - Something he's been eyeing</li>
                            <li><strong>Custom accessories</strong> - Wallets, cufflinks, ties with personalization</li>
                            <li><strong>Sports memorabilia</strong> - If he's a fan</li>
                        </ul>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Heart className="w-5 h-5 text-red-600" />
                                <span className="font-bold text-gray-900">Pro Tip</span>
                            </div>
                            <p className="text-gray-700">
                                The most meaningful anniversary gifts often reference your relationship journey. Recreate your first date, revisit where you got engaged, or gift something connected to an inside joke only you two understand.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Milestone Anniversary Ideas</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">First Anniversary</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The paper theme offers creative possibilities: love letters for the next year (one for each month), a book that means something to both of you, or tickets to an event you'll attend together.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Fifth Anniversary</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wood symbolizes strength and durability. Consider a wooden watch, handcrafted furniture piece, or a tree you plant together to grow alongside your relationship.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Tenth Anniversary</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A decade together calls for something special. Tin/aluminum represents flexibility - perhaps a trip to somewhere you've always dreamed of visiting together.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Silver (25th) & Gold (50th)</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            These milestone anniversaries deserve grand celebrations. Silver and gold jewelry, vow renewals, or dream vacations are popular choices.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Gift Combos That Work</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Sometimes the perfect anniversary gift is a combination:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Flowers + personalized jewelry</li>
                            <li>Dinner reservation + surprise dessert at home</li>
                            <li>Photo album + promise of a yearly photo tradition</li>
                            <li><a href="https://shop.themaryam.in/collections/hampers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">Gift hamper</a> + handwritten anniversary letter</li>
                        </ul>

                        <div className="bg-gray-900 text-white p-8 rounded-xl my-10">
                            <h3 className="text-xl font-bold mb-3">Find Your Anniversary Gift</h3>
                            <p className="text-gray-300 mb-4">Let our AI help you find the perfect anniversary gift based on your relationship.</p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/search" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                    <Sparkles className="w-5 h-5" />
                                    AI Gift Finder
                                </Link>
                                <a href="https://shop.themaryam.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                                    <Gift className="w-5 h-5" />
                                    Shop Gifts
                                </a>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Last-Minute Anniversary Ideas</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Forgot your anniversary? Don't panic. The Maryam offers same day delivery for many gifts. Order flowers, chocolates, or a curated hamper before noon for same-day delivery in most cities.
                        </p>
                    </div>

                    <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Never Forget an Anniversary Again</h3>
                        <p className="text-gray-600 mb-4">Subscribe for anniversary reminders and romantic gift ideas.</p>
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
                            <Link to="/wrapped/valentine-gifts-2026" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80" alt="Valentine Gifts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Valentine's Day 2026: Skip the Clichés</h4>
                            </Link>
                            <Link to="/wrapped/personalized-gifts" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80" alt="Personalized Gifts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Personalized Gifts That Last Forever</h4>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <WrappedFooter />
        </div>
    );
};

export default AnniversaryGifts;
