
import { Download1 } from "@/components/download1";
import Hero7 from "@/components/hero7";
import HowToRegister from "@/components/howitworks";
import WhyChooseUs from "@/components/whychoose";

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