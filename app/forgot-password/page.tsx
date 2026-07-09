'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Card, Input, Alert } from '@/components';
import { useAuth } from '@/hooks/useAuth';

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage: React.FC = () => {
  const { resetPassword } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await resetPassword(data.email, 'tempPassword');

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || 'Failed to reset password');
      }
    } catch (err) {
      setError('An error occurred during password reset');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="p-8">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Forgot Password?
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              {error && (
                <Alert type="error" message={error} onClose={() => setError(null)} className="mb-6" />
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email address"
                  icon={<Mail size={18} />}
                  error={errors.email?.message}
                  {...register('email')}
                />

                <Button
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                  className="w-full mt-6"
                  size="lg"
                >
                  Send Reset Link
                </Button>
              </form>

              <Link
                href="/login"
                className="flex items-center gap-2 justify-center text-primary-500 hover:text-primary-600 font-medium mt-6 transition-colors duration-200"
              >
                <ArrowLeft size={16} />
                Back to login
              </Link>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Check your email
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We've sent a password reset link to{' '}
                  <span className="font-semibold">{getValues('email')}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
                  The link will expire in 1 hour. If you don't see the email, check your spam folder.
                </p>

                <Link href="/login">
                  <Button className="w-full" size="lg">
                    Back to login
                  </Button>
                </Link>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
