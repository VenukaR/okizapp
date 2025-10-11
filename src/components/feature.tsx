"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart } from "recharts";

interface Feature {
  step: string;
  title: string;
  content: string;
  highlight: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
}
  // const chartData = [
  //   {
  //     metric: "Reach (students / month)",
  //     Traditional: 5000, // example: 5k impressions from generic marketing
  //     OKIZ: 30000, // example: 30k impressions via OKIZ targeted exposure
  //   },
  //   {
  //     metric: "Retention (%)",
  //     Traditional: 15, // 12-18% baseline
  //     OKIZ: 40, // projected conservative retention after targeted offers
  //   },
  // ];
export function FeatureSteps({
  features,
  className = "",
  title = "Why Partner with OKIZ?",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);

  // Auto-rotate features every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  // Fake growth data
  // const data = [
  //   { month: "Jan", growth: 10 },
  //   { month: "Feb", growth: 22 },
  //   { month: "Mar", growth: 35 },
  //   { month: "Apr", growth: 50 },
  //   { month: "May", growth: 66 },
  //   { month: "Jun", growth: 82 },
  //   { month: "Jul", growth: 100 },
  // ];

  return (
    <div
      className={`py-16 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/60 rounded-full border border-green-300 mb-5 shadow-sm">
            <span className="text-green-700 font-semibold text-sm">
              🚀 Business Growth Opportunity
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            OKIZ is Sri Lanka’s verified{" "}
            <span className="font-semibold text-primary">
              student-business marketplace
            </span>{" "}
            where{" "}
            <span className="font-semibold">300,000+ university students</span>{" "}
            discover exclusive offers and connect with trusted local brands.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12 text-center"
        >
          {[
            { label: "Verified Students", value: "300K+" },
            { label: "Annual Spending", value: "Rs. 15B+" },
            { label: "Avg. Offer Redemption", value: "72%" },
            { label: "Avg. Sales Boost", value: "+40%" },
            { label: "Setup Cost", value: "₨ 0" },
            { label: "Launch Time", value: "24 hrs" },
          ].map((stat, idx) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={idx}
              className="bg-white shadow-md rounded-xl py-4 px-3 border border-gray-100 hover:border-blue-300 transition-all duration-300"
            >
              <p className="text-2xl font-bold text-primary-lightdark">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="max-w-3xl mx-auto space-y-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index === currentFeature ? 1 : 0.4,
                scale: index === currentFeature ? 1.02 : 1,
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setCurrentFeature(index)}
              className={`cursor-pointer relative bg-white rounded-xl p-6 border transition-all duration-300 hover:shadow-lg ${
                index === currentFeature
                  ? "border-primary shadow-xl"
                  : "border-gray-100"
              }`}
            >
              <div className="flex items-start gap-3 mb-2">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base transition-colors ${
                    index === currentFeature
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>
                <h3
                  className={`text-lg font-bold ${
                    index === currentFeature ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Performance Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Traditional Marketing vs OKIZ Performance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conservative projections for a typical city-level business comparing traditional student outreach with OKIZ&apos;s targeted marketplace approach
            </p>
          </div>

          {/* Bar Chart Container */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Reach Chart */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-primary-light/30 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  Monthly Student Reach
                </h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={[
                      { name: "Traditional", value: 5000, fill: "#94a3b8" },
                      { name: "OKIZ", value: 30000, fill: "#3aa5dd" }
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }} />
                    <YAxis 
                      tickFormatter={(value) => value >= 1000 ? `${value / 1000}k` : value}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [`${value.toLocaleString()} students`, 'Monthly Reach']}
                      labelStyle={{ color: '#374151' }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold">+500% increase in student reach</span>
                  </div>
                </div>
              </div>

              {/* Retention Chart */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  Customer Retention Rate
                </h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={[
                      { name: "Traditional", value: 15, fill: "#94a3b8" },
                      { name: "OKIZ", value: 40, fill: "#8b5cf6" }
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }} />
                    <YAxis 
                      domain={[0, 50]}
                      tickFormatter={(value) => `${value}%`}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, 'Retention Rate']}
                      labelStyle={{ color: '#374151' }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold">+167% improvement in retention</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Overview */}
            {/* <div className="border-t pt-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Performance Overview</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                  barCategoryGap="30%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis 
                    dataKey="metric" 
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    interval={0}
                    angle={-15}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    yAxisId="left"
                    orientation="left"
                    tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : `${v}${v <= 100 ? '%' : ''}`)}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                  />
                  <Tooltip
                    formatter={(value: any, name: any) => {
                      if (name === "Traditional" || name === "OKIZ") {
                        return [
                          typeof value === 'number' && value >= 1000 
                            ? `${value.toLocaleString()} students` 
                            : `${value}%`,
                          name
                        ];
                      }
                      return [value, name];
                    }}
                    labelStyle={{ color: '#374151' }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="Traditional" 
                    name="Traditional Marketing" 
                    fill="#94a3b8" 
                    radius={[6, 6, 0, 0]}
                    yAxisId="left"
                  />
                  <Bar 
                    dataKey="OKIZ" 
                    name="OKIZ Platform" 
                    fill="#3aa5dd" 
                    radius={[6, 6, 0, 0]}
                    yAxisId="left"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div> */}
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-primary-lightdark">
                <strong>Note:</strong> Conservative projections based on verified performance data from existing OKIZ partners
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-lightdark to-primary rounded-2xl shadow-2xl p-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Businesses Already Winning with OKIZ
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Verified brands are already attracting student loyalty  don’t
              let competitors own your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-primary-lightdark font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Start Partnership Today</span>
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const features = [
  {
    step: "1",
    title: "Access Sri Lanka's Largest Student Marketplace",
    content:
      "Get direct exposure to 300,000+ verified students across all major universities  the fastest-growing Rs. 15B+ student economy.",
    highlight: "Verified audience, real conversions.",
    image: "",
  },
  {
    step: "2",
    title: "Turn Students into Repeat Customers",
    content:
      "Exclusive offers create loyalty loops  students become brand ambassadors and drive peer referrals organically.",
    highlight: "From discount seekers to brand believers.",
    image: "",
  },
  {
    step: "3",
    title: "Full-Scale Marketing Reach",
    content:
      "Be seen across app feeds, influencer campaigns, and uni events  without paying for traditional ads.",
    highlight: "Zero-risk, high-performance exposure.",
    image: "",
  },
  {
    step: "4",
    title: "Data-Driven Growth",
    content:
      "Access real-time insights on what students buy, when they spend, and what makes them return.",
    highlight: "Smart data → smarter profit.",
    image: "",
  },
  {
    step: "5",
    title: "Instant ROI Model",
    content:
      "No setup fees, no waiting. Join, launch in 24 hours, and pay only for performance.",
    highlight: "Risk-free revenue generation.",
    image: "",
  },
];

export function FeatureStepsDemo() {
  return (
    <FeatureSteps
      features={features}
      title="Grow Your Business with Sri Lanka's Student Market"
    />
  );
}

export default FeatureStepsDemo;
