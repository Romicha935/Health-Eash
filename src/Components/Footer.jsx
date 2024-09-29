import React from 'react'
import logo from '../assets/img/logo.png'
const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*left section */}
        <div>
        <img className='w-40 mb-5' src={logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ducimus.</p>
        </div>
        {/*center section */}
        <div className='text-xl font-medium mb-5'> 
            <p>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Ua</li>
                <li>Privecy Policy</li>
            </ul>
        </div>
        {/*right section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+017 5678 68904</li>
                <p>romichaparvin35@gmail.com</p>
            </ul>
        </div>
        
    </div>
    {/* copyright text */}
    <div>
            <hr />
            <p className='py-5 text-center text-sm'>copyright 2024@ HealthEase . All Right Reserve</p>
        </div>
    </div>

  )
}

export default Footer