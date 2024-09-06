import { LuCalendarDays } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
import { useState } from "react";

const Eventcard = () => {
  const [buy,setBuy] = useState(false);

  return (
    <div>
      <div className="w-[350px] border shadow-md relative">
        <img
          src="https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_400/c_crop%2Cg_custom%2Fv1720172923%2Fkgn7ob7rbrvzvd2mcwaw.jpg"
          className="rounded-md "
        />
        <p className="text-orange-500 bg-orange-50 p-1 absolute top-1 right-1 font-semibold rounded-md">
          100 Booked
        </p>
        <div className="flex justify-between mt-2 mx-1">
          <p className="bg-purple-50 text-purple-500 font-semibold p-1 rounded-md">
            Comedy
          </p>
          <p className="bg-red-50 text-red-500 p-1 font-semibold rounded-md">
            18+
          </p>
        </div>
        <p className="p-2 font-semibold text-base">
          Punyakoti – A digital Standup comedy special by Sonu Venugopal
        </p>
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2 px-2">
            <div className="flex items-center ">
              <CiLocationOn />
              <p className="px-2">Youtube</p>
            </div>

            <div className="flex items-center ">
              <MdOutlinePerson />
              <p className="px-2">Avinash Yede</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2">
            <div className="flex items-center ">
              <LuCalendarDays />
              <p className="px-2">21 Sept 2024</p>
            </div>

            <div className="flex items-center ">
              <IoTimeOutline />
              <p className="px-2">06:00 PM</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between font-semibold text-base p-3 mt-3 bg-blue-50 uppercase">
          {buy ? (
            <p>Explore </p>
          ) : (
            <p>
              <span className="text-blue-800 text-lg">₹199</span> onwards
            </p>
          )}

          {buy ? <p>Join Now</p> : <p>Buy Now</p>}
        </div>
      </div>
    </div>
  );
};
export default Eventcard;
