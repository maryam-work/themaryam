import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Cake, Gift, Sparkles, Heart } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';
import SEO from '../../../components/SEO';

const ChocolatesAndCakes: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Best Chocolates & Cakes for Gifting | The Maryam";

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
                title="Premium Chocolates & Cakes Online 2026 | Same Day Delivery | The Maryam"
                description="Order premium chocolates and cakes online. Artisan chocolates, birthday cakes, chocolate hampers with same day delivery. Perfect gifts for celebrations."
                canonical="/wrapped/chocolates-cakes"
                type="article"
                publishedTime="2026-01-29T00:00:00+05:30"
                modifiedTime="2026-01-31T00:00:00+05:30"
                author="The Maryam Team"
                image="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1200&q=80"
                keywords={["chocolates", "cakes", "chocolate gift", "birthday cake", "cake delivery", "chocolate hamper", "premium chocolates", "artisan chocolates", "chocolate box", "themaryam"]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Premium Chocolates & Cakes - The Ultimate Gift Guide",
                    "mainEntityOfPage": "https://themaryam.in/wrapped/chocolates-cakes",
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
                        <span className="flex items-center gap-1.5 bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-medium">
                            <Cake className="w-3.5 h-3.5" />
                            Sweets & Treats
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 29, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            5 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Premium Chocolates & Cakes: The Ultimate Guide to Sweet Gifting
                    </h1>

                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1200&q=80" alt="Premium Chocolates and Cakes" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold text-lg">M</div>
                            <div>
                                <p className="font-medium text-gray-900">The Maryam Team</p>
                                <p className="text-sm text-gray-500">Sweet Treats Experts</p>
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
                            Chocolates and cakes - the universal language of celebration. Whether it's a birthday, anniversary, or just a moment that deserves something sweet, these treats never fail to bring joy.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Psychology of Sweet Gifts</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There's a reason chocolates have been associated with love and celebration for centuries. Chocolate triggers the release of endorphins - the same chemicals that create feelings of happiness and love. It's literally a mood booster in edible form.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Cakes, on the other hand, represent celebration itself. From childhood birthday parties to wedding receptions, cakes mark life's most important moments.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Chocolate Gifts</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🍫 Premium Chocolate Boxes</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Curated selections of fine chocolates - dark, milk, white, and filled varieties. Look for brands like Ferrero Rocher, Lindt, or artisan chocolatiers for premium gifting. Our <a href="https://shop.themaryam.in/collections/chocolates" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">chocolate collection</a> offers the best options.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🎁 Chocolate Hampers</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Combine chocolates with other treats - cookies, nuts, dried fruits, and sometimes wine. <a href="https://shop.themaryam.in/collections/hampers" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">Gift hampers</a> create a complete indulgent experience.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🍬 Artisan & Bean-to-Bar</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            For the chocolate connoisseur, single-origin and artisan chocolates offer unique flavor profiles. These make excellent gifts for those who appreciate quality over quantity.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Choosing the Perfect Cake</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🎂 Birthday Cakes</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The centerpiece of any birthday celebration. From classic chocolate to exotic flavors, the cake should reflect the birthday person's taste. Consider dietary restrictions and preferences.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">❤️ Anniversary Cakes</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Elegant and romantic. Heart-shaped cakes, red velvet, or their wedding flavor recreated. These cakes celebrate the journey of a relationship.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">🎉 Celebration Cakes</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Promotions, achievements, baby showers, housewarmings - any milestone deserves a cake. Customize the message and design to match the occasion.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5 text-amber-600" />
                                <span className="font-bold text-gray-900">Pro Tip</span>
                            </div>
                            <p className="text-gray-700">
                                Pair chocolates with flowers for the ultimate gift combo. The visual beauty of flowers combined with the indulgence of chocolate creates a memorable experience.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Same Day Cake Delivery</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Forgot to order in advance? The Maryam offers same day cake delivery across major cities. Fresh cakes, beautifully packaged, delivered right to their doorstep. Order before noon for evening delivery.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Chocolate & Cake Combos</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Why choose? Our combo gifts include both chocolates and cakes, creating a complete celebration package. Perfect for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Birthday celebrations</li>
                            <li>Anniversary surprises</li>
                            <li>Valentine's Day</li>
                            <li>Corporate gifting</li>
                            <li>Festive occasions (Diwali, Christmas, etc.)</li>
                        </ul>

                        <div className="bg-gray-900 text-white p-8 rounded-xl my-10">
                            <h3 className="text-xl font-bold mb-3">Order Chocolates & Cakes</h3>
                            <p className="text-gray-300 mb-4">Browse our collection of premium chocolates and freshly baked cakes.</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://shop.themaryam.in/collections/chocolates" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                    <Gift className="w-5 h-5" />
                                    Shop Chocolates
                                </a>
                                <a href="https://shop.themaryam.in/collections/cakes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors">
                                    <Cake className="w-5 h-5" />
                                    Shop Cakes
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Sweet Gifting Ideas</h3>
                        <p className="text-gray-600 mb-4">Subscribe for exclusive offers and celebration inspiration.</p>
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
                            <Link to="/wrapped/cute-hampers" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80" alt="Gift Hampers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Cute Gift Hampers Guide</h4>
                            </Link>
                            <Link to="/wrapped/birthday-gift-ideas-2026" className="group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-3">
                                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Birthday Gifts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors">Birthday Gift Ideas 2026</h4>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <WrappedFooter />
        </div>
    );
};

export default ChocolatesAndCakes;
