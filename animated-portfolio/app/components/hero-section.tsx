"use client";
import React from "react";
import Image from "next/image";
import heroImage from "../images/heroimage.png";
import { NavBarSection } from "./navbar-section";
const HeroSection = () => {
  return (
    <div
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat h-screen"
    >
      <Image src={heroImage} alt="Hero Section Image" />
      <div className="absolute w-full top-0">
        <NavBarSection />
      </div>
      <div className="absolute w-full top-12 flex p-8 m-8">
        <div className="flex-1">
          <div className="flex flex-col text-white">
            <span>Hi there!</span>
            <span>
              I'm{" "}
              <span className="text-[#0081FF] text-4xl font-bold">
                Daniel Ray
              </span>
            </span>
            <span>Graphic Designer</span>
            <p>
              Welcome to a world where graphic and web design converge to create
              captivating digital experiences. Here, your vision comes to life
              with unrivaled creativity.
            </p>
            <div className="rounde-lg shadow-md w-24"> ABOUT ME</div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default HeroSection;
