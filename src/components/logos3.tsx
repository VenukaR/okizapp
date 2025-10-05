"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

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

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these universities",
   logos = [
    {
      id: "logo-1",
      description: "IIT Logo",
      image: "/img/unilogo/iit.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-2",
      description: "NIBM Logo",
      image: "/img/unilogo/nibm.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-3",
      description: "NSBM Logo",
      image: "/img/unilogo/nsbm.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-4",
      description: "SLIIT Logo",
      image: "/img/unilogo/sliit.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-5",
      description: "UC Logo",
      image: "/img/unilogo/uc.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-6",
      description: "University of Moratuwa Logo",
      image: "/img/unilogo/um.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-7",
      description: "UJ Logo",
      image: "/img/unilogo/uj.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-8",
      description: "UP Logo",
      image: "/img/unilogo/up.png",
      className: "h-20 w-auto",
    },
  ]
}: Logos3Props) => {
  return (
    <section className="py-10 bg-grey-50 dark:bg-gray-900 sm:py-16 lg:py-20">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                        width={100}
                        height={50}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
