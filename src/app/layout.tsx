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
