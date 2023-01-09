import React from "react";
import image from "../Assets/connection.jpg";

const Connection = () => {
  return (
    <div className="mt-10">
      <div className="w-5/6 m-auto">
        <h1 className="text-5xl font-bold ">
          Getting Started is as Easy as 123.
          <h1>Let’s Get Started!</h1>
        </h1>
        <div className="w-4/6 m-auto">
          <img src={image} alt="connection image" />
        </div>
      </div>
    </div>
  );
};

export default Connection;
