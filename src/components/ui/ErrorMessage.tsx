import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
}

export function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <p className="text-red-700">{message}</p>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="ml-auto text-red-400 hover:text-red-500"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
}