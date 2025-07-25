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
      <div className="relative overflow-hidden ml-20 md:ml-60 2lg:ml-140 xl:ml-80 xxl:ml-140">
        <HeroSection />
      </div>
      <div className="mx-20 md:mx-60 2lg:mx-140 xl:mx-80 xxl:mx-140">
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
