'use client';

import React from 'react';
import { Card, Button, Badge } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';
import { BarChart3, Package, Users } from 'lucide-react';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome, {user?.name}! 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            You are logged in as <Badge variant="info">{user?.role}</Badge>
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900">
                <BarChart3 size={24} className="text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Phase Status</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Phase 3</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">Authentication</p>
              </div>
            </div>
          </Card>

          <Card hover className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900">
                <Package size={24} className="text-secondary-600 dark:text-secondary-300" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">✓ Phase 1</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500">Phase 2</p>
              </div>
            </div>
          </Card>

          <Card hover className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900">
                <Users size={24} className="text-green-600 dark:text-green-300" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">User Role</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                  {user?.role}
                </h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Content */}
        <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🎉 Authentication Complete!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Phase 3 has been successfully implemented with complete authentication system including:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-8">
            <li>✅ User login with email and password</li>
            <li>✅ User registration with validation</li>
            <li>✅ Forgot password functionality</li>
            <li>✅ Protected routes</li>
            <li>✅ Session management</li>
            <li>✅ Remember me feature</li>
            <li>✅ Password visibility toggle</li>
            <li>✅ Form validation with Zod</li>
          </ul>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Next Phase: Dashboard with KPIs, charts, and business metrics
          </p>
          <Link href="/logout">
            <Button variant="outline">Logout</Button>
          </Link>
        </Card>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
