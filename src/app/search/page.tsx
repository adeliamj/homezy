"use client";

import React, { useEffect, useState } from "react";
import CTA from "@components/fragments/CTA";
import Candle from "assets/icons/candle.svg";
import Element3 from "assets/icons/element-3.svg";
import RowVertical from "assets/icons/row-vertical.svg";
import ArrowDown from "assets/icons/arrow-down.svg";
import CardProperty2 from "@components/fragments/CardProperty2";
import dynamic from "next/dynamic";
import PopupFilter from "@components/fragments/PopupFilter";

const Maps = dynamic(() => import("@components/ui/Maps"), { ssr: false });

import {
  HotelFilterSelectedType,
  HotelFilterType,
  HotelResultType,
  HotelSearchValuesType,
  MarkerType,
} from "app/types/hotel.type";

interface PropertyItems {
  id: number;
  image: string;
  price: number;
  per?: string;
  title: string;
  address: string;
  description?: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
}

const Page = () => {
  const [properties, setProperties] = useState<PropertyItems[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(true);

  const [hotelResult, setHotelResult] = useState<HotelResultType[] | null>(
    null
  );
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const paginatedProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/property");
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const getPageNumbers = () => {
    let start = currentPage;
    if (currentPage > totalPages - 2) {
      start = totalPages - 2;
    }
    if (start < 1) start = 1;

    const pages = [];
    for (let i = start; i < start + 3 && i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (hotelResult) {
      setMarkers(
        hotelResult
          .filter((item) => item.location)
          .map((item) => ({
            position: [item.location!.lat, item.location!.lng] as [
              number,
              number
            ],
            text: item.discountPrice
              ? `${item.discountPrice}`
              : `${item.originalPrice}`,
            idHotel: item.idHotel,
          }))
      );
    }
  }, [hotelResult]);

  return (
    <>
      <div className="text-heading-2-mobile text-syne 2lg:text-heading-2">
        Search Properties
      </div>

      <div className="mt-32 2lg:mt-40 flex-col 2lg:flex-row 2lg:flex gap-24 w-full">
        <div className='w-full'>
          <CTA />
        </div>

        <div className="relative flex flex-col items-center w-full 2lg:w-fit">
          <div
            className="mt-16 gap-12 2lg:mt-0 flex 2lg:flex-col bg-brand-lavender-40 w-full 2lg:w-fit border items-center p-20 justify-center rounded-15 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <Candle className="w-24 h-24" />
            <p className="text-normal-medium whitespace-nowrap">More Filter</p>
          </div>

          {showFilter && (
            <div className="mt-28 absolute top-full right-0 z-[9999]">
              <PopupFilter onClose={() => setShowFilter(false)} />
            </div>
          )}
        </div>
      </div>

      <div className="mt-40 z-[0] h-240 w-full overflow-hidden rounded-2xl bg-gray-30 md:h-410 xxxl:h-410-fluid xxxl:rounded-2xl-fluid">
        <Maps markers={markers} />
      </div>

      <div className="mt-32 mb-270">
        <div className="flex justify-between">
          <p className="text-syne text-heading-4">
            {properties.length} Results
          </p>
          <div className="flex gap-8">
            <button
              className={`w-36 h-36 flex items-center justify-center rounded-8 p-8 ${
                isGridView ? "bg-brand-lavender-20 border" : ""
              }`}
              onClick={() => setIsGridView(true)}
            >
              <Element3
                className={`w-24 h-24 ${
                  isGridView
                    ? "text-secondary-dark-100"
                    : "text-secondary-dark-40"
                }`}
              />
            </button>
            <button
              className={`w-36 h-36 flex items-center justify-center rounded-8 p-8 ${
                !isGridView ? "bg-brand-lavender-20 border" : ""
              }`}
              onClick={() => setIsGridView(false)}
            >
              <RowVertical
                className={`w-20 h-20 ${
                  !isGridView
                    ? "text-secondary-dark-100"
                    : "text-secondary-dark-40"
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`lg:pt-40 ${
            isGridView ? "lg:flex gap-32" : "flex flex-col gap-24"
          }`}
        >
          {paginatedProperties.map((property) => (
            <CardProperty2 key={property.id} property={property} />
          ))}
        </div>

        <div className="pt-24 gap-16 flex items-center justify-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className="w-40 h-40 flex items-center justify-center"
          >
            <ArrowDown className="w-24 h-24 rotate-90" />
          </button>

          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-xl-regular w-40 h-40 flex items-center justify-center rounded-10 ${
                page === currentPage
                  ? "text-secondary-white bg-secondary-dark-100"
                  : "text-secondary-dark-60"
              }`}
            >
              {page}
            </button>
          ))}

          {currentPage < totalPages - 2 && (
            <>
              <div className="text-xl-regular text-secondary-dark-60 w-40 h-40 flex items-center justify-center">
                ...
              </div>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="text-xl-regular text-secondary-dark-60 w-40 h-40 flex items-center justify-center"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            className="w-40 h-40 flex items-center justify-center"
          >
            <ArrowDown className="w-24 h-24 -rotate-90" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
