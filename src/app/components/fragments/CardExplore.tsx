import React from "react";
import Image from "next/image";
import City1 from "@/assets/images/city-1.png";
import City2 from "@/assets/images/city-2.png";
import City3 from "@/assets/images/city-3.png";
import House from "@/assets/icons/house.svg";

const CardExplore = ({ currentIndex = 0 }: { currentIndex?: number }) => {
  const items = [
    {
      image: City1,
      label: "Pasadena, Oklahoma",
      value: "100+ listings",
    },
    {
      image: City2,
      label: "Lafayette, California",
      value: "100+ listings",
    },
    {
      image: City3,
      label: "New York",
      value: "100+ listings",
    },
  ];

  const selected = items[currentIndex];

  return (
    <>
    {/* Mobile */}
      <div className="block lg:hidden">
        <div className="lg:w-365 w-full rounded-15 border border-brand-lavender-40 bg-secondary-white">
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
            <div className="text-heading-6 text-syne pb-8">
              {items[currentIndex].label}
            </div>
            <div className="flex gap-8">
              <House className="w-24 h-24" />
              <div className="text-secondary-dark-80 text-lg-regular">
                {items[currentIndex].value}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex gap-32">
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
              <div className="text-heading-6 text-syne pb-8">{item.label}</div>
              <div className="flex gap-8">
                <House className="w-24 h-24" />
                <div className="text-secondary-dark-80 text-lg-regular">
                  {item.value}
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
