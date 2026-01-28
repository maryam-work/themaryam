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
import SearchPage from './pages/SearchPage';
import WrappedListPage from './pages/wrapped/WrappedListPage';

// Individual blog post pages
import ValentineGifts2026 from './pages/wrapped/posts/ValentineGifts2026';
import BestGiftsGirlfriend2026 from './pages/wrapped/posts/BestGiftsGirlfriend2026';
import BirthdayGiftIdeas2026 from './pages/wrapped/posts/BirthdayGiftIdeas2026';
import VadodaraGiftDelivery from './pages/wrapped/posts/VadodaraGiftDelivery';
import AIGiftFinderGuide from './pages/wrapped/posts/AIGiftFinderGuide';
import SecretAdminPage from './pages/SecretAdminPage';

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
      <TopBar />
      <Header />
      <main className="flex flex-col gap-0 w-full overflow-x-hidden">
        <Hero onSearch={handleSearch} isLoading={isLoading} />
        <CategoriesGrid />
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

        {/* Secret Admin CMS - DO NOT SHARE THIS URL */}
        <Route path="/m7x2k9p4q8w1a5t3y6u0i2o4e6r8z3c5v7b9n1l0" element={<SecretAdminPage />} />
      </Routes>
    </div>
  );
};

export default App;
