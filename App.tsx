import React, { useState } from 'react';
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
import { matchProducts, MatchedProduct } from './lib/aiService';

const App: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [matchedProducts, setMatchedProducts] = useState<MatchedProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      const products = await matchProducts(query);
      setMatchedProducts(products);
      setShowResults(true);
      // Scroll to results after a short delay
      setTimeout(() => {
        document.getElementById('ai-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans text-primary antialiased selection:bg-brand selection:text-white bg-white">
      {/* Layout Header */}
      <TopBar />
      <Header />

      {/* Main Content Flow - Storytelling Approach */}
      <main className="flex flex-col gap-0 w-full overflow-x-hidden">

        {/* 1. The Hook: AI Magic */}
        <Hero onSearch={handleSearch} isLoading={isLoading} />
        <AIResults visible={showResults} products={matchedProducts} />

        {/* 2. Exploration: Shop By Relation (Arch Cards) */}
        <CategoryArches />

        {/* 3. Desire: Trending Products (Levitating Grid) */}
        <TrendingLevitation />

        {/* 4. Innovation: The Feature Product (QR Codes - Dark Mode) */}
        <TechLove />

        {/* 5. Depth: All Categories (Bento Grid) */}
        <CollectionsBento />

        {/* 6. Trust: How it works (Timeline) */}
        <ProcessFlow />

        {/* 7. Proof: Testimonials (Marquee) */}
        <LoveWall />

        {/* 8. Engagement: Instagram (Infinite Stream) */}
        <UnboxingStream />
      </main>

      {/* Layout Footer */}
      <Footer />
    </div>
  );
};

export default App;
