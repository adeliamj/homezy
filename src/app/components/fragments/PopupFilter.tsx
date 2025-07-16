import React, { useState } from "react";
import Gallery from "assets/icons/gallery.svg";
import Select from "@components/ui/Select";

const Content = {
  categories: {
    title: "Category",
    placeholder: "Category",
    options: [
      { label: "Technology", value: "1" },
      { label: "Education", value: "2" },
      { label: "Health", value: "3" },
    ],
  },
  bedrooms: {
    title: "Bedrooms",
    placeholder: "Bedrooms",
    options: [
      { label: "2 beds", value: "1" },
      { label: "3 beds", value: "2" },
      { label: "4 beds", value: "3" },
    ],
  },
  bathrooms: {
    title: "Bathrooms",
    placeholder: "Bathrooms",
    options: [
      { label: "2 baths", value: "1" },
      { label: "3 baths", value: "2" },
      { label: "4 baths", value: "3" },
    ],
  },
  floorArea: {
    title: "Floor Area",
    placeholder: "Floor Area",
    options: [
      { label: "Small", value: "1" },
      { label: "Medium", value: "2" },
      { label: "Large", value: "3" },
    ],
  },
  yearMin: {
    title: "Year Build",
    placeholder: "Min Year",
    options: [
      { label: "2010", value: "2010" },
      { label: "2015", value: "2015" },
      { label: "2020", value: "2020" },
    ],
  },
  yearMax: {
    title: "Year Build",
    placeholder: "Max Year",
    options: [
      { label: "2020", value: "2020" },
      { label: "2025", value: "2025" },
      { label: "2030", value: "2030" },
    ],
  },
};

type PopupFilterProps = {
  onClose: () => void;
  onApply?: (filters: {
    category: string;
    bedroom: string;
    bathroom: string;
    floorArea: string;
    yearMin: string;
    yearMax: string;
    active: string;
  }) => void;
};

const PopupFilter: React.FC<PopupFilterProps> = ({ onClose, onApply }) => {
  const [category, setCategory] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [floorArea, setFloorArea] = useState("");
  const [yearMin, setYearMin] = useState("");
  const [yearMax, setYearMax] = useState("");
  const [active, setActive] = useState("sale");

  const handleApply = () => {
    if (onApply) {
      onApply({ category, bedroom, bathroom, floorArea, yearMin, yearMax, active });
    }
    onClose();
  };

  return (
    <div className="relative p-24 w-[500px] bg-secondary-white rounded-15 shadow-lg">
      <div className="text-heading-5 text-syne">More Filter</div>

      <div className="mt-24 flex bg-brand-lavender-20 rounded-15 p-6 text-normal-bold w-full select-none">
        <div
          onClick={() => setActive("sale")}
          className={`py-16 flex flex-grow items-center justify-center cursor-pointer ${
            active === "sale"
              ? "bg-secondary-dark-100 rounded-15 text-secondary-white"
              : ""
          }`}
        >
          For Sale
        </div>
        <div
          onClick={() => setActive("rent")}
          className={`flex py-16 flex-grow items-center justify-center gap-8 cursor-pointer ${
            active === "rent"
              ? "bg-secondary-dark-100 rounded-15 text-secondary-white"
              : ""
          }`}
        >
          <Gallery className="w-20 h-20" />
          <span>For Rent</span>
        </div>
      </div>

      <div className="mt-24">
        <p className="text-normal-bold">{Content.categories.title}</p>
        <div className="relative mt-12">
          <Select
            options={Content.categories.options}
            placeholder={Content.categories.placeholder}
            className="w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-24 flex gap-16">
        <div className="flex-1">
          <p className="text-normal-bold">{Content.bedrooms.title}</p>
          <div className="relative mt-12">
            <Select
              options={Content.bedrooms.options}
              placeholder={Content.bedrooms.placeholder}
              className="w-full"
              value={bedroom}
              onChange={(e) => setBedroom(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="text-normal-bold">{Content.bathrooms.title}</p>
          <div className="relative mt-12">
            <Select
              options={Content.bathrooms.options}
              placeholder={Content.bathrooms.placeholder}
              className="w-full"
              value={bathroom}
              onChange={(e) => setBathroom(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-24">
        <p className="text-normal-bold">{Content.floorArea.title}</p>
        <div className="relative mt-12">
          <Select
            options={Content.floorArea.options}
            placeholder={Content.floorArea.placeholder}
            className="w-full"
            value={floorArea}
            onChange={(e) => setFloorArea(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-24">
        <p className="text-normal-bold">{Content.yearMin.title}</p>
        <div className="flex gap-16">
          <div className="flex-1">
            <div className="mt-12">
              <Select
                options={Content.yearMin.options}
                placeholder={Content.yearMin.placeholder}
                className="w-full"
                value={yearMin}
                onChange={(e) => setYearMin(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-12">
              <Select
                options={Content.yearMax.options}
                placeholder={Content.yearMax.placeholder}
                className="w-full"
                value={yearMax}
                onChange={(e) => setYearMax(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 flex gap-16">
        <button
          onClick={onClose}
          className="rounded-15 bg-brand-lavender-20 flex py-16 flex-grow items-center justify-center gap-8 text-normal-bold cursor-pointer"
          type="button"
        >
          <Gallery className="w-20 h-20 text-secondary-white" />
          Cancel
        </button>
        <button
          onClick={handleApply}
          className="rounded-15 bg-secondary-dark-100 text-secondary-white flex py-16 flex-grow items-center justify-center gap-8 text-normal-bold cursor-pointer"
          type="button"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default PopupFilter;
