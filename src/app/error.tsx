"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon, RefreshCwIcon, AlertTriangleIcon } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center">
            <AlertTriangleIcon className="w-12 h-12 text-red-500" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-200 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">
          Something went wrong
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          We encountered an unexpected error. Don't worry, it happens to the
          best of us.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            variant="secondary"
            size="lg"
            className="bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <RefreshCwIcon className="w-5 h-5" />
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <HomeIcon className="w-5 h-5" />
            Go Home
          </Button>
        </div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 text-left">
            <summary className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors">
              Error Details
            </summary>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <pre className="text-sm text-gray-300 overflow-auto">
                {error.message}
              </pre>
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
