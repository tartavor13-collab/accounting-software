'use client';

import React from 'react';
import { Card } from '@/components';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Accounting Software
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Modern Retail Billing, Inventory & Accounting Management
          </p>
        </div>

        {/* Phase Status */}
        <Card hover className="p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ✅ Phase 3: Authentication - COMPLETE
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Complete authentication system with login, registration, and password recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Authentication Features
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✅ User Login Page</li>
                <li>✅ User Registration</li>
                <li>✅ Forgot Password</li>
                <li>✅ Password Reset</li>
                <li>✅ Logout Functionality</li>
                <li>✅ Protected Routes</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Security & Validation
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✅ Email Validation</li>
                <li>✅ Password Strength</li>
                <li>✅ Form Validation (Zod)</li>
                <li>✅ Error Handling</li>
                <li>✅ Loading States</li>
                <li>✅ Remember Me Feature</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card hover className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Login Page
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Beautiful login interface with email, password, and remember me option.
            </p>
            <Link href="/login" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
              View Page →
            </Link>
          </Card>

          <Card hover className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Registration Page
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Complete signup form with validation and password confirmation.
            </p>
            <Link href="/register" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
              View Page →
            </Link>
          </Card>

          <Card hover className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Password Recovery
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Forgot password flow with email verification and reset option.
            </p>
            <Link href="/forgot-password" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
              View Page →
            </Link>
          </Card>
        </div>

        {/* Demo Credentials */}
        <Card hover className="p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4">
            📋 Demo Credentials
          </h3>
          <div className="space-y-2 text-blue-800 dark:text-blue-300">
            <p><strong>Email:</strong> admin@accounting.com</p>
            <p><strong>Password:</strong> password</p>
            <p className="text-sm mt-4">Or create a new account via the Registration page</p>
          </div>
        </Card>

        {/* Next Phase */}
        <Card hover className="p-8 mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
          <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            🚀 Ready for Phase 4
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Phase 3 Authentication is complete and ready for production use.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Next: Phase 4 will implement the Professional Dashboard with KPIs, charts, and business metrics.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
