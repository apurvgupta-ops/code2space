import React from "react";
import slider from "../Assets/slider2.jpg";
import Slider from "react-slick";

const Crousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative">
      <div className="border border-black w-full ">
        <Slider {...settings} className="">
          <div className="border border-red-100 ">
            <img src={slider} alt="slider image" className="h-[600px] w-full" />
          </div>
          <div>
            <img src={slider} alt="slider image" className="h-[600px] w-full" />
          </div>
          <div>
            <img src={slider} alt="slider image" className="h-[600px] w-full" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Crousel;
