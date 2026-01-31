import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
    { name: 'Anniversary', image: '/hearts/anniversary.jpg' },
    { name: 'Romantic Flowers', image: '/hearts/romantic.jpg' },
    { name: 'Wedding', image: '/hearts/wedding.webp' },
    { name: 'Gifts To Say Sorry', image: '/hearts/sorry.webp' },
    { name: 'Thinking Of Someone', image: '/hearts/thinking.jpg' },
    { name: 'For Girlfriend', image: '/hearts/girlfriend.webp' },
    { name: 'For Boyfriend', image: '/hearts/boyfriend.webp' },
    { name: 'Missing Someone', image: '/hearts/missyou.webp' },
];

const HeartMask = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDIxLjM1bC0xLjQ1LTEuMzJCNN40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6IiAvPjwvc3ZnPg==";

export const CelebrateLove: React.FC = () => {
    return (
        <section className="w-full py-8 md:py-12 px-4 w-full md:max-w-[90%] lg:max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 items-stretch">

                <div className="w-full md:w-[45%] lg:w-[43%] flex-shrink-0">
                    <div className="w-full relative">
                        <img
                            src="/display_banners/Celebrate Love Keep your moments forever.png"
                            alt="Celebrate Love - Keep your moments forever"
                            className="w-full h-auto block drop-shadow-xl hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>


                {/* Grid Section - Slidable on Mobile, Grid on Desktop */}
                <div className="flex-1 min-w-0">
                    {/* Mobile: 2 Rows Horizontal Scroll (Slidable) */}
                    <div className="grid md:hidden grid-rows-2 grid-flow-col auto-cols-[140px] overflow-x-auto gap-x-4 gap-y-6 pb-4 no-scrollbar -mx-4 px-4 snap-x snap-mandatory">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 snap-center">
                                <div className="w-[120px] h-[100px] relative active:scale-95 transition-transform">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-700 text-center leading-tight max-w-[120px]">
                                    {cat.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: 4x2 Grid */}
                    <div className="hidden md:grid grid-cols-4 gap-y-20 gap-x-10 lg:gap-x-16">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4 group cursor-pointer">
                                <div className="w-40 h-36 lg:w-44 lg:h-40 relative transition-all duration-300 transform group-hover:-translate-y-1">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-sm lg:text-base font-medium text-gray-700 text-center leading-tight group-hover:text-rose-500 transition-colors">
                                    {cat.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div >
        </section >
    );
};
