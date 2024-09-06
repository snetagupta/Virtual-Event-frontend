import Navbar from "./common/Navbar";
import { PiDownloadSimple } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
const EventContact = () => {
  return (
    <>
      <Navbar />
      <div className="mt-6 px-20 flex gap-8 w-full">
        {/* left-section */}
        <div className="w-[350px] border-2 p-2 flex flex-col gap-4 shadow-lg rounded-md ">
          {/* first */}
          <div className="flex flex-col gap-2">
            <img src="https://itchronicles.com/wp-content/uploads/2020/11/AI-subpage-4-Feature.png" className="w-full rounded-md"/>
            
          </div>
          {/* second */}
          <div className="px-2 flex flex-col gap-2">
          <div className="flex items-center justify-between "> 
            <p className="text-lg font-semibold">AI:distilled-Behind The Curtain</p>
            < PiDownloadSimple/>
            </div>
            <p>Thu,sep 12 9:30 AM</p>
          </div>
          {/* third */}
          <div className="flex flex-col gap-4 pb-2">
            <button className="text-white bg-black rounded-md py-1 w-full">View Links</button>
            <button className="text-gray-700 rounded-md py-1 w-full border-2 border-gray-400">Cancel Orders</button>
            <button className="text-blue-600">Contact the organiizer</button>
          </div>
          {/* fourth */}
          <hr/>
          <div className="flex flex-col gap-2">
           <p className="text-gray-800 text-[12px]">Free Order 10353719019 on sep 5,2024</p>
           <p className="text-blue-600 text-[12px]">Report this event</p>
          </div>
        </div>
        {/* right-section */}
        <div className="flex-1 p-2">
          {/* first */}
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">General Admission</p>
            <div className="flex items-center">
            <CiEdit/>
            <p>Edit</p>
            </div>
          </div>
          <hr/>
           {/* second */}
           <div className="text-gray-800 flex flex-col gap-4">
            <p className="text-lg mt-3 font-semibold text-gray-500">Contact Information</p>
            <div>
                <p>First Name</p>
                <p>Sneta</p>
            </div>
            <div>
                <p>Last Name</p>
                <p>Gupta</p>
            </div>
            <div>
                <p>Email</p>
                <p>SnetaGupta@gmail.com</p>
            </div>
            <div>
                <p>Delivery Method</p>
                <p>eTicket</p>
            </div>
           </div>
        </div>
      </div>
    </>
  );
};
export default EventContact;
