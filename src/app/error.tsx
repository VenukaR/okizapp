"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-100 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* OKIZ Logo */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/img/logo.png"
            alt="OKIZ Logo"
            className="w-24 h-24 mx-auto mb-4"
            width={96}
            height={96}
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
            Oops!
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            We're experiencing a technical issue. Our team has been notified and we're working to fix it!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={reset}
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-lg font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
          >
            <span>🔄 Try Again</span>
          </button>

          <Link
            href="/"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>🏠 Back to Home</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-500 mb-4">Need help? Try these options:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="text-red-500 hover:text-red-600 font-medium transition-colors">
              Contact Support
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/students" className="text-red-500 hover:text-red-600 font-medium transition-colors">
              Student Portal
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/shops" className="text-red-500 hover:text-red-600 font-medium transition-colors">
              Business Portal
            </Link>
          </div>
        </motion.div>

        {/* Error ID (if available) */}
        {error.digest && (
          <motion.div 
            className="mt-8 p-4 bg-gray-100 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-xs text-gray-500">
              Error ID: {error.digest}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}