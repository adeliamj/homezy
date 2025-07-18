import { NextResponse } from "next/server";

export async function GET() {
  const dropdownData = [
    {
      title: "Interior Details",
      sections: [
        {
          subtitle: "Interior Details",
          items: ["Basement: Partial, Storage Space", "Number of Rooms: 10"],
        },
        {
          subtitle: "Beds & Baths",
          items: ["Bedrooms: 5", "Bathrooms: 5"],
        },
        {
          subtitle: "Dimensions and Layout",
          items: ["Living Area: 2500 Square Feet"],
        },
        {
          subtitle: "Heating & Cooling",
          items: ["Heating: Central", "Has Heating", "Heating Fuel: Central"],
        },
      ],
    },
    {
      title: "Property Size",
      sections: [
        {
          subtitle: "Interior Details",
          items: ["Basement: Partial, Storage Space", "Number of Rooms: 10"],
        },
        {
          subtitle: "Beds & Baths",
          items: ["Bedrooms: 5", "Bathrooms: 5"],
        },
        {
          subtitle: "Dimensions and Layout",
          items: ["Living Area: 2500 Square Feet"],
        },
        {
          subtitle: "Heating & Cooling",
          items: ["Heating: Central", "Has Heating", "Heating Fuel: Central"],
        },
      ],
    },
    {
      title: "Land Area",
      sections: [
        {
          subtitle: "Interior Details",
          items: ["Basement: Partial, Storage Space", "Number of Rooms: 10"],
        },
        {
          subtitle: "Beds & Baths",
          items: ["Bedrooms: 5", "Bathrooms: 5"],
        },
        {
          subtitle: "Dimensions and Layout",
          items: ["Living Area: 2500 Square Feet"],
        },
        {
          subtitle: "Heating & Cooling",
          items: ["Heating: Central", "Has Heating", "Heating Fuel: Central"],
        },
      ],
    },
    {
      title: "Year Build",
      sections: [
        {
          subtitle: "Interior Details",
          items: ["Basement: Partial, Storage Space", "Number of Rooms: 10"],
        },
        {
          subtitle: "Beds & Baths",
          items: ["Bedrooms: 5", "Bathrooms: 5"],
        },
        {
          subtitle: "Dimensions and Layout",
          items: ["Living Area: 2500 Square Feet"],
        },
        {
          subtitle: "Heating & Cooling",
          items: ["Heating: Central", "Has Heating", "Heating Fuel: Central"],
        },
      ],
    },
  ];

  return NextResponse.json(dropdownData);
}
