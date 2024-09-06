import React from 'react';
import { FaVideo } from "react-icons/fa";

const data = [
  {
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/housemaid-et00405565-1721722328.jpg',
    title: 'Housemaid',
    language: 'Korean',
  },
  {
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/despicable-me-4-et00386901-1723182543.jpg',
    title: 'Despicable Me 4',
    language: 'English',
  },
  {
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/double-ismart-et00359660-1715779326.jpg',
    title: 'Double Ismart',
    language: 'Telugu',
  },
  {
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gharat-ganpati-et00399543-1716815492.jpg',
    title: 'Gharat Ganpati',
    language: 'Marathi',
  },
];

const PremiereCard = ({ image, title, language }) => {
  return (
    <div className='flex flex-col gap-2 items-center w-full sm:w-[48%] md:w-[30%] lg:w-[20%]'>
      <div className='w-full'>
        <img
          src={image}
          alt={title}
          className='h-full w-full object-cover rounded-md shadow-lg'
        />
      </div>
      <div>
      <p className='text-sm md:text-xl text-center text-gray-900 font-semibold'>{title}</p>
      <p className='text-sm md:text-lg text-center text-gray-800 font-thin'>{language}</p>
      </div>
    </div>
  );
};

const Premiere = () => {
  return (
    <div className=' bg-gray-50 p-3 md:p-8'>
      <div className='flex gap-5 items-center mb-10 ml-3'>
        <div className='text-7xl '>
          <FaVideo />
        </div>
        <div>
          <p className='text-3xl font-semibold text-gray-800'>PREMIERE</p>
          <p className='text-lg text-gray-600'>Watch new movies at home every Friday</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-between gap-4 w-full'>
        {data.map((movie, index) => (
          <PremiereCard key={index} image={movie.image} title={movie.title} language={movie.language}/>
        ))}
      </div>
    </div>
  );
};

export default Premiere;
