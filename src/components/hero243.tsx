import React from "react";
import { ContainerTextFlip } from "./ui/shadcn-io/container-text-flip";

const Hero243 = () => {
  const words = ["Student Discounts", "Exclusive Deals", "New Promotions", "Boost Sales"];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="font-bold text-sm">Grow Your Sales Weekly</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
            <span className="block mb-3">Boost Your Business With</span>
            <ContainerTextFlip
              words={words}
              className="inline-block relative text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary-light"
            />
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
           OKIZ lets local shops attract university students with exclusive discounts, track redemptions, and increase repeat customers across Sri Lanka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <span>Get Started Now</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero243;
