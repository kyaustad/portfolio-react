"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon, SearchIcon, ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-secondary/10 rounded-full flex items-center justify-center">
              <span className="text-6xl font-bold text-secondary">404</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
              <SearchIcon className="w-5 h-5 text-red-500" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Page Not Found
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">
          Looks like you're lost
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => (window.location.href = "/")}
            variant="secondary"
            size="lg"
            className="bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <HomeIcon className="w-5 h-5" />
            Go Home
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back
          </Button>
        </div>

        {/* Quick Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-4">Quick Navigation</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => (window.location.href = "/#about")}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200 text-sm"
            >
              About
            </button>
            <button
              onClick={() => (window.location.href = "/#work")}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200 text-sm"
            >
              My Work
            </button>
            <button
              onClick={() => (window.location.href = "/#contact")}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200 text-sm"
            >
              Contact
            </button>
            <button
              onClick={() => (window.location.href = "/#github")}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200 text-sm"
            >
              GitHub Stats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
