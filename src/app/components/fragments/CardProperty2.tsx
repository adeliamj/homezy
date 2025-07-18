"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bed from "@/assets/icons/bed.svg";
import Bath from "@/assets/icons/bath.svg";
import SurfaceArea from "@/assets/icons/surface-area.svg";

interface CardPropertyProps {
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
const CardBenefit: React.FC<CardPropertyProps> = ({ property }) => {
  const items = [
    {
      icon: <Bed className="w-24 h-24" />,
      value: `${property.bedrooms}`,
    },
    {
      icon: <Bath className="w-24 h-24" />,
      value: `${property.bathrooms}`,
    },
    {
      icon: <SurfaceArea className="w-24 h-24" />,
      value: `${property.size}`,
    },
  ];

  return (
    <div className="mt-24 lg:mt-0 w-full rounded-15 border border-brand-lavender-40 bg-secondary-white">
      <div className="w-full h-190 overflow-hidden rounded-t-15 ">
        <Image
          src={property.image}
          alt="Images"
          width={365}
          height={190}
          className="object-cover -z-10 w-full h-190 overflow-hidden"
        />
      </div>
      <div className="mx-16 mt-32 my-16 lg:m-24 items-start flex-grow">
        <div className="flex items-end">
          <div className="text-syne text-heading-4-mobile lg:text-heading-5">
          {property.originalPrice?.toLocaleString() ? `$${property.originalPrice.toLocaleString()}` : '-'}
          </div>
          <div className="text-lg-regular text-secondary-dark-80">/ month</div>
        </div>
        <div className="text-syne text-heading-5-mobile lg:text-heading-5no-whitespace">
          {property.title}
        </div>
        <div className="pt-16 gap-8 text-secondary-dark-80 items-center">
          <div className="text-normal-regular ">{property.address}</div>
        </div>
        <div className="w-full flex flex-grow justify-between border-t border-t-brand-lavender-40 pt-16 px-16 mt-16 ">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex text-sm-regular gap-8">
                <div className="text-secondary-dark-100">{item.icon}</div>
                <div className="text-secondary-dark-80">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBenefit;
