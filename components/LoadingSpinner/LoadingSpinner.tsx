'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colors = {
    primary: 'border-primary-500',
    secondary: 'border-secondary-500',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={cn(
          'border-4 border-gray-200 dark:border-gray-700 rounded-full animate-spin',
          sizes[size],
          `border-t-${colors[color]}`
        )}
        style={{
          borderTopColor: color === 'primary' ? '#556B2F' : '#22c55e',
        }}
      />
      {text && <p className="text-gray-600 dark:text-gray-400 text-sm">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
