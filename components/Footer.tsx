import React from 'react'
import logo from "../public/logo-bg-3 2.png"
import Image from 'next/image'
import { IconDeviceMobile } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconFile } from '@tabler/icons-react';
function Footer() {
  return (
    <div className=' bg-white '>
      <div className=' bg-[#111111] flex flex-col py-[5vh]'>
        <div className=' flex justify-center'>
          <Image src={logo} alt="Logo "/>
        </div>
        <div className=' mx-[2vw] my-[5vh] '>
            <ul className='flex justify-between'>
                <li className=' flex flex-col'>
                    <div className='flex gap-3 text-gray-500'><IconDeviceMobile/>Contact nums</div>
                    <div className='text-white'>+91 00000000</div>
                </li>
                <li className=' flex flex-col'>
                    <div className='flex gap-3 text-gray-500'><IconMail/>Gmail</div>
                    <div className='text-white'>demo@gmail.com</div>
                </li>
                <li className=' flex flex-col'>
                    <div className='flex gap-3 text-gray-500'><IconMapPin/>Address</div>
                    <div className='text-white'>Mumbai, India</div>
                </li>
                    <li className=' flex flex-col'>
                    <div className='flex gap-3 text-gray-500'><IconFile/>Leave Request</div>
                    <div className='text-white'>Leave A Request</div>
                </li>
            </ul>
        </div>
        <div className='flex justify-center text-sm text-white'>We work thorughout the world</div>
      </div>
    </div>
  )
}

export default Footer
