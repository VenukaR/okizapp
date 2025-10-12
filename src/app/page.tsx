"use client";

import About3 from "@/components/about3";
import Cta11 from "@/components/cta11";
import { Faq1 } from "@/components/faq1";
import Feature13 from "@/components/feature13";
import Hero47 from "@/components/hero47";
import LoadingComponent from "@/components/loading";
import Logos8 from "@/components/logos8";
import Team1 from "@/components/team1";
import { useState, useEffect } from "react";

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
  // University logos
  "/img/unilogo/iit.png",
  "/img/unilogo/nibm.png",
  "/img/unilogo/nsbm.png",
  "/img/unilogo/sliit.png",
  "/img/unilogo/uc.png",
  "/img/unilogo/uj.png",
  "/img/unilogo/um.png",
  "/img/unilogo/up.png",
  "/img/unilogo/cinec.png",
  "/img/unilogo/esoft.png",
  "/img/unilogo/horizon.png",
  "/img/unilogo/kdu.png",
  "/img/unilogo/open.png",
  "/img/unilogo/ujaffna.png",
  "/img/unilogo/uk.png",
  "/img/unilogo/ur.png",
  "/img/unilogo/wayamba.png",
  // Shop logos
  "/img/shops/barista.png",
  "/img/shops/binchun.png",
  "/img/shops/bk.png",
  "/img/shops/caravanfresh.png",
  "/img/shops/hangla.png",
  "/img/shops/java.png",
  "/img/shops/nolimit.png",
  "/img/shops/pizzahut.png",
  "/img/shops/sevenseven.png",
  "/img/shops/spaceylon.png",
  "/img/shops/sugarbeach.png",
  "/img/shops/teaavenue.png",
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