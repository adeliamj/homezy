"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bed from "@/assets/icons/bed.svg";
import Bath from "@/assets/icons/bath.svg";
import SurfaceArea from "@/assets/icons/surface-area.svg";

interface PopupCardProperty {
  property: {
    title: string;
    image: string;
    originalPrice: number;
    per?: string;
    address: string;
    description?: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
  };
}
const PopupCardProperty: React.FC<PopupCardProperty> = ({ property }) => {
  const items = [
    {
      icon: <Bed className="w-16 h-16" />,
      value: `${property.bedrooms}`,
    },
    {
      icon: <Bath className="w-16 h-16" />,
      value: `${property.bathrooms}`,
    },
    {
      icon: <SurfaceArea className="w-16 h-16" />,
      value: `${property.size}`,
    },
  ];

  return (
    <div className="mt-24 lg:mt-0 w-full min-w-170 md:min-w-206 rounded-15 border border-brand-lavender-40 bg-secondary-white">
      <div className=" min-w-170 w-full md:min-w-206 h-90 md:h-108 overflow-hidden rounded-t-15 ">
        <Image
          src={property.image}
          alt="Images"
          width={206}
          height={108}
          className="object-cover -z-10 w-full min-w-170 md:min-w-206 h-90 md:h-108 overflow-hidden"
        />
      </div>
      <div className="mx-12 my-12 items-start flex-grow">
        <div className="flex items-end">
          <div className="font-syne text-normal-bold lg:text-normal-bold">
            {property.originalPrice?.toLocaleString()
              ? `$${property.originalPrice.toLocaleString()}`
              : "-"}
          </div>
          <div className="text-sm-regular text-secondary-dark-80">/ month</div>
        </div>
        <div className="font-syne text-sm-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {property.title}
        </div>

        <div className="pt-4 gap-8 text-secondary-dark-80 items-center">
          <div className="text-xs-regular whitespace-nowrap text-ellipsis overflow-hidden">
            {property.address}
          </div>
        </div>
        <div className="w-full flex flex-grow justify-between border-t border-t-brand-lavender-40 pt-4 px-8 mt-8 ">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex text-sm-regular gap-8 items-center justify-center">
                <div className="text-secondary-dark-100">{item.icon}</div>
                <div className="text-secondary-dark-80 ">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopupCardProperty;
