import React from "react";
import Coin from "@/assets/icons/coin.svg";
import LikeShape from "@/assets/icons/like-shapes.svg";
import People from "@/assets/icons/people.svg";
const CardBenefit = () => {
  const items = [
    {
      icon: <Coin className="w-48 h-48" />,
      label: "Affordable Price",
      value:
        "We provide the best for you. The price we offer accordance with the quality we provide",
    },
    {
      icon: <LikeShape className="w-48 h-48" />,
      label: "Clear Legality",
      value:
        "Put your trust in us. We are a legal entity with official legality in the relevant government",
    },
    {
      icon: <People className="w-48 h-48" />,
      label: "Experienced Agent",
      value:
        "We always work wih agents in their fields so that we can provide the best quality",
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="min-w-362 w-full bg-secondary-white rounded-15 border p-40"
        >
          <div className="bg-brand-lavender-40 rounded-15 p-20 w-90 h-90">
            {item.icon}
          </div>
          <div className="pt-64 text-heading-6 text-syne">{item.label}</div>
          <div className="pt-8 text-normal-regular text-secondary-dark-80">
            {item.value}
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBenefit;
