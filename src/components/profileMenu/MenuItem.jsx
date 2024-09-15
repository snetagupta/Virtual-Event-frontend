import React from 'react';
import { IoChevronForward } from 'react-icons/io5';

const MenuItem = ({ icon, title, description }) => {
  return (
    <div className='flex items-center justify-between py-3'>
      <div className='flex items-center gap-4'>
        {icon}
        <div>
          <p>{title}</p>
          {description && <p className='text-[12px] text-gray-700'>{description}</p>}
        </div>
      </div>
      <IoChevronForward />
    </div>
  );
};

export default MenuItem;
