import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      rating: 5,
      review:
        "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
      name: "Brooklyn Simmons",
      position: "CEO of Asana",
    },
    {
      rating: 4,
      review:
        "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
      name: "Brooklyn Simmons",
      position: "CEO of Asana",
    },
    {
      rating: 3,
      review:
        "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
      name: "Brooklyn Simmons",
      position: "CEO of Asana",
    },
  ];

  return NextResponse.json(data)
}
