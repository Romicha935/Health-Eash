import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/img/logo.png';
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44' src={logo} alt="Logo" />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'><li>HOME</li></NavLink>
        <NavLink to='/doctors'><li>ALL DOCTORS</li></NavLink>
        <NavLink to='/about'><li>ABOUT</li></NavLink>
        <NavLink to='/contact'><li>CONTACT</li></NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {user ? (
          <div className='flex gap-2 items-center cursor-pointer group relative'>
            <img
              className='w-10 h-10 rounded-full object-cover'
              src={user.photoURL || ''}
              alt="Profile"
            />
            <RiArrowDropDownLine className='text-4xl'/>

            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p
  onClick={async () => {
    try {
      await logout();
      Swal.fire({
        icon: 'success',
        title: 'Logout Successful',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed',
        text: err.message
      });
    }
  }}
  className='hover:text-black cursor-pointer'
>
  Logout
</p>

              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
