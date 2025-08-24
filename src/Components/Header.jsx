import React, { useState } from 'react'
import flower1 from '../assets/img/flower1.jpg'
import flower2 from '../assets/img/flopwer2.jpg'
import flower3 from '../assets/img/flower3.jpeg'
import header from '../assets/img/header2.png'
//import head from '../assets/img/heade.docx'
import { FaArrowRight, FaArrowsAlt } from 'react-icons/fa'

const Header = () => {
    
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 py-8 items-center'>
        {/* left sides */} 
        <div className='md:w-1/2  flex flex-col items-start justify-center gap-4 py-10 m-auto md:py--[10vw] md:-mb-[-30px]'>
            <p className='text-3xl text-center pl-20 md:pl-2 md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br />With Trusted Doctors</p>
       <div className=' relative flex flex-col md:flex-row items-center gap-2 text-white text-sm font-light'>
                  <div className='relative flex items-center'>
            <img
              className='w-12 h-12 rounded-full object-cover border-2 border-gray-300 shadow-lg z-30'
              src={flower1}
              alt=""
            />
            <img
              className='w-12 h-12 rounded-full object-cover opacity-75 absolute left-5 z-20'
              src={flower2}
              alt=""
            />
            <img
              className='w-12 h-12 rounded-full object-cover opacity-75 absolute left-10 z-10'
              src={flower3}
              alt=""
            />
          </div>
         
            <p className='flex gap-10 pl-14'>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedul your appointment hassle-free</p>
       </div>
       <a className='flex items-center gap-3 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-110 transition-all' href="#specility">Book appointment <FaArrowRight/> </a>

        </div>
        {/*right sides */}
        <div className='md:w-1/2  relative md:mt-24 '>
        <img className='rounded-lg w-full top- object-cover   md:absolute bottom-0 sm:bottom-0 left-0 h-80' src={header} alt="" />

        </div>
    </div>
  )
}

export default Header