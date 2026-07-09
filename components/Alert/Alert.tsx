'use client';

import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { cn } from '@/utils/cn';

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type = 'info', title, message, onClose }) => {
  const types = {
    info: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', icon: Info, text: 'text-blue-800 dark:text-blue-200' },
    success: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', icon: CheckCircle, text: 'text-green-800 dark:text-green-200' },
    warning: { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800', icon: AlertCircle, text: 'text-yellow-800 dark:text-yellow-200' },
    error: { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', icon: AlertCircle, text: 'text-red-800 dark:text-red-200' },
  };

  const config = types[type];
  const Icon = config.icon;

  return (
    <div className={cn('flex gap-3 p-4 rounded-lg border', config.bg, config.border, config.text)}>
      <Icon size={20} className="flex-shrink-0" />
      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-current hover:opacity-70 transition-opacity duration-200">
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
