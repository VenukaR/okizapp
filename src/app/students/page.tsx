
import About3 from "@/components/about3";
import Feature13 from "@/components/feature13";
import Hero7 from "@/components/hero7";

export default function StudentsPage() {
  return (
    <div>
      <section className="py-8 md:py-12 lg:py-0 flex justify-center">
        <Hero7 />
      </section>
      <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
        <About3/>
        </section>
      <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
        <Feature13/>
        </section>

    </div>
  )
}