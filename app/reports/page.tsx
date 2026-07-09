'use client';

import React, { useState } from 'react';
import { Card, Badge, Button, Tabs } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Download, Filter } from 'lucide-react';

const revenueByCategory = [
  { category: 'Electronics', revenue: 125000, margin: 32 },
  { category: 'Clothing', revenue: 98000, margin: 28 },
  { category: 'Groceries', revenue: 76000, margin: 18 },
  { category: 'Furniture', revenue: 65000, margin: 22 },
  { category: 'Accessories', revenue: 45000, margin: 25 },
];

const monthlyRevenue = [
  { month: 'Jan', target: 50000, actual: 45000 },
  { month: 'Feb', target: 50000, actual: 52000 },
  { month: 'Mar', target: 55000, actual: 48000 },
  { month: 'Apr', target: 60000, actual: 61000 },
  { month: 'May', target: 65000, actual: 55000 },
  { month: 'Jun', target: 70000, actual: 68000 },
];

const ReportsPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  const tabs = [
    {
      label: 'Revenue Report',
      value: 'revenue',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Revenue by Category
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={revenueByCategory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="category" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: '#fff' }} />
                <Legend />
                <Bar dataKey="revenue" fill="#556B2F" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Monthly Revenue vs Target
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: '#fff' }} />
                <Legend />
                <Line type="monotone" dataKey="target" stroke="#DAA520" strokeWidth={2} />
                <Line type="monotone" dataKey="actual" stroke="#556B2F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      ),
    },
    {
      label: 'Sales Analysis',
      value: 'sales',
      content: (
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Sales Performance Metrics
          </h2>
          <div className="space-y-4">
            {[
              { metric: 'Total Sales Orders', value: '1,284', change: '+12.5%' },
              { metric: 'Average Order Value', value: '$256', change: '+8.2%' },
              { metric: 'Return Rate', value: '2.1%', change: '-1.3%' },
              { metric: 'Customer Satisfaction', value: '4.8/5', change: '+0.2' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                <span className="text-gray-600 dark:text-gray-400">{item.metric}</span>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{item.value}</span>
                  <Badge variant="success" size="sm">{item.change}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ),
    },
    {
      label: 'Inventory Report',
      value: 'inventory',
      content: (
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Inventory Status
          </h2>
          <div className="space-y-4">
            {[
              { item: 'Electronics', quantity: 234, status: 'In Stock', reorder: false },
              { item: 'Clothing', quantity: 156, status: 'In Stock', reorder: false },
              { item: 'Groceries', quantity: 45, status: 'Low Stock', reorder: true },
              { item: 'Furniture', quantity: 12, status: 'Critical', reorder: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{item.item}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.quantity} units</p>
                </div>
                <Badge variant={item.reorder ? 'danger' : 'success'} size="sm">
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      ),
    },
  ];

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Reports & Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive business insights and performance metrics
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
              <Filter size={18} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>

        {/* Period Selector */}
        <Card className="p-4">
          <div className="flex gap-2 flex-wrap">
            {['Today', '7days', '30days', '6months', '1year'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedPeriod === period
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {period === 'Today' && 'Today'}
                {period === '7days' && 'Last 7 Days'}
                {period === '30days' && 'Last 30 Days'}
                {period === '6months' && 'Last 6 Months'}
                {period === '1year' && 'Last Year'}
              </button>
            ))}
          </div>
        </Card>

        {/* Tabs */}
        <Tabs items={tabs} />
      </div>
    </ProtectedRoute>
  );
};

export default ReportsPage;
