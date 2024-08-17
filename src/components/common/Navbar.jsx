import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  const tagStyle =
    'border text-primary  rounded-lg py-1 px-3 cursor-pointer  hover:scale-[105%] hover:bg-primary hover:text-white transition-all duration-200';
  return (
    <div className='flex items-center justify-between px-12 py-4 gap-10 border-b-2'>
      <h1 className='text-2xl font-semibold text-primary'>VirtualEvents</h1>
      <div className='flex gap-10'>
        <p className={`${tagStyle}`}>Popular Events</p>
        <p className={`${tagStyle}`}>Free Events</p>
        <p className={`${tagStyle}`}>Today's Events</p>
        <p className={`${tagStyle}`}>List your Events</p>
      </div>
      <div className='flex justify-between gap-5'>
        <div className='border border-gray-200 bg-gray-100 rounded-md p-2 flex-1 flex item-center gap-2'>
          <label htmlFor="search">
          <IoSearch className='text-xl mt-0.5' cursor={"pointer"}/>
          </label>
          <input
            type='text'
            placeholder='Search'
            id='search'
            className='bg-gray-100 text-black w-full border-none outline-none flex-1'
          />
        </div>
        <button className='bg-slate-800 text-white bg-primary py-2 px-4 rounded-md'>
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Navbar;
