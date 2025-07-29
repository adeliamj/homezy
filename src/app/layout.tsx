import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Syne } from "next/font/google";
import localFont from "next/font/local";

import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import "./globals.css";

// Google Fonts
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

const satoshi = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

// Satoshi (local)
const soehne = localFont({
  src: [
    {
      path: "../fonts/soehne/test-soehne-leicht.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/soehne/test-soehne-kraftig.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/soehne/test-soehne-leicht.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-soehne",
});

export const metadata: Metadata = {
  title: "Homezy",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${syne.variable} ${satoshi.variable} ${soehne.variable}`}
    >
      <body className="bg-white font-hanken bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
