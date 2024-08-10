import React from "react";
import { cambay, montserrat } from "../layout";
import { Icon } from "@iconify/react";

export const StacksCard: React.FC<{
  projectCount: number;
  iconSource: string;
  description: string;
  containerBg: string;
  countColor: string;
  projectTextColor: string;
  descriptionColor: string;
  iconColor?: string;
}> = ({
  projectCount,
  iconSource,
  description,
  containerBg,
  countColor,
  projectTextColor,
  descriptionColor,
  iconColor,
}) => {
  return (
    <div
      className={`${containerBg} text-white flex flex-col ${
        containerBg === "bg-[#252525]" ? "py-[44px] px-[17px] md:p-[125px] xl:py-[120px] xl:px-[92px]" : "py-[44px] px-[17px] md:p-[44px] xl:p-[92px]"
      } w-full`}
    >
      <Icon
        icon={iconSource}
        width={64}
        height={64}
        color={iconColor ? iconColor : ""}
        className="mb-10"
      />
      <div
        className={`text-[60px] font-extrabold text-4xl mb-4  ${countColor} ${montserrat.className}`}
      >
        {projectCount}{" "}
        <span
          className={`tracking-[-1px] text-[24px] font-normal w-full ${projectTextColor} ${cambay.className}`}
        >
          projects completed
        </span>
      </div>
      <div className={`${descriptionColor} text-lg`}>{description}</div>
    </div>
  );
};
