'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Card, Input, Alert } from '@/components';
import { useAuth } from '@/hooks/useAuth';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'admin@accounting.com',
      password: 'password',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await login({
        email: data.email,
        password: data.password,
      });

      if (result.success) {
        if (data.rememberMe) {
          localStorage.setItem('rememberEmail', data.email);
        }
        router.push('/dashboard');
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Illustration */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl" />
              <div className="relative flex flex-col items-center justify-center h-full">
                <div className="text-6xl mb-4">📊</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
                  Accounting Software
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-xs">
                  Modern billing, inventory & accounting management for your retail business
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div>
            <Card className="p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome Back
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Sign in to your account to continue
                </p>
              </div>

              {error && (
                <Alert type="error" message={error} onClose={() => setError(null)} className="mb-6" />
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Input */}
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    icon={<Mail size={18} />}
                    error={errors.email?.message}
                    {...register('email')}
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    icon={<Lock size={18} />}
                    error={errors.password?.message}
                    {...register('password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('rememberMe')}
                      className="w-4 h-4 rounded border-gray-300 text-primary-500"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary-500 hover:text-primary-600 transition-colors duration-200"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Demo Credentials Info */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-xs text-blue-800 dark:text-blue-200">
                  <p className="font-semibold mb-1">Demo Credentials:</p>
                  <p>Email: admin@accounting.com</p>
                  <p>Password: password</p>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                  className="w-full mt-6"
                  size="lg"
                >
                  Sign In
                </Button>
              </form>

              {/* Sign Up Link */}
              <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                Don't have an account?{' '}
                <Link
                  href="/register"
                  className="text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Sign up
                </Link>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
