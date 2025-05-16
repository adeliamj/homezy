import { NextResponse } from "next/server";
import Image1 from "@/assets/images/property-1.png";
import Image2 from "@/assets/images/property-2.png";
import Image3 from "@/assets/images/property-3.png";
import Image4 from "@/assets/images/house-illustration-2.png";

export async function GET() {
  const data = [
    {
      id: 1,
      image: "/images/property-1.png",
      price: 2095,
      per: "months",
      title: "COVA Home Realty",
      address: "2699 Green Valley, Highland Lake, FL",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation ",
      bedrooms: 3,
      bathrooms: 4,
      size: "6x8 m²",
      type: "Modern Loft",
      contact: {
        name: "Edwin Martins",
        role: "Property Advisor",
        company: "COVA Home Realty",
        officeAddress: "2699 Green Valley, Highland Lake, FL",
      },
    },
    {
      id: 2,
      image: "/images/property-2.png",
      price: 15000,
      title: "Beach Pros Realty Inc.",
      address: "37 Ambleside Gardens, Ilford, IG4 5HH",
      bedrooms: 4,
      bathrooms: 4,
      size: "5x7 m²",
    },
    {
      id: 3,
      image: "/images/property-3.png",
      price: 4299,
      per: "months",
      title: "Beacon Homes LLC",
      address: "3 Leame Close, Hull, HU3 6ND",
      bedrooms: 3,
      bathrooms: 2,
      size: "5x7 m²",
    },
    {
      id: 4,
      image: "/images/house-illustration-2.png",
      price: 5099,
      per: "months",
      title: "Beach Pros Realty Inc.",
      address: "28B Highgate Road, London, NW5 1NS",
      bedrooms: 3,
      bathrooms: 2,
      size: "5x7 m²",
    },
  ];

  return NextResponse.json(data);
}
