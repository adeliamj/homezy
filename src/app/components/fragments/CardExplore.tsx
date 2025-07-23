'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import House from "@/assets/icons/house.svg";

type ExploreItems = {
  image: string;
  title: string;
  total: string;
};
const CardExplore = ({ currentIndex = 0 }: { currentIndex?: number }) => {
  const [items, setItems] = useState<ExploreItems[]>([]);

  useEffect(() => {
    fetch("/api/explore")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  if (!items[currentIndex]) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Mobile */}
      <div className="block lg:hidden cursor-pointer ">
        <div className="md:min-w-362 w-full rounded-15 border border-brand-lavender-40 bg-secondary-white">
          <div className="w-full h-350 overflow-hidden rounded-t-15 border-t border-t-brand-lavender-40">
            <Image
              src={items[currentIndex].image}
              alt="Logo"
              width={368}
              height={350}
              className="object-cover -z-10 w-full h-350 overflow-hidden"
            />
          </div>
          <div className="p-24">
            <div className="text-heading-5font-syne pb-8">
              {items[currentIndex].title}
            </div>
            <div className="flex gap-8">
              <House className="w-24 h-24" />
              <div className="text-secondary-dark-80 text-lg-regular">
                {items[currentIndex].total}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex gap-32 cursor-pointer ">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-15 border border-brand-lavender-40 bg-secondary-white"
          >
            <div className="w-full h-350 overflow-hidden rounded-t-15 border-t border-t-brand-lavender-40">
              <Image
                src={item.image}
                alt="Logo"
                width={368}
                height={350}
                className="object-cover -z-10 w-full h-350 overflow-hidden"
              />
            </div>
            <div className="p-24">
              <div className="text-heading-5font-syne pb-8">{item.title}</div>
              <div className="flex gap-8">
                <House className="w-24 h-24" />
                <div className="text-secondary-dark-80 text-lg-regular">
                  {item.total}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardExplore;
