import { LuCalendarDays } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Eventcard = ({ event }) => {
  const [buy, setBuy] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="w-full sm:w-[330px] h-[450px] border relative rounded-2xl hover:shadow-lg overflow-hidden flex flex-col transition-all"
      onClick={() => {
        navigate(`/event-details/${event._id}`);
      }}>
      {/* Image Section */}
      <img src={event.image} alt={event.title} className="w-full h-[200px] sm:h-[250px] object-cover" />

      {/* Event Details */}
      <div className="p-4 flex-1">
        <p className="font-semibold text-base sm:text-lg text-black mb-2">{event?.title?.length > 40 ? event?.title?.slice(0, 37) + "..." : event.title}</p>
        <div className="flex justify-between text-sm sm:text-base">
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
              <p className="px-2">{event.date.slice(0, 10).split("-").reverse().join("-")}</p>
              {console.log(event.date.slice(0, 10).split("-").reverse().join("-"))}
            </div>
            <div className="flex items-center">
              <IoTimeOutline />

              <p className="px-2">{event.time}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-auto p-3 bg-orange-50 flex justify-between items-center font-semibold text-sm sm:text-base uppercase">
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
          <p className="text-primary cursor-pointer" onClick={() => setBuy(!buy)}>
            Buy Now
          </p>
        )}
      </div>
    </div>
  );
};

export default Eventcard;
