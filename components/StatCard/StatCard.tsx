'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../Card';
import { cn } from '@/utils/cn';
import { formatCurrency } from '@/utils/formatters';

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  trend?: number;
  unit?: string;
  isCurrency?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  unit,
  isCurrency = false,
  color = 'primary',
}) => {
  const colors = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
  };

  const bgColors = {
    primary: 'bg-primary-50 dark:bg-primary-900/20',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/20',
    success: 'bg-green-50 dark:bg-green-900/20',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20',
    danger: 'bg-red-50 dark:bg-red-900/20',
  };

  const isTrendPositive = trend && trend > 0;

  return (
    <Card hover className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isCurrency && typeof value === 'number' ? formatCurrency(value) : value}
            </h3>
            {unit && <span className="text-sm text-gray-500 dark:text-gray-400">{unit}</span>}
          </div>
          {trend !== undefined && (
            <div className={cn('flex items-center gap-1 mt-2', isTrendPositive ? 'text-green-600' : 'text-red-600')}>
              {isTrendPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span className="text-xs font-medium">{Math.abs(trend)}%</span>
            </div>
          )}
        </div>
        {icon && (
          <div className={cn('p-3 rounded-lg', bgColors[color], colors[color])}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;
