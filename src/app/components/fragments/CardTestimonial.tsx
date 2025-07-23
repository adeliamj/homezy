"use client";
import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Logo from "@/assets/icons/logo.svg";

type TestimonialItem = {
  rating: number;
  review: string;
  name: string;
  position: string;
};
const CardTestimonial = ({ currentIndex = 0 }: { currentIndex?: number }) => {
  const [items, setItems] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    fetch("/api/testimonial")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="md:hidden">
        <div className="w-full cursor-pointer h-full md:w-480 md:h-334 p-32 rounded-15 border border-brand-lavender-40 bg-secondary-white">
          <StarRating rating={items[currentIndex].rating} />
          <div className="text-secondary-dark-80 py-32 text-xl-regular">
            {items[currentIndex].review}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-syne text-heading-6">
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
          className="hidden cursor-pointer  md:block w-full h-full md:w-480 md:h-334 p-32 rounded-15 border border-brand-lavender-40 bg-secondary-white"
        >
          <StarRating rating={item.rating} />
          <div className="text-secondary-dark-80 py-32 text-xl-regular">
            {item.review}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-syne text-heading-6">{item.name}</p>
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
