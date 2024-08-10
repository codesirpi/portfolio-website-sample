"use client";
import React from "react";
import Image from "next/image";
import heroImage from "../../../public/images/heroimage.png";
import { NavBarSection } from "./component/navbar";
import { cambay, coustard, leckerliOne, montserrat } from "../../layout";
const HeroSection = () => {
  return (
    <div
      id="#home-target"
      className="relative bg-cover bg-center bg-no-repeat h-screen bg-hero-image w-full"
    >
      <div className="absolute w-full top-0">
        <NavBarSection />
      </div>
      <div className=" container mx-auto absolute w-full top-12 flex p-20 m-8 ">
        <div className="flex-1  mt-8 ">
          <div className="flex flex-col text-white gap-6 ">
            <span className="text-lg  md:text-[24px] font-leckerli font-bold">
              Hi there!
            </span>
            <span className="text-4xl  font-bold">
              I'm{" "}
              <span className="text-[#0081FF] text-lg md:text-[40px] font-extrabold">
                Daniel Ray
              </span>
            </span>
            <span className="text-lg md:text-3xl">Graphic Designer</span>
            <p className=" text-sm w-[250px] md:w-[350px]  lg:w-[650px] md:text-[14px] lg:text-[18px]">
              Welcome to a world where graphic and web design converge to create
              captivating digital experiences. Here, your vision comes to life
              with unrivaled creativity.
            </p>
            <div className=" rounded-3xl shadow-md  bg-[#303030] text-[10px] md:text-sm lg:text-lg   px-4 w-40 py-2 text-center">
              {" "}
              ABOUT ME
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default HeroSection;
