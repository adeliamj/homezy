import React from 'react'
import Image from 'next/image'
import Logo from "@/assets/images/logo.png"
import Button from "@components/ui/Button"
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Menu from "@/assets/icons/menu.svg";

const Navbar = () => {
  return (
    <div className="flex my-30 justify-between items-center text-secondary-dark-100">
      <Image src={Logo} width={152} height={40} alt="Logo" className='w-114 h-30 lg:w-152 lg:h-40' />
      <div className="hidden md:flex list-none md:gap-18 lg:gap-28 2lg:gap-64 text-navbar">
        <li>Home</li>
        <li>Properties</li>
        <li>Agents</li>
        <li className='flex gap-8'>Pages <span className="w-20 h-20"><ArrowDown/></span></li>
      </div>
      <div className='md:hidden w-24 h-24 '>
        <Menu/>
      </div>
      <div className="hidden md:block">
        <Button variant="primary" mobileSize="md" desktopSize="lg" text="Contact Us" />
      </div>
    </div>
  )
}

export default Navbar