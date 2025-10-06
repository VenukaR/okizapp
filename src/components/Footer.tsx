"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaAppStore, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-footer text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Branding & About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center">
                <Image
                  src="/img/logo.png"
                  alt="OKIZ Logo"
                  width={70}
                  height={70}
                  className="mr-3"
                />
                
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Unlocking a world of student discounts from thousands of stores online and in-store. OKIZ helps students save on what they need, want, and love.
            </p>
            <div className="flex space-x-4 mb-8">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebookF className="text-white" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="text-white" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-white" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn className="text-white" />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaYoutube className="text-white" />
              </motion.a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#" 
                className="flex items-center px-4 py-2 bg-black rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaAppStore className="mr-2 text-xl" />
                <div>
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </motion.a>
              <motion.a 
                href="#" 
                className="flex items-center px-4 py-2 bg-black rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGooglePlay className="mr-2 text-xl" />
                <div>
                  <p className="text-xs">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "For Students", href: "/students" },
                { label: "For Businesses", href: "/shops" },
                { label: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Student Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Student Discounts", href: "/students#discounts" },
                { label: "How to Register", href: "/students#register" },
                { label: "Download App", href: "/students#download" },
                { label: "Why Choose Us", href: "/students#why-choose-us" },
                { label: "University Partners", href: "/#universities" },
              ].map((category, index) => (
                <li key={index}>
                  <Link href={category.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Business Partners</h3>
            <ul className="space-y-3">
              {[
                { label: "Get Started", href: "/shops#get-started" },
                { label: "Partner Benefits", href: "/shops#partner" },
                { label: "Pricing Plans", href: "/shops#pricing" },
                { label: "Join Waitlist", href: "/shops#waitlist" },
                { label: "Contact Sales", href: "/contact" },
              ].map((support, index) => (
                <li key={index}>
                  <Link href={support.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {support.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} OKIZ. All rights reserved. Developed by OKIZ Team.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;