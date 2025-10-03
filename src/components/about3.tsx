"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

// CountUp Component
const CountUp = ({ end, prefix = '', suffix = '', duration = 2500 }: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const increment = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const formattedCount = count.toLocaleString();

  return (
    <span 
      ref={elementRef} 
      className="inline-block w-full text-ellipsis overflow-hidden whitespace-normal break-words"
    >
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

// Helper function to parse numeric values
const parseNumericValue = (value: string): { 
  number: number; 
  prefix?: string; 
  suffix?: string;
} => {
  const matches = value.match(/^([^\d]*)(\d+(?:,\d+)*(?:\.\d+)?)([^\d]*)$/);
  
  if (!matches) return { number: 0 };
  
  const [, prefix, numStr, suffix] = matches;
  const number = parseFloat(numStr.replace(/,/g, ''));
  
  return {
    number,
    prefix: prefix || undefined,
    suffix: suffix || undefined
  };
};

const renderCountUpValue = (value: string) => {
  const { number, prefix, suffix } = parseNumericValue(value);
  
  if (number === 0) return value;
  
  return (
    <CountUp 
      end={number} 
      prefix={prefix || ''} 
      suffix={suffix || ''}
      duration={2500}
    />
  );
};

const defaultCompanies = [
  {
    src: "/img/unilogo/iit.png",
    alt: "IIT",
  },
  {
    src: "/img/unilogo/sliit.png",
    alt: "SLIIT",
  },
  {
    src: "/img/unilogo/uc.png",
    alt: "University of Colombo",
  },
  {
    src: "/img/unilogo/um.png",
    alt: "University of Moratuwa",
  },
  {
    src: "/img/unilogo/nsbm.png",
    alt: "NSBM",
  },
  {
    src: "/img/unilogo/nibm.png",
    alt: "NIBM",
  },
];

const defaultAchievements = [
  { label: "Universities Reached", value: "01+" },
  { label: "Students Eligible for Discounts", value: "300,000+" },
  { label: "Partnered Shops & Brands", value: "01+" },
  { label: "Average Student Savings", value: "20%" },
];

const About3 = ({
  title = "About Us",
  description = "is Sri Lanka's first digital platform built exclusively to connect university students with verified discounts at local shops and brands. We believe student life should be affordable — and that businesses deserve smarter ways to attract loyal customers.",
  mainImage = {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    alt: "Students collaborating",
  },
  secondaryImage = {
    src: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop",
    alt: "Zent logo",
  },
  breakout = {
    src: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop",
    alt: "logo",
    title: "Exclusive Student Discounts in Sri Lanka",
    description: "Helping students save more while giving shops a smarter way to grow their customer base.",
    buttonText: "Discover Zent",
    buttonUrl: "#",
  },
  companiesTitle = "Trusted by Leading Universities",
  companies = defaultCompanies,
  achievementsTitle = "Our Impact in Numbers",
  achievementsDescription = "Building Sri Lanka's first student discount platform to empower students and help businesses grow.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 grid gap-8 text-center md:grid-cols-2 md:text-left items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full md:mx-0 mx-auto"></div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Images Grid */}
        <div className="grid gap-6 lg:grid-cols-3 mb-20">
          <div className="lg:col-span-2 group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-in-out will-change-transform">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              className="w-full h-full max-h-[620px] object-cover transform-gpu group-hover:scale-105 transition-all duration-1000 ease-out will-change-transform"
            />
          </div>
          
          <div className="flex flex-col gap-6 md:flex-row lg:flex-col">
            {/* Breakout Card */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 md:w-1/2 lg:w-auto shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out border border-blue-200 group hover:border-blue-300 will-change-transform">
              {breakout.src && (
                <Image
                  src={breakout.src}
                  alt={breakout.alt}
                  className="h-12 w-auto transform-gpu group-hover:scale-110 transition-all duration-500 ease-out will-change-transform"
                />
              )}
              <div>
                <p className="mb-3 text-xl font-bold text-gray-800">{breakout.title}</p>
                <p className="text-gray-600 leading-relaxed">{breakout.description}</p>
              </div>
              <a 
                href={breakout.buttonUrl}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-500 ease-in-out shadow-md hover:shadow-lg border border-blue-200 hover:border-blue-600 group/btn will-change-transform"
              >
                <span>{breakout.buttonText}</span>
                <svg 
                  className="w-5 h-5 ml-2 transform-gpu group-hover/btn:translate-x-1.5 transition-all duration-500 ease-out will-change-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Secondary Image */}
            <div className="md:w-1/2 lg:w-auto overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out group will-change-transform">
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-all duration-1000 ease-out will-change-transform"
              />
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div className="py-16 px-4 rounded-2xl bg-white shadow-lg mb-20">
          <p className="text-center text-lg font-semibold text-gray-700 mb-10">{companiesTitle}</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, idx) => (
              <div 
                className="transition-all duration-700 ease-in-out transform-gpu hover:scale-110 cursor-pointer will-change-transform"
                key={company.src + idx}
                onMouseEnter={() => setHoveredCompany(idx)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                <Image
                  src={company.src}
                  alt={company.alt}
                  className={`h-16 md:h-20 w-auto object-contain transition-all duration-700 ease-in-out will-change-opacity ${
                    hoveredCompany === idx ? 'opacity-100 filter-none' : 'opacity-60 grayscale'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-20 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col gap-6 text-center md:text-left mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white">{achievementsTitle}</h2>
              <div className="h-1 w-24 bg-white/50 rounded-full md:mx-0 mx-auto"></div>
              <p className="max-w-2xl text-lg text-blue-100 leading-relaxed">
                {achievementsDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {achievements.map((item, idx) => (
                <div 
                  className="flex flex-col justify-between min-h-[120px] p-5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-700 ease-in-out transform-gpu hover:-translate-y-2 hover:shadow-lg hover:shadow-white/10 border border-white/20 hover:border-white/30 will-change-transform" 
                  key={item.label + idx}
                >
                  <p className="text-xs md:text-sm text-blue-100 font-medium transition-colors duration-500 ease-in-out">{item.label}</p>
                  <div className="overflow-hidden text-ellipsis w-full">
                    <span className="text-2xl md:text-4xl font-bold text-white transition-transform duration-500 ease-in-out block text-balance">
                      {renderCountUpValue(item.value)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;