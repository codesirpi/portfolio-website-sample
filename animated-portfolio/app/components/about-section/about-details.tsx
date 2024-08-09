import React from "react";
import interfaceIcon from "../../assets/about-section/interface.svg";
import identityIcon from "../../assets/about-section/identity.svg";
import webFlowIcon from "../../assets/about-section/webflow.svg";
import Image from "next/image";
import { Cambay } from "next/font/google";
import { cambay, montserrat } from "@/app/layout";

const AboutDetails = () => {
  return (
    <div className="bg-[#06c] w-full h-auto flex flex-col items-center">
      <div className=" max-w-[770px] bg-[#06c] flex justify-center px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] xl:max-w-[1440px]">
        <div className="flex flex-col gap-11 md:flex-row md:gap-7">
          <div className="flex flex-col gap-7 xl:flex-row">
            <Image
              src={interfaceIcon}
              alt="interface-icon"
              className="w-[60px] h-[60px]"
            />
            <div className="text-lg">
              <div className={`font-bold mb-4 ${montserrat.className}`}>Web Design & User Interface</div>
              <div className={`${cambay.className}`}>
                Creating captivating, easy-to- navigate websites that enhance
                user experience and foster business growth.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 xl:flex-row">
            <Image
              src={identityIcon}
              alt="identity-icon"
              className="w-[60px] h-[60px]"
            />
            <div className="text-lg">
              <div className={`font-bold mb-4 ${montserrat.className}`}>Brand Identity</div>
              <div className={`${cambay.className}`}>
                Developing a unique and coherent brand identity effectively
                communicates your brand`s ethos and distinguishes you in the
                market.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 xl:flex-row">
            <Image
              src={webFlowIcon}
              alt="webFlow-icon"
              className="w-[60px] h-[60px]"
            />
            <div className="text-lg">
              <div className={`font-bold mb-4 ${montserrat.className}`}>Framer & Webflow Templates</div>
              <div className={`${cambay.className}`}>
                Designing custom, responsive templates with Framer and Webflow
                for dynamic and efficient web solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
