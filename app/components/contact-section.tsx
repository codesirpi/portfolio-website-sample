import React from "react";
import { cambay, leckerliOne, montserrat } from "../layout";
import { Icon } from "@iconify/react";
import { Footer } from "./footer";

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
    <div className="w-full" id="contacts">
      <div
        className={`bg-contact-background w-full h-full lg:px-[50px] lg:py-[100px] text-white flex lg:justify-between lg:flex-row flex-col border-0 py-20 bg-center px-5  bg-cover object-none  ${cambay.className}`}
      >
        <div className="text-white flex flex-col lg:gap-10 gap-5">
          <div
            className={`lg:text-[28px] text-[22px] ${leckerliOne.className}`}
          >
            Contacts...
          </div>
          <div
            className={`lg:text-[52px] text-3xl tracking-tighter ${montserrat.className}`}
          >
            Contact Information
          </div>
          <div className="text-xl">
            <div className="text-[#707070] pb-1">You can find me here:</div>
            <div>795 South Park Avenue, Melbourne, Australia</div>
          </div>
          <div className="flex gap-3 items-end ">
            <span className="text-xl text-[#707070]">My time</span>
            <span
              className={`${montserrat.className} text-[32px] font-semibold`}
            >
              6:54 PM
            </span>
          </div>
          <div className="text-xl text-[#0081FF]">codesirpi@gmail.com</div>
          <div className="flex gap-[24px] flex-wrap">
            {SocialMedia.map((dt) => {
              return (
                <a key={dt.id} href={dt.url} target="blank" className="link">
                  <Icon
                    icon={dt.imageSource}
                    width={24}
                    height={24}
                    className="hover:text-[yellow] text-[#707070]"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-7 mt-16">
          <div
            className={`lg:text-[52px] font-extrabold text-4xl   ${montserrat.className}`}
          >
            Get In Touch
          </div>
          <div className="text-[#707070] text-xl">
            You can contact with me using this form.
          </div>
          <div className="flex gap-10 text-[#5C5C5C] ">
            <input
              className=" placeholder:text-[#5C5C5C] bg-[#303030] rounded-[28px] lg:h-10 h-14 w-[50%] px-5"
              placeholder="Your Name"
            />
            <input
              className="placeholder:text-[#5C5C5C] bg-[#303030] rounded-[28px] lg:h-10 h-14 w-[50%] px-5"
              placeholder="Your Email Address"
            />
          </div>
          <textarea
            className="placeholder:text-[#5C5C5C] bg-[#303030] border-0 rounded-[28px] lg:h-24 h-32 w-full p-5"
            placeholder="Type in Your message..."
          />
          <button className="bg-[#0081FF] font-semibold text-white w-full lg:h-10 h-14 rounded-[28px]">
            SEND
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
