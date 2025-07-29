"use client";

import React, { useState } from "react";
import CardBenefit from "@components/fragments/CardBenefit";
import ArrowRight from "@/assets/icons/arrow-right.svg";

const BenefitSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="py-64 lg:py-80 ">
      <div className="justify-between md:flex items-center">
        <div className="text-heading-2-mobile lg:text-heading-2 font-syne lg:w-485">
          Comfort Is Our Top Priority For You
        </div>
        <div className="pt-16 lg:pt-0 text-lg-regular flex lg:w-462 text-secondary-dark-80">
          We guarantee that the products we sell will make our customers happy
          because we are very concerned about our consumer satisfaction
        </div>
      </div>
      <div className="pt-32 lg:pt-64 gap-32 w-full lg:flex">
        <CardBenefit currentIndex={currentIndex} />
      </div>
      <div className="lg:hidden pt-40 justify-center items-center gap-40 flex">
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

export default BenefitSection;
