'use client'

import React, { useEffect, useState } from "react";
import Coin from "@/assets/icons/coin.svg";
import LikeShape from "@/assets/icons/like-shapes.svg";
import People from "@/assets/icons/people.svg";

const iconMap: Record<string, React.ReactElement> = {
  coin: <Coin className="w-48 h-48" />,
  like: <LikeShape className="w-48 h-48" />,
  people: <People className="w-48 h-48" />,
};

type BenefitItem = {
  icon: string;
  title: string;
  description: string;
};

const CardBenefit = ({ currentIndex = 0 }: { currentIndex?: number }) => {
  const [items, setItems] = useState<BenefitItem[]>([]);

  useEffect(() => {
    fetch("/api/benefit")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const selected = items[currentIndex];

  if (!items[currentIndex]) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="block lg:hidden ">
        <div className="md:min-w-365 w-full bg-secondary-white rounded-15 border lg:p-40 p-24">
          <div className="bg-brand-lavender-40 rounded-15 p-20 w-90 h-90">
            {iconMap[items[currentIndex].icon]}
          </div>
          <div className="pt-64 text-heading-5-mobile lg:text-heading-5font-syne">
            {items[currentIndex].title}
          </div>
          <div className="pt-8 text-normal-regular text-secondary-dark-80">
            {items[currentIndex].description}
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex gap-32">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full bg-secondary-white rounded-15 border lg:p-40 p-24"
          >
            <div className="bg-brand-lavender-40 rounded-15 p-20 w-90 h-90">
              {iconMap[item.icon]}
            </div>
            <div className="pt-64 text-heading-5-mobile lg:text-heading-5font-syne">
              {item.title}
            </div>
            <div className="pt-8 text-normal-regular text-secondary-dark-80">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardBenefit;
