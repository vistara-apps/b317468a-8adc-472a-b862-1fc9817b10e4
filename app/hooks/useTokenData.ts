'use client';

import { useState, useEffect } from 'react';
import { Token, MarketData } from '../types';

// Mock data for development
const mockTokens: Token[] = [
  {
    tokenId: '1',
    originalContentHash: '0x123...',
    timestampProof: '0x456...',
    deviceProof: '0x789...',
    creatorAddress: '0xabc123...',
    royaltyPercentage: 5,
    isRemix: false,
    title: 'The Future of Web3',
    description: 'An insightful post about decentralization',
    contentType: 'text',
    price: 0.05,
    totalRoyalties: 0.15,
  },
  {
    tokenId: '2',
    originalContentHash: '0x124...',
    timestampProof: '0x457...',
    deviceProof: '0x790...',
    creatorAddress: '0xdef456...',
    royaltyPercentage: 3,
    isRemix: true,
    originalTokenId: '1',
    title: 'Web3 Remix: DeFi Perspective',
    description: 'Building on the future of web3 with DeFi insights',
    contentType: 'text',
    price: 0.03,
    totalRoyalties: 0.08,
  },
];

const mockMarketData: MarketData = {
  totalTokens: 1243,
  totalRoyalties: 156.7,
  averagePrice: 0.045,
  topCreators: [
    { address: '0xabc123...', tokens: 45, royalties: 12.3 },
    { address: '0xdef456...', tokens: 32, royalties: 8.9 },
    { address: '0x789abc...', tokens: 28, royalties: 7.1 },
  ],
};

export function useTokenData() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTokens(mockTokens);
      setMarketData(mockMarketData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const createToken = async (tokenData: Partial<Token>) => {
    const newToken: Token = {
      tokenId: (tokens.length + 1).toString(),
      originalContentHash: `0x${Math.random().toString(16).substr(2, 40)}`,
      timestampProof: `0x${Math.random().toString(16).substr(2, 40)}`,
      deviceProof: `0x${Math.random().toString(16).substr(2, 40)}`,
      creatorAddress: '0x' + Math.random().toString(16).substr(2, 40),
      royaltyPercentage: tokenData.royaltyPercentage || 5,
      isRemix: false,
      title: tokenData.title || 'Untitled Token',
      description: tokenData.description || '',
      contentType: tokenData.contentType || 'text',
      price: tokenData.price || 0.01,
      totalRoyalties: 0,
    };

    setTokens(prev => [...prev, newToken]);
    return newToken;
  };

  return {
    tokens,
    marketData,
    loading,
    createToken,
  };
}
