"use client";

import About3 from "@/components/about3";
import Cta11 from "@/components/cta11";
import { Faq1 } from "@/components/faq1";
import Feature13 from "@/components/feature13";
import Hero47 from "@/components/hero47";
import LoadingComponent from "@/components/loading";
import Logos8 from "@/components/logos8";
import Team1 from "@/components/team1";
import { StructuredData, faqSchema } from "@/components/structured-data";
import { useState, useEffect } from "react";
import shopLogosData from "@/data/shop-logos.json";
import universityLogosData from "@/data/university-logos.json";

// SEO: This would be ideal, but since this is a client component, we'll handle SEO in layout
// export const metadata = {
//   title: "Student Discounts & Deals in Sri Lanka",
//   description: "Join 300,000+ verified students accessing exclusive discounts from local businesses. Save money on food, shopping, entertainment & more with OKIZ.",
//   alternates: {
//     canonical: 'https://okiz.app',
//   },
// };

// Critical images that should be preloaded
const criticalImages = [
  "/img/logo.png",
  "/img/logoblue.png", 
  "/img/aboutus.png",
  "/img/aboutus2.png",
  "/img/student.png",
  "/img/shopowner.png",
  "/img/students.png",
  "/img/studentsstand.png",
  "/img/mockupback.png",
  "/img/phone-2.png",
  "/img/screenshot.png",
  "/img/gradcap.png",
  "/img/shopkeeper.jpg",
  "/img/stud2.jpg",
  "/img/students.jpg",
  // University logos (dynamically loaded from JSON)
  ...universityLogosData.universityLogos.map(uni => uni.logo),
  // Shop logos (dynamically loaded from JSON)
  ...shopLogosData.shopLogos.map(shop => shop.logo),
  // Team photos
  "/img/team/dimal.jpeg"
];

const preloadImages = (imageUrls: string[]) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    })
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Start preloading images immediately
        await preloadImages(criticalImages);
        setImagesLoaded(true);
      } catch (error) {
        console.log("Some images failed to preload:", error);
        // Still show the page even if some images fail
        setImagesLoaded(true);
      }
    };

    // Start loading images
    loadImages();
    
    // Set mounted after a minimum delay to ensure smooth transition
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Show loading until both mounted and images are loaded
  if (!mounted || !imagesLoaded) {
    return <div className=""><LoadingComponent /></div>;
  }
  return (
    <div >
      {/* FAQ Structured Data */}
      <StructuredData data={faqSchema} />
      
      <section className="py-8 md:py-12 lg:py-0 px-0 md:px-0 lg:px-0">
        <Hero47 />
      </section>
      <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16" id="aboutus">
        <About3/>
        
        </section>
      <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
        <Feature13 />
        </section>
        <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
        <Team1/>
        </section>
          <section className="py-8 md:py-12 lg:py-20 px-0 md:px-0 lg:px-0">
        <Logos8/>
        </section>
          <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
        <Faq1/>
        </section>
          <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
        <Cta11/>
        </section>
        
        

    </div>
  )
}