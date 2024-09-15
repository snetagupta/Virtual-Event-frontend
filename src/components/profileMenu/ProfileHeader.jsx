import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

const ProfileHeader = () => {
  return (
    <div className='flex justify-between items-center mb-2'>
      <div>
        <p className='text-xl'>Hey!</p>
        <div className='flex items-center'>
          <p>Edit Profile</p>
          <IoChevronForward />
        </div>
      </div>
      <FaRegUserCircle className='text-4xl' />
    </div>
  );
};

export default ProfileHeader;
