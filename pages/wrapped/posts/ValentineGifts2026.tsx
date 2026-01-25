import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Heart, Lightbulb } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';

const ValentineGifts2026: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Valentine's Day 2026: Skip the Clichés";

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
                        <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                            <Heart className="w-3.5 h-3.5" />
                            Relationships
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 15, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            4 min read
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Valentine's Day 2026: Skip the Clichés
                    </h1>

                    {/* Featured Image */}
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&q=80" alt="Valentine's Day Gift" className="w-full h-full object-cover" />
                    </div>

                    {/* Author & Share */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-lg">R</div>
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
                            Every year, February 14th turns into a mad rush. Overpriced roses, generic chocolates, and that last-minute panic we all know too well. After curating gifts for thousands of couples, I have noticed what actually lands and what ends up forgotten in a drawer.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Problem with "Safe" Gifts</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Red roses are beautiful. Chocolates are delicious. But they have become so expected that they barely register anymore. The real magic happens when someone receives something that says "I actually pay attention to you." That is the difference between a gift and a gesture.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is Working in 2026</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            From what I am seeing this season, <a href="https://shop.themaryam.in/collections/personalized" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">personalized items</a> are outperforming everything else by a significant margin. Photo books documenting your relationship, custom jewelry with meaningful coordinates or dates, handwritten letter sets. These are the ones that make people tear up.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Experience-based gifts have also made a strong comeback. Instead of another physical object, couples are choosing cooking classes, stargazing sessions, or adventure activities they can do together. The memory becomes the gift.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A Small Trick That Works</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here is something I tell everyone: pair your main gift with something handwritten. Even a simple note explaining why you chose that specific item transforms the entire experience. It is not about the budget. It is about the thought being visible.
                        </p>

                        <div className="bg-gray-50 border-l-4 border-gray-900 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-4 h-4 text-gray-700" />
                                <p className="text-gray-900 font-semibold">Quick Tip</p>
                            </div>
                            <p className="text-gray-700">
                                Not sure where to start? Try our <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">AI Gift Finder</a>. Describe your partner and it suggests personalized options from our collection.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Timing Factor</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            This is where people slip up. <a href="https://shop.themaryam.in/collections/personalized" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">Personalized gifts</a> need lead time. Usually 5-7 days for quality work. If you are reading this close to February 14th, <a href="https://shop.themaryam.in/collections/same-day" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">same-day delivery options</a> exist, but your choices narrow significantly. Plan ahead if you want the good stuff.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Valentine's Day does not have to be stressful. It is just an excuse to remind someone they matter. Keep it simple, keep it personal, and you are already ahead of 90% of the crowd.
                        </p>
                    </div>

                    {/* Newsletter CTA */}
                    <div className="mt-12 p-6 md:p-8 bg-gray-50 border border-gray-200 rounded-2xl">
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Found this helpful?</h3>
                        <p className="text-gray-600 mb-4 text-sm">Get more gifting insights delivered to your inbox. No spam, just practical tips.</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                            <button type="submit" className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200">Subscribe</button>
                        </form>
                    </div>

                    {/* Author Bio */}
                    <div className="mt-12 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xl flex-shrink-0">R</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 text-lg">Richa Sharma</h4>
                                <p className="text-sm text-gray-500 mb-3">Gift Curator at <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">The Maryam</a></p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Richa has spent 6 years helping people find the right gift for every occasion. She believes that thoughtful gifting is a skill anyone can learn. When not curating gift collections, she is usually reading about consumer psychology or testing new products.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">More from Wrapped</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/wrapped/best-gifts-girlfriend-2026" className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1549465220-1a8b9238517d?w=600&q=80" alt="Related post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">How to Actually Pick a Gift She'll Love</h4>
                                </div>
                            </Link>
                            <Link to="/wrapped/birthday-gift-ideas-2026" className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Related post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">Birthday Gifting: It's About the Memory</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <WrappedFooter />
        </div>
    );
};

export default ValentineGifts2026;
