'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { Button } from '@/components';
import { useAuth } from '@/hooks/useAuth';

const LogoutPage: React.FC = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    logout();
    router.push('/login');
  };

  React.useEffect(() => {
    const timer = setTimeout(handleLogout, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
            <LogOut size={32} className="text-primary-600 dark:text-primary-300" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Logging Out
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          You are being signed out. Redirecting to login...
        </p>
        <Button onClick={handleLogout} isLoading={isLoading} size="lg">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default LogoutPage;
