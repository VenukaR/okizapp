
import Hero7 from "@/components/hero7";
import HowToRegister from "@/components/howitworks";
import WhyChooseUs from "@/components/whychoose";

export default function StudentsPage() {
  return (
    <div>
      <section className="py-0 md:py-12 lg:py-0   flex justify-center" id="students">
        <Hero7/>
      </section>
      <section className="py-0 md:py-12 lg:py-0" id="why-choose-us">
        <WhyChooseUs/>
      </section>
       <section className="py-0 md:py-12 lg:py-0   flex justify-center" id="register">
        <HowToRegister/>
      </section>
     
     

    </div>
  )
}