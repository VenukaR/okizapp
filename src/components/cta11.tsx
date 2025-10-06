import React from 'react';
import Image from 'next/image';

interface Cta11Props {
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Cta11 = ({
  heading = "Join the Future of Student–Shop Collaboration",
  description = "Whether you're a student looking for exclusive deals or a shop aiming to grow your reach, our platform connects you to opportunities that matter.",
  imageSrc = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop",
  imageAlt = "Students and shops connecting",
}: Cta11Props) => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="relative bg-gradient-to-br from-primary via-primary-lightdark to-primary-dark rounded-3xl overflow-hidden shadow-2xl">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative flex flex-col lg:flex-row gap-12 p-8 md:p-12 lg:p-16 items-center">
            {/* Content Section */}
            <div className="flex-1 z-10">
              <div className="inline-block mb-4 px-4 py-2 bg-white backdrop-blur-sm rounded-full border border-blue-400/50">
                <p className="text-primary text-sm font-semibold">🚀 Get Started Today</p>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {heading}
              </h3>
              
              <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                {description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup-student"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-dark font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="mr-2">🎓</span>
                  <span>I&apos;m a Student</span>
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="/partner-shop"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/50 hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                >
                  <span className="mr-2">🛍️</span>
                  <span>I&apos;m a Shop</span>
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
              <div className="mt-10 flex flex-wrap items-center gap-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free to Join</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>300,000+ Students</span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="shrink-0 z-10 lg:w-96">
              <div className="relative group">
                {/* Decorative rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-300 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">300K+</p>
                        <p className="text-xs text-blue-100">Students</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">20%</p>
                        <p className="text-xs text-blue-100">Avg Savings</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-white text-primary-dark px-4 py-2 rounded-full shadow-lg font-bold text-sm transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  Join Now! 🎉
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta11;