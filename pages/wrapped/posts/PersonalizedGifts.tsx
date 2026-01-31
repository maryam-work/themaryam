import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Check, Clock, Calendar, Pen, Heart, Sparkles, Gift } from 'lucide-react';
import { WrappedHeader, Sidebar, WrappedFooter } from '../components/WrappedShared';
import SEO from '../../../components/SEO';

const PersonalizedGifts: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [email, setEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = "Personalized Gifts That Make Lasting Memories | The Maryam";

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
                title="Personalized Gifts Online 2026 | Custom Gift Ideas | The Maryam"
                description="Create unique personalized gifts with names, photos & messages. Custom jewelry, photo frames, engraved items & more. Same day delivery for custom gifts."
                canonical="/wrapped/personalized-gifts"
                type="article"
                publishedTime="2026-01-28T00:00:00+05:30"
                modifiedTime="2026-01-31T00:00:00+05:30"
                author="The Maryam Team"
                image="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80"
                keywords={["personalized gifts", "custom gifts", "engraved gifts", "photo gifts", "name gifts", "personalized jewelry", "custom photo frame", "customized gifts online", "themaryam personalized"]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Personalized Gifts That Make Lasting Memories",
                    "mainEntityOfPage": "https://themaryam.in/wrapped/personalized-gifts",
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
                        <span className="flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                            <Pen className="w-3.5 h-3.5" />
                            Personalized
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Jan 28, 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            7 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Personalized Gifts: Creating Memories That Last Forever
                    </h1>

                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-8">
                        <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80" alt="Personalized Gifts" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold text-lg">M</div>
                            <div>
                                <p className="font-medium text-gray-900">The Maryam Team</p>
                                <p className="text-sm text-gray-500">Personalization Experts</p>
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
                            In a world of mass-produced products, personalized gifts stand out. They transform ordinary items into meaningful keepsakes that tell a story. Here's everything you need to know about creating gifts that truly matter.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Personalized Gifts Matter</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A <a href="https://shop.themaryam.in/collections/personalised" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">personalized gift</a> says "I put thought into this specifically for you." It's the difference between buying something and creating something. The recipient knows you invested time and effort to make it unique.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Research shows that personalized gifts are perceived as more thoughtful and valuable than generic ones, regardless of price. It's not about spending more - it's about meaning more.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Popular Personalization Types</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">📸 Photo Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Transform cherished memories into tangible keepsakes. Photo frames, photo albums, photo calendars, and even photo-printed items like mugs and cushions. Every glance reminds them of a special moment.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">✍️ Name & Initial Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Adding someone's name or initials elevates any item. Monogrammed wallets, jewelry with initials, name-printed stationery, and custom nameplates for desks. Simple yet powerful.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">📅 Date-Based Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Commemorate important dates - birthdays, anniversaries, first meetings. Coordinate jewelry with significant locations, calendars highlighting special days, or "on this day" keepsakes.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">💌 Message Gifts</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Custom messages, quotes, or inside jokes engraved or printed on items. From heartfelt declarations to humor only the two of you understand - these create personal connections.
                        </p>

                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 rounded-r-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5 text-purple-600" />
                                <span className="font-bold text-gray-900">Pro Tip</span>
                            </div>
                            <p className="text-gray-700">
                                Double-check spelling and dates before ordering. Personalized items are often made-to-order and cannot be returned. Accuracy is essential.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Best Personalized Gift Ideas</h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">For Him</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Engraved leather wallet with initials</li>
                            <li>Custom cufflinks with special dates</li>
                            <li>Personalized watch box with name</li>
                            <li>Photo keychain with meaningful image</li>
                            <li>Custom whiskey glasses with monogram</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">For Her</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Name necklace in gold or silver</li>
                            <li>Custom jewelry box with message</li>
                            <li>Personalized photo collage frame</li>
                            <li>Birthstone jewelry with her stone</li>
                            <li>Custom perfume with her name</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">For Couples</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Star map of your first date night sky</li>
                            <li>Coordinate bracelet of where you met</li>
                            <li>Couple portrait illustration</li>
                            <li>Custom puzzle with your photo</li>
                            <li>Matching personalized items</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Occasions for Personalized Gifts</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Personalized gifts work for virtually every occasion:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li><strong>Birthdays</strong> - Age-specific or name-centric gifts</li>
                            <li><strong>Anniversaries</strong> - Date and milestone commemorations</li>
                            <li><strong>Weddings</strong> - Couple names, wedding dates, vows</li>
                            <li><strong>New Baby</strong> - Baby name, birth date, weight, and time</li>
                            <li><strong>Graduations</strong> - Achievement recognition with names and dates</li>
                            <li><strong>Retirements</strong> - Years of service, career highlights</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ordering Personalized Gifts</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At The Maryam, we've simplified personalization. Most items can be customized in just a few steps:
                        </p>
                        <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Choose your product from our <a href="https://shop.themaryam.in/collections/personalised" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 underline font-medium">personalized collection</a></li>
                            <li>Enter your customization details (name, message, photo)</li>
                            <li>Preview your design before ordering</li>
                            <li>Complete checkout and we handle the rest</li>
                        </ol>

                        <div className="bg-gray-900 text-white p-8 rounded-xl my-10">
                            <h3 className="text-xl font-bold mb-3">Create Your Personalized Gift</h3>
                            <p className="text-gray-300 mb-4">Explore our range of customizable gifts and create something truly unique.</p>
                            <a href="https://shop.themaryam.in/collections/personalised" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                <Gift className="w-5 h-5" />
                                Shop Personalized Gifts
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Get Personalization Ideas</h3>
                        <p className="text-gray-600 mb-4">Subscribe for unique gift ideas and exclusive customization offers.</p>
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

export default PersonalizedGifts;
