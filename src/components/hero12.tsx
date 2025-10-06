import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden py-32 bg-transparent">
      {/* Background pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Image
          alt="background pattern"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] w-full h-full object-cover"
          width={800}
          height={800}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="rounded-xl bg-white/20 p-6 shadow-lg backdrop-blur-md">
            <Image
              src="/img/logo.png" // replace with your logo
              alt="OKIZ Logo"
              className=""
              width={400}
              height={800}
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight">
            Join Our Socials
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Stay updated with the latest offers, news, and exclusive student discounts.
          </p>

          {/* Social Icons */}
          <div className="mt-12 flex flex-wrap justify-center gap-10">
            {/* Instagram */}
            <a
              href="#"
              className="flex items-center justify-center w-24 h-24 bg-primary-light text-white rounded-full shadow-lg text-4xl transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="flex items-center justify-center w-24 h-24 bg-primary text-white rounded-full shadow-lg text-4xl transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
            >
              <FaFacebookF />
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="flex items-center justify-center w-24 h-24 bg-primary-dark text-white rounded-full shadow-lg text-4xl transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Subtext */}
          <p className="mt-10 text-gray-600 max-w-md">
            Click any icon to follow us and stay connected. Your student savings journey starts here!
          </p>
        </div>
      </div>
    </section>
  );
};

export { ContactHero };
