import { IoSearch } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import SideNavbar from './SideNavbar';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const tagStyle =
    'border text-primary rounded-lg py-1 px-3 cursor-pointer text-base';

  return (
    <>
      <div className='flex items-center justify-between px-3 py-4 md:px-8 border-b-2'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex gap-2'>
            <button className='md:hidden' onClick={() => setOpen(true)}>
              <HiMenu className='text-2xl text-primary' />
            </button>
            <h1 className='text-xl md:text-2xl font-semibold text-primary'>
              EventX
            </h1>
          </div>
          <div className='hidden md:flex gap-6 mr-10'>
            <p className={tagStyle}>Popular Events</p>
            <p className={tagStyle}>Free Events</p>
            <p className={tagStyle}>Today's Events</p>
            <p className={tagStyle}>List your Events</p>
          </div>
        </div>

        <div className='flex justify-between items-center gap-2 md:gap-5'>
          <div className='flex items-center border border-gray-200 bg-gray-100 rounded-md p-2'>
            <label htmlFor='search' className=''>
              <IoSearch className='text-xl cursor-pointer text-primary' />
            </label>
            <input
              type='text'
              placeholder='Search'
              id='search'
              className='hidden md:flex bg-gray-100 text-black w-full border-none outline-none'
            />
          </div>
          <button className='bg-primary text-white py-2 px-3 md:px-4 rounded-md text-sm md:text-base whitespace-nowrap'>
            Sign In
          </button>
        </div>
      </div>
      <SideNavbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
