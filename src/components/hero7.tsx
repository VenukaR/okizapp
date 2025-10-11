"use client";
import React, { useState, useEffect } from "react";
 
import { AnimatedLogoCarousel } from "./animated-logo-carousel";

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
  description = "Why pay full price when you're a student? OKIZ gives you access to exclusive deals and discounts across Sri Lanka  from food and fashion to books and gyms. Verified university students save more every day.",
  button = {
    text: "Check Your Eligibility",
    url: "#",
  },
  // reviews = {
  //   count: 200,
  //   rating: 5.0,
  //   avatars: [
  //     {
  //       src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  //       alt: "Student 1",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  //       alt: "Student 2",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  //       alt: "Student 3",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  //       alt: "Student 4",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
  //       alt: "Student 5",
  //     },
  //   ],
  // },
}: Hero7Props) => {
  const [columnCount, setColumnCount] = useState(6);

  useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth < 768) {
        setColumnCount(3); // Mobile: 3 columns
      } else {
        setColumnCount(6); // Desktop: 6 columns
      }
    };

    // Set initial value
    updateColumnCount();

    // Add event listener
    window.addEventListener('resize', updateColumnCount);

    // Cleanup
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);
  return (
    <section className="relative py-10 md:py-22 px-7 md:px-0 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 w-full">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary-lightdark rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Multiple Nut SVGs */}
        <div className="absolute top-32 right-20 opacity-25 animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={80} 
            height={80}
            className="text-primary filter drop-shadow-lg"
          />
        </div>

        <div className="absolute top-20 left-16 opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={64} 
            height={64}
            className="text-blue-500 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute bottom-40 left-1/4 opacity-30 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={72} 
            height={72}
            className="text-primary-dark filter drop-shadow-lg"
          />
        </div>

        <div className="absolute top-60 right-1/3 opacity-15 animate-bounce" style={{ animationDuration: '7s', animationDelay: '3s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={56} 
            height={56}
            className="text-blue-300 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute bottom-20 right-32 opacity-25 animate-pulse" style={{ animationDuration: '8s', animationDelay: '1.5s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={68} 
            height={68}
            className="text-blue-400 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute top-1/2 left-8 opacity-20 animate-bounce" style={{ animationDuration: '6s', animationDelay: '4s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={60} 
            height={60}
            className="text-blue-500 filter drop-shadow-lg"
          />
        </div>

        {/* Additional Nuts */}
        <div className="absolute bottom-60 right-16 opacity-18 animate-pulse" style={{ animationDuration: '9s', animationDelay: '2.5s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={52} 
            height={52}
            className="text-blue-300 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute top-44 left-1/3 opacity-22 animate-bounce" style={{ animationDuration: '5.5s', animationDelay: '3.5s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={58} 
            height={58}
            className="text-blue-500 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute bottom-28 left-12 opacity-16 animate-pulse" style={{ animationDuration: '7.5s', animationDelay: '5s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={48} 
            height={48}
            className="text-blue-400 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute top-72 right-1/4 opacity-20 animate-bounce" style={{ animationDuration: '6.5s', animationDelay: '1.8s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={62} 
            height={62}
            className="text-primary-dark filter drop-shadow-lg"
          />
        </div>

        <div className="absolute top-36 right-1/2 opacity-14 animate-pulse" style={{ animationDuration: '10s', animationDelay: '4.5s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={44} 
            height={44}
            className="text-blue-300 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute bottom-52 left-1/2 opacity-24 animate-bounce" style={{ animationDuration: '8.5s', animationDelay: '6s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={66} 
            height={66}
            className="text-blue-500 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute top-16 right-40 opacity-17 animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={50} 
            height={50}
            className="text-blue-400 filter drop-shadow-lg"
          />
        </div>

        <div className="absolute bottom-12 right-1/3 opacity-19 animate-bounce" style={{ animationDuration: '7.2s', animationDelay: '3.2s' }}>
          <img 
            src="/svg/nut.svg" 
            alt="Nut" 
            width={54} 
            height={54}
            className="text-primary-dark filter drop-shadow-lg"
          />
        </div>
      </div>

      <div className="container relative z-10 text-center mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
          {/* Badge */}
          <div className="mx-auto inline-block w-fit px-5 py-2.5 bg-white rounded-full border-2 border-blue-200 backdrop-blur-sm shadow-lg">
            <p className="text-primary-dark text-sm md:text-base font-bold flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>Student-Only Benefits</span>
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-center">
            <span className="block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-2 font-black">
              Exclusive Student Discounts
            </span>
            <span className="block text-gray-800 text-3xl md:text-4xl lg:text-5xl font-black">
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
          className="group inline-flex items-center justify-center px-10 py-5 mt-10 bg-gradient-to-r from-primary-lightdark to-primary-dark text-white text-lg font-bold rounded-xl hover:from-primary hover:to-primary-verydark transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
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

        {/* Reviews Section
        <div className="mx-auto mt-12 flex w-fit flex-col items-center gap-6 sm:flex-row bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
          <span className="inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <div
                key={index}
                className="relative w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300"
              >
                <img src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover" width={56} height={56} />
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
        </div> */}
        <div className="pb-10"></div>
        <hr/>
        <div className="mt-12">
           <section className="py-8 md:py-12 lg:py-0 px-0 md:px-0 lg:px-0">
        <AnimatedLogoCarousel 
          title="Our Trusted Partners"
          subtitle="Register Today to Enjoy Exclusive Discounts and Benefits!"
          columnCount={columnCount}
          logos={[
            // { name: "Pizza Hut", logo: "/img/shops/pizzahut.png" },
            // { name: "Spa Ceylon", logo: "/img/shops/spaceylon.png" },
            // { name: "Caravan Fresh", logo: "/img/shops/caravanfresh.png" },
            // { name: "Tea Avenue", logo: "/img/shops/teaavenue.png" },
            // { name: "Bin Chun", logo: "/img/shops/binchun.png" },
            // { name: "7-Eleven", logo: "/img/shops/sevenseven.png" },
            // { name: "Barista", logo: "/img/shops/barista.png" },
            // { name: "Java Lounge", logo: "/img/shops/java.png" },
            // { name: "No Limit", logo: "/img/shops/nolimit.png" },
            // { name: "Burger King", logo: "/img/shops/bk.png" },
            {name:"Hangla",logo:"/img/shops/hangla.png"},
            {name:"Sugarbeach",logo:"/img/shops/sugarbeach.png"},
               {name:"Hangla",logo:"/img/shops/hangla.png"},
            {name:"Sugarbeach",logo:"/img/shops/sugarbeach.png"},
               {name:"Hangla",logo:"/img/shops/hangla.png"},
            {name:"Sugarbeach",logo:"/img/shops/sugarbeach.png"},
               {name:"Hangla",logo:"/img/shops/hangla.png"},
            {name:"Sugarbeach",logo:"/img/shops/sugarbeach.png"},
          ]}
        />
      </section>
        </div>
      </div>
    </section>
  );
};

export default Hero7;