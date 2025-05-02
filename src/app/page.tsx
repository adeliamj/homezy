
import HeroSection from "@components/HeroSection";
import FeaturedSection from "@components/FeaturedSection";

export default async function Home() {
  // fetching Example
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/example`).then(
    (res) => res.json()
  );

  return (
    <div className="">
      <div>
        <HeroSection/>
        <FeaturedSection/>
        <p>Data fetch example : {response.message}</p>
  </div>
    </div>
  );
}
