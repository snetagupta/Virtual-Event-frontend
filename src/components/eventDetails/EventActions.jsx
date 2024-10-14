import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineHeartBroken } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventActions = ({ event }) => {
  console.log("EventActions", event);
  const navigate = useNavigate();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("eventify_user")) || {};

  // Check if the event.likes array contains the user's ID
  const [liked, setLiked] = useState(() => event.likes.some((like) => like === user._id));
  console.log(JSON.parse(localStorage.getItem("eventify_user"))._id);


  console.log("liked",liked);
  const LIKES_URL = import.meta.env.VITE_LIKES_URL;
  const DISLIKES_URL = import.meta.env.VITE_DISLIKES_URL;

  const incLikes = async () => {
    try {
      const res = await axios.post(
        `${LIKES_URL}${id}`,
        { userId: user._id }, // Including user._id in the body
        {
          headers: {
            Authorization: `Bearer ${user.token}`, // Include token if needed for authentication
          },
        }
      );
      console.log("Like response:", res.data);
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  const incDislikes = async () => {
    try {
      const res = await axios.post(
        `${DISLIKES_URL}${id}`,
        { userId: user._id }, // Including user._id in the body
        {
          headers: {
            Authorization: `Bearer ${user.token}`, // Include token if needed for authentication
          },
        }
      );
      console.log("Dislike response:", res.data);
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };
  
  return (
    <div className="mx-4 md:mx-16 rounded-md flex flex-col md:flex-row justify-between items-center md:items-start mt-5">
      <div className="flex md:justify-normal justify-between gap-4 mb-4 md:mb-0 w-full">
        <button
          className="text-white bg-primary px-4 py-2 rounded-md transition duration-200"
          onClick={() => {
            navigate("/checkout/" + id);
          }}>
          Buy Now
        </button>
        <button className="text-primary bg-white border-primary border-[1px] px-4 py-2 rounded-md transition duration-200">Share</button>
      </div>
      <div className="flex overflow-scroll w-full gap-4">
        <div className="flex flex-1  gap-2">
          <FcLike className="text-2xl" />
          <div>
            <p className="text-md font-semibold">{((event.likes.length * 100) / (event.likes.length + event.dislikes.length)).toFixed(0)}%</p>
            <p className="text-sm text-gray-600 font-thin">Liked this event</p>
          </div>
        </div>
        <div className="flex items-center gap-2 border rounded-lg w-fit h-fit px-3 py-2 cursor-pointer" onClick={
          incLikes

        }>
          <CiHeart className="text-2xl" />
          <p className="text-sm text-gray-600">Like</p>
        </div>
        <div className="flex items-center gap-2 border rounded-lg w-fit h-fit px-3 py-2 cursor-pointer" onClick={incDislikes}>
          <MdOutlineHeartBroken className="text-2xl" />
          <p className="text-sm text-gray-600">Dislike</p>
        </div>
        <div className="flex items-center gap-2 border rounded-lg w-fit h-fit px-3 py-2 cursor-pointer">
          <CiLocationOn className="text-2xl" />
          <p className="text-sm text-gray-600">Google Meet</p>
        </div>
      </div>
    </div>
  );
};

export default EventActions;
