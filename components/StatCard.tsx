'use client';

import React from 'react';
import { Card } from '@/components';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  isCurrency?: boolean;
  trend?: number;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  isCurrency = false,
  trend,
  color = 'primary',
}) => {
  const colorClasses = {
    primary: 'text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900',
    secondary: 'text-secondary-600 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-900',
    success: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900',
    warning: 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900',
    danger: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900',
  };

  return (
    <Card hover className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isCurrency && typeof value === 'number' ? `₹${value.toLocaleString()}` : value}
          </h3>
          {trend !== undefined && (
            <p className={`text-xs mt-2 ${
              trend > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {trend > 0 ? '+' : ''}{trend}% from yesterday
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
