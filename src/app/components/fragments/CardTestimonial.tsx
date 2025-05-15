import React from "react";
import StarRating from "./StarRating";
import Logo from "@/assets/icons/logo.svg";

const CardTestimonial = ({ currentIndex = 0 }: { currentIndex?: number }) => {
  const items = [
    {
      rating: "5",
      review:
        "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
      name: "Brooklyn Simmons",
      position: "CEO of Asana",
    },
    {
      rating: "4",
      review:
        "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
      name: "Brooklyn Simmons",
      position: "CEO of Asana",
    },
    {
      rating: "3",
      review:
        "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
      name: "Brooklyn Simmons",
      position: "CEO of Asana",
    },
  ];
  const selected = items[currentIndex];
  return (
    <>
      <div className="md:hidden">
        <div className="w-full h-full md:w-480 md:h-334 p-32 rounded-15 border border-brand-lavender-40 bg-secondary-white">
          <StarRating rating={parseInt(items[currentIndex].rating)} />
          <div className="text-secondary-dark-80 py-32 text-xl-regular">
            {items[currentIndex].review}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-syne text-heading-6">
                {items[currentIndex].name}
              </p>
              <p className="pt-6 text-lg-regular">
                {items[currentIndex].position}
              </p>
            </div>
            <div>
              <Logo className="w-48 h-48" />
            </div>
          </div>
        </div>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="hidden md:block w-full h-full md:w-480 md:h-334 p-32 rounded-15 border border-brand-lavender-40 bg-secondary-white"
        >
          <StarRating rating={parseInt(item.rating)} />
          <div className="text-secondary-dark-80 py-32 text-xl-regular">
            {item.review}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-syne text-heading-6">{item.name}</p>
              <p className="pt-6 text-lg-regular">{item.position}</p>
            </div>
            <div>
              <Logo className="w-48 h-48" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardTestimonial;
