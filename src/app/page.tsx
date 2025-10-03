"use client";

import About3 from "@/components/about3";
import Cta11 from "@/components/cta11";
import { Faq1 } from "@/components/faq1";
import Feature13 from "@/components/feature13";
import Hero47 from "@/components/hero47";
import Logos8 from "@/components/logos8";
import Team1 from "@/components/team1";
import { useState, useEffect } from "react";

export default function Home() {
   const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Return a simpler initial UI if not mounted to avoid hydration mismatch
  if (!mounted) {
    return <div className="px-4 md:px-8 lg:px-16">Loading...</div>;
  }
  return (
    <div >
      <section className="py-8 md:py-12 lg:py-0 px-0 md:px-0 lg:px-0">
        <Hero47 />
      </section>
      <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
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