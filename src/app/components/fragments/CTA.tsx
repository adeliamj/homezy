import React from 'react'
import Image from "next/image";
import Location from "@/assets/icons/location.svg";

type CTAItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
}
const CTA = ({ icon, label, value }: CTAItemProps) => {
  return (
    <div className='flex  items-center gap-12'> 
        <div className='flex bg-brand-lavender-40 rounded-2xl w-40 h-40 items-center justify-center'>
        <div className='w-20 h-20 lg:w-20 lg:h-20'>
          {icon}
        </div>
        </div>
        <div>
          <div className="text-sm-regular text-secondary-dark-80 whitespace-nowrap">
          {label}
          </div>
          <div className='text-normal-bold whitespace-nowrap'>
         {value}
          </div>
        </div>
    </div>
  )
}

export default CTA
