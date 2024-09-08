import React from 'react';
import { GrWorkshop } from 'react-icons/gr';
import { IoSchoolOutline } from 'react-icons/io5';
import { RiMentalHealthLine } from 'react-icons/ri';
import { MdOutlineTheaterComedy } from 'react-icons/md';
import { FaRegLaughSquint } from 'react-icons/fa';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiMicrophoneOn } from 'react-icons/ci';
import { PiMagicWandLight } from 'react-icons/pi';


const GenreCard = ({ Icon, label }) => {
  return (
    <div className="p-5 border-2 rounded-lg border-gray-200 flex flex-col gap-2 items-center transition-all duration-300 transform hover:-translate-y-2 hover:border-primary cursor-pointer">
      <div className="text-5xl md:text-7xl">
        <Icon />
      </div>
      <p className="text-lg md:text-xl">{label}</p>
    </div>
  );
};



const Genre = () => {
  const genres = [
    { Icon: GrWorkshop, label: 'Workshops' },
    { Icon: CiMicrophoneOn, label: 'Podcasts' },
    { Icon: IoSchoolOutline, label: 'Courses' },
    { Icon: RiMentalHealthLine, label: 'Mental Health' },
    { Icon: MdOutlineTheaterComedy, label: 'Comedy' },
    { Icon: FaRegLaughSquint, label: 'Humor' },
    { Icon: IoGameControllerOutline, label: 'Games' },
    { Icon: PiMagicWandLight, label: 'Magic' },
  ];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-3 md:p-8'>
      {genres.map((genre, index) => (
        <GenreCard key={index} Icon={genre.Icon} label={genre.label} />
      ))}
    </div>
  );
};

export default Genre;



// import React from 'react';
// import { GrWorkshop } from 'react-icons/gr';
// import { IoSchoolOutline } from 'react-icons/io5';
// import { RiMentalHealthLine } from 'react-icons/ri';
// import { MdOutlineTheaterComedy } from 'react-icons/md';
// import { FaRegLaughSquint } from 'react-icons/fa';
// import { IoGameControllerOutline } from 'react-icons/io5';
// import { CiMicrophoneOn } from 'react-icons/ci';
// import { PiMagicWandLight } from 'react-icons/pi';


// const GenreCard = ({ Icon, label, bgColor }) => {
//   return (
//     <div
//       className={`p-5 flex flex-col gap-2 items-center rounded-lg ${bgColor}`}
//     >
//       <div className='text-5xl md:text-7xl text-white'>
//         <Icon />
//       </div>
//       <p className='text-lg md:text-xl text-white'>{label}</p>
//     </div>
//   );
// };

// const Genre = () => {
//   const genres = [
//     { Icon: GrWorkshop, label: 'Workshops', bgColor: 'bg-red-500' },
//     { Icon: IoSchoolOutline, label: 'School', bgColor: 'bg-blue-500' },
//     { Icon: RiMentalHealthLine, label: 'Mental Health', bgColor: 'bg-green-500' },
//     { Icon: MdOutlineTheaterComedy, label: 'Comedy', bgColor: 'bg-yellow-500' },
//     { Icon: FaRegLaughSquint, label: 'Humor', bgColor: 'bg-purple-500' },
//     { Icon: IoGameControllerOutline, label: 'Games', bgColor: 'bg-pink-500' },
//     { Icon: CiMicrophoneOn, label: 'Podcasts', bgColor: 'bg-indigo-500' },
//     { Icon: PiMagicWandLight, label: 'Magic', bgColor: 'bg-teal-500' },
//   ];

//   return (
//     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-3 md:p-8'>
//       {genres.map((genre, index) => (
//         <GenreCard
//           key={index}
//           Icon={genre.Icon}
//           label={genre.label}
//           bgColor={genre.bgColor}
//         />
//       ))}
//     </div>
//   );
// };

// export default Genre;

