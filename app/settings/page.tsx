'use client';

import React, { useState } from 'react';
import { Card, Button, Input } from '@/components';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { Save, Bell, Lock, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleLogout = () => {
    router.push('/logout');
  };

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account and application settings
          </p>
        </div>

        {/* Profile Settings */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Profile Information</h2>
          <div className="space-y-4">
            <Input type="text" label="Full Name" placeholder="Enter your name" defaultValue={user?.name} />
            <Input type="email" label="Email Address" placeholder="Enter your email" defaultValue={user?.email} />
            <Input type="tel" label="Phone Number" placeholder="Enter your phone" defaultValue={user?.phone} />
            <div className="flex justify-end">
              <Button onClick={handleSave} className="flex items-center gap-2">
                <Save size={18} />
                {isSaved ? 'Saved!' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Bell size={24} />
            Notifications
          </h2>
          <div className="space-y-4">
            {[
              { label: 'Email Notifications', description: 'Receive email updates about orders and invoices' },
              { label: 'SMS Alerts', description: 'Get SMS alerts for critical updates' },
              { label: 'Low Stock Alerts', description: 'Notify when product stock is running low' },
              { label: 'Weekly Reports', description: 'Receive weekly business reports via email' },
            ].map((item, idx) => (
              <label key={idx} className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0 cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
              </label>
            ))}
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Lock size={24} />
            Security
          </h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full justify-start">
              View Login History
            </Button>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-8 border-2 border-red-500">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2">
            <LogOut size={24} />
            Danger Zone
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm text-red-800 dark:text-red-200 mb-4">
                Logging out will end your current session. You'll need to sign in again to access your account.
              </p>
              <Button variant="danger" onClick={handleLogout} className="w-full">
                Logout
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </ProtectedRoute>
  );
};

export default SettingsPage;
