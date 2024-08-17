import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-12 py-4 gap-20 border-b-2">
      <h1 className="text-2xl font-semibold text">VirtualEvents</h1>

      <p className="border rounded-full py-1 px-2 ">Popular Events</p>
      <p className="border rounded-full py-1 px-2 ">Free Events</p>
      <p className="border rounded-full py-1 px-2 ">Today's Events</p>

      <p className="border rounded-full py-1 px-2 ">List your Events</p>
      <div className="border border-gray-200 bg-gray-100 rounded-md p-2 flex-1 flex item-center gap-2">
        <IoSearch className="text-xl mt-0.5" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 text-black w-full border-none outline-none"
        />
      </div>
      <button className="bg-slate-800 text-white py-2 px-4 rounded-md">
        Sign In
      </button>
    </div>
  );
};
export default Navbar;
