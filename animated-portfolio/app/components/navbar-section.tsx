"use client";
import { Link } from "react-scroll";
import Image from "next/image";
import React from "react";
import logo from "../images/logo.png";
import { motion } from "framer-motion";
export const NavBarSection = () => {
  return (
    <div className=" w-full mx-auto h-[88px] text-white flex justify-between items-center py-4 px-8">
      <div className="text-2xl font-bold flex gap-2">
        {" "}
        <Image src={logo} width={20} height={20} alt="Picture of the author" />
        <span className="text-white">DanRay</span>
      </div>

      <div className="space-x-6 ">
        <Link
          to="hero"
          smooth={true}
          className="cursor-pointer  text-white hover:text-[#0081FF]"
        >
          intro
        </Link>
        <Link
          to="aboutme"
          smooth={true}
          className="cursor-pointer text-white hover:text-[#0081FF]"
        >
          About me
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          className="cursor-pointer text-white hover:text-[#0081FF]"
        >
          portfolio
        </Link>
        <Link
          to="clients"
          smooth={true}
          className="cursor-pointer text-white hover:text-[#0081FF]"
        >
          clients
        </Link>
        <Link
          to="stacks"
          smooth={true}
          className="cursor-pointer text-white hover:text-[#0081FF]"
        >
          stacks
        </Link>
        <Link
          to="contacts"
          smooth={true}
          className="cursor-pointer text-white hover:text-[#0081FF]"
        >
          contacts
        </Link>
      </div>
      <div className="w-[198px] h-[40px]   border rounded-[18px] flex items-center justify-center">
        {" "}
        <button> FREE DOWNLOAD</button>
      </div>
    </div>
  );
};
