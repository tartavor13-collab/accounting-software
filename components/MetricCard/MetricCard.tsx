'use client';

import React from 'react';
import Card from '../Card';

interface MetricCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: React.ReactNode;
  color?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, subtext, icon, color = 'primary' }) => {
  return (
    <Card hover className="p-6 flex items-start gap-4">
      {icon && (
        <div className={`p-3 rounded-lg ${color === 'primary' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300' : 'bg-secondary-100 text-secondary-600 dark:bg-secondary-900 dark:text-secondary-300'}`}>
          {icon}
        </div>
      )}
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</h3>
        {subtext && <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{subtext}</p>}
      </div>
    </Card>
  );
};

export default MetricCard;
