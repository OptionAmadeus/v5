import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { Footer } from '../components/layout/Footer';

export function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}