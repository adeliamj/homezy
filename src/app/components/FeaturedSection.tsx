import React from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import CardFeatured from "@components/fragments/CardFeatured";


const FeaturedSection = () => {
  return (
    <div className="my-80">
      <div className="justify-between flex">
        <div className="text-heading-2 font-syne">Featured Listings</div>
        <div className="text-lg-bold flex gap-8">
          Browse All Featured
          <ArrowRight className="w-24 h-24"/>
        </div>
      </div>
      <CardFeatured/>
    </div>
  );
};

export default FeaturedSection;
