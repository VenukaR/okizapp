"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary-lightdark rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. But don't worry, there are plenty of discounts waiting for you!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-lightdark to-primary-dark text-white text-lg font-bold rounded-xl hover:from-primary hover:to-primary-verydark transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
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

          <Link
            href="/students"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-dark font-bold rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>🎓 Student Discounts</span>
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
          <p className="text-gray-500 mb-4">Or explore these popular sections:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shops" className="text-primary hover:text-primary-dark font-medium transition-colors">
              For Businesses
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-primary hover:text-primary-dark font-medium transition-colors">
              Contact Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/#aboutus" className="text-primary hover:text-primary-dark font-medium transition-colors">
              About OKIZ
            </Link>
          </div>
        </motion.div>

        {/* Fun Element */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-gray-400 italic">
            💡 Did you know? OKIZ students save an average of 20% on every purchase!
          </p>
        </motion.div>
      </div>
    </div>
  );
}