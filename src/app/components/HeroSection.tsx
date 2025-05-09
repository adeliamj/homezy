import React from "react";
import Image from "next/image";
import Pattern from "@/assets/images/pattern.png";
import HouseIllustration1 from "@/assets/images/house-illustration-1.png";
import HouseIllustration2 from "@/assets/images/house-illustration-2.png";
import ProfilePerson from "@/assets/images/profile-person.png";
import CTA from "@components/fragments/CTA";
import LocationFill from "@/assets/icons/location-fill.svg";
import Subtract from "@/assets/icons/subtract.svg";
import Price from "@/assets/icons/price.svg";
import HouseFill from "@/assets/icons/house-fill.svg";
import Button from "@components/ui/Button";
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
  const items = [
    {
      icon: <LocationFill className="w-20 h-20 lg:w-20 lg:h-20" />,
      label: "Location",
      value: "California, US",
    },
    {
      icon: <Price className="w-20 h-20 lg:w-20 lg:h-20" />,
      label: "Price",
      value: "$1200/month",
    },
    {
      icon: <HouseFill className="w-20 h-20 lg:w-20 lg:h-20" />,
      label: "Property Type",
      value: "Apartment",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={Pattern}
        alt="Background Pattern"
        fill
        className="object-cover -z-10 overflow-hidden  ml-680 w-114 h-30 lg:w-1484 lg:h-692"
      />
      <div className="relative flex flex-row gap-160 px-8 py-16 z-10">
        <div className="w-608">
          <div className="text-heading-1 font-syne">
            We help people to realize their dream property
          </div>
          <div className="mt-24 text-xl-regular text-secondary-dark-60">
            We are creative people who provide the best way to you who want to
            have a new comfortable and suitable place to live
          </div>
          <div className="mt-64 flex justify-between border items-center bg-secondary-white h-96 w-763 px-20 rounded-xl border-secondary-dark-100">
            {items.map((item, index) => (
              <CTA
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            ))}
            <div>
              <Button
                variant="secondary"
                mobileSize="md"
                desktopSize="lg"
                text="Browse"
              />
            </div>
          </div>
        </div>
        <div className="items-start justify-start text-left">
          <div className="flex">
            <div className="w-248 h-362">
              <div className="w-248 h-264 border-2 relative overflow-hidden rounded-tl-40 rounded-tr-40 rounded-br-32 rounded-bl-none">
                <Image
                  src={HouseIllustration1}
                  alt="Logo"
                  width={582}
                  height={387}
                  className="object-cover -z-10 w-582 h-387 -mt-80"
                />
              </div>
              <div className="-mt-8 flex justify-center items-center relative">
                <Subtract />
                <div className="text-secondary-white z-10 px-22 pt-16 absolute text-sm-regular">
                  We provide our best properties to give great services possible
                </div>
              </div>
            </div>
            <div className="z-10">
              <div className="mt-50 -ml-40 flex bg-secondary-white p-16 border-2 rounded-32 justify-between gap-42 items-center">
                <div className="whitespace-nowrap">
                  <p className="text-normal-bold text-secondary-dark-100">
                    Edwin Martins
                  </p>
                  <p className="text-xs-regular text-secondary-dark-80">
                    Property Advisor
                  </p>
                  <div className="mt-11 flex gap-8">
                    {socialMedias.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center bg-secondary-dark-80 p-4 rounded-48 w-16 h-16 text-secondary-white"
                        aria-label={item.label}
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-lavender-40 w-74 h-74">
                  <Image
                    src={ProfilePerson}
                    width={74}
                    height={74}
                    alt="Logo"
                    className="w-74 h-74"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-264 -mt-186 w-248 h-340">
            <div className=" w-248 h-340 border-2 relative overflow-hidden rounded-40">
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
