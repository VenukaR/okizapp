import React from "react";
import Image from "next/image";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero7 = ({
  // heading = "Exclusive Student Discounts — Only for Sri Lankan Universities",
  description = "Why pay full price when you're a student? OKIZ gives you access to exclusive deals and discounts across Sri Lanka — from food and fashion to books and gyms. Verified university students save more every day.",
  button = {
    text: "Check Your Eligibility",
    url: "#",
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        alt: "Student 1",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        alt: "Student 2",
      },
      {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        alt: "Student 3",
      },
      {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        alt: "Student 4",
      },
      {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
        alt: "Student 5",
      },
    ],
  },
}: Hero7Props) => {
  return (
    <section className="relative py-10 md:py-22 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 w-full">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-20 text-blue-400 opacity-30 animate-bounce" style={{ animationDuration: '3s' }}>
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-32 text-blue-500 opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/4 text-blue-600 opacity-30 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      <div className="container relative z-10 text-center mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
          {/* Badge */}
          <div className="mx-auto inline-block w-fit px-5 py-2.5 bg-blue-100 rounded-full border-2 border-blue-200 backdrop-blur-sm shadow-lg">
            <p className="text-blue-700 text-sm md:text-base font-bold flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>Student-Only Benefits</span>
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-center">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
              Exclusive Student Discounts
            </span>
            <span className="block text-gray-800 text-3xl md:text-4xl lg:text-5xl">
              Only for Sri Lankan Universities
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-4 w-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-2">🍔</div>
              <p className="text-sm font-semibold text-gray-700">Food & Dining</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-2">👕</div>
              <p className="text-sm font-semibold text-gray-700">Fashion & Apparel</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-2">📚</div>
              <p className="text-sm font-semibold text-gray-700">Books & Stationery</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-2">💪</div>
              <p className="text-sm font-semibold text-gray-700">Gyms & Wellness</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={button.url}
          className="group inline-flex items-center justify-center px-10 py-5 mt-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
        >
          <span>{button.text}</span>
          <svg 
            className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Reviews Section */}
        <div className="mx-auto mt-12 flex w-fit flex-col items-center gap-6 sm:flex-row bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
          <span className="inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <div
                key={index}
                className="relative w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300"
              >
                <Image src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover" width={56} height={56} />
              </div>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 font-bold text-gray-800 text-lg">
                {reviews.rating?.toFixed(1)}
              </span>
            </div>
            <p className="text-gray-600 text-center sm:text-left font-medium mt-1">
              from {reviews.count}+ happy students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;