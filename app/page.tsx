'use client';

import React from 'react';
import { Card, Button, StatCard, Badge } from '@/components';
import { BarChart3, Package, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function Home() {
  const components = [
    { name: 'Sidebar', status: '✓', icon: '📋' },
    { name: 'Navbar', status: '✓', icon: '🔝' },
    { name: 'Button', status: '✓', icon: '🔘' },
    { name: 'Card', status: '✓', icon: '📦' },
    { name: 'Table', status: '✓', icon: '📊' },
    { name: 'Forms (Input, Textarea, Select)', status: '✓', icon: '📝' },
    { name: 'SearchBar', status: '✓', icon: '🔍' },
    { name: 'Dropdown', status: '✓', icon: '⬇️' },
    { name: 'Modal', status: '✓', icon: '🪟' },
    { name: 'Drawer', status: '✓', icon: '📂' },
    { name: 'Pagination', status: '✓', icon: '⏭️' },
    { name: 'Badge', status: '✓', icon: '🏷️' },
    { name: 'Tabs', status: '✓', icon: '📑' },
    { name: 'Accordion', status: '✓', icon: '📂' },
    { name: 'Checkbox & Radio', status: '✓', icon: '✔️' },
    { name: 'DatePicker', status: '✓', icon: '📅' },
    { name: 'Charts (Setup)', status: '✓', icon: '📈' },
    { name: 'Toast', status: '✓', icon: '🍞' },
    { name: 'Skeleton Loader', status: '✓', icon: '⏳' },
    { name: 'EmptyState', status: '✓', icon: '📭' },
    { name: 'LoadingSpinner', status: '✓', icon: '⚙️' },
    { name: 'ConfirmDialog', status: '✓', icon: '❓' },
    { name: 'Alert', status: '✓', icon: '⚠️' },
    { name: 'Breadcrumb', status: '✓', icon: '🛤️' },
    { name: 'StatCard', status: '✓', icon: '📈' },
    { name: 'MetricCard', status: '✓', icon: '🎯' },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Phase 2: Global UI Components
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          All reusable components are now ready for use across the application
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Components Created"
          value={26}
          icon={<Package size={24} />}
          color="primary"
        />
        <StatCard
          title="Design System"
          value="Complete"
          icon={<BarChart3 size={24} />}
          color="secondary"
        />
        <StatCard
          title="Ready for Phase 3"
          value="100%"
          icon={<CheckCircle size={24} />}
          color="success"
        />
      </div>

      {/* Components Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Components Created</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((comp, idx) => (
            <Card hover key={idx} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{comp.icon}</span>
                <span className="font-medium text-gray-900 dark:text-white">{comp.name}</span>
              </div>
              <Badge variant="success" size="sm">
                {comp.status}
              </Badge>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <Card hover className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Phase 2 Features Included
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Layout Components</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Responsive Sidebar with collapsible menu</li>
              <li>✓ Sticky Navbar with notifications</li>
              <li>✓ Theme toggle (Light/Dark)</li>
              <li>✓ Mobile drawer support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Form Components</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Input with error states</li>
              <li>✓ Textarea</li>
              <li>✓ Select dropdown</li>
              <li>✓ Checkbox & Radio buttons</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Data Display</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Advanced Table with sorting</li>
              <li>✓ Badges with variants</li>
              <li>✓ Stat Cards with trends</li>
              <li>✓ Breadcrumb navigation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Feedback Components</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Toast notifications</li>
              <li>✓ Alert boxes</li>
              <li>✓ Loading spinner</li>
              <li>✓ Skeleton loaders</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Next Phase */}
      <Card className="p-8 border-2 border-primary-500 bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/30 dark:to-transparent">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              🚀 Phase 2 Complete!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All global UI components are ready and reusable across the entire application.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Next: Phase 3 will implement Authentication (Login, Register, Forgot Password)
            </p>
          </div>
          <Button variant="primary" size="lg">
            Continue to Phase 3
          </Button>
        </div>
      </Card>
    </div>
  );
}
