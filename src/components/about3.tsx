"use client";

import React from "react";
import ClippedMediaGallery from "./ui/clip-path-image";

interface About3Props {
  mission?: {
    title: string;
    description: string;
  };
  vision?: {
    title: string;
    description: string;
  };
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

// CountUp Component
const CountUp = ({
  end,
  prefix = "",
  suffix = "",
  duration = 2500,
}: {
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

  return <span ref={elementRef}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const parseNumericValue = (value: string) => {
  const matches = value.match(/^([^\d]*)(\d+(?:,\d+)*(?:\.\d+)?)([^\d]*)$/);
  if (!matches) return { number: 0 };
  const [, prefix, numStr, suffix] = matches;
  const number = parseFloat(numStr.replace(/,/g, ""));
  return { number, prefix: prefix || undefined, suffix: suffix || undefined };
};

const renderCountUpValue = (value: string) => {
  const { number, prefix, suffix } = parseNumericValue(value);
  if (number === 0) return value;
  return <CountUp end={number} prefix={prefix || ""} suffix={suffix || ""} duration={2500} />;
};

const defaultAchievements = [
  { label: "Universities Reached", value: "01+" },
  { label: "Students Eligible", value: "300,000+" },
  { label: "Partner Shops", value: "01+" },
  { label: "Average Savings", value: "20%" },
];

const About3 = ({
  mission = {
    title: "Our Mission",
    description:
      "To make student life more affordable by connecting verified university students with exclusive discounts at local shops across Sri Lanka, while helping businesses grow their customer base.",
  },
  vision = {
    title: "Our Vision",
    description:
      "To become Sri Lanka's leading student benefits platform, creating a thriving ecosystem where students save money and local businesses prosper through meaningful connections.",
  },
  achievementsTitle = "Our Impact in Numbers",
  achievementsDescription =
    "Building Sri Lanka's first student discount platform to empower students and help businesses grow.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 grid gap-8 text-center md:grid-cols-2 md:text-left items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-lightdark to-primary-dark bg-clip-text text-transparent mb-4">
              About Us
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-lightdark to-primary-dark rounded-full md:mx-0 mx-auto"></div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sri Lanka&apos;s first digital platform built exclusively to connect university students with verified discounts at local shops and brands. Student life should be affordable — businesses deserve smarter ways to attract loyal customers.
          </p>
        </div>

       {/* Main Content */}
<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
  {/* Left: ClippedMediaGallery */}
  <div className="flex justify-center items-center">
    <ClippedMediaGallery />
  </div>

  {/* Right: Mission & Vision stacked vertically */}
  <div className="flex flex-col space-y-6">
    {/* Mission Card */}
    <div className="group flex items-start gap-4">
      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{mission.title}</h3>
        <p className="text-gray-600 leading-relaxed">{mission.description}</p>
      </div>
    </div>

    {/* Vision Card */}
    <div className="group flex items-start gap-4">
      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{vision.title}</h3>
        <p className="text-gray-600 leading-relaxed">{vision.description}</p>
      </div>
    </div>
  </div>
</div>


        {/* Achievements */}
        <div className="relative overflow-hidden rounded-3xl bg-primary-lightdark p-12 md:p-16 shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{achievementsTitle}</h2>
              <p className="max-w-2xl mx-auto text-lg text-blue-100">{achievementsDescription}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {achievements.map((item, idx) => (
                <div
                  key={item.label + idx}
                  className="text-center p-4 md:p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">{renderCountUpValue(item.value)}</div>
                  <p className="text-xs sm:text-sm text-blue-100 font-medium leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Float Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-[float_6s_ease-in-out_infinite] {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About3;
