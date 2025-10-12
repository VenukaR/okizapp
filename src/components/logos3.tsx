"use client";

import AutoScroll from "embla-carousel-auto-scroll";
 

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
  heading = "Trusted by Leading Universities",
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
      description: "University of Jpura Logo",
      image: "/img/unilogo/uj.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-8",
      description: "University of Peradeniya Logo",
      image: "/img/unilogo/up.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-9",
      description: "CINEC Logo",
      image: "/img/unilogo/cinec.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-10",
      description: "ESOFT Logo",
      image: "/img/unilogo/esoft.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-11",
      description: "Horizon Logo",
      image: "/img/unilogo/horizon.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-12",
      description: "KDU Logo",
      image: "/img/unilogo/kdu.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-13",
      description: "Open University Logo",
      image: "/img/unilogo/open.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-14",
      description: "University of Jaffna Logo",
      image: "/img/unilogo/ujaffna.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-15",
      description: "University of Kelaniya Logo",
      image: "/img/unilogo/uk.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-16",
      description: "University of Ruhuna Logo",
      image: "/img/unilogo/ur.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-17",
      description: "Wayamba University Logo",
      image: "/img/unilogo/wayamba.png",
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
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl overflow-hidden">
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
          <div className="absolute inset-y-0 left-0 w-6 sm:w-8 md:w-12 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none hidden sm:block"></div>
          <div className="absolute inset-y-0 right-0 w-6 sm:w-8 md:w-12 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
