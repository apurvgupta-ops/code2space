import React, { useState } from "react";
import logo from "../Assets/logo2.jpg";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  // * COMMON lI STYLE
  const liStyle = "cursor-pointer hover:bg-gray-100 p-1 px-2 rounded-md";

  // * COMMON BUTTON STYLE
  const buttonStyle =
    "border border-blue-700 rounded-full text-blue-500 px-3 py-1 hover:border-white hover:text-white hover:bg-blue-500 hover:drop-shadow-lg";

  return (
    <div className="w-full h-auto ">
      <div className="w-[80%] m-auto flex justify-between items-center pt-2 pb-2 relative">
        <div className="w-fit ">
          <img src={logo} alt="Logo" className="rounded-full w-24" />
        </div>
        <div className="relative">
          <ul className="flex items-center gap-7 ">
            <li className="cursor-pointer text-md">Home</li>
            <div className="" onMouseEnter={() => setDropDown(true)}>
              <li className="flex items-center cursor-pointer text-md">
                Services <MdOutlineKeyboardArrowDown />
              </li>
              <div className="absolute top-16 ">
                {dropDown && (
                  <div className="flex flex-col gap-1 bg-white w-64 rounded-md p-2  ">
                    <li className={liStyle}>Website Designing</li>
                    <li className={liStyle}>Digital Marketing</li>
                    <li className={liStyle}>E-commerce development</li>
                    <li className={liStyle}>Social media marketing </li>
                    <li className={liStyle}>Website Redesign </li>
                    <li className={liStyle}>Website maintenance </li>
                    <li className={liStyle}>Ads management</li>
                  </div>
                )}
              </div>
            </div>
            <li className="cursor-pointer text-md">For Schools</li>
            <li className="cursor-pointer text-md">About Us</li>
            <button className={buttonStyle}>BOOK A FREE CLASS</button>
            <button className={buttonStyle}>ENQUIRE NOW</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
