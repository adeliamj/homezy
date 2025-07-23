"use client";

import React, { useEffect, useState } from "react";
import PhoneCall from "@/assets/icons/phone-call.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Image from "next/image";

type AgentslItem = {
  image: string;
  name: string;
  position: string;
};

const socialMedias = [
  { icon: <PhoneCall />, label: "Phone" },
  { icon: <Instagram />, label: "Instagram" },
  { icon: <Facebook className="w-6 h-12" />, label: "Facebook" },
  { icon: <Twitter />, label: "Twitter" },
];

const CardAgents = ({ currentIndex = 0 }: { currentIndex?: number }) => {
  const [items, setItems] = useState<AgentslItem[]>([]);

  useEffect(() => {
    fetch("/api/agents")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  if (!items[currentIndex]) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="2lg:hidden cursor-pointer ">
        <div className="w-full bg-secondary-white rounded-15 border border-brand-lavender-40 p-24 flex justify-between items-center">
          <div>
            <div className="text-heading-6">{items[currentIndex].name}</div>
            <div className="text-lg-regular text-secondary-dark-80">
              {items[currentIndex].position}
            </div>
            <div className="mt-11 flex gap-12">
              {socialMedias.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex items-center justify-center bg-secondary-dark-100 p-6 rounded-48 w-24 h-24 text-secondary-white"
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
              alt="Image"
              className="w-108 h-108 object-cover"
            />
          </div>
        </div>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer  hidden w-full bg-secondary-white rounded-15 border border-brand-lavender-40 p-24 2lg:flex justify-between items-center"
        >
          <div>
            <div className="text-heading-6">{item.name}</div>
            <div className="text-lg-regular text-secondary-dark-80">
              {item.position}
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
              alt="Image"
              className="w-108 h-108 object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardAgents;
