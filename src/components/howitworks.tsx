"use client"
import React, { useState } from 'react';
 
 import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
 
const HowToRegister = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get OKIZ from Play Store or App Store and install it on your device",
      mockup: "/img/howtouse/1.png",
      showButtons: true,
    },
    {
      number: "02",
      title: "Sign Up with University ID",
      description: "Register using your valid university email address for instant verification",
      mockup: "/img/howtouse/1.png",
      showButtons: false,
    },
    {
      number: "03",
      title: "Verify OTP",
      description: "Check your university email for the verification code and confirm your account",
      mockup: "/img/howtouse/1.png",
      showButtons: false,
    },
    {
      number: "04",
      title: "Start Saving!",
      description: "Browse exclusive discounts and start saving at your favorite stores",
      mockup: "/img/howtouse/1.png",
      showButtons: false,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full mb-6 border border-blue-100">
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
                  ? 'border-primary shadow-xl shadow-blue-100' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}>
                
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm mb-4 transition-all duration-300 ease-out ${
                  activeStep === index 
                    ? 'bg-primary text-white scale-110' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-primary-dark'
                }`}>
                  {step.number}
                </div>

                {/* Phone Mockup */}
                <div className="relative w-auto h-60 mx-auto mb-6 rounded-2xl overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                   <img
                    src={step.mockup}
                    alt={`Step ${step.number} Mockup`}
                    
                    style={{ objectFit: 'contain' }}
                    className="transition-transform duration-300 ease-out group-hover:scale-125 scale-60 "
                  />
                </div>

                {/* Content */}
                <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ease-out ${
                  activeStep === index ? 'text-primary-dark' : 'text-gray-900'
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

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
     

<div className="max-w-4xl mx-auto">
  <div className="bg-gradient-to-r from-primary-dark to-blue-700 rounded-2xl p-8 md:p-10 shadow-xl">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-white text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Join Our Socials</h3>
        <p className="text-blue-100">Stay updated with the latest offers and news from OKIZ</p>
      </div>
      <div className="flex items-center gap-6">
        {/* Instagram */}
        <a
          href="#"
          className="text-white text-2xl p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg"
        >
          <FaInstagram />
        </a>
        {/* Facebook */}
        <a
          href="#"
          className="text-white text-2xl p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg"
        >
          <FaFacebookF />
        </a>
        {/* WhatsApp */}
        <a
          href="#"
          className="text-white text-2xl p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default HowToRegister;