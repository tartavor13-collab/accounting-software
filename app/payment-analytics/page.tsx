'use client';

import React, { useState } from 'react';
import { Card, Button, Input, Select, DateRangePicker } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Filter } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const salesByHour = [
  { hour: '08:00', sales: 2500, transactions: 8 },
  { hour: '09:00', sales: 3200, transactions: 11 },
  { hour: '10:00', sales: 2800, transactions: 9 },
  { hour: '11:00', sales: 4100, transactions: 14 },
  { hour: '12:00', sales: 5600, transactions: 19 },
  { hour: '13:00', sales: 4200, transactions: 15 },
  { hour: '14:00', sales: 3800, transactions: 13 },
  { hour: '15:00', sales: 4500, transactions: 16 },
];

const topProducts = [
  { name: 'Laptop', sales: 12500, units: 8 },
  { name: 'Monitor', sales: 9800, units: 20 },
  { name: 'Keyboard', sales: 7500, units: 85 },
  { name: 'Mouse', sales: 6200, units: 150 },
  { name: 'USB Cable', sales: 4800, units: 280 },
];

const PaymentAnalyticsPage: React.FC = () => {
  const [dateRange, setDateRange] = useState('today');

  const totalSales = salesByHour.reduce((sum, item) => sum + item.sales, 0);
  const totalTransactions = salesByHour.reduce((sum, item) => sum + item.transactions, 0);
  const avgTransaction = totalSales / totalTransactions;

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              💳 Payment Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sales performance and transaction analysis
            </p>
          </div>
          <Button>
            <Download size={18} />
            Export Report
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setDateRange('today')}
              className={`px-4 py-2 rounded-lg transition-all ${
                dateRange === 'today'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setDateRange('week')}
              className={`px-4 py-2 rounded-lg transition-all ${
                dateRange === 'week'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setDateRange('month')}
              className={`px-4 py-2 rounded-lg transition-all ${
                dateRange === 'month'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              This Month
            </button>
          </div>
        </Card>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card hover className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Sales</p>
            <h3 className="text-3xl font-bold text-primary-600 mb-2">
              {formatCurrency(totalSales)}
            </h3>
            <p className="text-xs text-gray-500">+12.5% from yesterday</p>
          </Card>
          <Card hover className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Transactions</p>
            <h3 className="text-3xl font-bold text-secondary-600 mb-2">{totalTransactions}</h3>
            <p className="text-xs text-gray-500">Avg: {avgTransaction.toFixed(0)} per transaction</p>
          </Card>
          <Card hover className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Avg Transaction</p>
            <h3 className="text-3xl font-bold text-green-600 mb-2">
              {formatCurrency(avgTransaction)}
            </h3>
            <p className="text-xs text-gray-500">+5.2% from yesterday</p>
          </Card>
          <Card hover className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Peak Hour</p>
            <h3 className="text-3xl font-bold text-orange-600 mb-2">12:00 PM</h3>
            <p className="text-xs text-gray-500">{formatCurrency(5600)} in sales</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales by Hour */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Hourly Sales Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesByHour}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: '#fff' }} />
                <Bar dataKey="sales" fill="#556B2F" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Transactions by Hour */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Transactions by Hour
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesByHour}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: '#fff' }} />
                <Line
                  type="monotone"
                  dataKey="transactions"
                  stroke="#DAA520"
                  strokeWidth={2}
                  dot={{ fill: '#DAA520', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Top Products */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Top Products
          </h2>
          <div className="space-y-3">
            {topProducts.map((product, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{product.units} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary-600">{formatCurrency(product.sales)}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {((product.sales / totalSales) * 100).toFixed(1)}% of sales
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
};

export default PaymentAnalyticsPage;
