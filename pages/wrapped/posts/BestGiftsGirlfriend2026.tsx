import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Gift, Target } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';

const BestGiftsGirlfriend2026: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "How to Actually Pick a Gift She'll Love";

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
                <div className="max-w-3xl mx-auto px-4 md:px-6 pt-8">
                    <Link to="/wrapped" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Wrapped
                    </Link>
                </div>

                <article className="max-w-3xl mx-auto px-4 md:px-6 py-8">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                            <Gift className="w-3.5 h-3.5" />
                            Gift Guide
                        </span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Jan 12, 2026</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />4 min read</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        How to Actually Pick a Gift She'll Love
                    </h1>

                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1549465220-1a8b9238517d?w=1200&q=80" alt="Gift for her" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-lg">A</div>
                            <div>
                                <p className="font-medium text-gray-900">Arjun Mehta</p>
                                <p className="text-sm text-gray-500">Relationship Coach and Writer</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500 mr-2">Share:</span>
                            <button onClick={() => handleShare('twitter')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Share on Twitter"><Twitter className="w-4 h-4 text-gray-600" /></button>
                            <button onClick={() => handleShare('facebook')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Share on Facebook"><Facebook className="w-4 h-4 text-gray-600" /></button>
                            <button onClick={() => handleShare('linkedin')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Share on LinkedIn"><Linkedin className="w-4 h-4 text-gray-600" /></button>
                            <button onClick={() => handleShare('copy')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Copy link">{copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4 text-gray-600" />}</button>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            Here is a pattern I have noticed after years of helping people with gift-giving: most guys approach it like a puzzle to solve. They Google "best gifts for girlfriend" and pick something from the list. That is exactly where things go wrong.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Most Gift Guides Fail You</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Generic lists do not know your girlfriend. They do not know she mentioned wanting to learn calligraphy three months ago. They do not know she has been wearing the same pair of earrings because everything else broke. The best gift is not about the gift. It is about proving you paid attention.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Three-Week Rule</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Start paying attention three weeks before any occasion. Note down anything she mentions wanting, complaining about, or admiring. "This bag is nice" at a store. "I wish I had time to read more." "My phone charger keeps breaking." These throwaway comments are gold. Write them down somewhere she will not find.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Actually Works in 2026</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            From what I am seeing, <a href="https://shop.themaryam.in/collections/jewelry" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">personalized jewelry</a> with subtle meaning outperforms flashy pieces. A necklace with coordinates of where you met. A bracelet with her mom's handwriting engraved. These hit different because they are impossible to duplicate. They are specifically hers.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Subscription boxes have also matured. Book subscriptions for readers, plant subscriptions for the green-thumbed, skincare discovery boxes for beauty enthusiasts. The gift keeps arriving, and each delivery reminds her of you.
                        </p>

                        <div className="bg-gray-50 border-l-4 border-gray-900 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-4 h-4 text-gray-700" />
                                <p className="text-gray-900 font-semibold">Pro Tip</p>
                            </div>
                            <p className="text-gray-700">
                                Still stuck? Use the <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">AI Gift Finder at themaryam.in</a>. Describe her personality and interests, and it suggests gifts that actually match.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Presentation Matters</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            I have seen 500 rupee gifts outperform 5000 rupee ones simply because of how they were given. A handwritten note explaining why you chose it. A small scavenger hunt leading to the gift. Presentation is not about expensive wrapping. It is about creating a moment.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            The secret to gifting is not a secret at all. Listen more than you shop. When you finally find the right thing, she will feel seen. And that is what you are really giving her.
                        </p>
                    </div>

                    <div className="mt-12 p-6 md:p-8 bg-gray-50 border border-gray-200 rounded-2xl">
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Found this helpful?</h3>
                        <p className="text-gray-600 mb-4 text-sm">Get more gifting insights delivered to your inbox.</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                            <button type="submit" className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200">Subscribe</button>
                        </form>
                    </div>

                    <div className="mt-12 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xl flex-shrink-0">A</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 text-lg">Arjun Mehta</h4>
                                <p className="text-sm text-gray-500 mb-3">Relationship Coach and Writer</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Arjun writes about relationships, communication, and the small gestures that keep couples connected. He has been helping people navigate love and gifting for over 8 years. Based in Mumbai, he believes meaningful gifts are really just attention made tangible.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">More from Wrapped</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/wrapped/valentine-gifts-2026" className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80" alt="Related post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">Valentine's Day 2026: Skip the Clichés</h4>
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

export default BestGiftsGirlfriend2026;
