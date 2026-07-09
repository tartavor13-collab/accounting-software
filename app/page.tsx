import React from "react";
import { Card, Button } from "@/components";

export default function Home() {
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

        {/* Phase 1 Status */}
        <Card hover className="p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ✅ Phase 1: Project Foundation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Phase 1 has been successfully completed with the following setup:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Framework & Tools
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✓ Next.js 15 with App Router</li>
                <li>✓ React 19</li>
                <li>✓ TypeScript 5.3</li>
                <li>✓ Tailwind CSS 3.4</li>
                <li>✓ Dark Mode Support</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Libraries & Utilities
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✓ Zustand (State Management)</li>
                <li>✓ React Hook Form + Zod</li>
                <li>✓ Recharts (Charts)</li>
                <li>✓ TanStack Table</li>
                <li>✓ Lucide React Icons</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Configuration Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card hover className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Color System
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Configured with:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary-500" />
                <span className="text-sm">Primary: #556B2F</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-secondary-500" />
                <span className="text-sm">Secondary: #22c55e</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-sidebar" />
                <span className="text-sm">Sidebar: #111827</span>
              </div>
            </div>
          </Card>

          <Card hover className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Typography
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Font Family: Inter
            </p>
            <div className="space-y-2">
              <p className="text-xs font-light">Light (400)</p>
              <p className="text-xs font-medium">Medium (500)</p>
              <p className="text-xs font-semibold">Semibold (600)</p>
              <p className="text-xs font-bold">Bold (700)</p>
            </div>
          </Card>

          <Card hover className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Project Structure
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Organized with:
            </p>
            <ul className="text-xs text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>• app/ - Next.js pages</li>
              <li>• components/ - UI Components</li>
              <li>• features/ - Feature modules</li>
              <li>• hooks/ - Custom hooks</li>
              <li>• types/ - TypeScript types</li>
              <li>• utils/ - Utilities</li>
              <li>• data/ - Mock data</li>
            </ul>
          </Card>
        </div>

        {/* Utilities Created */}
        <Card hover className="p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Utilities Created
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Formatting
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• formatCurrency() - INR formatting</li>
                <li>• formatNumber() - Number formatting</li>
                <li>• formatPercentage() - Percentage</li>
                <li>• formatDate() - Date formatting</li>
                <li>• formatDateTime() - DateTime formatting</li>
                <li>• formatTime() - Time formatting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Calculations
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• calculateGST() - GST calculation</li>
                <li>• calculateDiscount() - Discount amount</li>
                <li>• calculateProfit() - Profit calculation</li>
                <li>• calculateProfitMargin() - Margin %</li>
                <li>• calculateMarkup() - Markup %</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Next Phase */}
        <Card hover className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-secondary-900">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            🚀 Ready for Phase 2
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Phase 1 is complete. The project foundation is ready with all configurations, utilities, hooks, and base components set up.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Next: Phase 2 will include Global UI Components (Sidebar, Navbar, Buttons, Cards, Tables, Forms, Modals, etc.)
          </p>
        </Card>
      </div>
    </div>
  );
}
