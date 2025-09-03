'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Zap, Upload, Percent } from 'lucide-react';

interface CreateTokenFormProps {
  onCreateToken: (tokenData: any) => void;
}

export function CreateTokenForm({ onCreateToken }: CreateTokenFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contentType: 'text' as const,
    royaltyPercentage: 5,
    price: 0.01,
    content: '',
  });

  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    
    // Simulate ZK proof generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await onCreateToken(formData);
    setIsCreating(false);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      contentType: 'text',
      royaltyPercentage: 5,
      price: 0.01,
      content: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Create Token
          </CardTitle>
          <CardDescription>
            Transform your content into a ZK-verified, remixable token with automated royalty distribution
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 bg-surface rounded-md border border-surface text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter token title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Description
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 bg-surface rounded-md border border-surface text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Describe your content"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Content Type
              </label>
              <select
                value={formData.contentType}
                onChange={(e) => setFormData(prev => ({ ...prev, contentType: e.target.value as any }))}
                className="w-full px-3 py-2 bg-surface rounded-md border border-surface text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-textPrimary mb-2">
                  <Percent className="w-4 h-4 inline mr-1" />
                  Royalty Percentage
                </label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.1"
                  value={formData.royaltyPercentage}
                  onChange={(e) => setFormData(prev => ({ ...prev, royaltyPercentage: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 bg-surface rounded-md border border-surface text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-textPrimary mb-2">
                  Initial Price (ETH)
                </label>
                <input
                  type="number"
                  min="0.001"
                  step="0.001"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 bg-surface rounded-md border border-surface text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Content
              </label>
              <div className="border-2 border-dashed border-surface rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-textSecondary mx-auto mb-4" />
                <p className="text-textSecondary mb-2">
                  Upload your content or paste text
                </p>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 bg-surface rounded-md border border-surface text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Enter your content here..."
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isCreating}
            >
              {isCreating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating ZK Proof...
                </>
              ) : (
                'Create Token'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
