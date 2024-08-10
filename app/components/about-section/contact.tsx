import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { cambay } from "@/app/layout";

const Contact = () => {
  const SocialMediaData = [
    {
      image: "mingcute:facebook-fill",
      alt: "facebook-icon",
      url: "https://www.facebook.com/",
    },
    {
      image: "mingcute:twitter-fill",
      alt: "twitter-icon",
      url: "https://x.com/",
    },
    {
      image: "mingcute:linkedin-fill",
      alt: "linkedin-icon",
      url: "https://in.linkedin.com/",
    },
    {
      image: "mingcute:dribbble-fill",
      alt: "dribble-icon",
      url: "https://dribbble.com/",
    },
    {
      image: "mage:behance",
      alt: "behance-icon",
      url: "https://behance.net/",
    },
    {
      image: "mdi:pinterest",
      alt: "pinInterest-icon",
      url: "https://www.pinterest.com/",
    },
    {
      image: "ri:instagram-fill",
      alt: "instagram-icon",
      url: "https://www.instagram.com/",
    },
    {
      image: "ant-design:youtube-filled",
      alt: "youtube-icon",
      url: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="w-full max-w-[722px] bg-primary flex box-border px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] xl:max-w-[1440px]">
      <div className="w-full flex flex-col gap-7 justify-between md:flex-row">
        <div className={`text-2xl ${cambay.className}`}>
          If you like my works Follow me:
        </div>
        <div className="flex gap-x-[20px] gap-y-7 flex-wrap  md:w-[255px] md:gap-x-7 md:justify-end xl:w-fit">
          {SocialMediaData.map(({ image, url }, index) => (
            <a key={index} href={url} target="blank">
              <Icon
                icon={image}
                width={24}
                height={24}
                className="hover:text-[yellow]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
