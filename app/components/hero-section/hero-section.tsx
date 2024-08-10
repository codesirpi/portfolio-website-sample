'use client';
import React from 'react';
import { NavBarSection } from './navbar';
const HeroSection = () => {
  return (
    <div
      id="#home-target"
      className="relative bg-cover bg-center bg-no-repeat h-screen bg-hero-image w-full"
    >
      <div className=" w-full fixed top-0">
        <NavBarSection />
      </div>
      <div className=" container mx-auto absolute w-full top-12 flex p-20 m-8 ">
        <div className="flex-1  mt-8 ">
          <div className="flex flex-col text-white md:gap-10 ">
            <span className={'text-lg  md:text-[28px] font-leckerli'}>
              Hi there!
            </span>
            <span className="text-lg md:text-[60px] font-extrabold">
              I'm{' '}
              <span className="text-primary text-lg md:text-[60px] font-extrabold">
                Daniel Ray
              </span>
            </span>
            <span className="text-lg md:text-[40px]">Graphic Designer</span>
            <p className=" text-sm w-[250px] md:w-[350px]  lg:w-[650px] md:text-[14px] lg:text-[18px]">
              Welcome to a world where graphic and web design converge to create
              captivating digital experiences. Here, your vision comes to life
              with unrivaled creativity.
            </p>
            <div className=" rounded-3xl shadow-md  bg-grey-500 text-[10px] md:text-sm lg:text-lg   px-4 w-40 py-2 text-center">
              {' '}
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
