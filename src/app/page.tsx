'use client';

import HeroSection from "@components/HeroSection";
import FeaturedSection from "@components/FeaturedSection";
import BenefitSection from "@components/BenefitSection";
import CategoriesSection from "@components/CategoriesSection";
import ExploreSection from "@components/ExploreSection";
import AgentsSection from "@components/AgentsSection";
import TestimonialSection from "@components/TestimonialSection";
import CTASection from "@components/CTASection";

export default async function Home() {
  return (
    <div className="">
      <div>
        <HeroSection />
        <FeaturedSection />
        <BenefitSection />
        <CategoriesSection />
        <ExploreSection />
        <AgentsSection />
        <TestimonialSection />
        <CTASection />
      </div>
    </div>
  );
}
