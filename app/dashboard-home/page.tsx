'use client';

import React from 'react';
import { Card, Button, StatCard, Badge } from '@/components';
import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { BarChart3, Package, Users, ShoppingCart, TrendingUp, CheckCircle } from 'lucide-react';

export default function DashboardHome() {
  const features = [
    { name: 'Dashboard Overview', icon: '📊', status: '✓', href: '/dashboard' },
    { name: 'Reports & Analytics', icon: '📈', status: '✓', href: '/reports' },
    { name: 'Products Management', icon: '📦', status: '✓', href: '/products' },
    { name: 'Customers', icon: '👥', status: '✓', href: '/customers' },
    { name: 'Invoices', icon: '📄', status: '✓', href: '/invoices' },
    { name: 'Settings', icon: '⚙️', status: '✓', href: '/settings' },
  ];

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Phase 4: Professional Dashboard 🎉
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Complete dashboard with KPIs, charts, and business modules
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Dashboard Pages"
            value={6}
            icon={<BarChart3 size={24} />}
            color="primary"
          />
          <StatCard
            title="Charts Implemented"
            value={4}
            icon={<TrendingUp size={24} />}
            color="secondary"
          />
          <StatCard
            title="Ready for Production"
            value="100%"
            icon={<CheckCircle size={24} />}
            color="success"
          />
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Available Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <Link href={feature.href} key={idx}>
                <Card hover className="p-4 h-full flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{feature.name}</span>
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
            Phase 4 Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Dashboard Page
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ KPI Cards with trends</li>
                <li>✅ Revenue vs Expenses chart</li>
                <li>✅ Sales by category (pie chart)</li>
                <li>✅ Weekly performance (bar chart)</li>
                <li>✅ Key metrics</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Business Modules
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Products Management</li>
                <li>✅ Customer Database</li>
                <li>✅ Invoice System</li>
                <li>✅ Reports & Analytics</li>
                <li>✅ Settings & Profile</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Chart Components
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Line Charts (Recharts)</li>
                <li>✅ Bar Charts</li>
                <li>✅ Pie Charts</li>
                <li>✅ Responsive Design</li>
                <li>✅ Dark Mode Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Data Management
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ Search & Filter</li>
                <li>✅ Data Tables</li>
                <li>✅ Modal Forms</li>
                <li>✅ CRUD Operations</li>
                <li>✅ Mock Data</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="p-8 border-2 border-primary-500 bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/30 dark:to-transparent">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                🚀 Phase 4 Complete!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional dashboard with all business modules, charts, and analytics ready for use.
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>📊 Interactive Charts (Line, Bar, Pie)</p>
                <p>📈 KPI Cards with Trends</p>
                <p>🎯 6 Complete Business Pages</p>
                <p>🎨 Fully Responsive Design</p>
                <p>🌙 Dark Mode Support</p>
              </div>
            </div>
            <Button variant="primary" size="lg" asChild>
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
