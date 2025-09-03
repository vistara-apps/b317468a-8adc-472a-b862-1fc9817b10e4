// Core data model types
export interface User {
  farcasterId: string;
  walletAddress: string;
  createdAt: Date;
}

export interface Token {
  tokenId: string;
  originalContentHash: string;
  timestampProof: string;
  deviceProof: string;
  creatorAddress: string;
  royaltyPercentage: number;
  isRemix: boolean;
  originalTokenId?: string;
  title: string;
  description: string;
  contentType: 'text' | 'image' | 'video';
  price: number;
  totalRoyalties: number;
}

export interface Trade {
  tradeId: string;
  tokenId: string;
  buyerAddress: string;
  sellerAddress: string;
  price: number;
  timestamp: Date;
}

export interface MarketData {
  totalTokens: number;
  totalRoyalties: number;
  averagePrice: number;
  topCreators: Array<{
    address: string;
    tokens: number;
    royalties: number;
  }>;
}
