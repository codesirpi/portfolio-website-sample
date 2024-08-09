import Image from "next/image";
import React from "react";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import linkedin from "../../public/linkedin.svg";
import dribble from "../../public/dribble.svg";
import behance from "../../public/behance.svg";
import pinInterest from "../../public/pin-interest.svg";
import instagram from "../../public/instagram.svg";
import youtube from "../../public/youtube.svg";

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
        <div className="text-2xl">If you like my works Follow me:</div>
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
