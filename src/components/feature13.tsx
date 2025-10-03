import React from 'react';

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
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    },
    {
      id: "feature-2",
      title: "Reach Thousands of Loyal Customers",
      subtitle: "🛍️ FOR SHOPS",
      description:
        "Local shops and brands can tap into Sri Lanka's 300,000+ university students with targeted, trackable promotions. Zent helps you attract repeat customers without wasting money on broad ads.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    },
  ],
}: Feature13Props) => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white rounded-3xl">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold lg:text-5xl text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
          {heading}
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-16 rounded-2xl"></div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {features.map((feature, index) => {
            const href = feature.id === "feature-1" ? "/students" : feature.id === "feature-2" ? "/shops" : "/";
            const gradientClass = index === 0 
              ? "from-blue-500 to-blue-600" 
              : "from-blue-600 to-blue-700";

            return (
              <a
                key={feature.id}
                href={href}
                className="group block transform transition-all duration-500 ease-out hover:-translate-y-2"
              >
                <div className="h-full flex flex-col rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-blue-100">
                  <div className="flex justify-between gap-6 border-b border-blue-100">
                    <div className="flex flex-col justify-between gap-6 py-8 pl-6 md:py-10 md:pl-10 lg:justify-normal flex-1">
                      <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                        {feature.subtitle}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="w-2/5 shrink-0 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-gradient-to-br from-white to-blue-50/30 flex-1">
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Learn More</span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature13;