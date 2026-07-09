'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [expanded, setExpanded] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setExpanded((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setExpanded((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="border border-gray-200 dark:border-gray-800 rounded-lg">
          <button
            onClick={() => toggleItem(idx)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <h3 className="font-medium text-gray-900 dark:text-white text-left">{item.title}</h3>
            <ChevronDown
              size={18}
              className={cn(
                'text-gray-600 dark:text-gray-400 transition-transform duration-300',
                expanded.includes(idx) && 'rotate-180'
              )}
            />
          </button>
          {expanded.includes(idx) && (
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
