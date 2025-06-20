import React from 'react'
import banner from '../assets/img/banner-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigage = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        {/*left side */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <p className='text-'>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigage('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create account</button>
        </div>
        
        {/*right sides */}
        <div className=' hidden md:block md:w-1/2 lg:w-[370px] top-12 bottom-0 relative'>
       <img className=' h-full absolute right-0 top-0 max-w-md' src={banner} alt="" />
        </div>
    </div>
  )
}

export default Banner