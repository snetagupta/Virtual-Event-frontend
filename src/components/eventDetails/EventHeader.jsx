import React from 'react';

const EventHeader = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center justify-between mt-10 mx-4 md:mx-16'>
      <div className='w-full md:w-[45%] mt-6 md:mb-0'>
        <div>
          <h2 className='text-3xl md:text-4xl font-semibold'>
            The Greatest of All Time
          </h2>
          <div className='text-md md:text-md font-light text-gray-600 mt-4 md:mt-5 flex gap-2'>
            <p className='border px-2 py-1 rounded-lg w-fit'>Action, Sci-Fi</p>
            <p className='border px-2 py-1 rounded-lg w-fit'>Telugu, Tamil</p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[55%] bg-blue-gray-700 h-[200px] md:h-[300px] overflow-hidden rounded-2xl'>
        <img
          src='https://wallpapercave.com/wp/wp12400936.jpg'
          alt='Event Poster'
          className='w-full h-full object-cover'
        />
      </div>
    </section>
  );
};

export default EventHeader;
