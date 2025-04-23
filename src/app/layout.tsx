import type { Metadata } from "next";
import { Hanken_Grotesk } from 'next/font/google';
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "Homezy",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <body className="bg-white font-hanken px-20 md:px-60 2lg:px-140">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
