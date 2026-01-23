import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TopBar, Header, Footer } from './components/Layout';
import {
  Hero,
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
      </Routes>
    </div>
  );
};

export default App;
