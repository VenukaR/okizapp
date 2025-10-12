
import { Download1 } from "@/components/download1";
import Hero7 from "@/components/hero7";
import HowToRegister from "@/components/howitworks";
import WhyChooseUs from "@/components/whychoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Students | OKIZ Student Discounts & Offers in Sri Lanka",
  description: "Join 300,000+ verified university students in Sri Lanka getting exclusive discounts. Download OKIZ app for instant access to student deals from local businesses.",
  keywords: [
    "student app Sri Lanka",
    "university discounts",
    "student benefits",
    "OKIZ student app",
    "student savings",
    "verified student offers",
    "student deals Sri Lanka"
  ],
  alternates: {
    canonical: '/students',
  },
  openGraph: {
    title: "OKIZ for Students | Exclusive University Discounts",
    description: "Join 300,000+ students saving money with verified discounts. Download the app for instant access to deals.",
    url: "https://okiz.app/students",
  },
};

export default function StudentsPage() {
  return (
    <div>
      <section className="py-0 md:py-12 lg:py-0 flex items-center justify-center" id="students">
        <Hero7/>
      </section>
      <section className="py-0 md:py-12 lg:py-0 flex items-center justify-center" id="why-choose-us">
        <WhyChooseUs/>
      </section>
       <section className="py-0 md:py-12 lg:py-0 flex items-center justify-center" id="register">
        <HowToRegister/>
      </section>
      <section className="py-0 md:py-12 lg:py-0 flex w-full" id="download">
       <Download1/>
      </section>
     
     

    </div>
  )
}