
import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero } from "@/components/hero12";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-primary-light/50">
      <section className="  ">
        <ContactHero />
      </section>

      <section className="pb-10 ">
        <div className="container mx-auto px-4 md:px-6">
         <ContactForm />
          
        </div>
      </section>
    </div>
  )
}