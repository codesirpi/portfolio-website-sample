import React from "react";
import { cambay, leckerliOne, montserrat } from "../layout";
import { Icon } from "@iconify/react";
import { StacksCard } from "./stacks-card";

export const StacksSection = () => {
  return (
    <div className="bg-white w-full flex justify-center">
      <div
        className={`bg-white w-full grid grid-cols-2  max-w-[722px] xl:max-w-[1440px] px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] ${cambay.className}`}
      >
        <div className="h-full flex flex-col col-span-2 xl:col-span-1   justify-center  xl:pr-[92px]">
          <div
            className={`text-lg text-[#B3B3B3] mb-8 text-[22px] md:text-[24px] xl:text-[28px] ${leckerliOne.className}`}
          >
            Stacks...
          </div>
          <div
            className={`text-black mb-7 text-[32px] md:text-[48px] xl:text-[52px] xl:leading-[60px] ${montserrat.className}`}
          >
            Basics of my creativity
          </div>
          <div
            className={`text-[#707070] leading-[30px] text-[20px] md:text-[24px]  mb-11 xl:mb-0 ${cambay.className}`}
          >
            I use a sophisticated set of design and development tools to bring
            each vision to life, balancing aesthetics and functionality.
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1">
          <StacksCard
            projectCount={127}
            iconSource={"logos:figma"}
            description={
              "My experience at Figma is reflected in a diverse collection of projects, each of which embodies our commitment to innovation, user experience and design excellence."
            }
            containerBg={"bg-[#252525]"}
            countColor={"white"}
            projectTextColor={"text-[#707070]"}
            descriptionColor={"white"}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <StacksCard
            projectCount={37}
            iconSource={"gg:framer"}
            description={
              "My work at Framer demonstrates a deep understanding of motion and interaction design, resulting in designs that are as intuitive as they are beautiful."
            }
            containerBg={"bg-[#0081FF]"}
            countColor={"text-white"}
            projectTextColor={"text-[#CCE6FF]"}
            descriptionColor={"text-white"}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <StacksCard
            projectCount={14}
            iconSource={"fa6-brands:webflow"}
            iconColor={"#146EF5"}
            description={
              "Through Webflow, I have developed custom websites that are creative, productive, and easy to use, and that meet a variety of client needs."
            }
            containerBg={"bg-white"}
            countColor={"text-black"}
            projectTextColor={"text-[#9E9E9E]"}
            descriptionColor={"text-[#707070]"}
          />
        </div>
      </div>
    </div>
  );
};
