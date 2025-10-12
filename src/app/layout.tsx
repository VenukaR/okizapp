import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StructuredData, organizationSchema, websiteSchema, serviceSchema, mobileAppSchema } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "OKIZ - Student Discounts & Deals | Save Money in Sri Lanka",
    template: "%s | OKIZ"
  },
  description: "Discover exclusive student discounts and deals in Sri Lanka. OKIZ connects 300,000+ university students with verified offers from local businesses. Save on food, shopping, services & more.",
  keywords: [
    "student discounts Sri Lanka",
    "university deals",
    "OKIZ app",
    "student offers",
    "Sri Lankan student marketplace",
    "verified discounts",
    "student savings",
    "university marketplace",
    "local business deals",
    "student benefits"
  ],
  authors: [{ name: "OKIZ Team" }],
  creator: "OKIZ",
  publisher: "OKIZ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://okiz.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "OKIZ | Exclusive Student Discounts & Deals in Sri Lanka",
    description: "Join 300,000+ students saving money with verified discounts from local businesses. Exclusive offers for university students across Sri Lanka.",
    url: "https://okiz.app",
    siteName: "OKIZ",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "OKIZ - Student Discounts Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OKIZ | Student Discounts & Deals in Sri Lanka",
    description: "Join 300,000+ students saving money with verified discounts from local businesses.",
    images: ["/img/logo.png"],
    creator: "@okizapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical images */}
        <link rel="preload" href="/img/logo.png" as="image" />
        <link rel="preload" href="/img/logoblue.png" as="image" />
        <link rel="preload" href="/img/aboutus.png" as="image" />
        <link rel="preload" href="/img/student.png" as="image" />
        <link rel="preload" href="/img/shopowner.png" as="image" />
        <link rel="preload" href="/img/mockupback.png" as="image" />
        <link rel="preload" href="/img/screenshot.png" as="image" />
        <link rel="preload" href="/img/phone-2.png" as="image" />
        {/* Preload hero section images */}
        <link rel="preload" href="/img/students.png" as="image" />
        <link rel="preload" href="/img/studentsstand.png" as="image" />
      </head>
      <body className={`${inter.variable} font-sans antialiased theme-transition`}>
        {/* Structured Data for SEO */}
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <StructuredData data={serviceSchema} />
        <StructuredData data={mobileAppSchema} />
        
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
            <Navbar />
            <main className="pt-16 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
