import { Button } from "@/components/ui/button";
import Image from "next/image";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "/img/unilogo/iit.png",
    alt: "IIT",
  },
  {
    src: "/img/unilogo/sliit.png",
    alt: "SLIIT",
  },
  {
    src: "/img/unilogo/uc.png",
    alt: "University of Colombo",
  },
  {
    src: "/img/unilogo/um.png",
    alt: "University of Moratuwa",
  },
  {
    src: "/img/unilogo/nsbm.png",
    alt: "NSBM",
  },
  {
    src: "/img/unilogo/nibm.png",
    alt: "NIBM",
  },
];

const defaultAchievements = [
  { label: "Universities Reached", value: "01+" },
  { label: "Students Eligible for Discounts", value: "300,000+" },
  { label: "Partnered Shops & Brands", value: "01+" },
  { label: "Average Student Savings", value: "20%" },
];

const About3 = ({
  title = "About Us",
  description = "is Sri Lanka’s first digital platform built exclusively to connect university students with verified discounts at local shops and brands. We believe student life should be affordable — and that businesses deserve smarter ways to attract loyal customers.",
  mainImage = {
    src: "/img/students.png",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "/img/logoblue.png",
    alt: "placeholder",
  },
  breakout = {
    src: "",
    alt: "logo",
    title: "Exclusive Student Discounts in Sri Lanka",
    description:
      "Helping students save more while giving shops a smarter way to grow their customer base.",
    buttonText: "Discover Zent",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Impact in Numbers",
  achievementsDescription = "Building Sri Lanka’s first student discount platform to empower students and help businesses grow.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
                        width={620}
            height={0}
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <Image
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
                            width={0}
            height={100}
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
       <Image
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/12 lg:min-h-0 lg:w-auto w-8"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="py-32">
          <p className="text-center">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <Image
                  src={company.src}
                  alt={company.alt}
                  className="h-100 w-auto md:h-20"
                              width={200}
            height={0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export { About3 };
