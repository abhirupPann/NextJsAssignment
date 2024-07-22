import Image from 'next/image'
import React from 'react'
import img from "../public/Group 1.png"
import Card from './Card'
function Hero() {
  return (
    <div className=' flex gap-2 justify-end bg-gray-100'>
        <div className=' mt-[20vh] ml-[7vw] mr-[7vw] sm:mr-0'>
            <div className=' text-4xl font-bold tracking-wider'><span className=' text-yellow-500'>User-Centric Excellence:</span> Our App Development services Tackles Your Pain Points</div>
            <div className=' my-5'>Experience a Seamless Digital Journey with <span className=' text-[#80aa48] font-bold'>Desun</span>- Where Every Line of Code Resolves Your Challenge and <span className=' font-bold text-yellow-500'>Elevates Your App Experience</span> to Unparalleled Heights.</div>
            <Card/>
        </div>
      <Image
      src={img}
      className='h-screen w-[150%] lg:block hidden'
      alt="Picture of the author"
    />
    </div>
  )
}

export default Hero
