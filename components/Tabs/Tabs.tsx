'use client';

import React, { useState } from 'react';
import { cn } from '@/utils/cn';

interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ items, defaultValue, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0]?.value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex gap-1 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => handleTabChange(item.value)}
            className={cn(
              'px-4 py-3 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap',
              activeTab === item.value
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {items.find((item) => item.value === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
