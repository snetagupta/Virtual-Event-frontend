import React from 'react';
import { IoMdClose } from 'react-icons/io';

const SideNavbar = ({ open, setOpen }) => {
  // Function to handle closing the sidebar when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === 'sideNavbarContainer') {
      setOpen(false);
    }
  };
  const tagStyle =
  ' py-1 px-3 cursor-pointer text-base';

  return (
    <div
      id="sideNavbarContainer"
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`fixed top-0 left-0 h-screen w-[70%] p-5 bg-white transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex justify-between'>
          <p className='text-2xl font-bold text-primary'>Eventify</p>
          <div className='text-2xl cursor-pointer' onClick={() => setOpen(false)}>
            <IoMdClose />
          </div>
        </div>
        <hr className='mb-10' />
        <div className='flex flex-col text-lg gap-2'>
        <p className={tagStyle}>Upcoming Events</p>
            <p className={tagStyle}>Today's Events</p>
            <p className={tagStyle}>About us</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
