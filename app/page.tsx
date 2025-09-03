'use client';

import { useState } from 'react';
import { FrameHeader } from './components/FrameHeader';
import { Sidebar } from './components/Sidebar';
import { TokenCard } from './components/TokenCard';
import { CreateTokenForm } from './components/CreateTokenForm';
import { MarketOverview } from './components/MarketOverview';
import { TokenPreview } from './components/TokenPreview';
import { FloatingElements } from './components/FloatingElements';
import { useTokenData } from './hooks/useTokenData';
import { Token } from './types';

export default function Home() {
  const [activeTab, setActiveTab] = useState('market');
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const { tokens, marketData, loading, createToken } = useTokenData();

  const handleCreateToken = async (tokenData: any) => {
    const newToken = await createToken(tokenData);
    console.log('Token created:', newToken);
  };

  const handleTokenSwap = (token: Token) => {
    setSelectedToken(token);
  };

  const handleTokenRemix = (token: Token) => {
    console.log('Remixing token:', token);
    setActiveTab('create');
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      );
    }

    switch (activeTab) {
      case 'market':
        return marketData ? <MarketOverview marketData={marketData} /> : null;
      
      case 'discover':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Discover Tokens</h2>
              <div className="text-sm text-textSecondary">
                {tokens.length} tokens found
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokens.map((token) => (
                <TokenCard
                  key={token.tokenId}
                  token={token}
                  variant={token.isRemix ? 'remix' : 'original'}
                  onSwap={handleTokenSwap}
                  onRemix={handleTokenRemix}
                />
              ))}
            </div>
          </div>
        );
      
      case 'create':
        return <CreateTokenForm onCreateToken={handleCreateToken} />;
      
      case 'royalties':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your Royalties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Total Earned</h3>
                <p className="text-2xl font-bold text-accent">2.45 ETH</p>
                <p className="text-sm text-textSecondary">from 12 tokens</p>
              </div>
              <div className="bg-surface/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">This Month</h3>
                <p className="text-2xl font-bold text-accent">0.34 ETH</p>
                <p className="text-sm text-textSecondary">+18% vs last month</p>
              </div>
              <div className="bg-surface/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Active Remixes</h3>
                <p className="text-2xl font-bold">7</p>
                <p className="text-sm text-textSecondary">generating royalties</p>
              </div>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your Profile</h2>
            <div className="bg-surface/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Your Tokens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tokens.slice(0, 4).map((token) => (
                  <TokenCard
                    key={token.tokenId}
                    token={token}
                    variant={token.isRemix ? 'remix' : 'original'}
                    onSwap={handleTokenSwap}
                    onRemix={handleTokenRemix}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingElements />
      
      <FrameHeader />
      
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>

      <TokenPreview
        token={selectedToken!}
        isOpen={!!selectedToken}
        onClose={() => setSelectedToken(null)}
      />
    </div>
  );
}
