'use client';

import type { Metadata } from 'next';
import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';
import { useAppStore } from '@/lib/store';
import { useEffect } from 'react';
import { mockUsers } from '@/data/mockUsers';

export const metadata: Metadata = {
  title: 'Accounting Software | Billing & Inventory',
  description: 'Modern Retail Billing, Inventory & Accounting Management Software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = useAppStore((state) => state.setUser);

  useEffect(() => {
    // Set default admin user
    setUser(mockUsers[0]);
  }, [setUser]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
            <Navbar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
