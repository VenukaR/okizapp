"use client"
import React, { useState } from 'react';

const HowToRegister = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get OKIZ from Play Store or App Store and install it on your device",
      mockup: "/img/phone-step1.png",
      showButtons: true,
    },
    {
      number: "02",
      title: "Sign Up with University ID",
      description: "Register using your valid university email address for instant verification",
      mockup: "/img/phone-step2.png",
      showButtons: false,
    },
    {
      number: "03",
      title: "Verify OTP",
      description: "Check your university email for the verification code and confirm your account",
      mockup: "/img/phone-step3.png",
      showButtons: false,
    },
    {
      number: "04",
      title: "Start Saving!",
      description: "Browse exclusive discounts and start saving at your favorite stores",
      mockup: "/img/phone-step4.png",
      showButtons: false,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-6 border border-blue-100">
            <span className="font-semibold text-sm">Simple Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            How to Get Started
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Register in under 3 minutes and start saving
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >
              {/* Card */}
              <div className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 ease-out ${
                activeStep === index 
                  ? 'border-blue-500 shadow-xl shadow-blue-100' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}>
                
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm mb-4 transition-all duration-300 ease-out ${
                  activeStep === index 
                    ? 'bg-blue-600 text-white scale-110' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                }`}>
                  {step.number}
                </div>

                {/* Phone Mockup */}
                <div className="relative w-32 h-64 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <div className="text-gray-400 text-xs text-center px-4">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    App Preview
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ease-out ${
                  activeStep === index ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* App Store Buttons */}
                {step.showButtons && (
                  <div className="flex flex-col gap-2 mt-4">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 bg-black text-white rounded-xl text-xs transition-all duration-300 ease-out hover:bg-gray-800 hover:scale-105"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <div className="text-left">
                        <p className="text-[10px] opacity-70">Download on</p>
                        <p className="text-xs font-semibold leading-tight">App Store</p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-3 py-2.5 bg-black text-white rounded-xl text-xs transition-all duration-300 ease-out hover:bg-gray-800 hover:scale-105"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.678 1.678 0 01-.048-2.373l-.001.001L3.609 1.814zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.678 1.678 0 010 2.93l-2.808 1.626-2.616-2.616 2.617-2.566zM4.657 1.667l10.937 6.334-2.302 2.302-8.635-8.636z"/>
                      </svg>
                      <div className="text-left">
                        <p className="text-[10px] opacity-70">GET IT ON</p>
                        <p className="text-xs font-semibold leading-tight">Google Play</p>
                      </div>
                    </a>
                  </div>
                )}

                {/* Active Indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-b-2xl transition-all duration-300 ease-out ${
                  activeStep === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start saving?</h3>
                <p className="text-blue-100">Join 300,000+ students using OKIZ</p>
              </div>
              <a
                href="#"
                className="whitespace-nowrap px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all duration-300 ease-out hover:bg-blue-50 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRegister;