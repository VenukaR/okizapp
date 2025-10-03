"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaPercentage, FaUsers, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

export default function ShopsPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Partner with Zent",
      icon: <FaHandshake className="text-5xl text-blue-600 dark:text-blue-400 group-hover:text-white" />,
      description: "Join our network of 5,000+ brand partners and connect with millions of students.",
      detail: "Becoming a Zent partner is simple and free. Our platform is designed to make student marketing easy and effective. Our dedicated partnership team will guide you through the entire process and help you create a strategy that aligns with your business goals."
    },
    {
      id: 2,
      title: "Offer Exclusive Discounts",
      icon: <FaPercentage className="text-5xl text-green-600 dark:text-green-400 group-hover:text-white" />,
      description: "Create customized discount offers that appeal directly to the student demographic.",
      detail: "You have complete control over your discounts - from the percentage off to limited-time offers and special promotions. Our data shows that student-exclusive offers have higher conversion rates than generic promotions. We'll help you optimize your offers for maximum engagement."
    },
    {
      id: 3,
      title: "Reach Millions of Students",
      icon: <FaUsers className="text-5xl text-purple-600 dark:text-purple-400 group-hover:text-white" />,
      description: "Get your brand in front of our 2 million+ active student users across the country.",
      detail: "Your brand will be featured on our app and website, exposing you to students actively looking for discounts. You can enhance visibility with premium placements, category sponsorships, and featured listings. We also offer targeted email campaigns and push notifications to drive traffic to your offers."
    },
    {
      id: 4,
      title: "Track Results in Real-Time",
      icon: <FaChartLine className="text-5xl text-red-600 dark:text-red-400 group-hover:text-white" />,
      description: "Access detailed analytics and insights about how students interact with your offers.",
      detail: "Our comprehensive analytics dashboard provides real-time data on clicks, redemptions, and conversion rates. Track student engagement across different promotions and optimize your strategy based on performance metrics. Our partners typically see a 200% ROI on their Zent marketing investment."
    }
  ];

  const handleStepClick = (id: number) => {
    setActiveStep(activeStep === id ? null : id);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-green-950">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              For <span className="text-green-600 dark:text-green-400">Businesses</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8">
              Connect with the influential student market. Our platform helps you reach 2 million+ students with targeted discounts and offers.
            </p>
            <button className="px-8 py-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition shadow-lg text-lg font-semibold">
              Become a Partner
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Why Partner With Zent?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tap into the $300+ billion annual student spending power with a platform designed for maximum ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access to Student Market",
                icon: <FaUsers className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                description: "Directly reach 2 million+ verified students actively looking for brand discounts."
              },
              {
                title: "Brand Loyalty",
                icon: <FaHandshake className="h-8 w-8 text-green-600 dark:text-green-400" />,
                description: "Build relationships with students early to create lifelong customers."
              },
              {
                title: "Performance Marketing",
                icon: <FaChartLine className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                description: "Only pay for results with our performance-based marketing approach."
              },
              {
                title: "Data Insights",
                icon: <FaChartLine className="h-8 w-8 text-red-600 dark:text-red-400" />,
                description: "Gain valuable insights into student shopping behaviors and preferences."
              },
              {
                title: "Easy Integration",
                icon: <FaHandshake className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
                description: "Simple setup with API integration for seamless discount verification."
              },
              {
                title: "Dedicated Support",
                icon: <FaUsers className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
                description: "Work with our partnership team to optimize your student marketing strategy."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.5, delay: index * 0.1 } 
                  }
                }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white dark:bg-gray-700 mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Partner with Zent in four simple steps to reach the student market effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={`group bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg cursor-pointer transition-all duration-300
                  ${activeStep === step.id ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-900/20' : ''}`}
                onClick={() => handleStepClick(step.id)}
                whileHover={{ y: -8, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.5, delay: (step.id - 1) * 0.2 } 
                  }
                }}
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto
                  ${activeStep === step.id 
                    ? 'bg-green-600 dark:bg-green-600' 
                    : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-green-600 dark:group-hover:bg-green-600 transition-colors duration-300'}`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">
                  <span className="inline-block bg-green-600 text-white w-6 h-6 rounded-full mr-2 text-sm">{step.id}</span> {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{step.description}</p>
                
                {activeStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{step.detail}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Partner Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how brands like yours have achieved remarkable results partnering with Zent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                companyName: "TechGear",
                logo: "/vercel.svg", // Placeholder image
                quote: "Partnering with Zent increased our student sales by 45% in the first quarter alone. Their platform gave us direct access to our target demographic.",
                person: "Jessica Kim",
                role: "Marketing Director"
              },
              {
                companyName: "Urban Styles",
                logo: "/vercel.svg", // Placeholder image
                quote: "The ROI we've seen through Zent has been incredible. For every $1 spent on student discounts, we've seen $3 in sales and gained lifelong customers.",
                person: "Marcus Johnson",
                role: "CEO"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6, delay: index * 0.2 } 
                  }
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 relative mr-4">
                    <Image
                      src={story.logo}
                      alt={story.companyName}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{story.companyName}</h3>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">"{story.quote}"</p>
                
                <div className="flex items-center">
                  <div className="mr-3 h-px w-10 bg-green-500"></div>
                  <p className="text-gray-800 dark:text-white font-medium">
                    {story.person}, <span className="text-green-600 dark:text-green-400">{story.role}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Common questions from our business partners.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How much does it cost to partner with Zent?",
                answer: "Partnering with Zent is free. We operate on a performance-based model where you only pay when students engage with your offers. Our team will work with you to create a pricing structure that aligns with your business goals."
              },
              {
                question: "How do students verify they've used our discount?",
                answer: "Zent offers multiple verification methods including unique discount codes, direct API integration with your checkout system, and in-store QR code scanning. Our system ensures that only verified students can access your exclusive discounts."
              },
              {
                question: "Can we customize our discount offers?",
                answer: "Absolutely! You have complete control over your discount offerings, including percentage, dollar amount, BOGO deals, or custom promotions. You can also set time limits, usage caps, and specific product categories for your discounts."
              },
              {
                question: "How quickly can we get started?",
                answer: "Most partners can be set up within 48 hours. Once you provide your discount details and company information, our team handles the rest, including listing creation, verification setup, and analytics dashboard configuration."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.4, delay: index * 0.1 } 
                  }
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-800 dark:to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reach Millions of Students?</h2>
            <p className="text-xl mb-8">
              Join 5,000+ brands already leveraging Zent to connect with the valuable student demographic.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-green-600 rounded-md hover:bg-gray-100 transition shadow-lg text-lg font-semibold">
                Become a Partner
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition text-lg font-semibold">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
