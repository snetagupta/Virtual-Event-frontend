import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import liveImg from "../data/liveImg";

const LiveCard = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,//change slide according to screen size for phone = 1
    slidesToScroll: 2,
    beforeChange: (current, next) => {
      // Check if next slide is the last one
      if (next === liveImg.length - 1) {
        // Hide right arrow
        document.querySelector(".custom-next").style.display = "none";
      } else {
        // Show right arrow
        document.querySelector(".custom-next").style.display = "block";
      }

      // Check if next slide is the first one
      if (next === 0) {
        // Hide left arrow
        document.querySelector(".custom-prev").style.display = "none";
      } else {
        // Show left arrow
        document.querySelector(".custom-prev").style.display = "block";
      }
    },
  };

  useEffect(() => {
    document.querySelector(".custom-prev").style.display = "none";
  }, []);
  return (
    <>
      <div className="px-20">
        <p className="px-3 py-2 text-2xl font-semibold">The Best of Live Events</p>
        <div className="relative">
          <button
            className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 shadow-md p-2 rounded-full z-10"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowBack size={26} className="text-white" />
          </button>
          <button
            className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 shadow-md p-2 rounded-full z-10"
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoIosArrowForward size={26} className="text-white"/>
          </button>
          <Slider ref={sliderRef} {...settings}>
            {liveImg.map((live, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="px-3  rounded-md flex flex-col justify-between gap-5">
                  <img src={live.img} className="rounded-md " />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default LiveCard;
