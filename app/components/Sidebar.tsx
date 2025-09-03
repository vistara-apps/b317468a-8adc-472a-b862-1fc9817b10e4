'use client';

import { useState } from 'react';
import { 
  Zap, 
  PieChart, 
  DollarSign, 
  Search, 
  TrendingUp,
  User
} from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'market', label: 'Market', icon: TrendingUp },
  { id: 'royalties', label: 'Royalties', icon: DollarSign },
  { id: 'discover', label: 'Discover', icon: Search },
  { id: 'create', label: 'Create', icon: Zap },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-64 bg-surface/30 border-r border-surface backdrop-blur-sm p-4">
      <nav className="space-y-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={clsx(
                'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors',
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'text-textSecondary hover:bg-surface hover:text-textPrimary'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
