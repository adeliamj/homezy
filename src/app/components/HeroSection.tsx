"use client";

import React from "react";
import Image from "next/image";
import Pattern from "@/assets/images/pattern.png";
import HouseIllustration1 from "@/assets/images/house-illustration-1.png";
import HouseIllustration2 from "@/assets/images/house-illustration-2.png";
import ProfilePerson from "@/assets/images/profile-person.png";
import CTA from "@components/fragments/CTA";

import Subtract from "@/assets/icons/subtract.svg";
import PhoneCall from "@/assets/icons/phone-call.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";

const socialMedias = [
  { icon: <PhoneCall />, label: "Phone" },
  { icon: <Instagram />, label: "Instagram" },
  { icon: <Facebook className="w-4 h-8" />, label: "Facebook" },
  { icon: <Twitter />, label: "Twitter" },
];

const HeroSection = () => {
  return (
    <div className=" relative w-full  mx-[-20] md:mx-[-60] 2lg:mx-[-140] pl-20 md:pl-60 2lg:pl-140">
      <Image
        src={Pattern}
        alt="Background Pattern"
        fill
        className="hidden lg:block object-cover -z-10 overflow-hidden  ml-680 w-114 h-30 lg:w-[150%] lg:h-full"
      />
      <div className="relative 2lg:flex flex-row gap-32 px-0 md:px-8 py-12 md:py-16 z-10">
        <div className="2lg:w-608">
          <div className="text-heading-1-mobile md:text-heading-1 font-syne">
            We help people to realize their dream property
          </div>
          <div className="mt-24 text-xl-regular text-secondary-dark-60">
            We are creative people who provide the best way to you who want to
            have a new comfortable and suitable place to live
          </div>
          <div className="mt-40 lg:mt-64 2lg:w-763 z-[10000]">
            <CTA />
          </div>
        </div>
        <div className="mt-96 2lg:mt-0 items-start justify-start text-left">
          <div className="flex">
            <div className="w-161 h-235 md:w-248 md:h-362">
              <div className="w-161 h-172 md:w-248 md:h-264 border-2 relative overflow-hidden rounded-tl-26 rounded-tr-26 rounded-br-20 md:rounded-tl-40 md:rounded-tr-40 md:rounded-br-32 rounded-bl-none">
                <Image
                  src={HouseIllustration1}
                  alt="Logo"
                  width={582}
                  height={387}
                  className="object-cover -z-10 w-231 h-186 md:w-582 md:h-387 md:-mt-80 overflow-hidden"
                />
              </div>
              <div className="-mt-8 flex justify-center items-center relative">
                <Subtract className="hidden md:block md:w-248 md:h-106" />
                <Subtract className="w-161 h-68 md:hidden" />
                <div className="text-sohne-9 text-secondary-white z-10 px-14 pt-8 lg:px-22 lg:pt-16 absolute lg:text-sm-regular">
                  We provide our best properties to give great services possible
                </div>
              </div>
            </div>
            <div className="z-10">
              <div className="mt-32 md:mt-50 -ml-32 md:-ml-40 flex bg-secondary-white p-10 md:p-16 border-2 rounded-20 md:rounded-32 justify-between gap-26 md:gap-42 items-center">
                <div className="whitespace-nowrap">
                  <p className="text-sm-bold text-secondary-dark-100">
                    Edwin Martins
                  </p>
                  <p className="text-xs-regular text-secondary-dark-80">
                    Property Advisor
                  </p>
                  <div className="mt-7 md:mt-11 flex gap-8">
                    {socialMedias.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center bg-secondary-dark-80 p-2 md:p-4 rounded-48 w-11 h-11 md:w-16 md:h-16 text-secondary-white"
                        aria-label={item.label}
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-lavender-40 w-48 h-48 md:w-74 md:h-74 rounded-8">
                  <Image
                    src={ProfilePerson}
                    width={74}
                    height={74}
                    alt="Logo"
                    className="w-48 h-48 md:w-74 md:h-74"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-172 md:ml-264 -mt-108 md:-mt-186 w-161 h-221 md:w-248 md:h-340">
            <div className=" w-161 h-221 md:w-248 md:h-340 border-2 relative overflow-hidden rounded-26 md:rounded-40">
              <Image
                src={HouseIllustration2}
                alt="Logo"
                width={495}
                height={371}
                className="  object-cover -z-10 w-495 h-371 overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
