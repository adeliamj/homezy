"use client";

import React, { useEffect, useState } from "react";
import Buildings1 from "@/assets/icons/buildings.svg";
import Buildings2 from "@/assets/icons/building.svg";
import Buildings3 from "@/assets/icons/buildings-2.svg";
import Send from "@/assets/icons/send.svg";

const iconMap: Record<string, React.ReactElement> = {
  "buildings-1": <Buildings1 className="w-32 h-32" />,
  "building": <Buildings2 className="w-32 h-32" />,
  "buildings-2": <Buildings3 className="w-32 h-32" />,
};

type CategoryItem = {
  icon: string;
  title: string;
  total: string;
};
const CardCategories = () => {
  const [items, setItems] = useState<CategoryItem[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);


  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="mt-24 lg:mt-0 lg:w-362 w-full bg-secondary-white rounded-15 border border-brand-lavender-40 p-24 flex justify-between items-center"
        >
          <div className="flex gap-16 items-center">
            <div className="bg-brand-lavender-40 p-14 w-60 h-60 rounded-15">
              {iconMap[item.icon]}
            </div>
            <div>
              <div className="text-heading-6 text-syne">{item.title}</div>
              <div className="text-lg-regular text-secondary-dark-80">
                {item.total}
              </div>
            </div>
          </div>
          <div className="gap-8 flex text-sohne">
            View <Send className="w-20 h-20" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardCategories;
