import React, { useState, useEffect, useCallback } from 'react';

// =============================================================================
// SECRET ADMIN CMS PAGE
// Password Protected Content Management System (Static Version)
// URL: /m7x2k9p4q8w1a5t3y6u0i2o4e6r8z3c5v7b9n1l0
// =============================================================================

// Security Configuration (obfuscated)
const _0x4a2f = [77, 97, 114, 121, 97, 109, 64, 50, 48, 50, 54, 35, 57, 48, 51, 51, 49];
const _getKey = () => _0x4a2f.map(c => String.fromCharCode(c)).join('');
const TIMEOUT_SECONDS = 5;
const MAX_ATTEMPTS = 3;

// Content Structure (this would come from database later)
interface ContentItem {
    id: string;
    type: 'text' | 'image' | 'banner';
    section: string;
    label: string;
    value: string;
    placeholder?: string;
}

const defaultContent: ContentItem[] = [
    // Hero Section
    { id: 'hero-banner-1', type: 'image', section: 'Hero Banners', label: 'Valentine Banner', value: '/banners/valentine-banner.png' },
    { id: 'hero-banner-2', type: 'image', section: 'Hero Banners', label: 'Birthday Banner', value: '/banners/birthday-banner.png' },
    { id: 'hero-banner-3', type: 'image', section: 'Hero Banners', label: 'Corporate Banner', value: '/banners/corporate-banner.png' },
    { id: 'hero-banner-4', type: 'image', section: 'Hero Banners', label: 'Customised Banner', value: '/banners/customised-banner.png' },
    { id: 'hero-banner-5', type: 'image', section: 'Hero Banners', label: 'Frames Banner', value: '/banners/frames-banner.png' },
    { id: 'hero-banner-6', type: 'image', section: 'Hero Banners', label: 'Letters Banner', value: '/banners/letters-banner.png' },
    { id: 'hero-banner-7', type: 'image', section: 'Hero Banners', label: 'Personalised Banner', value: '/banners/personalised-banner.png' },
    { id: 'hero-banner-8', type: 'image', section: 'Hero Banners', label: 'Wedding Banner', value: '/banners/wedding-banner.png' },
    // Header
    { id: 'header-logo', type: 'image', section: 'Header', label: 'Logo Image', value: 'https://cdn.shopify.com/s/files/1/0801/4931/5828/files/themaryam_logo_header_main_production_800x800.png' },
    { id: 'hero-main-banner', type: 'image', section: 'Header', label: 'Hero Banner (Mobile)', value: '/HERO_BANNER.png' },
    // Delivery Banner
    { id: 'delivery-text', type: 'text', section: 'Top Bar', label: 'Delivery Banner Text', value: '99% DELIVERY DISCOUNT!!!' },
    { id: 'delivery-subtext', type: 'text', section: 'Top Bar', label: 'Delivery Subtext', value: 'You pay for the feeling. Gifts are on us.' },
    // Category Grid
    { id: 'cat-anniv', type: 'image', section: 'Category Grid', label: 'Anniversary', value: '/categories/anniversary.png' },
    { id: 'cat-bday', type: 'image', section: 'Category Grid', label: 'Birthday', value: '/categories/birthday.png' },
    { id: 'cat-giftsets', type: 'image', section: 'Category Grid', label: 'Gift Sets', value: '/categories/gift-sets.png' },
    { id: 'cat-choco', type: 'image', section: 'Category Grid', label: 'Chocolates', value: '/categories/chocolates.png' },
    { id: 'cat-person', type: 'image', section: 'Category Grid', label: 'Personalised', value: '/categories/personalised.png' },
    { id: 'cat-bouquets', type: 'image', section: 'Category Grid', label: 'Bouquets', value: '/categories/bouquets.png' },
    { id: 'cat-specials', type: 'image', section: 'Category Grid', label: 'Specials', value: '/categories/specials.png' },
    { id: 'cat-valentine', type: 'image', section: 'Category Grid', label: 'Valentine Gifts', value: '/categories/valentine-gifts.png' },
    { id: 'cat-missyou', type: 'image', section: 'Category Grid', label: 'Miss You', value: '/categories/miss-you.png' },
    { id: 'cat-loveyou', type: 'image', section: 'Category Grid', label: 'Love You', value: '/categories/love-you.png' },
    { id: 'cat-congrats', type: 'image', section: 'Category Grid', label: 'Congratulations', value: '/categories/congratulations.png' },
    { id: 'cat-cakes', type: 'image', section: 'Category Grid', label: 'Cakes', value: '/categories/cakes.png' },
    { id: 'cat-hampers', type: 'image', section: 'Category Grid', label: 'Gift Hampers', value: '/categories/gift-hampers.png' },
    { id: 'cat-frames', type: 'image', section: 'Category Grid', label: 'Frames', value: '/categories/frames.png' },
    { id: 'cat-wedding', type: 'image', section: 'Category Grid', label: 'Wedding Gifts', value: '/categories/wedding-gifts.png' },
    { id: 'cat-friends', type: 'image', section: 'Category Grid', label: 'Friendship', value: '/categories/friendship.png' },
    { id: 'cat-corp', type: 'image', section: 'Category Grid', label: 'Corporate Gifts', value: '/categories/corporate-gifts.png' },
    { id: 'cat-letters', type: 'image', section: 'Category Grid', label: 'Letters', value: '/categories/letters.png' },
];

