// CTA.tsx
import React from "react";
import LocationFill from "@/assets/icons/location-fill.svg";
import Price from "@/assets/icons/price.svg";
import HouseFill from "@/assets/icons/house-fill.svg";
import Button from "@components/ui/Button";

const items = [
  {
    icon: <LocationFill className="w-20 h-20 lg:w-20 lg:h-20" />,
    label: "Location",
    value: "California, US",
  },
  {
    icon: <Price className="w-20 h-20 lg:w-20 lg:h-20" />,
    label: "Price",
    value: "$1200/month",
  },
  {
    icon: <HouseFill className="w-20 h-20 lg:w-20 lg:h-20" />,
    label: "Property Type",
    value: "Apartment",
  },
];

const CTA = () => {
  return (
    <div className="lg:flex justify-between border items-center bg-secondary-white lg:h-96 md:w-full px-16 py-18 lg:py-0 lg:px-20 rounded-xl border-secondary-dark-100">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        {items.map((item, index) => (
          <div key={index} className="pb-32 lg:pb-0">
            <div className="flex items-center gap-12">
              <div className="flex bg-brand-lavender-40 rounded-2xl w-40 h-40 items-center justify-center">
                <div className="w-20 h-20">{item.icon}</div>
              </div>
              <div>
                <div className="text-sm-regular text-secondary-dark-80 whitespace-nowrap">
                  {item.label}
                </div>
                <div className="text-normal-bold whitespace-nowrap">
                  {item.value}
                </div>
              </div>
            </div>
          </div>
        ))}
        <Button
          variant="secondary"
          mobileSize="md"
          desktopSize="lg"
          text="Browse"
          className="w-full lg:w-fit"
        />
      </div>
      <div></div>
    </div>
  );
};

export default CTA;
