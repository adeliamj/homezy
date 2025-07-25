"use client";

import React, { useRef, useState } from "react";
import CardTestimonial from "@components/fragments/CardTestimonial";
import ArrowRight from "@/assets/icons/arrow-right.svg";

const TestimonialSection = () => {
  const testimonialContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (testimonialContainerRef.current) {
      const scrollAmount = 480;
      if (direction === "left") {
        testimonialContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        testimonialContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);
  };
  return (
    <div className="py-64 md:py-80">
      <div className="justify-center flex">
        <div className="text-heading-2-mobile md:text-heading-2 font-syne">
          Kind Words From Our Customers
        </div>
      </div>
      <div
        className="pt-64 overflow-x-auto md:flex gap-32 no-scrollbar"
        ref={testimonialContainerRef}
      >
        <div className="flex gap-32">
          <CardTestimonial currentIndex={currentIndex} />
        </div>
      </div>
      <div className="hidden pt-40 justify-center items-center gap-40 md:flex">
        <div
          className="cursor-pointer text-secondary-white bg-secondary-dark-100 p-10 rounded-15 w-fit"
          onClick={() => scrollTestimonials("left")}
        >
          <ArrowRight className="w-32 h-32 transform rotate-180" />
        </div>
        <div
          className="cursor-pointer text-secondary-white bg-secondary-dark-100 p-10 rounded-15 w-fit"
          onClick={() => scrollTestimonials("right")}
        >
          <ArrowRight className="w-32 h-32 " />
        </div>
      </div>
      <div className="md:hidden pt-40 justify-center items-center gap-40 flex">
        <div
          className="cursor-pointer text-secondary-white bg-secondary-dark-100 p-10 rounded-15 w-fit"
          onClick={prevCard}
        >
          <ArrowRight className="w-32 h-32 transform rotate-180 " />
        </div>
        <div
          className="cursor-pointer  text-secondary-white bg-secondary-dark-100 p-10 rounded-15 w-fit"
          onClick={nextCard}
        >
          <ArrowRight className="w-32 h-32 " />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
