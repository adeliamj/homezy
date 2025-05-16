import React from "react";
import PhoneCall from "@/assets/icons/phone-call.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Agent1 from "@/assets/images/agents-1.png";
import Agent2 from "@/assets/images/agents-2.png";
import Agent3 from "@/assets/images/agents-3.png";
import Agent4 from "@/assets/images/agents-4.png";
import Agent5 from "@/assets/images/agents-5.png";
import Agent6 from "@/assets/images/agents-6.png";
import Image from "next/image";

const socialMedias = [
  { icon: <PhoneCall />, label: "Phone" },
  { icon: <Instagram />, label: "Instagram" },
  { icon: <Facebook className="w-6 h-12" />, label: "Facebook" },
  { icon: <Twitter />, label: "Twitter" },
];

const CardAgents = ({ currentIndex = 0 }: { currentIndex?: number }) => {
  const items = [
    {
      image: Agent1,
      label: "Edwin Martins",
      value: " Property Advisor",
    },
    {
      image: Agent2,
      label: "Robert Fox",
      value: " Property Advisor",
    },
    {
      image: Agent3,
      label: "Jane Cooper",
      value: " Property Advisor",
    },
    {
      image: Agent4,
      label: "Guy Hawkins",
      value: " Property Advisor",
    },
    {
      image: Agent5,
      label: "Kathryn Murphy",
      value: " Property Advisor",
    },
    {
      image: Agent6,
      label: "Albert Flores",
      value: " Property Advisor",
    },
  ];
  const selected = items[currentIndex];
  return (
    <>
      <div className="2lg:hidden">
        <div className="w-full bg-secondary-white rounded-15 border border-brand-lavender-40 p-24 flex justify-between items-center">
          <div>
            <div className="text-heading-6">{items[currentIndex].label}</div>
            <div className="text-lg-regular text-secondary-dark-80">
              {items[currentIndex].value}
            </div>
            <div className="mt-11 flex gap-12">
              {socialMedias.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-secondary-dark-100 p-6 rounded-48 w-24 h-24 text-secondary-white"
                  aria-label={item.label}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-carnation-40 w-108 h-108 rounded-15 overflow-hidden">
            <Image
              src={items[currentIndex].image}
              width={108}
              height={108}
              alt="Logo"
              className="w-108 h-108 object-cover"
            />
          </div>
        </div>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="hidden w-full bg-secondary-white rounded-15 border border-brand-lavender-40 p-24 2lg:flex justify-between items-center"
        >
          <div>
            <div className="text-heading-6">{item.label}</div>
            <div className="text-lg-regular text-secondary-dark-80">
              {item.value}
            </div>
            <div className="mt-11 flex gap-12">
              {socialMedias.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-secondary-dark-100 p-6 rounded-48 w-24 h-24 text-secondary-white"
                  aria-label={item.label}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-carnation-40 w-108 h-108 rounded-15 overflow-hidden">
            <Image
              src={item.image}
              width={108}
              height={108}
              alt="Logo"
              className="w-108 h-108 object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardAgents;
