import { cambay, leckerliOne, montserratBold } from "@/app/layout";
import React from "react";

const AboutInfo = () => {
  return (
    <div className=" w-full max-w-[722px] xl:max-w-[1440px] bg-[#0081FF] flex justify-between box-border px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px]">
      <div>
        <div>
          <div className={`mb-[32px] text-[28px] ${leckerliOne.className}`}>
            About me...
          </div>
          <div className="flex flex-col gap-x-[120px] xl:flex-row">
            <div
              className={`text-[32px] leading-10 font-bold mb-11 ${montserratBold.className}  md:text-[48px] md:leading-[60px] xl:text-[52px] xl:max-w-[526px]`}
            >
              Visionary design for the web shaping the future of online
              experiences
            </div>
            <div className={`text-[20px] ${cambay.className}`}>
              <div className="mb-6 xl:max-w-[770px]">
                I`ve always been fascinated by the intersection of technology
                and art. From a young age, I was drawn to the infinite
                possibilities of digital canvases. My journey into graphic and
                web design began with a simple desire to bring beauty into the
                digital realm. I strive to push the boundaries with each
                project, blending aesthetics with functionality to create
                seamless user experiences.
              </div>
              <div>
                My work is more than just design; it`s about building
                connections, evoking emotions, and making the digital world more
                visually engaging.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
