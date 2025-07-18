"use client";

import React, { useEffect, useState } from "react";
import ArrowLeft from "assets/icons/arrow-left.svg";
import Image from "next/image";
import Property1 from "assets/images/property-1.png";
import Property2 from "assets/images/property-4.png";
import Property3 from "assets/images/property-5.png";
import Button from "@/app/components/ui/Button";
import Gallery from "assets/icons/gallery.svg";
import Share from "assets/icons/share.svg";

import Bed from "@/assets/icons/bed.svg";
import Bath from "@/assets/icons/bath.svg";
import SurfaceArea from "@/assets/icons/surface-area.svg";
import Repair from "@/assets/icons/repair.svg";
import Play from "@/assets/icons/play.svg";
import ProfilePerson2 from "@/assets/images/profile-person-2.png";

import CardDropdownDetail from "@/app/components/fragments/CardDropdownDetail";

type DropdownSection = {
  subtitle: string;
  items: string[];
};

type DropdownData = {
  title: string;
  sections: DropdownSection[];
};

const page = () => {
  const [dropdownData, setDropdownData] = useState<DropdownData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/property-detail");
        const data = await res.json();
        setDropdownData(data);
      } catch (error) {
        console.error("Failed to fetch property details:", error);
      }
    };

    fetchData();
  }, []);

  const items = [
    {
      icon: <Bed className="w-24 h-24" />,
      label: "Bedroooms",
      value: "4",
    },
    {
      icon: <Bath className="w-24 h-24" />,
      label: "Bathrooms",
      value: "4",
    },
    {
      icon: <SurfaceArea className="w-24 h-24" />,
      label: "Square Area",
      value: "6x8",
    },
    {
      icon: <Repair className="w-24 h-24" />,
      label: "Square Area",
      value: "Modern Loft",
    },
  ];

  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-row gap-16 text-secondary-dark-100 items-center">
        <ArrowLeft className="w-24 h-24" />
        <p className=" text-normal-medium md:text-lg-medium ">Back To Search</p>
      </div>
      <div className="flex flex-col md:gap-56 gap-32">
        <div className="flex flex-col gap-16">
          <div className="flex gap-16 md:gap-32">
            <div>
              <Image
                src={Property1}
                alt="Images"
                width={763}
                height={500}
                className="object-cover -z-10 min-w-217 w-full md:min-w-763 h-169 md:h-500 overflow-hidden rounded-15"
              />
            </div>
            <div className="w-full flex flex-col md:gap-32 gap-16">
              <div>
                <Image
                  src={Property2}
                  alt="Images"
                  width={365}
                  height={234}
                  className="object-cover -z-10 min-w-102 w-full md:min-w-365 h-77 md:h-234 overflow-hidden rounded-15"
                />
              </div>
              <div className="md:relative">
                <Image
                  src={Property3}
                  alt="Images"
                  width={365}
                  height={234}
                  className="object-cover min-w-102 w-full md:min-w-365 h-77 md:h-234 overflow-hidden rounded-15"
                />
                <div className="hidden md:block md:absolute md:bottom-4 md:right-4 md:z-20">
                  <div className="bg-secondary-white rounded-15 shadow-md">
                    <Button
                      variant="primary"
                      mobileSize="sm"
                      desktopSize="md"
                      text="Show All Photos"
                      leadingIcon={<Gallery className="w-20 h-20" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="primary"
              mobileSize="sm"
              desktopSize="md"
              text="Show All Photos"
              leadingIcon={<Gallery className="w-20 h-20" />}
              className="w-full"
            />
          </div>
        </div>
        <div className="md:w-763 flex flex-col gap-56">
          <div className="flex flex-col gap-32">
            <div className="flex flex-col gap-24 md:flex-row justify-between">
              <div className="flex flex-col gap-8">
                <div className="text-syne text-heading-3-mobile lg:text-heading-3 no-whitespace">
                  Beacon Homes LLC
                </div>
                <div className="md:text-xl-regular text-lg-regular text-secondary-dark-80">
                  3 Leame Close, Hull, HU3 6ND
                </div>
              </div>
              <div className="">
                <Button
                  variant="primary"
                  mobileSize="sm"
                  desktopSize="md"
                  text="Share"
                  leadingIcon={<Share className="w-20 h-20" />}
                />
              </div>
            </div>
            <div className="border border-brand-lavender-40 bg-brand-lavender-20 min-w-335 md:min-w-763 w-full grid grid-cols-2 lg:flex p-24 md:p-20 rounded-15 md:justify-between">
              {items.map((item, index) => (
                <div key={index}>
                  <div className="text-normal-regular text-secondary-dark-80 pb-8">
                    {item.label}
                  </div>
                  <div className="flex text-normal-bold text-secondary-dark-100 gap-8">
                    {item.icon}
                    <div>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-b border-secondary-dark-20 pb-56 gap-24 flex flex-col">
            <div className="font-hanken text-heading-5-mobile md:text-heading-5">
              Description
            </div>
            <div className="text-secondary-dark-60 text-sm-regular md:text-normal-regular">
              First time on market in 40 years. Detached two unit Victorian -
              vacant - with excellent bones on rear of huge (4552 sq ft) flat
              sunny lot on fabulous quiet block accessible to GG Park and
              neighborhood amenities. This property is tucked away behind a wood
              fence, and has a curb cut which provides for ample parking.
              Development opportunity? Income property with huge play space or
              garden? ADU? The possibilities on this special parcel are
              virtually endless. Large storage and laundry under rear of
              building. Quiet block between Arguello & Willard North. Two blocks
              to Rossi Park to the north, and two blocks to GG Park and the
              Conservatory of Flowers to the south. Close to multiple markets,
              cafes, restaurants, transportation.
            </div>
            <div className="flex flex-row gap-8 items-center">
              <Play className="w-24 h-24" />
              <p className="font-hanken text-normal-bold">View Video Tour</p>
            </div>
          </div>
          <div className="border-b border-secondary-dark-20 pb-56 gap-24 flex flex-col">
            <div className="font-hanken text-heading-5-mobile md:text-heading-5">
              Property Details
            </div>
            {dropdownData.map((data, index) => (
              <CardDropdownDetail
                key={index}
                title={data.title}
                sections={data.sections}
              />
            ))}
          </div>
          <div className="pb-56 gap-24 flex flex-col">
            <div className="font-hanken text-heading-5-mobile md:text-heading-5">
              Listing by Agent
            </div>
            <div className="bg-brand-lavender-20 flex flex-col md:flex-row gap-32 justify-between rounded-15 px-24 py-26">
              <div className="gap-8 flex items-center ">
                <div className="bg-brand-lavender-40 w-48 h-48 rounded-full item overflow-hidden">
                  <Image
                    src={ProfilePerson2}
                    width={48}
                    height={48}
                    alt="Logo"
                    className="w-48 h-48"
                  />
                </div>
                <div>
                  <div className="text-lg-bold">Edwin Martins</div>
                  <div className="text-normal-regular text-secondary-dark-80">
                    Property Advisor
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-center">
                <Button
                  variant="primary"
                  mobileSize="sm"
                  desktopSize="md"
                  text="Ask Question"
                  className='w-full md:w-fit'
                />
                <Button
                  variant="primary"
                  mobileSize="sm"
                  desktopSize="md"
                  text="Contact Agent"
                  className='w-full md:w-fit'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
