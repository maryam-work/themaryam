import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Cpu, Zap } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';

const AIGiftFinderGuide: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "I Let AI Pick Gifts for a Month - AI Gift Finder Review",
            "description": "Honest review of using AI to pick gifts for a month. Learn where AI gift finders excel and where they fall short.",
            "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
            "author": { "@type": "Person", "name": "Sneha Iyer", "jobTitle": "Tech Writer and Reviewer" },
            "publisher": { "@type": "Organization", "name": "The Maryam", "logo": { "@type": "ImageObject", "url": "https://themaryam.in/logo.png" } },
            "datePublished": "2026-01-05",
            "dateModified": "2026-01-25",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://themaryam.in/wrapped/ai-gift-finder-guide" },
            "keywords": ["AI gift finder", "AI gift recommendations", "gift finder app", "personalized gift suggestions", "the maryam AI"],
            "inLanguage": "en-IN"
        };
        const breadcrumbSchema = {
            "@context": "https://schema.org", "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://themaryam.in" },
                { "@type": "ListItem", "position": 2, "name": "Wrapped", "item": "https://themaryam.in/wrapped" },
                { "@type": "ListItem", "position": 3, "name": "AI Gift Finder Guide", "item": "https://themaryam.in/wrapped/ai-gift-finder-guide" }
            ]
        };
        const s1 = document.createElement('script'); s1.type = 'application/ld+json'; s1.text = JSON.stringify(articleSchema); s1.id = 'article-schema';
        const s2 = document.createElement('script'); s2.type = 'application/ld+json'; s2.text = JSON.stringify(breadcrumbSchema); s2.id = 'breadcrumb-schema';
        document.head.appendChild(s1); document.head.appendChild(s2);
        document.title = "I Let AI Pick Gifts for a Month | AI Gift Finder Review | The Maryam";
        return () => { document.getElementById('article-schema')?.remove(); document.getElementById('breadcrumb-schema')?.remove(); };
    }, []);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "I Let AI Pick Gifts for a Month";
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
                            <Cpu className="w-3.5 h-3.5" />Technology
                        </span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Jan 5, 2026</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />4 min read</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">I Let AI Pick Gifts for a Month</h1>

                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" alt="AI technology" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-lg">S</div>
                            <div>
                                <p className="font-medium text-gray-900">Sneha Iyer</p>
                                <p className="text-sm text-gray-500">Tech Writer and Reviewer</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500 mr-2">Share:</span>
                            <button onClick={() => handleShare('twitter')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110"><Twitter className="w-4 h-4 text-gray-600" /></button>
                            <button onClick={() => handleShare('facebook')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110"><Facebook className="w-4 h-4 text-gray-600" /></button>
                            <button onClick={() => handleShare('linkedin')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110"><Linkedin className="w-4 h-4 text-gray-600" /></button>
                            <button onClick={() => handleShare('copy')} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110">{copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4 text-gray-600" />}</button>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">I am terrible at gifting. So when <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">The Maryam</a> launched their AI gift finder, I used it exclusively for a month.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How It Works</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">Describe the person and occasion in plain language. The <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">AI gift finder</a> suggests matching gifts from the catalog.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where AI Got It Right</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">For a housewarming, AI suggested an address plaque and indoor planters from <a href="https://shop.themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">shop.themaryam.in</a>. She loved it.</p>

                        <div className="bg-gray-50 border-l-4 border-gray-900 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2"><Zap className="w-4 h-4 text-gray-700" /><p className="text-gray-900 font-semibold">The Real Win</p></div>
                            <p className="text-gray-700">AI reduces decision fatigue. Instead of 500 products, you get 5-10 relevant options. Try it at <a href="https://themaryam.in" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">themaryam.in</a>.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where AI Fell Short</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">For emotional gifts like anniversary presents, AI gave the starting point. The emotional layer was still mine to add.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Real Takeaway</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">If you are chronically indecisive, AI assistance is genuinely useful. It makes the overwhelming feel manageable.</p>
                    </div>

                    <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                        <h3 className="text-xl text-gray-900 font-semibold mb-2">Like honest reviews?</h3>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl" />
                            <button type="submit" className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800">Subscribe</button>
                        </form>
                    </div>

                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">More from Wrapped</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/wrapped/best-gifts-girlfriend-2026" className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                                <div className="aspect-[16/10] overflow-hidden"><img src="https://images.unsplash.com/photo-1549465220-1a8b9238517d?w=600&q=80" alt="Girlfriend" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
                                <div className="p-4"><h4 className="font-semibold text-gray-900">How to Pick a Gift She'll Love</h4></div>
                            </Link>
                            <Link to="/wrapped/vadodara-gift-delivery" className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                                <div className="aspect-[16/10] overflow-hidden"><img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80" alt="Vadodara" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
                                <div className="p-4"><h4 className="font-semibold text-gray-900">Same-Day Delivery in Vadodara</h4></div>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <WrappedFooter />
        </div>
    );
};

export default AIGiftFinderGuide;
