import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineHeartBroken } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { CiLocationOn } from "react-icons/ci";

const EventActions = () => {
  return (
    <div className='mx-4 md:mx-16 rounded-md flex flex-col md:flex-row justify-between items-center md:items-start mt-5'>
      <div className='flex md:justify-normal justify-between gap-4 mb-4 md:mb-0 w-full'>
        <button className='text-white bg-primary px-4 py-2 rounded-md transition duration-200'>
          Add to Watchlist
        </button>
        <button className='text-white bg-primary px-4 py-2 rounded-md transition duration-200'>
          Share
        </button>
      </div>
      <div className='flex overflow-scroll w-full gap-4'>
        <div className='flex flex-1  gap-2'>
          <FcLike className='text-2xl' />
          <div>
            <p className='text-md font-semibold'>90%</p>
            <p className='text-sm text-gray-600 font-thin'>Liked this event</p>
          </div>
        </div>
        <div className='flex items-center gap-2 border rounded-lg w-fit h-fit px-3 py-2 cursor-pointer'>
          <CiHeart className='text-2xl' />
          <p className='text-sm text-gray-600'>Like</p>
        </div>
        <div className='flex items-center gap-2 border rounded-lg w-fit h-fit px-3 py-2 cursor-pointer'>
          <MdOutlineHeartBroken className='text-2xl' />
          <p className='text-sm text-gray-600'>Dislike</p>
        </div>
        <div className='flex items-center gap-2 border rounded-lg w-fit h-fit px-3 py-2 cursor-pointer'>
          <CiLocationOn className='text-2xl' />
          <p className='text-sm text-gray-600'>Google Meet</p>
        </div>
      </div>
    </div>
  );
};

export default EventActions;
