import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Logo {
  name: string;
  logo: string;
  className?: string;
}

interface Logos8Props {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
}

const Logos8 = ({
  title = "Trusted by Leading Partners",
  subtitle = "Join hundreds of companies already growing with us",
  logos = [
    {
      name: "Barista",
      logo: "/img/shops/barista.png",
    },
    {
      name: "Bin Chun",
      logo: "/img/shops/binchun.png",
    },
    {
      name: "Burger King",
      logo: "/img/shops/bk.png",
    },
    {
      name: "Caravan Fresh",
      logo: "/img/shops/caravanfresh.png",
    },
    {
      name: "Java Coffee",
      logo: "/img/shops/java.png",
    },
    {
      name: "No Limit",
      logo: "/img/shops/nolimit.png",
    },
    {
      name: "Pizza Hut",
      logo: "/img/shops/pizzahut.png",
    },
    {
      name: "Seven Seven",
      logo: "/img/shops/sevenseven.png",
    },
    {
      name: "Spaceylon",
      logo: "/img/shops/spaceylon.png",
    },
    {
      name: "Tea Avenue",
      logo: "/img/shops/teaavenue.png",
    },
  ],
}: Logos8Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame

    const animate = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled past half (since we duplicate)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4 pb-2">
            {title}
            </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-dark rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Auto-scrolling logos */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden py-8"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-40 h-40 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-blue-100 overflow-hidden p-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700"
                      width={160}
                      height={160}
                    />
                    {/* Overlay with company name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end justify-center pb-3">
                      <p className="text-white font-semibold text-sm">
                        {logo.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            Hover over any logo to pause the scroll
          </p>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Logos8;