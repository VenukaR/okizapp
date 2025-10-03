"use client";

import { About3 } from "@/components/ui/about3";
import { Cta11 } from "@/components/ui/cta11";
import { Faq1 } from "@/components/ui/faq1";
import { Feature13 } from "@/components/ui/feature13";
import { Hero47 } from "@/components/ui/hero47";
import { Logos8 } from "@/components/ui/logos8";
import { Team1 } from "@/components/ui/team1";
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
    <div className="px-4 md:px-8 lg:px-16">
      <section className="py-8 md:py-12 lg:py-0">
        <Hero47 />
      </section>
      <section className="py-8 md:py-12 lg:py-20">
        <About3/>
        </section>
      <section className="py-8 md:py-12 lg:py-20">
        <Feature13/>
        </section>
        <section className="py-8 md:py-12 lg:py-20">
        <Team1/>
        </section>
          <section className="py-8 md:py-12 lg:py-20">
        <Logos8/>
        </section>
          <section className="py-8 md:py-12 lg:py-20">
        <Faq1/>
        </section>
          <section className="py-8 md:py-12 lg:py-20">
        <Cta11/>
        </section>
        
        

    </div>
  )
}