'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="w-4 h-4 appearance-none border-2 border-gray-300 dark:border-gray-600 rounded transition-all duration-200 cursor-pointer checked:bg-primary-500 checked:border-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            {...props}
          />
          {props.checked && (
            <Check size={14} className="absolute inset-0 m-auto text-white pointer-events-none" />
          )}
        </div>
        {label && <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
