'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  Settings,
  HelpCircle,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn } from '@/utils/cn';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  submenu?: MenuItem[];
}

const Sidebar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useAppStore();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: <BarChart3 size={20} />,
      href: '/dashboard',
    },
    {
      label: 'POS Billing',
      icon: <ShoppingCart size={20} />,
      href: '/pos',
    },
    {
      label: 'Products',
      icon: <Package size={20} />,
      href: '/products',
      submenu: [
        { label: 'All Products', icon: null, href: '/products' },
        { label: 'Categories', icon: null, href: '/products/categories' },
        { label: 'Inventory', icon: null, href: '/products/inventory' },
      ],
    },
    {
      label: 'Customers',
      icon: <Users size={20} />,
      href: '/customers',
    },
    {
      label: 'Suppliers',
      icon: <Users size={20} />,
      href: '/suppliers',
    },
    {
      label: 'Purchase',
      icon: <TrendingUp size={20} />,
      href: '/purchase',
    },
    {
      label: 'Accounting',
      icon: <BarChart3 size={20} />,
      href: '/accounting',
      submenu: [
        { label: 'Ledger', icon: null, href: '/accounting/ledger' },
        { label: 'Income', icon: null, href: '/accounting/income' },
        { label: 'Expenses', icon: null, href: '/accounting/expenses' },
        { label: 'Reports', icon: null, href: '/accounting/reports' },
      ],
    },
    {
      label: 'GST',
      icon: <TrendingUp size={20} />,
      href: '/gst',
    },
    {
      label: 'Reports',
      icon: <BarChart3 size={20} />,
      href: '/reports',
    },
    {
      label: 'Settings',
      icon: <Settings size={20} />,
      href: '/settings',
    },
    {
      label: 'Support',
      icon: <HelpCircle size={20} />,
      href: '/support',
    },
  ];

  const toggleMenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary-500 text-white p-2 rounded-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen bg-sidebar text-white transition-all duration-300 z-40 overflow-y-auto',
          sidebarOpen ? 'w-64' : 'w-0 lg:w-20',
          'lg:relative lg:z-10'
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-center h-20">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">AccSoft</h1>
          ) : (
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center font-bold">
              A
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => item.submenu && toggleMenu(item.label)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                  'hover:bg-gray-700 text-gray-300 hover:text-white',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
                )}
                title={!sidebarOpen ? item.label : ''}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={cn(
                          'transition-transform duration-200',
                          expandedMenu === item.label && 'rotate-180'
                        )}
                      />
                    )}
                  </>
                )}
              </button>

              {/* Submenu */}
              {sidebarOpen && item.submenu && expandedMenu === item.label && (
                <div className="ml-4 mt-1 space-y-1 border-l border-gray-700 pl-2">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white rounded transition-colors duration-200"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
