"use client";

import React, { useEffect, useState } from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import CardProperty1 from "./fragments/CardProperty1";
import CardProperty2 from "./fragments/CardProperty2";

interface PropertyItems {
  id: number;
  image: string;
  originalPrice: number;
  per?: string;
  title: string;
  address: string;
  description?: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
}


const FeaturedSection = () => {
  const [properties, setProperties] = useState<PropertyItems[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/property");
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((property) =>
    [2, 3, 4].includes(property.id)
  );
  return (
    <div className="py-64 lg:py-80 ">
      <div className="justify-between flex flex-col lg:flex-row gap-16 pb-32">
        <div className="text-heading-2-mobile lg:text-heading-2 font-syne">
          Featured Listings
        </div>
        <div className="text-lg-bold flex gap-8 cursor-pointer">
          Browse All Featured
          <ArrowRight className="w-24 h-24" />
        </div>
      </div>
      <CardProperty1 />
      <div className="lg:pt-40 lg:flex gap-32">
        {filteredProperties.map((property) => (
          <CardProperty2 key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
