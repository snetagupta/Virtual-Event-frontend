import eventsImg from "../data/EventImage";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        // beforeChange: (current, next) => {
        //     // Check if next slide is the last one
        //     if (next ===eventsImg.length - 1) {
        //       // Hide right arrow
        //       document.querySelector(".custom-next").style.display = "none";
        //     } else {
        //       // Show right arrow
        //       document.querySelector(".custom-next").style.display = "block";
        //     }
      
        //     // Check if next slide is the first one
        //     if (next === 0) {
        //       // Hide left arrow
        //       document.querySelector(".custom-prev").style.display = "none";
        //     } else {
        //       // Show left arrow
        //       document.querySelector(".custom-prev").style.display = "block";
        //     }
        //   },
      };

      useEffect(() => {
        document.querySelector(".custom-prev").style.display = "block";
      }, []);
  return (
    <div className="m-auto">
    
      <div className="relative">
        <button
          className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 shadow-md p-2 rounded-full z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 shadow-md p-2 rounded-full z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoIosArrowForward size={24} />
        </button>
      <Slider  ref={sliderRef} {...settings}>
        {eventsImg.map((img) => (
          
          <div className="bg-gray-300 h-[350px] flex flex-col justify-center items-center gap-6 py-12">
            <img src={img.img} alt="" className="w-[480px] rounded-lg px-4" />
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};
export default Carousel;
