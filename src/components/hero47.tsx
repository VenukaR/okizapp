import React from 'react';
import TrustedUni from './trustedUni';
import Image from 'next/image';

interface Hero47Props {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero47 = ({
  heading = "Simple scans",
  subheading = " Instant savings. More loyal customers",
  description = "OKIZ is Sri Lanka's first student-only discount platform, connecting university students with local shops through QR-powered, verified savings.",
  buttons = {
    primary: {
      text: "Learn more",
      url: "#",
    },
    secondary: {
      text: "Contact Us",
      url: "#",
    },
  },
  image = {
    src: "/img/mockupback.png",
    alt: "App Mockup",
  },
}: Hero47Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-50" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-50" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-blue-600 rounded-full animate-bounce opacity-50" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Content Section */}
          <div className="flex flex-col gap-6 lg:w-3/5">
            {/* Badge */}
            <div className="inline-block w-fit px-4 py-2 bg-blue-100 rounded-full border border-blue-200 backdrop-blur-sm">
              <p className="text-blue-700 text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Sri Lanka&apos;s #1 Student Discount Platform
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="block mb-2">{heading}</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {subheading}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-4 pt-2">
              <a
                href={buttons.primary?.url}
                className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-sm"
              >
                <svg 
                  className="w-5 h-5 mr-2 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
                <span>{buttons.primary?.text}</span>
              </a>
              
              <a
                href={buttons.secondary?.url}
                className="group inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
              >
                <span>{buttons.secondary?.text}</span>
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">300K+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">QR-Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Free to Join</span>
              </div>
            </div>
          </div>

        {/* Phone + Extra Image */}
          <div className="relative">
            {/* Background Image inside phone */}
           {/* Phone + Floating Elements */}
<div className="relative inline-block">
  {/* Background Image inside phone */}
  <div className="absolute top-2.5 left-1/2 h-[92%] w-[69%] -translate-x-[52%] overflow-hidden rounded-[35px] shadow-2xl">
    <Image
      src={image.src}
      alt={image.alt}
      className="h-full w-full object-cover object-center"
      width={400}
      height={600}
    />
  </div>

  {/* Phone Frame */}
  <Image
    className="relative z-10 drop-shadow-2xl w-80 lg:w-96"
    src="/img/phone-2.png"
    width={450}
    height={889}
    alt="iPhone mockup"
  />

  {/* Floating Stats Card */}
  <div className="absolute -right-8 top-1/4 bg-white rounded-2xl shadow-2xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300 border border-blue-100 hidden lg:block z-20">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
        <span className="text-white text-xl font-bold">20%</span>
      </div>
      <div>
        <p className="text-sm font-bold text-blue-500">Avg Savings</p>
        <p className="text-xs text-gray-500">Per Purchase</p>
      </div>
    </div>
  </div>
  

  {/* Floating QR Badge */}
  <div className="absolute -left-8 bottom-1/3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300 hidden lg:block z-20">
    <div className="flex items-center gap-2 text-white">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
      <div>
        <p className="text-sm font-bold">QR Scan</p>
        <p className="text-xs opacity-80">& Save</p>
      </div>
    </div>
  </div>
</div>

{/* 🚀 Extra Image OUTSIDE phone */}
<div className="absolute right-[-140px] bottom-[15] hidden lg:block z-30 translate-x-25 translate-y-2">
  <Image
    src="/img/extra-badge.png" 
    alt="Special Badge" 
    className="w-auto h-auto object-contain drop-shadow-xl"
    width={350}
    height={350}
  />
</div>

          </div>

        </div>
          {/* TrustedUni component added at the bottom center */}
        <div className="mt-0">
          <TrustedUni />
        </div>
      </div>
    </section>
  );
};

export default Hero47;