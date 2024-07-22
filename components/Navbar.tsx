import React from 'react'
import logo from "../public/logo-bg-2 1.png"
import Image from 'next/image'
import { IconDeviceMobile } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
function Navbar() {
  return (
    <div className=' w-screen h-[15vh] bg-transparent  px-[7vw] py-[3vh] absolute'>
      <div className=' bg-white w-full h-full border rounded-md flex items-center justify-between drop-shadow-md px-10'>
        <div className='flex items-center gap-2 md:gap-10 '>
            <Image
            src={logo}
            className=' w-[20vw] sm:w-[22vw] md:w-[20vw] lg:w-[12vw]'
            alt='Logo'/>
            <ul className=' flex gap-2 md:gap-5 text-[0.6rem] sm:text-[0.7rem] md:text-sm'>
                <li>Services</li>
                <li>Media</li>
                <li>Cases</li>
                <li>FAQ</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className=' lg:flex gap-3 text-sm text-[#80aa48] justify-center items-center hidden'>
            <div className='flex gap-1'><IconDeviceMobile/><span className=' mt-1'>+91 90xxxxx</span> </div>
            <div className='flex gap-1'><IconMail/><span className=' mt-1'>xxxx@gmail.com</span> </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
