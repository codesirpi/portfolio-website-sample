import React from "react";
import interfaceIcon from "../../assets/about-section/interface.svg";
import identityIcon from "../../assets/about-section/identity.svg";
import webFlowIcon from "../../assets/about-section/webflow.svg";
import Image from "next/image";
import { cambay, montserrat } from "@/app/layout";

const Details = () => {
  const detailsData = [
    {
      image: interfaceIcon,
      head: "Web Design & User Interface",
      content:
        "Creating captivating, easy-to- navigate websites that enhance user experience and foster business growth.",
    },
    {
      image: identityIcon,
      head: "Brand Identity",
      content:
        "Developing a unique and coherent brand identity effectively communicates your brand`s ethos and distinguishes you in the market.",
    },
    {
      image: webFlowIcon,
      head: "Framer & Webflow Templates",
      content:
        "Designing custom, responsive templates with Framer and Webflow for dynamic and efficient web solutions.",
    },
  ];

  return (
    <div className="bg-blue-500 w-full h-auto flex flex-col items-center">
      <div className=" max-w-[722px] bg-blue-500 flex justify-center px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] xl:max-w-[1440px]">
        <div className="flex flex-col gap-11 md:flex-row md:gap-7">
          {detailsData.map(({ image, head, content }, index) => (
            <div className="flex flex-col gap-7 xl:flex-row" key={index}>
              <Image
                src={image}
                alt="webFlow-icon"
                className="w-[60px] h-[60px]"
              />
              <div className="text-lg pr-7">
                <div className={`font-bold mb-4 ${montserrat.className}`}>
                  {head}
                </div>
                <div className={` ${cambay.className}`}>{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
