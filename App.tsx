import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TopBar, Header, Footer } from './components/Layout';
import {
  Hero,
  CategoriesGrid,
  PromoCarousel,
  AIResults,
  CategoryArches,
  TrendingLevitation,
  TechLove,
  CollectionsBento,
  ProcessFlow,
  LoveWall,
  UnboxingStream
} from './components/Sections';
import SEO from './components/SEO';
import { CelebrateLove } from './components/CelebrateLove';
import SearchPage from './pages/SearchPage';
import WrappedListPage from './pages/wrapped/WrappedListPage';

// Individual blog post pages
import ValentineGifts2026 from './pages/wrapped/posts/ValentineGifts2026';
import BestGiftsGirlfriend2026 from './pages/wrapped/posts/BestGiftsGirlfriend2026';
import BirthdayGiftIdeas2026 from './pages/wrapped/posts/BirthdayGiftIdeas2026';
import VadodaraGiftDelivery from './pages/wrapped/posts/VadodaraGiftDelivery';
import AIGiftFinderGuide from './pages/wrapped/posts/AIGiftFinderGuide';
import SecretAdminPage from './pages/SecretAdminPage';

// SEO Blog Posts (for keyword ranking)
import GiftsForBoyfriend from './pages/wrapped/posts/GiftsForBoyfriend';
import GiftsForGirlfriend from './pages/wrapped/posts/GiftsForGirlfriend';
import CuteGiftHampers from './pages/wrapped/posts/CuteGiftHampers';
import OnlineGiftShopGuide from './pages/wrapped/posts/OnlineGiftShopGuide';
import FlowersAndBouquets from './pages/wrapped/posts/FlowersAndBouquets';
import ChocolatesAndCakes from './pages/wrapped/posts/ChocolatesAndCakes';
import PersonalizedGifts from './pages/wrapped/posts/PersonalizedGifts';
import AnniversaryGifts from './pages/wrapped/posts/AnniversaryGifts';

import { matchProducts, MatchedProduct } from './lib/aiService';
import { useLenis } from './hooks/useLenis';

// Home Page Component
const HomePage: React.FC = () => {
  const lenisRef = useLenis();
  const [showResults, setShowResults] = useState(false);
  const [matchedProducts, setMatchedProducts] = useState<MatchedProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      const products = await matchProducts(query);
      setMatchedProducts(products);
      setShowResults(true);
      setTimeout(() => {
        const target = document.getElementById('ai-results');
        if (target && lenisRef.current) {
          lenisRef.current.scrollTo(target, { offset: -80, duration: 1.5 });
        } else if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="The Maryam: Online Gift Shop India | AI Gift Finder"
        description="India's #1 AI-powered gift store. Find perfect personalized gifts for birthdays, anniversaries, weddings, and festivals. Free delivery across 500+ cities."
        canonical="/"
        keywords={['online gift shop', 'personalized gifts', 'AI gift finder', 'birthday gifts', 'anniversary gifts', 'wedding gifts', 'same day delivery']}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://themaryam.in/#website",
              "name": "The Maryam",
              "url": "https://themaryam.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://themaryam.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "SiteNavigationElement",
              "@id": "https://themaryam.in/#navigation",
              "name": [
                "Anniversary Gifts", "Birthday Gifts", "Gift Sets",
                "Chocolate Boxes", "Personalized Gifts", "Flower Bouquets",
                "Special Gifts", "Valentine Gifts", "Miss You Gifts",
                "Love You Gifts", "Congratulations Gifts", "Cakes",
                "Gift Hampers", "Photo Frames", "Wedding Gifts",
                "Friendship Gifts", "Corporate Gifts", "Handwritten Letters"
              ],
              "url": [
                "https://themaryam.in/search?q=Anniversary+Gifts",
                "https://themaryam.in/search?q=Birthday+Gifts",
                "https://themaryam.in/search?q=Gift+Sets",
                "https://themaryam.in/search?q=Chocolate+Gift+Boxes",
                "https://themaryam.in/search?q=Personalized+Gifts",
                "https://themaryam.in/search?q=Flower+Bouquets",
                "https://themaryam.in/search?q=Special+Gifts",
                "https://themaryam.in/search?q=Valentine+Gifts",
                "https://themaryam.in/search?q=Miss+You+Gifts",
                "https://themaryam.in/search?q=Love+You+Gifts",
                "https://themaryam.in/search?q=Congratulations+Gifts",
                "https://themaryam.in/search?q=Cakes",
                "https://themaryam.in/search?q=Gift+Hampers",
                "https://themaryam.in/search?q=Photo+Frames",
                "https://themaryam.in/search?q=Wedding+Gifts",
                "https://themaryam.in/search?q=Friendship+Gifts",
                "https://themaryam.in/search?q=Corporate+Gifts",
                "https://themaryam.in/search?q=Handwritten+Letters"
              ]
            }
          ]
        }}
      />
      <TopBar />
      <Header />
      <main className="flex flex-col gap-0 w-full overflow-x-hidden">
        <Hero onSearch={handleSearch} isLoading={isLoading} />
        <CategoriesGrid />
        <CelebrateLove />
        <PromoCarousel />
        <AIResults visible={showResults} products={matchedProducts} />
        <CategoryArches />
        <TrendingLevitation />
        <TechLove />
        <CollectionsBento />
        <ProcessFlow />
        <LoveWall />
        <UnboxingStream />
      </main>
      <Footer />
    </>
  );
};

// Main App with Routes
const App: React.FC = () => {
  return (
    <div className="font-sans text-primary antialiased selection:bg-brand selection:text-white bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/wrapped" element={<WrappedListPage />} />

        {/* Individual blog post routes */}
        <Route path="/wrapped/valentine-gifts-2026" element={<ValentineGifts2026 />} />
        <Route path="/wrapped/best-gifts-girlfriend-2026" element={<BestGiftsGirlfriend2026 />} />
        <Route path="/wrapped/birthday-gift-ideas-2026" element={<BirthdayGiftIdeas2026 />} />
        <Route path="/wrapped/vadodara-gift-delivery" element={<VadodaraGiftDelivery />} />
        <Route path="/wrapped/ai-gift-finder-guide" element={<AIGiftFinderGuide />} />

        {/* SEO Blog Posts - For keyword ranking */}
        <Route path="/wrapped/gifts-for-boyfriend" element={<GiftsForBoyfriend />} />
        <Route path="/wrapped/gifts-for-girlfriend" element={<GiftsForGirlfriend />} />
        <Route path="/wrapped/cute-hampers" element={<CuteGiftHampers />} />
        <Route path="/wrapped/online-gift-shop" element={<OnlineGiftShopGuide />} />
        <Route path="/wrapped/flowers" element={<FlowersAndBouquets />} />
        <Route path="/wrapped/chocolates-cakes" element={<ChocolatesAndCakes />} />
        <Route path="/wrapped/personalized-gifts" element={<PersonalizedGifts />} />
        <Route path="/wrapped/anniversary-gifts" element={<AnniversaryGifts />} />

        {/* Secret Admin CMS - DO NOT SHARE THIS URL */}
        <Route path="/m7x2k9p4q8w1a5t3y6u0i2o4e6r8z3c5v7b9n1l0" element={<SecretAdminPage />} />
      </Routes>
    </div>
  );
};

export default App;
