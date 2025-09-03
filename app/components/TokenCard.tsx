'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './Badge';
import { Heart, Share, TrendingUp } from 'lucide-react';
import { Token } from '../types';

interface TokenCardProps {
  token: Token;
  variant?: 'original' | 'remix';
  onSwap?: (token: Token) => void;
  onRemix?: (token: Token) => void;
}

export function TokenCard({ token, variant = 'original', onSwap, onRemix }: TokenCardProps) {
  const isRemix = token.isRemix;

  return (
    <Card className="token-card-hover cursor-pointer group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg line-clamp-1">{token.title}</CardTitle>
            <CardDescription className="line-clamp-2 mt-1">
              {token.description}
            </CardDescription>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="ghost">
              <Heart className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isRemix && <Badge variant="secondary">Remix</Badge>}
            <Badge variant="outline">{token.contentType}</Badge>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-accent">
              {token.price} ETH
            </div>
            {token.totalRoyalties > 0 && (
              <div className="text-sm text-textSecondary flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {token.totalRoyalties} ETH royalties
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-textSecondary">
          <div>
            Creator: {token.creatorAddress.slice(0, 8)}...
          </div>
          <div>
            {token.royaltyPercentage}% royalty
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            onClick={() => onSwap?.(token)}
            className="flex-1"
            size="sm"
          >
            Swap
          </Button>
          <Button 
            onClick={() => onRemix?.(token)}
            variant="outline"
            className="flex-1"
            size="sm"
          >
            Remix
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
