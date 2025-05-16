import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      icon: "coin",
      title: "Affordable Price",
      description:
        "We provide the best for you. The price we offer accordance with the quality we provide",
    },
    {
      icon: "like",
      title: "Clear Legality",
      description:
        "Put your trust in us. We are a legal entity with official legality in the relevant government",
    },
    {
      icon: "people",
      title: "Experienced Agent",
      description:
        "We always work wih agents in their fields so that we can provide the best quality",
    },
  ];
  return NextResponse.json(data);
}
