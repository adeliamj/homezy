import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      image: "/images/agents-1.png",
      name: "Edwin Martins",
      position: " Property Advisor",
    },
    {
      image: "/images/agents-2.png",
      name: "Robert Fox",
      position: " Property Advisor",
    },
    {
      image: "/images/agents-3.png",
      name: "Jane Cooper",
      position: " Property Advisor",
    },
    {
      image: "/images/agents-4.png",
      name: "Guy Hawkins",
      position: " Property Advisor",
    },
    {
      image: "/images/agents-5.png",
      name: "Kathryn Murphy",
      position: " Property Advisor",
    },
    {
      image: "/images/agents-6.png",
      name: "Albert Flores",
      position: " Property Advisor",
    },
  ];

  return NextResponse.json(data);
}
