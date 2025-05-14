"use client";

import React, { useRef } from "react";
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
  return (
    <div className="my-80">
      <div className="justify-center flex">
        <div className="text-heading-2 font-syne">
          Kind Words From Our Customers
        </div>
      </div>
      <div
        className="pt-64 overflow-x-auto md:flex gap-32 no-scrollbar"
        ref={testimonialContainerRef}
      >
        <div className="flex gap-32">
          <CardTestimonial />
        </div>
      </div>
      <div className="pt-40 justify-center items-center gap-40 flex">
        <div
          className="text-secondary-white bg-secondary-dark-100 p-10 rounded-15 w-fit"
          onClick={() => scrollTestimonials("left")}
        >
          <ArrowRight className="w-32 h-32 transform rotate-180" />
        </div>
        <div
          className="text-secondary-white bg-secondary-dark-100 p-10 rounded-15 w-fit"
          onClick={() => scrollTestimonials("right")}
        >
          <ArrowRight className="w-32 h-32 " />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
