import React from "react";
import AboutInfo from "./about-info";
import AboutDetails from "./about-details";
import AboutContact from "./about-contact";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="bg-[#0081FF] text-white  w-full flex flex-col items-center"
    >
      <AboutInfo />
      <AboutDetails />
      <AboutContact />
    </div>
  );
};

export default AboutSection;
