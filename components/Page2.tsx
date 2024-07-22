import React from 'react'
import logo from "../public/logo1.png"
import Image from 'next/image'
import { IconChevronRight } from '@tabler/icons-react';
function Page2() {
  return (
    <div className='bg-white py-[5vh] px-[7vw] overflow-x-hidden cursor-pointer'>
      <div>
        <div >
            <div className=' border-t border-gray-300'></div>
            <div className='flex justify-between items-center my-[5vh]'>
              <Image src={logo} alt='logo'/>
              <Image src={logo} alt='logo'/>
              <Image src={logo} alt='logo'/>
              <Image src={logo} alt='logo'/>
              <Image src={logo} alt='logo'/>
              <Image src={logo} alt='logo'/>

            </div>
            <div className=' border-t border-gray-300'></div>
        </div>
        <div className=' flex justify-between'>
        <div className=' py-[5vh]'>
           <h1 className=' text-3xl font-bold'>Full development cycle</h1>
           <p className=' my-[5vh] text-sm'>We use proven technologies</p>
           <div>
             <h1 className=' mb-[2vh] font-bold'>Web</h1>
             <p className='text-sm'>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / GO lang / django / Python</p>
           </div>
           <div >
             <h1 className=' mb-[2vh] mt-[5vh] font-bold'>Mobile</h1>
             <p className='text-sm'>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
           </div>
        </div>
        <div className='py-[5vh]'>
            <ul className=' flex flex-col gap-5'>
                <li className=' flex gap-3 hover:font-bold hover:decoration-[#80aa48] hover:underline hover:underline-offset-[6px]'>IOS development<IconChevronRight className=' text-[#80aa49]'/></li>
                <li className=' flex gap-3 hover:font-bold hover:decoration-[#80aa48] hover:underline hover:underline-offset-[6px]'>Android Development<IconChevronRight className=' text-[#80aa49]'/></li>
                <li className=' flex gap-3 hover:font-bold hover:decoration-[#80aa48] hover:underline hover:underline-offset-[6px]'>Web Development<IconChevronRight className=' text-[#80aa49]'/></li>
                <li className=' flex gap-3 hover:font-bold hover:decoration-[#80aa48] hover:underline hover:underline-offset-[6px]'>UI/UX design<IconChevronRight className=' text-[#80aa49]'/></li>
                <li className=' flex gap-3 hover:font-bold hover:decoration-[#80aa48] hover:underline hover:underline-offset-[6px]'>Testing<IconChevronRight className=' text-[#80aa49]'/></li>
                <li className=' flex gap-3 hover:font-bold hover:decoration-[#80aa48] hover:underline hover:underline-offset-[6px]'>Launch<IconChevronRight className=' text-[#80aa49]'/></li>
                <li className=' flex gap-3 hover:font-bold hover:decoration-[#80aa48] hover:underline hover:underline-offset-[6px]'>IT consulting<IconChevronRight className=' text-[#80aa49]'/></li>
            </ul>
        </div>
        </div>

      </div>
      <div></div>
    </div>
  )
}

export default Page2
