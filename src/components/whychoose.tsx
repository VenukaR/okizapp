import { Clock, Star, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Performance",
      description:
        "Fast, reliable, and optimized  Okiz ensures every interaction is smooth, saving students time and effort.",
      icon: <Clock className="w-6 h-6 text-primary-dark" />,
      color: "from-blue-50 to-blue-100",
      border: "border-blue-200",
    },
    {
      title: "Quality",
      description:
        "We partner with trusted brands and local shops, guaranteeing authentic discounts that actually deliver value.",
      icon: <Star className="w-6 h-6 text-indigo-600" />,
      color: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200",
    },
    {
      title: "Innovation",
      description:
        "Okiz is more than discounts  QR scan-to-save, digital ID verification, and smarter student tools for the future.",
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      color: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Our Values
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose Okiz?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We built Okiz with one goal: to empower Sri Lankan university students with
            exclusive savings, better tools, and a smarter lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${feature.color} border ${feature.border} rounded-2xl shadow-sm p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
