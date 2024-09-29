import React, { useEffect, useState } from 'react'
import logo from '../assets/img/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
const Navbar = () => {
    //bg-[#55ed22]
    const navigate = useNavigate()

    const [showMenu,setShowMenu] = useState(false)
    const [token,setToken] = useState(true)
    const [profilePic,setprofilePic] = useState(null)

    useEffect(()=> {
        if(token) {
            const fetchedprofilePic = null
            setprofilePic(fetchedprofilePic)
        }
    },[token])

    const toogleDropdown = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div className='flex  items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
 <img onClick={()=>navigate('/')} className='w-44' src={logo} alt="" />
 <ul className='hidden md:flex items-start gap-5 font-medium'>
    <NavLink to={'/'}>
        <li className='py-1'>HOME</li>
        <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
    </NavLink>
    <NavLink to={'/doctors'}>
        <li className='py-1'>ALL DOCTORS</li>
        <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
    </NavLink>
    <NavLink to={'/about'}>
        <li className='py-1'>ABOUT</li>
        <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
    </NavLink>
    <NavLink to={'/contact'}>
        <li className='py-1'>CONTACT</li>
        <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
    </NavLink>
 </ul>
 <div className='flex items-center gap-4'>
    {
        token ?
        <div className='flex gap-2 items-center cursor-pointer group relative'>
            <img className='w-10 h-10 rounded-full object-cover' src={profilePic || 'https://i.ibb.co.com/W399PsP/received-3208019389417275-2.jpg'} alt="Profile" />
            <RiArrowDropDownLine  className=' text-4xl'/>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p  onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                    <p   onClick={()=>navigate('/my-appointments')}  className='hover:text-black cursor-pointer'>My Appointment</p>
                    <p onClick={()=>setToken(true)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>

        </div>
        :
        <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
    }

 </div>

    </div>
  )
}

export default Navbar