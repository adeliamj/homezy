import HeroSection from "@components/HeroSection";
import FeaturedSection from "@components/FeaturedSection";
import BenefitSection from "@components/BenefitSection";
import CategoriesSection from "@components/CategoriesSection";
import ExploreSection from "@components/ExploreSection";
import AgentsSection from "@components/AgentsSection";

export default async function Home() {
  // fetching Example
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/example`
  ).then((res) => res.json());

  return (
    <div className="">
      <div>
        <HeroSection />
        <FeaturedSection />
        <BenefitSection />
        <CategoriesSection />
        <ExploreSection />
        <AgentsSection />
        <p>Data fetch example : {response.message}</p>
      </div>
    </div>
  );
}
