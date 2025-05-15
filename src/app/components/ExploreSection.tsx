"use client";

import React, { useState } from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import CardExplore from "@components/fragments/CardExplore";

const ExploreSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="my-64 md:my-80 ">
      <div className="justify-between md:flex">
        <div className="text-heading-2-mobile md:text-heading-2 font-syne">
          Explore Cities
        </div>
        <div className="text-lg-bold flex gap-8">
          Browse All Cities
          <ArrowRight className="w-24 h-24" />
        </div>
      </div>
      <div className="pt-32 md:pt-64 gap-32 w-full md:flex">
        <CardExplore currentIndex={currentIndex} />
      </div>
      <div className="md:hidden pt-40 justify-center items-center gap-40 flex">
        <div
          className="text-secondary-white bg-secondary-dark-100 p-10 rounded-15 w-fit"
          onClick={prevCard}
        >
          <ArrowRight className="w-32 h-32 transform rotate-180" />
        </div>
        <div
          className="text-secondary-white bg-secondary-dark-100 p-10 rounded-15 w-fit"
          onClick={nextCard}
        >
          <ArrowRight className="w-32 h-32 " />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
