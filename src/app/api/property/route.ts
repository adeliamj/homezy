import { NextResponse } from "next/server";

export async function GET() {
  const properties = [
    {
      image: "/images/property-1.png",
      originalPrice: 2095,
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
      location: {
        lat: 27.2986,
        lng: -81.3623,
      },
    },
    {
      image: "/images/property-2.png",
      originalPrice: 15000,
      per: "months",
      title: "Beach Pros Realty Inc.",
      address: "37 Ambleside Gardens, Ilford, IG4 5HH",
      description: "Luxurious beachside property with spacious interiors.",
      bedrooms: 4,
      bathrooms: 4,
      size: "5x7 m²",
      type: "Beach House",
      contact: {
        name: "Sarah Johnson",
        role: "Senior Agent",
        company: "Beach Pros Realty Inc.",
        officeAddress: "37 Ambleside Gardens, Ilford, IG4 5HH",
      },
      location: {
        lat: 51.5755,
        lng: 0.0555,
      },
    },
    {
      image: "/images/property-3.png",
      originalPrice: 4299,
      per: "months",
      title: "Beacon Homes LLC",
      address: "3 Leame Close, Hull, HU3 6ND",
      description: "Comfortable and affordable family housing unit.",
      bedrooms: 3,
      bathrooms: 2,
      size: "5x7 m²",
      type: "Townhouse",
      contact: {
        name: "James Allen",
        role: "Sales Manager",
        company: "Beacon Homes LLC",
        officeAddress: "3 Leame Close, Hull, HU3 6ND",
      },
      location: {
        lat: 53.7521,
        lng: -0.3696,
      },
    },
    {
      image: "/images/house-illustration-2.png",
      originalPrice: 5099,
      per: "months",
      title: "Beach Pros Realty Inc.",
      address: "28B Highgate Road, London, NW5 1NS",
      description: "Modern living in the heart of London with great access.",
      bedrooms: 3,
      bathrooms: 2,
      size: "5x7 m²",
      type: "Modern Apartment",
      contact: {
        name: "Sarah Johnson",
        role: "Senior Agent",
        company: "Beach Pros Realty Inc.",
        officeAddress: "28B Highgate Road, London, NW5 1NS",
      },
      location: {
        lat: 51.5557,
        lng: -0.1415,
      },
    },
  ];

  const data = Array.from({ length: 125 }, (_, i) => {
    const base = properties[i % properties.length];
    const originalPrice = base.originalPrice;
    const discountPrice =
      originalPrice > 3000 ? Math.round(originalPrice * 0.9) : undefined;

    return {
      ...base,
      id: i + 1,
      title: `${base.title} #${i + 1}`,
      originalPrice,
      discountPrice,
    };
  });

  return NextResponse.json(data);
}
