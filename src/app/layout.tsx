import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OKIZ - Student Discounts & Deals",
  description: "Empowering students to thrive with exclusive discounts from thousands of stores. Save on what you need, want, and love.",
  keywords: "student discounts, deals, savings, university, college, student deals",
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