const SecretAdminPage: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [timeLeft, setTimeLeft] = useState(TIMEOUT_SECONDS);
    const [attempts, setAttempts] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const [showError, setShowError] = useState(false);
    const [content, setContent] = useState<ContentItem[]>(defaultContent);
    const [hasChanges, setHasChanges] = useState(false);
    const [isTimerActive, setIsTimerActive] = useState(true);

    // Password timer countdown
    useEffect(() => {
        if (isAuthenticated || isLocked) return;

        if (isTimerActive && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !isAuthenticated) {
            setIsLocked(true);
        }
    }, [timeLeft, isAuthenticated, isLocked, isTimerActive]);

    // Anti-devtools detection (basic)
    useEffect(() => {
        const detectDevTools = () => {
            const threshold = 160;
            if (
                window.outerWidth - window.innerWidth > threshold ||
                window.outerHeight - window.innerHeight > threshold
            ) {
                setIsLocked(true);
            }
        };

        window.addEventListener('resize', detectDevTools);
        return () => window.removeEventListener('resize', detectDevTools);
    }, []);

    // Disable right-click and keyboard shortcuts
    useEffect(() => {
        const preventInspect = (e: KeyboardEvent) => {
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.ctrlKey && e.key === 'U')
            ) {
                e.preventDefault();
                setIsLocked(true);
            }
        };

        const preventRightClick = (e: MouseEvent) => {
            e.preventDefault();
            return false;
        };

        document.addEventListener('keydown', preventInspect);
        document.addEventListener('contextmenu', preventRightClick);

        return () => {
            document.removeEventListener('keydown', preventInspect);
            document.removeEventListener('contextmenu', preventRightClick);
        };
    }, []);

    const handlePasswordSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        if (isLocked) return;

        if (password === _getKey()) {
            setIsAuthenticated(true);
            setIsTimerActive(false);
        } else {
            setShowError(true);
            setAttempts(a => a + 1);
            setPassword('');

            if (attempts >= MAX_ATTEMPTS - 1) {
                setIsLocked(true);
            }

            setTimeout(() => setShowError(false), 2000);
        }
    }, [password, isLocked, attempts]);

    const handleContentChange = (id: string, newValue: string) => {
        setContent(prev => prev.map(item =>
            item.id === id ? { ...item, value: newValue } : item
        ));
        setHasChanges(true);
    };

    const handleSave = () => {
        // In static version, just log to console
        // Later this will connect to database
        console.log('Content to save:', JSON.stringify(content, null, 2));
        alert('⚠️ Static Mode: Changes saved to console.\nDatabase connection coming soon!');
        setHasChanges(false);
    };

    // Locked Screen
    if (isLocked) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🔒</div>
                    <h1 className="text-white text-xl font-mono">Access Denied</h1>
                    <p className="text-gray-500 text-sm mt-2">This session has been terminated.</p>
                </div>
            </div>
        );
    }

    // Password Screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {/* Timer */}
                    <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${timeLeft <= 2 ? 'bg-red-500/20 animate-pulse' : 'bg-white/10'
                            }`}>
                            <span className={`text-3xl font-mono font-bold ${timeLeft <= 2 ? 'text-red-400' : 'text-white'
                                }`}>
                                {timeLeft}
                            </span>
                        </div>
                        <p className="text-gray-500 text-xs mt-2 font-mono">SECONDS REMAINING</p>
                    </div>

                    {/* Password Form */}
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter access code..."
                                autoFocus
                                autoComplete="off"
                                className={`w-full bg-white/5 border ${showError ? 'border-red-500 shake' : 'border-white/20'
                                    } rounded-xl px-6 py-4 text-white text-center text-lg font-mono tracking-widest placeholder-gray-600 focus:outline-none focus:border-white/50 transition-all`}
                            />
                            {showError && (
                                <p className="absolute -bottom-6 left-0 right-0 text-center text-red-400 text-xs font-mono">
                                    Invalid code. {MAX_ATTEMPTS - attempts - 1} attempts remaining.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black py-4 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
                        >
                            AUTHENTICATE
                        </button>
                    </form>

                    {/* Attempts indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(MAX_ATTEMPTS)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${i < attempts ? 'bg-red-500' : 'bg-white/20'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Shake animation */}
                <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
          .shake { animation: shake 0.5s ease-in-out; }
        `}</style>
            </div>
        );
    }

    // Admin Dashboard
    const groupedContent = content.reduce((acc, item) => {
        if (!acc[item.section]) acc[item.section] = [];
        acc[item.section].push(item);
        return acc;
    }, {} as Record<string, ContentItem[]>);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold">M</span>
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900">The Maryam CMS</h1>
                            <p className="text-xs text-gray-500">Content Management System</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {hasChanges && (
                            <span className="text-xs text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                                Unsaved changes
                            </span>
                        )}
                        <button
                            onClick={handleSave}
                            disabled={!hasChanges}
                            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${hasChanges
                                ? 'bg-rose-500 text-white hover:bg-rose-600'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-4 py-8">
                {/* Static Mode Warning */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h3 className="font-bold text-amber-800">Static Mode Active</h3>
                            <p className="text-sm text-amber-700">
                                Changes are not persistent. Database integration coming soon.
                                For now, changes are logged to console.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                {(Object.entries(groupedContent) as [string, ContentItem[]][]).map(([section, items]) => (
                    <section key={section} className="mb-8">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-rose-500 rounded-full"></span>
                            {section}
                        </h2>

                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            {items.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`p-4 ${index !== items.length - 1 ? 'border-b border-gray-100' : ''}`}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {item.label}
                                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${item.type === 'image' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {item.type}
                                        </span>
                                    </label>

                                    {item.type === 'image' ? (
                                        <div className="flex items-start gap-4">
                                            <div className="w-24 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                <img
                                                    src={item.value}
                                                    alt={item.label}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = 'https://placehold.co/200x100/gray/white?text=Error';
                                                    }}
                                                />
                                            </div>
                                            <input
                                                type="text"
                                                value={item.value}
                                                onChange={(e) => handleContentChange(item.id, e.target.value)}
                                                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm font-mono focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
                                                placeholder={item.placeholder || 'Enter image URL...'}
                                            />
                                        </div>
                                    ) : (
                                        <input
                                            type="text"
                                            value={item.value}
                                            onChange={(e) => handleContentChange(item.id, e.target.value)}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
                                            placeholder={item.placeholder || 'Enter text...'}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Instructions */}
                <div className="bg-gray-100 rounded-2xl p-6 mt-8">
                    <h3 className="font-bold text-gray-800 mb-3">📘 How to Use</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Edit any field above to change website content</li>
                        <li>• For images, paste the full URL (Shopify CDN, Cloudinary, etc.)</li>
                        <li>• Click "Save Changes" when done</li>
                        <li>• Currently in static mode - database coming soon</li>
                    </ul>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-6 mt-12">
                <div className="max-w-6xl mx-auto px-4 text-center text-xs text-gray-400">
                    The Maryam CMS • v1.0.0 (Static) • Secure Access Only
                </div>
            </footer>
        </div>
    );
};

export default SecretAdminPage;
