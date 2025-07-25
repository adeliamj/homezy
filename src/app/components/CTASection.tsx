"use client";

import React from "react";
import Image from "next/image";
import Pattern2 from "@/assets/images/pattern-2.png";
const CTASection = () => {
  return (
    <div className='py-64 lg:py-80 '>
      <div className="w-full lg:h-380 gap-77 bg-brand-lavender-80 border border-secondary-dark-100 rounded-15 flex overflow-hidden">
        <div className="py-24 lg:py-56 pl-24 lg:pl-72 w-416">
          <div className="text-heading-2-mobile lg:text-heading-2 text-secondary-white whitespace-nowrap font-syne ">
            <p>Subscribe To</p>
            <p>Our Newsletter</p>
          </div>
          <div className="pt-8 pb-24 text-lg-regular text-secondary-white w-287 lg:w-416">
            Join our newsletter to stay up to date on features and releases.
          </div>
          <div className="hidden bg-secondary-white rounded-15 p-8 justify-between lg:flex border border-secondary-dark-20 w-416">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="text-secondary-dark-40 text-normal-regular flex-1 px-4 py-2 rounded-15 border-none focus:outline-none focus:ring-0"
            />
            <button className="w-130 text-normal-bold text-secondary-white px-32 py-16 bg-secondary-dark-100 rounded-15">
              Subscibe
            </button>
          </div>
          <div className="lg:hidden h-52">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-52 mb-8 bg-secondary-white px-16 py-13  border  border-secondary-dark-20  text-secondary-dark-40 text-normal-regular rounded-15 border-none focus:outline-none focus:ring-0"
            />
            <button className="w-full h-52 text-normal-bold text-secondary-white justify-items-center px-16 bg-secondary-dark-100 rounded-15">
              Subscibe
            </button>
          </div>
        </div>
        <div className="lg:ml-52 2lg:ml-77 2lg:-mt-16">
          <Image
            src={Pattern2}
            alt="Background Pattern"
            width={1173}
            height={546}
            className="w-755 h-351 lg:w-992 lg:h-full 2lg:w-1173 2lg:h-546"
          />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
