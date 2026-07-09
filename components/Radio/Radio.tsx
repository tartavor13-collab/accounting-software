'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({ label, className, ...props }, ref) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          ref={ref}
          type="radio"
          className="w-4 h-4 appearance-none border-2 border-gray-300 dark:border-gray-600 rounded-full transition-all duration-200 cursor-pointer checked:border-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          {...props}
        />
        {props.checked && (
          <div className="absolute inset-0 m-auto w-2 h-2 bg-primary-500 rounded-full pointer-events-none" />
        )}
      </div>
      {label && <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>}
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
