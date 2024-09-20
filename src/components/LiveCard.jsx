import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import liveImg from "../data/liveImg";
import { MdLiveTv } from "react-icons/md";

const LiveCard = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(2);

  const updateSlides = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    } else if (width < 768) {
      setSlidesToShow(2);
      setSlidesToScroll(1);
    } else if (width < 1024) {
      setSlidesToShow(3);
      setSlidesToScroll(2);
    } else {
      setSlidesToShow(5);
      setSlidesToScroll(2);
    }
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    beforeChange: (current, next) => {
      // Check if next slide is the last one
      if (next >= liveImg.length - slidesToShow) {
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
    <div className="p-4">
      <div className="flex items-center gap-5 px-3 py-2 mb-10 ml-3">
        < MdLiveTv className='text-4xl' />
        <div>
      <p className=" text-xl sm:text-2xl font-semibold text-gray-800" >The Best of Live Events</p>
      <p className='text-base text-gray-600'>Watch new movies at home every Friday</p>
      </div>
      </div>
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
          <IoIosArrowForward size={26} className="text-white" />
        </button>
        <Slider ref={sliderRef} {...settings}>
          {liveImg.map((live, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="px-3 rounded-md flex flex-col justify-between gap-5">
                <img src={live.img} className="rounded-md " />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LiveCard;
