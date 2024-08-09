"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React from "react";
import logo from "../../../../public/images/logo.png";
import { motion } from "framer-motion";
export const NavBarSection = () => {
  const links = [
    { label: "intro", href: "/#home-target" },
    { label: "aboutme", href: "/#about" },
    { label: "portfolio", href: "/#portfolio" },
    { label: "clients", href: "/#clients" },
    { label: "stacks", href: "/#stacks" },
    { label: "contacts", href: "/#contacts" },
  ];
  const MotionLink = motion(Link);
  return (
    <div className=" w-full mx-auto h-[88px] text-white flex justify-between items-center  py-4 px-8">
      <div className="text-2xl font-bold flex gap-2">
        {" "}
        <Image src={logo} width={20} height={20} alt="Picture of the author" />
        <span className="text-white">DanRay</span>
      </div>
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          <Icon
            icon="icon-park:hamburger-button"
            width="24px"
            height="24px"
            // style={{ color: "white" }}
          />
        </button>
      </div>
      <ul className="md:flex space-x-6  hidden">
        {links.map((link) => {
          return (
            <motion.li key={link.href}>
              <MotionLink
                key={link.href}
                href={link.href}
                style={{ textDecoration: "none" }}
                className="cursor-pointer  text-white hover:text-[#0081FF]"
              >
                {" "}
                <motion.span>{link.label} </motion.span>
              </MotionLink>
            </motion.li>
          );
        })}
      </ul>
      <div className=" w-[198px] h-[40px] hidden   border rounded-[18px] md:flex items-center justify-center">
        {" "}
        <button> FREE DOWNLOAD</button>
      </div>
    </div>
  );
};
