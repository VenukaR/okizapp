"use client"

import React, { useState } from "react"

interface Feature {
  step: string
  title: string
  content: string
  highlight: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
}

export function FeatureSteps({
  features,
  className = "",
  title = "Why Partner with OKIZ?",
  // autoPlayInterval = 4000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)

  // Removed progress state and useEffect for automatic cycling

  return (
    <div className={`py-10 md:py-10 bg-gradient-to-b from-white via-blue-50/20 to-white ${className}`}>
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-4">
            <span className="text-blue-700 font-bold text-sm">For Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Unlock the power of Sri Lanka&apos;s largest student network
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Steps */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group transition-all duration-200 ${
                  index === currentFeature ? '' : 'opacity-85'
                }`}
                onClick={() => {
                  setCurrentFeature(index)
                }}
              >
                <div className={`relative bg-white rounded-xl p-5 shadow-md border ${
                  index === currentFeature
                    ? 'border-blue-400 shadow-lg'
                    : 'border-gray-100'
                }`}>
                  
                  {/* Step Number & Title */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base ${
                      index === currentFeature
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${
                        index === currentFeature
                          ? 'text-blue-600'
                          : 'text-gray-800'
                      }`}>
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 text-sm leading-relaxed ml-13 pl-1">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto bg-blue-600 rounded-xl shadow-md">
            <div className="px-6 py-5">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Reach 300,000+ Students?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="px-5 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Become a Partner</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="px-5 py-2 bg-transparent text-white font-medium rounded-lg border border-white/70 hover:bg-white/10 transition-all duration-200"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Demo Component
const features = [
  { 
    step: '1', 
    title: 'Reach the University Market Directly',
    content: 'Connect with thousands of verified university students across Sri Lanka — a loyal, fast-growing audience that loves trying new brands and experiences.',
    highlight: 'OKIZ gives you direct access to the student community that most businesses struggle to reach.',
    image: ''
  },
  { 
    step: '2',
    title: 'Boost Brand Visibility',
    content: 'Your brand gets featured on the OKIZ app, social media, and influencer campaigns.',
    highlight: 'Be seen where students scroll — and turn awareness into real customers.',
    image: ''
  },
  { 
    step: '3',
    title: 'Increase Sales Through Exclusive Offers',
    content: 'By providing student discounts, you attract consistent traffic and encourage repeat purchases.',
    highlight: 'A small discount can bring big loyalty — students love value and share what they love.',
    image: ''
  },
  { 
    step: '4',
    title: 'Get Marketing Insights',
    content: 'OKIZ gives you data-driven insights about engagement, clicks, and redemptions.',
    highlight: 'Understand what works, improve your campaigns, and grow smarter.',
    image: ''
  },
  { 
    step: '5',
    title: 'Be Part of a Growing Student Ecosystem',
    content: 'Join a national network of student-friendly brands helping shape Sri Lanka\'s digital youth culture.',
    highlight: 'Stand out as a business that supports education, empowerment, and the next generation.',
    image: ''
  },
]

export function FeatureStepsDemo() {
  return (
    <FeatureSteps 
      features={features}
      title="Why Partner with OKIZ?"
      autoPlayInterval={5000}
    />
  )
}

export default FeatureStepsDemo;