import React from "react";

import { cambay, leckerliOne, montserrat } from "../layout";
import { Icon } from "@iconify/react";

export const ContactSection = () => {
  const SocialMedia = [
    {
      id: 1,

      imageSource: "mingcute:facebook-fill",
      url: "https://www.facebook.com/",
    },
    {
      id: 2,
      imageSource: "mingcute:twitter-fill",
      url: "https://x.com/",
    },
    {
      id: 3,
      imageSource: "mingcute:linkedin-fill",
      url: "https://in.linkedin.com/",
    },
    {
      id: 4,
      imageSource: "ri:instagram-fill",
      url: "https://www.instagram.com/",
    },
    {
      id: 5,
      imageSource: "mingcute:dribbble-fill",
      url: "https://dribbble.com/",
    },
    {
      id: 6,
      imageSource: "mage:behance",
      url: "https://dribbble.com/",
    },
    {
      id: 7,
      imageSource: "ant-design:youtube-filled",
      url: "https://www.youtube.com/",
    },
    {
      id: 7,
      imageSource: "mdi:pinterest",
      url: "https://www.pinterest.com/",
    },
  ];

  return (
    <div
      className={`bg-contact-background w-full h-full bg-no-repeat lg:px-[240px] lg:py-[100px] text-white flex lg:justify-between lg:flex-row flex-col bg-cover py-20 px-5 ${cambay.className}`}
    >
      <div className="text-white flex flex-col lg:gap-10 gap-5">
        <div className={`lg:text-[28px] text-lg ${leckerliOne.className}`}>
          Contacts...
        </div>
        <div
          className={`lg:text-[52px] md:text-4xl lg:text-[44px] text-2xl ${montserrat.className}`}
        >
          Contact Information
        </div>
        <div className="text-xl">
          <div className="text-[#707070] pb-1">You can find me here:</div>
          <div>795 South Park Avenue, Melbourne, Australia</div>
        </div>
        <div className="flex gap-3 items-end ">
          <span className="text-xl text-[#707070]">My time</span>
          <span className={`${montserrat.className} text-[32px] font-semibold`}>
            6:54 PM
          </span>
        </div>
        <div className="text-xl text-[#0081FF]">codesirpi@gmail.com</div>
        <div className="flex gap-[24px] flex-wrap">
          {SocialMedia.map((dt) => {
            return (
              <a key={dt.id} href={dt.url} target="blank">
                <Icon
                  icon={dt.imageSource}
                  width={24}
                  height={24}
                  color="#707070"
                  className="hover:text-[yellow]"
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-7 mt-16">
        <div
          className={`lg:text-[52px] font-extrabold md:text-4xl text-2xl lg:text-[44px] ${montserrat.className}`}
        >
          Get In Touch
        </div>
        <div className="text-[#707070] text-xl">
          You can contact with me using this form.
        </div>
        <div className="flex gap-10">
          <input
            className="text-[#5C5C5C] bg-[#303030] rounded-[28px] h-10  w-[50%] px-5"
            placeholder="Your Name"
          />
          <input
            className="text-[#5C5C5C] bg-[#303030] rounded-[28px] h-10 w-[50%] px-5"
            placeholder="Your Email Address"
          />
        </div>
        <textarea
          className="text-[#5C5C5C] bg-[#303030] border-0 rounded-[28px] h-24 w-full p-5"
          placeholder="Type in Your message..."
        />
        <button className="bg-[#0081FF] text-white w-full h-10 rounded-[28px]">
          SEND
        </button>
      </div>
    </div>
  );
};
