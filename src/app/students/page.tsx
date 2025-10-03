
import About3 from "@/components/about3";
import Feature13 from "@/components/feature13";
import { Hero47 } from "@/components/hero47";

export default function StudentsPage() {
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