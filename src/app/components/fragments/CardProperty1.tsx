"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilePerson2 from "@/assets/images/profile-person-2.png";
import PhoneCallFill from "@/assets/icons/phone-call-fill.svg";
import Location from "@/assets/icons/location.svg";
import Bed from "@/assets/icons/bed.svg";
import Bath from "@/assets/icons/bath.svg";
import SurfaceArea from "@/assets/icons/surface-area.svg";
import Repair from "@/assets/icons/repair.svg";
interface Property {
  id: number;
  title: string;
  image: string;
  price: number;
  per?: string;
  address: string;
  description?: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  type?: string;
  contact?: {
    name: string;
    role: string;
    company: string;
    officeAddress: string;
  };
}

const CardProperty1 = () => {
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await fetch("/api/property");
      const data: Property[] = await res.json(); // kasih tipe array properti
      const selected = data.find((p: Property) => p.id === 1);
      setProperty(selected || null);
    };

    fetchProperty();
  }, []);

  if (!property) return <div>Loading...</div>;

  const items = [
    {
      icon: <Bed className="w-24 h-24" />,
      label: "Bedroooms",
      value: `${property.bedrooms}`,
    },
    {
      icon: <Bath className="w-24 h-24" />,
      label: "Bathrooms",
      value: `${property.bathrooms}`,
    },
    {
      icon: <SurfaceArea className="w-24 h-24" />,
      label: "Square Area",
      value: `${property.size}`,
    },
    {
      icon: <Repair className="w-24 h-24" />,
      label: "Square Area",
      value: `${property.type}`,
    },
  ];

  return (
    <div className="lg:flex w-full lg:w-full bg-secondary-white rounded-15">
      <div className="w-full h-full lg:w-500 lg:h-420 overflow-hidden md:rounded-tl-40 rounded-15 ">
        <Image
          src={property.image}
          alt="Images"
          width={500}
          height={420}
          className="object-cover -z-10 w-full h-259 md:w-648 md:h-420 lg:w-500 lg:h-420 overflow-hidden"
        />
      </div>
      <div className="p-16 lg:p-0 lg:mt-32 lg:mx-32 lg:w-660 items-start flex-grow">
        <div className="pb-24 lg:pb-32 2lg:gap-165 lg:flex justify-between">
          <div className="flex items-end">
            <div className="text-syne text-heading-3">
              {property.price?.toLocaleString()
                ? `$${property.price.toLocaleString()}`
                : "-"}
            </div>
            <div className="text-lg-regular text-secondary-dark-80">
              / {property.per}
            </div>
          </div>
          {property.contact && (
            <div className="mt-16 lg:mt-0 flex gap-32 items-center">
              <div className=" gap-8 flex items-center ">
                <div className="bg-brand-lavender-40 w-40 h-40 rounded-full item overflow-hidden">
                  <Image
                    src={ProfilePerson2}
                    width={40}
                    height={40}
                    alt="Logo"
                    className="w-40 h-40"
                  />
                </div>
                <div>
                  <div className="text-lg-bold">Edwin Martins</div>
                  <div className="text-normal-regular text-secondary-dark-80">
                    Property Advisor
                  </div>
                </div>
              </div>
              <div className="w-32 h-32">
                <PhoneCallFill />
              </div>
            </div>
          )}
        </div>
        <div className=" text-syne text-heading-4-mobile lg:text-heading-4">
          {property.title}
        </div>
        <div className="flex gap-8 text-secondary-dark-80 items-center">
          <Location className=" w-24 h-24 pb-4" />
          <div className="text-normal-regular lg:text-lg-regular ">
            {property.address}
          </div>
        </div>
        <div className="min-w-303 w-full pt-20 text-lg-regular text-secondary-dark-80 line-clamp-4 lg:line-clamp-2">
          {property.description}
          <span className="text-lg-bold">Read More</span>
        </div>
        <div className="mt-24 lg:mt-40 bg-brand-lavender-20 min-w-303 w-full grid grid-cols-2 lg:flex gap-6 lg:gap-16 2lg:gap-48 p-16 md:p-20 rounded-15">
          {items.map((item, index) => (
            <div key={index}>
              <div className="text-normal-regular text-secondary-dark-80 pb-8">
                {item.label}
              </div>
              <div className="flex text-normal-bold text-secondary-dark-100 gap-8">
                {item.icon}
                <div>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProperty1;
