import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Syne } from "next/font/google";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-hanken",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Homezy",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${syne.variable}`}>
      <body className="bg-white font-hanken mx-20 md:mx-60 2lg:mx-140 bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
