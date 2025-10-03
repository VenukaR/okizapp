"use client";

import { About3 } from "@/components/ui/about3";
import { Feature13 } from "@/components/ui/feature13";
import { Hero47 } from "@/components/ui/hero47";
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

    </div>
  )
}