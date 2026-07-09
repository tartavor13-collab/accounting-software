'use client';

import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, StatCard, Badge } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';
import { DollarSign, TrendingUp, ShoppingCart, Users, Package, AlertCircle, Calendar, Download } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

// Mock data for charts
const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 32000 },
  { month: 'Feb', revenue: 52000, expenses: 35000 },
  { month: 'Mar', revenue: 48000, expenses: 33000 },
  { month: 'Apr', revenue: 61000, expenses: 38000 },
  { month: 'May', revenue: 55000, expenses: 36000 },
  { month: 'Jun', revenue: 68000, expenses: 40000 },
];

const salesData = [
  { name: 'Electronics', value: 35 },
  { name: 'Clothing', value: 25 },
  { name: 'Groceries', value: 20 },
  { name: 'Furniture', value: 20 },
];

const monthlyGrowth = [
  { week: 'Week 1', sales: 12000, returns: 800 },
  { week: 'Week 2', sales: 15000, returns: 1000 },
  { week: 'Week 3', sales: 18000, returns: 900 },
  { week: 'Week 4', sales: 22000, returns: 1200 },
];

const COLORS = ['#556B2F', '#B8860B', '#DAA520', '#DC143C'];

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome back, {user?.name}! Here's your business overview.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200">
            <Download size={18} />
            Export Report
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value={329000}
            icon={<DollarSign size={24} />}
            isCurrency
            trend={12.5}
            color="primary"
          />
          <StatCard
            title="Total Orders"
            value={1284}
            icon={<ShoppingCart size={24} />}
            trend={8.2}
            color="secondary"
          />
          <StatCard
            title="Active Customers"
            value={456}
            icon={<Users size={24} />}
            trend={5.1}
            color="success"
          />
          <StatCard
            title="Product Stock"
            value={892}
            icon={<Package size={24} />}
            trend={-2.3}
            color="warning"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue vs Expenses Chart */}
          <Card className="lg:col-span-2 p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Revenue vs Expenses</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last 6 months comparison</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#556B2F" strokeWidth={2} dot={{ fill: '#556B2F', r: 4 }} />
                <Line type="monotone" dataKey="expenses" stroke="#DC143C" strokeWidth={2} dot={{ fill: '#DC143C', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Sales by Category */}
          <Card className="p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sales by Category</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Current month</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={salesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Monthly Growth */}
        <Card className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Weekly Sales Performance</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Current month performance</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="week" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="sales" fill="#556B2F" radius={[8, 8, 0, 0]} />
              <Bar dataKey="returns" fill="#DAA520" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Avg Order Value</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(256)}
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900">
                <TrendingUp size={24} className="text-primary-600 dark:text-primary-300" />
              </div>
            </div>
          </Card>

          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Conversion Rate</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3.24%</h3>
              </div>
              <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900">
                <TrendingUp size={24} className="text-secondary-600 dark:text-secondary-300" />
              </div>
            </div>
          </Card>

          <Card hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Inventory Turnover</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4.8x</h3>
              </div>
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900">
                <TrendingUp size={24} className="text-green-600 dark:text-green-300" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
