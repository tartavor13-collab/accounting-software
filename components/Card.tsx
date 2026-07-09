'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ hover = false, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-200',
      hover && 'hover:shadow-lg hover:border-primary-500 dark:hover:border-primary-500 cursor-pointer',
      className
    )}
    {...props}
  />
));

Card.displayName = 'Card';

export default Card;
