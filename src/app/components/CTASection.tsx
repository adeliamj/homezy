import React from "react";
import Image from "next/image";
import Pattern from "@/assets/images/pattern-2.png";
const CTASection = () => {
  return (
    <div className="my-80 w-full h-380 gap-77 bg-brand-lavender-80 border border-secondary-dark-100 rounded-15 flex overflow-hidden">
      <div className="py-56 pl-72 w-416">
        <div className="text-heading-2 text-secondary-white text-syne ">
          Subscribe To Our Newsletter
        </div>
        <div className="pt-8 pb-24 text-lg-regular text-secondary-white w-416">
          Join our newsletter to stay up to date on features and releases.
        </div>
        <div className=" bg-secondary-white rounded-15 p-8 justify-between flex border border-secondary-dark-20 w-416">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="text-secondary-dark-40 text-normal-regular flex-1 px-4 py-2 rounded-15 border-none focus:outline-none focus:ring-0"
          />
          <button className="w-130 text-normal-bold text-secondary-white px-32 py-16 bg-secondary-dark-100 rounded-15">
            Subscibe
          </button>
        </div>
      </div>
      <div className="ml-77 -mt-16">
        <Image
          src={Pattern}
          alt="Background Pattern"
          width={1173}
          height={546}
          className="w-1173 h-546"
        />
      </div>
    </div>
  );
};

export default CTASection;
