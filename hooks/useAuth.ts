'use client';

import { useCallback } from 'react';
import { useAppStore } from '@/lib/store';
import { mockUsers } from '@/data/mockUsers';
import { User } from '@/types';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  name: string;
  phone: string;
  confirmPassword: string;
}

export const useAuth = () => {
  const { user, setUser } = useAppStore();

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock authentication - find user by email
      const foundUser = mockUsers.find((u) => u.email === credentials.email);

      if (foundUser && credentials.password === 'password') {
        setUser(foundUser);
        return { success: true, data: foundUser };
      }

      return {
        success: false,
        error: 'Invalid email or password',
      };
    },
    [setUser]
  );

  const register = useCallback(
    async (data: RegisterData) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (data.password !== data.confirmPassword) {
        return { success: false, error: 'Passwords do not match' };
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: 'cashier',
      };

      setUser(newUser);
      return { success: true, data: newUser };
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    return { success: true };
  }, [setUser]);

  const resetPassword = useCallback(async (email: string, newPassword: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const foundUser = mockUsers.find((u) => u.email === email);
    if (foundUser) {
      return { success: true, message: 'Password reset successful' };
    }

    return { success: false, error: 'Email not found' };
  }, []);

  return {
    user,
    login,
    register,
    logout,
    resetPassword,
    isAuthenticated: !!user,
  };
};
