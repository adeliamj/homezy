import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex mx-140 my-30'>
      <Image src="/images/logo.png" width={40} height={40} alt="Logo" />
    </div>
  )
}

export default Navbar