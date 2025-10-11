"use client";
import { PricingSection } from "@/components/blocks/pricing-section";
import { FeatureStepsDemo } from "@/components/feature";
import Hero243 from "@/components/hero243";
import { ShopOwnersDash } from "@/components/heroshop";
import { Logos3 } from "@/components/logos3";
import { Waitlist1 } from "@/components/waitlist1";

export default function ShopsPage() {
  const pricingTiers = [
    {
      name: "Starter",
      price: {
        monthly: "TBA",
        yearly: 0, // Not used
      },
      description: "Essential tools for small businesses new to student marketing.",
      features: [
        {
          name: "Student Verification API",
          description: "Verify student status at checkout",
          included: true,
        },
        {
          name: "Basic Analytics Dashboard",
          description: "Track student engagement metrics",
          included: true,
        },
        {
          name: "App Listing",
          description: "Standard listing in the OKIZ app",
          included: true,
        },
        {
          name: "Single Discount Campaign",
          description: "One active student offer at a time",
          included: true,
        },
        {
          name: "Email Support",
          description: "Response within 48 hours",
          included: true,
        },
        {
          name: "Social Media Promotion",
          description: "Featured on OKIZ social channels",
          included: false,
        },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12h14" />
        </svg>
      ),
    },
    {
      name: "Growth",
      price: {
        monthly: "TBA",
        yearly: 0, // Not used
      },
      description: "Perfect for established businesses ready to scale student engagement.",
      features: [
        {
          name: "Student Verification API",
          description: "Verify student status at checkout",
          included: true,
        },
        {
          name: "Advanced Analytics Dashboard",
          description: "In-depth student insights and reporting",
          included: true,
        },
        {
          name: "Multiple Discount Campaigns",
          description: "Up to 3 active student offers",
          included: true,
        },
        {
          name: "Featured App Listing",
          description: "Enhanced placement in the OKIZ app",
          included: true,
        },
        {
          name: "Priority Email Support",
          description: "Response within 24 hours",
          included: true,
        },
        {
          name: "Social Media Promotion",
          description: "Monthly features on OKIZ channels",
          included: true,
        },
      ],
      highlight: true,
      badge: "Most Popular",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      ),
    },
    {
      name: "Enterprise",
      price: {
        monthly: "TBA",
        yearly: 0, // Not used
      },
      description: "Comprehensive solution for large businesses with multiple locations.",
      features: [
        {
          name: "All Growth Features",
          description: "Everything in the Growth plan",
          included: true,
        },
        {
          name: "Unlimited Campaigns",
          description: "No limit on active student offers",
          included: true,
        },
        {
          name: "Premium App Placement",
          description: "Top-tier visibility in the OKIZ app",
          included: true,
        },
        {
          name: "API Integration",
          description: "Full access to OKIZ platform APIs",
          included: true,
        },
        {
          name: "Dedicated Account Manager",
          description: "Personalized strategy and support",
          included: true,
        },
        {
          name: "Custom Reporting",
          description: "Tailored analytics for your business",
          included: true,
        },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <div >
      <section className="py-0 md:py-0 lg:py-0 justify-center" id="get-started"> 
        <Hero243/>
      </section>  
      <section className="py-8 md:py-12 lg:py-0 w-full flex flex-col items-center">
        <Logos3 />
      </section>    
      <section className="py-8 md:py-12 lg:py-0" id="partner">
        <FeatureStepsDemo />
      </section>
      <section className="py-8 md:py-12 lg:py-0 ">
        <ShopOwnersDash />
      </section>
      <section className="py-0 md:py-12 lg:py-0 px-4 md:px-8 lg:px-16" id="pricing">
        <PricingSection tiers={pricingTiers} />
      </section>
      <section className="py-8 md:py-12 lg:py-0 w-full  items-center" id="waitlist">
        <Waitlist1/>
        </section>
    </div>
  )
}