"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // Simulating form submission with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  // Animation variants
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
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-purple-950">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            //variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Contact <span className="text-purple-600 dark:text-purple-400">Us</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Our team is ready to assist with any inquiries about Zent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              //variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
                    <FaEnvelope className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">hello@zentdiscounts.com</p>
                    <p className="text-gray-600 dark:text-gray-300">support@zentdiscounts.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
                    <FaPhone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-600 dark:text-gray-300">Monday-Friday, 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
                    <FaMapMarkerAlt className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">123 Innovation Way</p>
                    <p className="text-gray-600 dark:text-gray-300">San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      {/* Replace with actual social icons */}
                      <div className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
                }
              }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg flex items-center text-green-700 dark:text-green-400"
                >
                  <FaCheck className="h-5 w-5 mr-3" />
                  <p>Thank you! Your message has been sent successfully. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="John Doe"
                      {...register("name", { 
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters"
                        }
                      })}
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="your@email.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full px-4 py-2 rounded-md border ${errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="How can we help?"
                      {...register("subject", { 
                        required: "Subject is required"
                      })}
                    />
                    {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Write your message here..."
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters"
                        }
                      })}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 px-6 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
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
              Find quick answers to common questions about Zent.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly will I receive a response?",
                answer: "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line directly."
              },
              {
                question: "I'm having trouble with my student verification. Who should I contact?",
                answer: "Please reach out to our verification team at verify@zentdiscounts.com with your account details and a description of the issue you're experiencing."
              },
              {
                question: "How can brands partner with Zent?",
                answer: "Businesses interested in partnering with Zent can email partners@zentdiscounts.com or fill out the contact form on this page, selecting 'Business Partnership' as the subject."
              },
              {
                question: "Where are your offices located?",
                answer: "Our main headquarters is in San Francisco, with additional offices in New York and London. Please contact us before planning a visit as some of our teams work remotely."
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
    </main>
  );
}
