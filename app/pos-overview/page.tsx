'use client';

import React from 'react';
import { Card, Button } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { ShoppingCart, Receipt, BarChart3, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components';

const POSOverviewPage: React.FC = () => {
  const features = [
    {
      name: 'POS Billing',
      description: 'Fast and efficient billing with product catalog',
      icon: '🛒',
      href: '/pos',
      status: '✅',
    },
    {
      name: 'Bill History',
      description: 'View, print, and download all billing records',
      icon: '📋',
      href: '/bills',
      status: '✅',
    },
    {
      name: 'Payment Analytics',
      description: 'Detailed sales and payment analytics',
      icon: '💳',
      href: '/payment-analytics',
      status: '✅',
    },
  ];

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Phase 5: POS Billing System 🎉
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Complete point of sale system with billing, payment, and analytics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Modules</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">3</h3>
              </div>
              <ShoppingCart size={32} className="text-primary-500" />
            </div>
          </Card>
          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Features</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">8+</h3>
              </div>
              <BarChart3 size={32} className="text-secondary-500" />
            </div>
          </Card>
          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Ready</p>
                <h3 className="text-3xl font-bold text-green-600">100%</h3>
              </div>
              <TrendingUp size={32} className="text-green-500" />
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Available Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Link href={feature.href} key={idx}>
                <Card hover className="p-6 h-full flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {feature.description}
                    </p>
                  </div>
                  <Badge variant="success" size="sm">
                    {feature.status}
                  </Badge>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Overview */}
        <Card hover className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Phase 5 Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🛒 POS Billing
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Product catalog with search</li>
                <li>✅ Add to cart functionality</li>
                <li>✅ Real-time quantity adjustment</li>
                <li>✅ Automatic tax calculation (18% GST)</li>
                <li>✅ Multiple payment methods</li>
                <li>✅ Payment modal with confirmation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📋 Bill History
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Complete bill records</li>
                <li>✅ Search functionality</li>
                <li>✅ Expandable bill details</li>
                <li>✅ Print and download options</li>
                <li>✅ Full bill view modal</li>
                <li>✅ Payment method tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                💳 Payment Analytics
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Hourly sales distribution</li>
                <li>✅ Transaction count tracking</li>
                <li>✅ Top products analysis</li>
                <li>✅ Date range filtering</li>
                <li>✅ Advanced charts & graphs</li>
                <li>✅ Export report functionality</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🎯 Key Metrics
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Total sales tracking</li>
                <li>✅ Transaction count</li>
                <li>✅ Average transaction value</li>
                <li>✅ Peak hours identification</li>
                <li>✅ Product performance metrics</li>
                <li>✅ Revenue analytics</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Supported Payment Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Cash', icon: '💵' },
              { name: 'Card', icon: '💳' },
              { name: 'UPI', icon: '📱' },
            ].map((method, idx) => (
              <div key={idx} className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <div className="text-3xl mb-2">{method.icon}</div>
                <p className="font-medium text-gray-900 dark:text-white">{method.name}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="p-8 border-2 border-primary-500 bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/30 dark:to-transparent">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                🚀 Phase 5 Complete!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional POS billing system with complete payment processing, history, and analytics.
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>✅ Fast billing interface</p>
                <p>✅ Real-time cart management</p>
                <p>✅ Payment processing</p>
                <p>✅ Comprehensive bill tracking</p>
                <p>✅ Advanced analytics</p>
              </div>
            </div>
            <Button variant="primary" size="lg" asChild>
              <Link href="/pos">Start Billing</Link>
            </Button>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
};

export default POSOverviewPage;
