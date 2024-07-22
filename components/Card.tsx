"use client"
import React from 'react'

function Card() {
const handleOnclick = (e: any)=>{
    e.preventDefault();
    console.log("object")
}
  return (
    <div className='w-[60vw] md:w-[45vw] h-[50vh] md:h-[50vh] lg:h-[35vh] border rounded-md bg-white shadow-md px-[2vw] py-[2vh]'>
      <h1 className=' font-bold'>Leave your Contacts and we will call you back within 30 minutes</h1>
      <form className=' flex  flex-wrap mt-[5vh] gap-5'>
        <div className=' flex flex-col gap[-2px]'>
            <label className=' text-[0.6rem] text-gray-500 ml-2'>Full Name</label>
            <input type="text" placeholder='My Name'className='text-[0.8rem] shadow-md w-[13vw]  px-[1vw] py-[1vh]'/>
        </div>
        <div className=' flex flex-col gap[-2px]'>
            <label className=' text-[0.6rem] text-gray-500 ml-2'>Business Name</label>
            <input type="text" placeholder='Abc Technologies private LTD'className='text-[0.8rem] shadow-md w-[13vw] px-[1vw] py-[1vh]'/>
        </div>
        <div className=' flex flex-col gap[-2px]'>
            <label className=' text-[0.6rem] text-gray-500 ml-2'>Phone number</label>
            <input type="number" placeholder='+9190000000'className='text-[0.8rem] shadow-md w-[13vw] px-[1vw] py-[1vh]'/>
        </div >
        <div className=' flex flex-col gap[-2px]'>
            <label className=' text-[0.6rem] text-gray-500 ml-2'>Business mail</label>
            <input type="email" placeholder='demoaccount@gmail.com'className='text-[0.8rem] shadow-md w-[13vw] px-[1vw] py-[1vh]'/>
        </div>
        <button onClick={(e)=>{handleOnclick(e)}} className=' md:h-[8vh] lg:h-[10vh] bg-[#80aa48] rounded-md p-[0.5rem] text-white '>Get Consultaion</button>
      </form>
    </div>
  )
}

export default Card
