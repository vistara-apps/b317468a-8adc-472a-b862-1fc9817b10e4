'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './Badge';
import { X, ExternalLink, Share, Copy } from 'lucide-react';
import { Token } from '../types';

interface TokenPreviewProps {
  token: Token;
  isOpen: boolean;
  onClose: () => void;
}

export function TokenPreview({ token, isOpen, onClose }: TokenPreviewProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Token Preview</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant={token.isRemix ? 'secondary' : 'default'}>
                {token.isRemix ? 'Remix' : 'Original'}
              </Badge>
              <Badge variant="outline">{token.contentType}</Badge>
            </div>
            
            <h2 className="text-xl font-bold">{token.title}</h2>
            <p className="text-textSecondary">{token.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 bg-surface/50 rounded-lg">
            <div>
              <p className="text-sm text-textSecondary">Price</p>
              <p className="font-bold text-accent">{token.price} ETH</p>
            </div>
            <div>
              <p className="text-sm text-textSecondary">Royalty</p>
              <p className="font-bold">{token.royaltyPercentage}%</p>
            </div>
            <div>
              <p className="text-sm text-textSecondary">Creator</p>
              <p className="font-mono text-sm">{token.creatorAddress.slice(0, 8)}...</p>
            </div>
            <div>
              <p className="text-sm text-textSecondary">Total Royalties</p>
              <p className="font-bold text-accent">{token.totalRoyalties} ETH</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">ZK Proofs</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-textSecondary">Timestamp:</span>
                <code className="font-mono">{token.timestampProof.slice(0, 12)}...</code>
              </div>
              <div className="flex justify-between">
                <span className="text-textSecondary">Device:</span>
                <code className="font-mono">{token.deviceProof.slice(0, 12)}...</code>
              </div>
              <div className="flex justify-between">
                <span className="text-textSecondary">Content:</span>
                <code className="font-mono">{token.originalContentHash.slice(0, 12)}...</code>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Swap
            </Button>
            <Button variant="outline" className="flex-1">
              Remix
            </Button>
            <Button variant="ghost" size="icon">
              <Share className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
