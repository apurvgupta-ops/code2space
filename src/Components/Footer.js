import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo1.jpg";
const Footer = () => {
  // * COMMON STYLE FOR FOOTER CONTENT
  const footerStyle = "flex flex-col gap-4 px-6 border-r-2";
  return (
    <div>
      <div className="w-full bg-[#102348] p-10  ">
        <div className="w-[80%] m-auto flex items-center justify-around">
          <div className="w-fit ">
            <img src={logo} alt="Logo" className="rounded-full w-40" />
          </div>

          <div className="flex text-[#848DA0] gap-10">
            <div className={footerStyle}>
              <Link>Coding</Link>
              <Link>Game Development</Link>
              <Link>Web Development</Link>
              <Link>App Development</Link>
              <Link>Python</Link>
            </div>
            <div className={footerStyle}>
              <Link> Spoken English</Link>
              <Link>Become a Teacher</Link>
              <Link>Career</Link>
              <Link>Franchi</Link>
            </div>
            <div className={footerStyle}>
              <Link>About Us</Link>
              <Link>Contact US</Link>
              <Link>Terms & Condition</Link>
              <Link>Privacy Policy</Link>
              <Link>Refund Policy</Link>
            </div>
            <div className={footerStyle}>
              <Link> Other Services</Link>
              <Link>School Managemennt</Link>
              <Link>Code2Space - Training</Link>
              <Link>Internship</Link>
              <Link>Code2Space - IT Services</Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-[80%] m-auto border flex items-center justify-center ">
        Copyright © All rights reserved | This template is made by Code2Space
      </footer>
    </div>
  );
};

export default Footer;
