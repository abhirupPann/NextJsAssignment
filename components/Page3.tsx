import React from 'react'
import { IconBrandBadoo } from '@tabler/icons-react';
import { IconBrandDribbble } from '@tabler/icons-react';
import { IconBuildingBank } from '@tabler/icons-react';
import { IconBackhoe } from '@tabler/icons-react';
import { IconDeviceGamepad2 } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconBriefcase } from '@tabler/icons-react';
import LogoMaker from './LogoMaker';
function Page3() {
  return (
    <div className='py-[5vh] px-[7vw] cursor-pointer bg-gray-100'>
      <h1 className='text-3xl w-[30vw] font-bold'>Developed more than <span className=' text-[#80aa49]'>100</span> projects in <span className=' text-[#80aa49]'>15</span> industries</h1>
      <div className=' mt-[5vh] flex justify-between'>
        <ul className=' flex flex-col gap-5'>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBrandBadoo/>}/>Social Media</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBrandDribbble/>}/>Fitness & Sports</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBuildingBank/>}/>Bank</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBackhoe/>}/>Construction</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconDeviceGamepad2/>}/>Game projects</li>
            
        </ul>
        <ul className=' flex flex-col gap-5'>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBrandBadoo/>}/>Social Media</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBrandDribbble/>}/>Fitness & Sports</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBuildingBank/>}/>Bank</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBackhoe/>}/>Construction</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconDeviceGamepad2/>}/>Game projects</li>
            
        </ul>
        <ul className=' flex flex-col gap-5'>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBrandBadoo/>}/>Social Media</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBrandDribbble/>}/>Fitness & Sports</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBuildingBank/>}/>Bank</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconBackhoe/>}/>Construction</li>
            <li className=' flex gap-3 items-center'><LogoMaker children={<IconDeviceGamepad2/>}/>Game projects</li>
            
        </ul>
      </div>
      <div>
        <ul className=' flex gap-5 my-[5vh]'>
          <li className=' hover:font-bold hover:decoration-yellow-500 hover:underline hover:underline-offset-[5px]'>Project 1</li>
          <li className=' hover:font-bold hover:decoration-yellow-500 hover:underline hover:underline-offset-[5px]'>Project 2</li>
          <li className=' hover:font-bold hover:decoration-yellow-500 hover:underline hover:underline-offset-[5px]'>Project 3</li>
          <li className=' hover:font-bold hover:decoration-yellow-500 hover:underline hover:underline-offset-[5px]'>Project 4</li>
        </ul>
        <div>
         <h1 className='text-3xl font-bold '>Project 1</h1>
         <p className='text-sm w-[50vw] my-[5vh]'>Crafted an innovative rental property management app, seamlessly integrating secure
          login, absence registration, and a tenant notice board. Elevating the resident 
          experience with user-friendly design and efficient communication channels
         </p>
         <p>Business analysis <span className=' text-yellow-500'>/</span>iOS <span className=' text-yellow-500'>/</span>Andorid <span className=' text-yellow-500'>/</span>QA <span className=' text-yellow-500'>/</span>UI/UX Design</p>
         <div className='flex gap-10 my-[5vh]'>
          <div className='flex gap-3'><IconMapPin className=' text-yellow-500'/> India</div>
          <div className='flex gap-3'><IconBriefcase className=' text-yellow-500'/> Real Estate</div>
         </div>
        </div>
        
      </div>
    </div>
  )
}

export default Page3
