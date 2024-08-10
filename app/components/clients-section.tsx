import React from "react";
import ProfileIcon from "../assets/profile.png";
import Client1 from "../assets/client-1.png";
import Client2 from "../assets/client-2.png";
import Client3 from "../assets/client-3.png";
import Client4 from "../assets/client-4.png";

import Image from "next/image";
import { cambay, coustard, leckerliOne, montserrat } from "../layout";

export const ClientsSection = () => {
  return (
    <div className="bg-client-background w-full h-full text-white items-center flex flex-col gap-10 lg:px-[200px] px-5 bg-cover lg:py-[100px] p-10 md:gap-16">
      <div className={`lg:text-[28px] text-lg ${leckerliOne.className}`}>
        Clients...
      </div>
      <div
        className={`lg:text-[52px] font-extrabold md:text-4xl text-2xl ${montserrat.className}`}
      >
        What Customers Say:
      </div>
      <div className="text-xl flex flex-col gap-2 relative">
        <div
          className={`text-center text-[100px] text-grey-100 absolute left-[50%] top-2 z-1 ${coustard.className}`}
        >
          “{" "}
        </div>
        <div
          className={`text-center text-sm lg:text-[20px] leading-7 z-10 ${coustard.className}`}
        >
          The attention to detail and creativity brought to our web design
          project was outstanding. We&rsquo;ve seen a noticeable increase in
          user engagement and sales. Truly exceptional service.
        </div>
        <div className="flex gap-3 items-center justify-center p-2">
          <Image src={ProfileIcon} alt="profilePic" width={50} />
          <div className="flex flex-col leading-6">
            <span
              className={`text-yellow font-bold text-base ${montserrat.className}`}
            >
              Emma Watson
            </span>
            <span className={`text-grey-300 text-sm ${cambay.className}`}>
              Marketing Leader
            </span>
          </div>
        </div>
      </div>
      <div className=" border-t flex justify-center w-full lg:pt-20 md:pt-10 lg:gap-20 md:gap-10 flex-wrap items-center pt-10 gap-10">
        <Image
          src={Client1}
          alt="Client-1"
          className="max-w-[120px] max-h-[120px]"
        />
        <Image
          src={Client2}
          alt="Client-2"
          className="max-w-[120px] max-h-[120px]"
        />
        <Image
          src={Client3}
          alt="Client-3"
          className="max-w-[120px] max-h-[120px]"
        />
        <Image
          src={Client4}
          alt="Client-4"
          className="max-w-[120px] max-h-[120px]"
        />
      </div>
    </div>
  );
};
