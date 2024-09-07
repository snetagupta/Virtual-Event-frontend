import { LuCalendarDays } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
import { useState } from "react";

const Eventcard = ({ event }) => {
  const [buy, setBuy] = useState(false);

  return (
    <div className="w-[330px] h-[430px] border relative rounded-2xl hover:shadow-lg overflow-hidden flex flex-col">
      {/* Image Section */}
      <img src={event.image} className="w-full h-[250px] object-cover" />

      {/* Event Details */}
      <div className="p-2 flex-1">
        <p className="font-semibold text-base text-black mb-2">
          {event?.title?.length > 40 ? event?.title?.slice(0, 37) + "..." : event.title}
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <CiLocationOn />
              <p className="px-2">{event.location}</p>
            </div>
            <div className="flex items-center">
              <MdOutlinePerson />
              <p className="px-2">{event.organizer}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <LuCalendarDays />
              <p className="px-2">{event.date}</p>
            </div>
            <div className="flex items-center">
              <IoTimeOutline />
              <p className="px-2">{event.time}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-auto p-3 bg-orange-50 flex justify-between items-center font-semibold text-base uppercase">
        {buy ? (
          <p>Explore</p>
        ) : (
          <p>
            <span className="text-blue-800 text-lg">{event.price}</span> onwards
          </p>
        )}
        {buy ? (
          <p className="cursor-pointer">Join Now</p>
        ) : (
          <p className="text-primary cursor-pointer">Buy Now</p>
        )}
      </div>
    </div>
  );
};

export default Eventcard;
