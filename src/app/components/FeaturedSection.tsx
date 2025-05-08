import React from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import CardProperty1 from "./fragments/CardProperty1";
import CardProperty2 from "./fragments/CardProperty2";
import { dummyProperties } from "@components/dataservices/dummyProperty";

const FeaturedSection = () => {
  const filteredProperties = dummyProperties.filter((property) =>
    [2, 3, 4].includes(property.id)
  );
  return (
    <div className="my-80">
      <div className="justify-between flex">
        <div className="text-heading-2 font-syne">Featured Listings</div>
        <div className="text-lg-bold flex gap-8">
          Browse All Featured
          <ArrowRight className="w-24 h-24" />
        </div>
      </div>
      <CardProperty1 />
      <div className="pt-40 flex gap-32">
        {filteredProperties.map((property) => (
          <CardProperty2 key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
