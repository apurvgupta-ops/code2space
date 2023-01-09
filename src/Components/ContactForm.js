import React from "react";
import { MdPersonPin } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import contactForm from "../Assets/contactForm2.jpg";

const ContactForm = () => {
  // *INPUT COMMON STYLE
  const inputStyle = "p-2 rounded-md outline-none border-none";

  return (
    <div className="w-full flex h-[450px]">
      {/* LEFT */}
      <div className="bg-gradient-to-r from-[#102348] to-blue-800 w-1/2 p-2">
        <div className="p-8 flex flex-col gap-4 w-4/5 m-auto">
          <h5 className="text-2xl font-semibold text-white">Write Us</h5>
          <input placeholder="Name" className={inputStyle} />
          <input placeholder="Email" className={inputStyle} />
          <input placeholder="Subject" className={inputStyle} />
          <textarea placeholder="Message" className={inputStyle} />
          <button className="bg-gradient-to-r from-sky-800 to-indigo-500 text-white text-2xl p-2 rounded-md w-fit m-auto">
            Send Message
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative w-1/2">
        <img
          src={contactForm}
          alt="bg-Image"
          className="h-[450px] w-full bg-cover bg-center"
        />
        <div className="absolute top-12 px-20 flex flex-col gap-4 w-4/5 m-auto text-black">
          <h5 className="text-2xl font-semibold">Get in touch</h5>
          <h4 className="flex items-center gap-2 ">
            <MdPersonPin size={40} />{" "}
            <span className="text-xl">+91 xxxxxxxxxx</span>
          </h4>
          <h4 className="flex items-center gap-2 ">
            <RiGlobalFill size={40} />{" "}
            <span className="text-xl">info@code2space.com</span>
          </h4>
          <h4 className="flex items-center gap-2 ">
            <GrMail size={40} /> <span className="text-xl">code2space.com</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
