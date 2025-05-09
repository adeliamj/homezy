import React from "react";
import CardBenefit from "@components/fragments/CardBenefit"

const BenefitSection = () => {
  return (
    <div className="py-80">
      <div className="justify-between flex items-center">
        <div className="text-heading-2 font-syne w-485">
          Comfort Is Our Top Priority For You
        </div>
        <div className="text-lg-regular flex  w-462 text-secondary-dark-80">
          We guarantee that the products we sell will make our customers happy
          because we are very concerned about our consumer satisfaction
        </div>
      </div>
      <div className="pt-64 gap-32 w-full flex">
      <CardBenefit/>
      </div>
      
    </div>
  );
};

export default BenefitSection;
