import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      image: "/images/city-1.png",
      title: "Pasadena, Oklahoma",
      total: "100+ listings",
    },
    {
      image: "/images/city-2.png",
      title: "Lafayette, California",
      total: "100+ listings",
    },
    {
      image: "/images/city-3.png",
      title: "New York",
      total: "100+ listings",
    },
  ];

  return NextResponse.json(data);
}
