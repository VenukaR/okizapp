import Image from "next/image";
import Link from "next/link";
interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface Feature13Props {
  heading?: string;
  features?: Feature[];
}

const Feature13 = ({
  heading = "One Platform. Two Communities. One Win–Win.",
  features = [
    {
      id: "feature-1",
      title: "Exclusive Discounts, Just for You",
      subtitle: "🎓 FOR STUDENTS",
      description:
        "Verified university students in Sri Lanka get instant savings on food, clothing, books, tech, gyms, and more. Simply scan your Zent QR at checkout and enjoy up to 20% off.",
      image: "/img/student.png",
    },
    {
      id: "feature-2",
      title: "Reach Thousands of Loyal Customers",
      subtitle: "🛍️ FOR SHOPS",
      description:
        "Local shops and brands can tap into Sri Lanka’s 300,000+ university students with targeted, trackable promotions. Zent helps you attract repeat customers without wasting money on broad ads.!",
      image: "/img/shopowner.png",
    },
  ],
}: Feature13Props) => {
  return (
    <section className="py-32">
      <div className="container max-w-7xl">
        <h2 className="text-3xl font-medium lg:text-4xl">{heading}</h2>
        <div className="mt-20 grid gap-9 lg:grid-cols-2">
          {features.map((feature) => {
            // map feature id to route; default to home
            const href = feature.id === "feature-1" ? "/students" : feature.id === "feature-2" ? "/shops" : "/";

            return (
              <Link
                key={feature.id}
                href={href}
                className="transform-gpu rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg overflow-hidden"
              >
                <div className="flex h-full flex-col justify-between rounded-lg bg-accent will-change-transform">
                  <div className="flex justify-between gap-10 border-b">
                    <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                      <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
                      <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                    </div>
                    <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="p-4 text-muted-foreground md:p-8">{feature.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature13 };
