"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");
    
    try {
      
          await fetch(
      "https://script.google.com/macros/s/AKfycbyN4OuTX8B--hBGdAS2z_F0mDWF4z84lJ34pVXO_fNKu8qxEf9BEBgh4P8vnPzdGXg6/exec",
      {
        method: "POST",
        mode: "no-cors", // prevents CORS errors
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
      // With no-cors mode, we assume success if fetch doesn't throw an error
      // The data should still be saved to your Google Sheet
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to partner with us? Let&apos;s start the conversation.
          </p>
        </div>
        
        {formStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        )}
        
        {formStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-semibold">Oops! Something went wrong.</p>
              <p className="text-sm">Please try again or contact us directly.</p>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-colors duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-colors duration-300"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+94 XX XXX XXXX"
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-colors duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                Company / Institution
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Organization"
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-colors duration-300"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, partnership opportunity, or how we can help you..."
              required
              rows={5}
              className="w-full min-h-[120px] px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-colors duration-300 resize-none text-sm"
            />
          </div>
          
          <div>
            <Button 
              type="submit" 
              className="w-full h-14 bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-light text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <span>Send Message</span>
                  <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </Button>
          </div>
          
          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}