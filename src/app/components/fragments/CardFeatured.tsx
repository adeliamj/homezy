import React from "react";
import Image from "next/image";
import Featured from "@/assets/images/featured.png";
import ProfilePerson2 from "@/assets/images/profile-person-2.png";
import PhoneCallFill from "@/assets/icons/phone-call-fill.svg";
import Location from "@/assets/icons/location.svg";

const CardFeatured = () => {
  return (
    <div className="flex w-full">
      <div className="w-500 h-420 overflow-hidden rounded-tl-4xl ">
        <Image
          src={Featured}
          alt="Logo"
          width={500}
          height={420}
          className="object-cover -z-10 w-500 h-420 overflow-hidden"
        />
      </div>
      <div className="m-32 w-660 items-start flex-grow">
        <div className="pb-32 gap-165 flex justify-between">
          <div className="flex items-end">
            <div className="text-syne text-heading-3">$2,095</div>
            <div className="text-lg-regular text-secondary-dark-80">
              / month
            </div>
          </div>
          <div className="flex gap-32 items-center">
            <div className=" gap-8 flex items-center ">
              <div className="bg-brand-lavender-40 w-40 h-40 rounded-full item overflow-hidden">
                <Image
                  src={ProfilePerson2}
                  width={40}
                  height={40}
                  alt="Logo"
                  className="w-40 h-40"
                />
              </div>
              <div>
                <div className="text-lg-bold">Edwin Martins</div>
                <div className="text-normal-regular text-secondary-dark-80">
                  Property Advisor
                </div>
              </div>
            </div>
            <div className="w-32 h-32">
              <PhoneCallFill />
            </div>
          </div>
        </div>
        <div className="text-syne text-heading-4">COVA Home Realty</div>
        <div className="flex gap-8 text-secondary-dark-80 items-center">
          <Location className=" w-24 h-24 pb-4" />
          <div className="text-lg-regular ">
            2699 Green Valley, Highland Lake, FL
          </div>
        </div>
        <div className="pt-20 text-lg-regular text-secondary-dark-80 line-clamp-2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation <span className='text-lg-bold'>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default CardFeatured;
