"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import universityLogosData from "@/data/university-logos.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogosHeroProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const LogosHero = ({
  heading = "Trusted by Leading Universities",
   logos = universityLogosData.universityLogos.map(uni =>({
    id: uni.id,
     description: uni.alt,
      image: uni.logo,
      className: "h-20 w-auto",
      
  }))
}: LogosHeroProps) => {
  return (
    <section className="py-10 bg-grey-50 dark:bg-gray-900 sm:py-16 lg:py-20 w-full">
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20 w-full">
        <div className="relative flex items-center justify-center overflow-hidden w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className="h-12 w-auto sm:h-16 md:h-18 lg:h-20"
                        width={100}
                        height={50}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Gradient overlays for seamless scroll effect - hidden on mobile */}
          <div className="absolute inset-y-0 left-0 w-6 sm:w-8 md:w-12 bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-900 pointer-events-none hidden sm:block"></div>
          <div className="absolute inset-y-0 right-0 w-6 sm:w-8 md:w-12 bg-gradient-to-l from-blue-50 to-transparent dark:from-gray-900 pointer-events-none hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};

export { LogosHero };
