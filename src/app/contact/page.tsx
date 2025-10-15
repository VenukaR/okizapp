
import { ContactForm } from "@/components/contact/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact OKIZ | Get in Touch with Student Discount Platform",
  description: "Contact OKIZ team for business partnerships, student support, or general inquiries. Join our network of 300,000+ students and partner businesses in Sri Lanka.",
  keywords: [
    "contact OKIZ",
    "business partnership",
    "student support",
    "OKIZ team",
    "partner with OKIZ",
    "student marketplace contact"
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact OKIZ | Business Partnerships & Student Support",
    description: "Get in touch with OKIZ team for partnerships and support. Response within 24 hours.",
    url: "https://okiz.app/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-primary-light/30">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Hero Section */}
        <div className="lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce opacity-60" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-32 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce opacity-60" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-32 w-5 h-5 bg-white/30 rounded-full animate-bounce opacity-60" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

          <div className="relative z-10 text-center px-8 lg:px-12 py-10 max-w-md">
            {/* Logo */}
            <div className="mb-8">
              <div className="mx-auto w-40 h-20 bg-white backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 shadow-xl border border-white/30">
                <img
                  src="/img/logo.png"
                  alt="OKIZ Logo"
                  className="w-28 h-auto drop-shadow-lg"
                  width={112}
                  height={112}
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build Something
              <span className="block text-blue-100">Amazing Together</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Ready to transform student savings in Sri Lanka? Get in touch with our team and let&apos;s discuss how OKIZ can benefit your business.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-blue-100 text-sm">nxora.co@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Response Time</p>
                    <p className="text-blue-100 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="mt-8 flex justify-center space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
            </div> */}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}