import { IoSearch } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import SideNavbar from './SideNavbar';
import { NavLink, useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showProfileMenu, setShowPofileMenu] = useState(false);
  const tagStyle = ' py-1 px-3 cursor-pointer';
  const navigate = useNavigate();
  const user = localStorage.getItem('eventify_user');
  return (
    <>
      <div className='flex items-center justify-between px-3 py-4 md:px-8 border-b-2'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex gap-2'>
            <button className='md:hidden' onClick={() => setOpen(true)}>
              <HiMenu className='text-2xl ' />
            </button>
            <h1 className='text-xl md:text-2xl font-semibold text-primary cursor-pointer' onClick={() => navigate('/')}>
              Eventify
            </h1>
          </div>
          <div className='hidden md:flex gap-6 mr-10'>
            <NavLink to={'/events'} className={tagStyle} >Find Events</NavLink>
            <NavLink className={tagStyle}>Create Event</NavLink>
            {/* <button className=' py-1 px-3 cursor-pointer text-base text-primary'>List your Events</button> */}
            <NavLink className={tagStyle}>About us</NavLink>
          </div>
        </div>

        <div className='flex justify-between items-center gap-2 md:gap-5'>
         
          <div>
            {user ? (
              <div className='w-8 h-8 md:w-10 md:h-10'>
                <img
                  src='https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg'
                  alt=''
                  className='w-full h-full rounded-full ring-2 ring-primary object-cover cursor-pointer'
                  onClick={() => setShowPofileMenu((prev) => !prev)}
                />
              </div>
            ) : (
              <button
                className='bg-primary text-white py-2 px-3 md:px-4 rounded-md text-sm md:text-base whitespace-nowrap'
                onClick={() => navigate('/login')}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
      <SideNavbar open={open} setOpen={setOpen} />
      <ProfileMenu open={showProfileMenu} setOpen={setShowPofileMenu} />
    </>
  );
};

export default Navbar;
