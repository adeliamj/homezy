import React from 'react'
import ArrowRight from "@/assets/icons/arrow-right.svg";
import CardExplore from "@components/fragments/CardExplore";


const ExploreSection = () => {
  return (
    <div className="my-80 ">
      <div className="justify-between flex">
        <div className="text-heading-2 font-syne">Explore Cities</div>
        <div className="text-lg-bold flex gap-8">
        Browse All Cities
          <ArrowRight className="w-24 h-24" />
        </div>
      </div>
      <div className="pt-64 gap-32 w-full md:flex">
        <CardExplore />
      </div>
    </div>
  )
}

export default ExploreSection