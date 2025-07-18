"use client";

import React, { useState } from "react";
import ArrowUp from "assets/icons/arrow-up.svg";

export interface CardDropdownSection {
  subtitle: string;
  items: string[];
}

interface CardDropdownDetailProps {
  title: string;
  sections: CardDropdownSection[];
}

const CardDropdownDetail: React.FC<CardDropdownDetailProps> = ({ title, sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full border-2 border-brand-lavender-20 rounded-15">
      <button
        onClick={toggleDropdown}
        className="w-full bg-brand-lavender-20 p-16 flex flex-row items-center justify-between rounded-t-15"
      >
        <p className="font-hanken text-lg-bold">{title}</p>
        <ArrowUp
          className={`w-20 h-20 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="bg-secondary-white rounded-b-15 p-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`pt-${index === 0 ? "0" : "16"} flex flex-col gap-8 pb-16 ${
                index !== sections.length - 1 ? "border-b border-secondary-dark-20" : ""
              }`}
            >
              <p className="text-normal-regular text-secondary-dark-80">{section.subtitle}</p>
              <ul className="list-disc list-outside pl-16 text-normal-bold flex flex-col md:flex-row gap-8 flex-wrap">
                {section.items.map((item, i) => (
                  <li key={i} className="w-274">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDropdownDetail;
