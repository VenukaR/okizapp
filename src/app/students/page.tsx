"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaIdCard, FaUserCheck, FaSearch, FaMoneyBillWave } from 'react-icons/fa';
import Image from 'next/image';

export default function StudentsPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Sign Up",
      icon: <FaIdCard className="text-5xl text-blue-600 dark:text-blue-400 group-hover:text-white" />,
      description: "Create your free Zent account in seconds. Just enter your email address and choose a password to get started on your savings journey.",
      detail: "Registration takes less than 30 seconds, and you'll immediately gain access to thousands of student discounts. We only require basic information to create your account - no lengthy forms or unnecessary questions."
    },
    {
      id: 2,
      title: "Verify Your Student Status",
      icon: <FaUserCheck className="text-5xl text-green-600 dark:text-green-400 group-hover:text-white" />,
      description: "Quickly verify your student status using your school email, student ID card, or enrollment documents.",
      detail: "Our verification process is secure and straightforward. Upload an image of your student ID, use your .edu email, or connect through your university portal. Verification is typically completed within minutes, giving you instant access to all student discounts."
    },
    {
      id: 3,
      title: "Browse Exclusive Discounts",
      icon: <FaSearch className="text-5xl text-purple-600 dark:text-purple-400 group-hover:text-white" />,
      description: "Explore thousands of discounts from your favorite brands across fashion, tech, food, and more.",
      detail: "Our intuitive search and filter system lets you find exactly what you're looking for. Browse by category, discount amount, or brand name. We add new discounts daily, so there's always something fresh to discover. Set up notifications for your favorite brands to never miss a deal."
    },
    {
      id: 4,
      title: "Save Big on Everything",
      icon: <FaMoneyBillWave className="text-5xl text-red-600 dark:text-red-400 group-hover:text-white" />,
      description: "Enjoy instant savings both online and in-store. Just present your Zent code or card at checkout.",
      detail: "For online shopping, simply copy the discount code or click through directly from our app. For in-store purchases, show your digital Zent ID on your phone. Our students save an average of $250 per year across all categories."
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
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // //variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              For <span className="text-blue-600 dark:text-blue-400">Students</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8">
              Join millions of students saving money with Zent. It's free, fast, and gives you access to exclusive discounts from thousands of brands.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-lg text-lg font-semibold">
              Sign Up Now - It's Free
            </button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
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
              Getting started with Zent is simple. Follow these four easy steps to start saving money today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={`group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg cursor-pointer transition-all duration-300 
                  ${activeStep === step.id ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`}
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
                    ? 'bg-blue-600 dark:bg-blue-600' 
                    : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors duration-300'}`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">
                  <span className="inline-block bg-blue-600 text-white w-6 h-6 rounded-full mr-2 text-sm">{step.id}</span> {step.title}
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">What Students Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what students like you have to say about Zent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                university: "UCLA",
                quote: "I've saved over $300 this semester alone using Zent discounts. The app is super easy to use!",
                image: "/vercel.svg" // Placeholder image
              },
              {
                name: "Sarah Williams",
                university: "NYU",
                quote: "Zent has been a game-changer for my budget. I use it for everything from clothes to food delivery.",
                image: "/vercel.svg" // Placeholder image
              },
              {
                name: "Michael Chen",
                university: "MIT",
                quote: "The tech discounts on Zent helped me afford a new laptop for my engineering program. Highly recommend!",
                image: "/vercel.svg" // Placeholder image
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.5, delay: index * 0.2 } 
                  }
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{testimonial.university}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
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
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Is Zent really free for students?",
                answer: "Yes, Zent is completely free for all verified students. We make money through our partnerships with brands, not from our users."
              },
              {
                question: "How do I verify my student status?",
                answer: "You can verify your student status by uploading your student ID, using your .edu email address, or connecting through your university portal. The process typically takes just minutes."
              },
              {
                question: "How long does my Zent membership last?",
                answer: "Your Zent membership lasts as long as you're a student. We'll periodically ask you to re-verify your student status to ensure you continue to get access to exclusive student discounts."
              },
              {
                question: "Can I use Zent discounts internationally?",
                answer: "Many Zent discounts work internationally, though some may be region-specific. You can filter for discounts available in your location through the app."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Saving?</h2>
            <p className="text-xl mb-8">
              Join over 2 million students already saving with Zent. It takes less than 30 seconds to sign up.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition shadow-lg text-lg font-semibold">
              Create Your Free Account
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
