'use client';

import { Search, Hash } from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

export function FrameHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-surface">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Hash className="w-5 h-5 text-black font-bold" />
          </div>
          <h1 className="text-3xl font-bold text-textPrimary">Redit</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-textSecondary" />
          <input
            type="text"
            placeholder="Not an interface!"
            className="pl-10 pr-4 py-2 bg-surface rounded-lg border border-surface text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
          />
        </div>
        <ConnectWallet />
      </div>
    </header>
  );
}
