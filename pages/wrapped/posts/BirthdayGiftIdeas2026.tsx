import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Brain, BookOpen } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';

const BirthdayGiftIdeas2026: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Birthday Gifting: It's About the Memory - Gift Psychology 2026",
            "description": "Learn the psychology behind memorable birthday gifts. Discover why some gifts become treasured keepsakes while others get forgotten.",
            "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
            "author": { "@type": "Person", "name": "Priya Nair", "jobTitle": "Consumer Psychologist" },
            "publisher": { "@type": "Organization", "name": "The Maryam", "logo": { "@type": "ImageObject", "url": "https://themaryam.in/logo.png" } },
            "datePublished": "2026-01-10",
            "dateModified": "2026-01-25",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://themaryam.in/wrapped/birthday-gift-ideas-2026" },
            "keywords": ["birthday gifts", "gift psychology", "memorable gifts", "birthday gift ideas", "personalized birthday gifts"],
            "inLanguage": "en-IN"
        };
        const breadcrumbSchema = {
            "@context": "https://schema.org", "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://themaryam.in" },
                { "@type": "ListItem", "position": 2, "name": "Wrapped", "item": "https://themaryam.in/wrapped" },
                { "@type": "ListItem", "position": 3, "name": "Birthday Gift Ideas 2026", "item": "https://themaryam.in/wrapped/birthday-gift-ideas-2026" }
            ]
        };
        const s1 = document.createElement('script'); s1.type = 'application/ld+json'; s1.text = JSON.stringify(articleSchema); s1.id = 'article-schema';
        const s2 = document.createElement('script'); s2.type = 'application/ld+json'; s2.text = JSON.stringify(breadcrumbSchema); s2.id = 'breadcrumb-schema';
        document.head.appendChild(s1); document.head.appendChild(s2);
        document.title = "Birthday Gifting: It's About the Memory | Gift Psychology | The Maryam";
        return () => { document.getElementById('article-schema')?.remove(); document.getElementById('breadcrumb-schema')?.remove(); };
    }, []);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Birthday Gifting: It's About the Memory";

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
                            <Brain className="w-3.5 h-3.5" />
                            Psychology
                        </span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Jan 10, 2026</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />5 min read</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Birthday Gifting: It's About the Memory
                    </h1>

                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Birthday celebration" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-lg">P</div>
                            <div>
                                <p className="font-medium text-gray-900">Priya Nair</p>
                                <p className="text-sm text-gray-500">Consumer Psychologist</p>
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
                            I spent years studying why some gifts become treasured keepsakes while others get regifted within weeks. The answer has less to do with price tags and everything to do with how our brains process emotional experiences.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Science Behind Memorable Gifts</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When we receive a gift that connects to a personal memory or inside joke, our brains release a cocktail of dopamine and oxytocin. The same chemicals triggered by meaningful social bonds. That is why a 200 rupee <a href="https://shop.themaryam.in/collections/photo-frames" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">photo frame</a> with the right picture inside outperforms a 2000 rupee generic gadget. The brain does not price-tag emotions.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Love Languages Apply to Gifts</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Not everyone values gifts the same way. Some people prefer quality time over physical items. For them, a gift of an experience works better. Concert tickets, a planned dinner, an adventure activity. Others value words. A thoughtful letter paired with even a modest gift leaves lasting impact.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Before shopping, ask yourself: how does this person prefer to feel loved? The answer usually reveals the gift.
                        </p>

                        <div className="bg-gray-50 border-l-4 border-gray-900 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <BookOpen className="w-4 h-4 text-gray-700" />
                                <p className="text-gray-900 font-semibold">The 10-Year Test</p>
                            </div>
                            <p className="text-gray-700">
                                Will this gift matter in 10 years? Gifts that pass this test usually fall into three categories: items that document memories (<a href="https://shop.themaryam.in/collections/photo-books" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">photo books</a>, custom artwork), items they will use for years (quality bags, jewelry), and experiences they will remember.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Age-Based Shifts</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            What makes a "good" birthday gift changes as we age. In our 20s, novelty wins. In our 30s, practicality gains weight. By our 40s and beyond, meaning overtakes both. Understanding where someone is in life helps calibrate what they will actually appreciate versus what looks impressive.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            The best birthday gifts do not just celebrate one more year. They acknowledge the specific story of that person's life. If you need help finding something that fits, try the <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">AI Gift Finder</a>. Start there, and the right gift usually follows.
                        </p>
                    </div>

                    <div className="mt-12 p-6 md:p-8 bg-gray-50 border border-gray-200 rounded-2xl">
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Found this helpful?</h3>
                        <p className="text-gray-600 mb-4 text-sm">Get more insights on thoughtful gifting.</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                            <button type="submit" className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200">Subscribe</button>
                        </form>
                    </div>

                    <div className="mt-12 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xl flex-shrink-0">P</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 text-lg">Priya Nair</h4>
                                <p className="text-sm text-gray-500 mb-3">Consumer Psychologist</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Priya studies how emotions influence our purchasing and gifting decisions. With a background in behavioral economics from IIM Bangalore, she writes about the psychology behind why some gifts work and others do not. She contributes regularly to Wrapped.
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
                            <Link to="/wrapped/best-gifts-girlfriend-2026" className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1549465220-1a8b9238517d?w=600&q=80" alt="Related post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">How to Actually Pick a Gift She'll Love</h4>
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

export default BirthdayGiftIdeas2026;
