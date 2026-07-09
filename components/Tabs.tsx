'use client';

import React, { useState } from 'react';
import { Card } from '@/components';

interface Tab {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.value || '');

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-800">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => setActiveTab(item.value)}
            className={`px-4 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === item.value
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {items.map((item) => (
          <div key={item.value} className={activeTab === item.value ? '' : 'hidden'}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
