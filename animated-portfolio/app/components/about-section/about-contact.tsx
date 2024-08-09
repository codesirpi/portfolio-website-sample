import Image from "next/image";
import React from "react";
import facebook from "../../assets/about-section/facebook.svg";
import twitter from "../../assets/about-section/twitter.svg";
import linkedin from "../../assets/about-section/linkedin.svg";
import dribble from "../../assets/about-section/dribble.svg";
import behance from "../../assets/about-section/behance.svg";
import pinInterest from "../../assets/about-section/pin-interest.svg";
import instagram from "../../assets/about-section/instagram.svg";
import youtube from "../../assets/about-section/youtube.svg";
import { cambay } from "@/app/layout";

const AboutContact = () => {
  const images = [
    facebook,
    twitter,
    linkedin,
    dribble,
    behance,
    pinInterest,
    instagram,
    youtube,
  ];

  return (
    <div className="w-full max-w-[770px] bg-[#0081FF] flex box-border px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] xl:max-w-[1440px]">
      <div className="w-full flex flex-col gap-7 justify-between md:flex-row">
        <div className={`text-2xl ${cambay.className}`}>If you like my works Follow me:</div>
        <div className="flex gap-7 flex-wrap  md:w-[255px] md:justify-end xl:w-fit">
          {images.map((img, index) => (
            <Image key={index} src={img} alt="website-img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
