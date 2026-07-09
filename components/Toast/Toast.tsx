'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/utils/cn';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose?: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const types = {
    success: { bg: 'bg-green-50 dark:bg-green-900', text: 'text-green-800 dark:text-green-200', icon: CheckCircle },
    error: { bg: 'bg-red-50 dark:bg-red-900', text: 'text-red-800 dark:text-red-200', icon: AlertCircle },
    info: { bg: 'bg-blue-50 dark:bg-blue-900', text: 'text-blue-800 dark:text-blue-200', icon: Info },
    warning: { bg: 'bg-yellow-50 dark:bg-yellow-900', text: 'text-yellow-800 dark:text-yellow-200', icon: AlertCircle },
  };

  const config = types[type];
  const Icon = config.icon;

  return (
    <div className={cn('flex items-center gap-3 px-4 py-3 rounded-lg border animate-fade-in', config.bg, config.text)}>
      <Icon size={20} />
      <span className="flex-1 text-sm font-medium">{message}</span>
      {onClose && (
        <button onClick={onClose} className="text-current hover:opacity-70 transition-opacity duration-200">
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default Toast;
