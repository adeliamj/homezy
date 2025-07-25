'use client';

import React from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import CardCategories from "@components/fragments/CardCategories";

const CategoriesSection = () => {
  return (
    <div className="py-64 lg:py-80 ">
      <div className="justify-between lg:flex">
        <div className="text-heading-2-mobile lg:text-heading-2 font-syne">Featured Categories</div>
        <div className="text-lg-bold flex gap-8 cursor-pointer">
        Browse All Categories
          <ArrowRight className="w-24 h-24" />
        </div>
      </div>
      <div className="pt-24 lg:pt-64 gap-32 w-full lg:flex">
        <CardCategories />
      </div>
    </div>
  );
};

export default CategoriesSection;
