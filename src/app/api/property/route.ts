import { NextResponse } from "next/server";

export async function GET() {
  const baseProperties = [
    {
      image: "/images/property-1.png",
      price: 2095,
      per: "months",
      title: "COVA Home Realty",
      address: "2699 Green Valley, Highland Lake, FL",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
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
      image: "/images/property-2.png",
      price: 15000,
      title: "Beach Pros Realty Inc.",
      address: "37 Ambleside Gardens, Ilford, IG4 5HH",
      bedrooms: 4,
      bathrooms: 4,
      size: "5x7 m²",
    },
    {
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

  const data = Array.from({ length: 125 }, (_, i) => {
    const base = baseProperties[i % baseProperties.length];
    return {
      ...base,
      id: i + 1,
      title: `${base.title} #${i + 1}`,
    };
  });

  return NextResponse.json(data);
}
