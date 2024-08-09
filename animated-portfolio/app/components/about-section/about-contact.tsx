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
    { image: facebook, alt: "facebook-icon" },
    { image: twitter, alt: "twitter-icon" },
    { image: linkedin, alt: "linkedin-icon" },
    { image: dribble, alt: "dribble-icon" },
    { image: behance, alt: "behance-icon" },
    { image: pinInterest, alt: "pinInterest-icon" },
    { image: instagram, alt: "instagram-icon" },
    { image: youtube, alt: "youtube-icon" },
  ];

  return (
    <div className="w-full max-w-[770px] bg-[#0081FF] flex box-border px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] xl:max-w-[1440px]">
      <div className="w-full flex flex-col gap-7 justify-between md:flex-row">
        <div className={`text-2xl ${cambay.className}`}>
          If you like my works Follow me:
        </div>
        <div className="flex gap-7 flex-wrap  md:w-[255px] md:justify-end xl:w-fit">
          {images.map((data, index) => (
            <Image
              key={index}
              src={data.image}
              alt={data.alt}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
