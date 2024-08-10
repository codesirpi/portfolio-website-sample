import { Icon } from "@iconify/react";
import React from "react";

export const Footer = () => {
  return (
    <div className="lg:px-[240px] text-[#707070] absolute w-full gap-8 items-center lg:flex-row py-10 bg-center md:px-5 px-3 bg-[#252525] flex flex-col-reverse justify-between">
      <div className="text-center">
        © 2024 DanRay — Personal Framer Template. Design by{" "}
        <span className="text-[#0081FF]">Ajith Kumar</span>
      </div>
      <div className="flex gap-2 items-center">
        Back to top{" "}
        <Icon
          icon="material-symbols-light:keyboard-arrow-up"
          style={{ color: "#707070" }}
          fontSize={25}
        />
      </div>
    </div>
  );
};
