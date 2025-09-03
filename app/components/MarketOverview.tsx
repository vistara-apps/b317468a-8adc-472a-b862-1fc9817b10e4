'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { MarketChart } from './MarketChart';
import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react';
import { MarketData } from '../types';

interface MarketOverviewProps {
  marketData: MarketData;
}

export function MarketOverview({ marketData }: MarketOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tokens</CardTitle>
            <Zap className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{marketData.totalTokens.toLocaleString()}</div>
            <p className="text-xs text-textSecondary">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Royalties</CardTitle>
            <DollarSign className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{marketData.totalRoyalties} ETH</div>
            <p className="text-xs text-textSecondary">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Price</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{marketData.averagePrice} ETH</div>
            <p className="text-xs text-textSecondary">
              +3% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Creators</CardTitle>
            <Users className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-textSecondary">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card>
        <CardHeader>
          <CardTitle>Market Activity</CardTitle>
          <CardDescription>Token creation and trading volume over time</CardDescription>
        </CardHeader>
        <CardContent>
          <MarketChart />
        </CardContent>
      </Card>

      {/* Top Creators */}
      <Card>
        <CardHeader>
          <CardTitle>Top Creators</CardTitle>
          <CardDescription>Creators earning the most royalties</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketData.topCreators.map((creator, index) => (
              <div key={creator.address} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                    #{index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{creator.address.slice(0, 8)}...{creator.address.slice(-6)}</p>
                    <p className="text-sm text-textSecondary">{creator.tokens} tokens</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-accent">{creator.royalties} ETH</p>
                  <p className="text-sm text-textSecondary">royalties earned</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
