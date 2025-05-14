import React from "react";
import Image from "next/image";
import ProfilePerson2 from "@/assets/images/profile-person-2.png";
import PhoneCallFill from "@/assets/icons/phone-call-fill.svg";
import Location from "@/assets/icons/location.svg";
import { dummyProperties } from "@components/dataservices/dummyProperty";
import Bed from "@/assets/icons/bed.svg";
import Bath from "@/assets/icons/bath.svg";
import SurfaceArea from "@/assets/icons/surface-area.svg";
import Repair from "@/assets/icons/repair.svg";

const CardProperty1 = () => {
  const property = dummyProperties.find((p) => p.id === 1);

  if (!property) return <div>Property not found</div>;

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
    <div className="hidden md:flex min-w-365 w-full bg-secondary-white rounded-15">
      <div className="w-500 h-420 overflow-hidden rounded-tl-40 ">
        <Image
          src={property.image}
          alt="Logo"
          width={500}
          height={420}
          className="object-cover -z-10 w-500 h-420 overflow-hidden"
        />
      </div>
      <div className="mt-32 mx-32 w-660 items-start flex-grow">
        <div className="pb-32 gap-165 md:flex justify-between">
          <div className="flex items-end">
            <div className="text-syne text-heading-3">
              ${property.price.toLocaleString()}
            </div>
            <div className="text-lg-regular text-secondary-dark-80">
              / {property.per}
            </div>
          </div>
          {property.contact && (
            <div className="flex gap-32 items-center">
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
        <div className="text-syne text-heading-4">{property.title}</div>
        <div className="flex gap-8 text-secondary-dark-80 items-center">
          <Location className=" w-24 h-24 pb-4" />
          <div className="text-lg-regular ">{property.address}</div>
        </div>
        <div className="pt-20 text-lg-regular text-secondary-dark-80 line-clamp-2">
          {property.description}
          <span className="text-lg-bold">Read More</span>
        </div>
        <div className="mt-40 bg-brand-lavender-20 md:w-full md:flex gap-48 p-20 rounded-15">
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
