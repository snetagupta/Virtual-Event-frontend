import React from 'react';
import { IoMdClose } from 'react-icons/io';
import ProfileMenuList from '../profileMenu/ProfileMenuList';

const ProfileMenu = ({ open, setOpen }) => {
  // Function to handle closing the sidebar when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === 'sideNavbarContainer') {
      setOpen(false);
    }
  };

  const tagStyle = 'py-1 px-3 cursor-pointer text-base';

  return (
    <div
      id="sideNavbarContainer"
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`fixed top-0 right-0 h-screen w-fit p-5 bg-white transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end'>
          <div className='text-2xl cursor-pointer' onClick={() => setOpen(false)}>
            <IoMdClose />
          </div>
        </div>
        <ProfileMenuList/>
      </div>
    </div>
  );
};

export default ProfileMenu;
