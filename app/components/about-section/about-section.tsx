import React from "react";
import Info from "./info";
import Details from "./details";
import Contact from "./contact";

const AboutSection = () => {
  return (
    <div className="bg-[#0081FF] text-white  w-full flex flex-col items-center">
      <Info />
      <Details />
      <Contact />
    </div>
  );
};

export default AboutSection;
