"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import logo from "../../../../public/images/logo.png";
import { motion } from "framer-motion";
export const NavBarSection = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };
  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };
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
    <div className=" w-full mx-auto h-full  md:h-[88px] text-white flex justify-between items-center bg-white md:bg-black   py-4 px-8">
      <div className="text-2xl font-bold flex gap-2">
        {" "}
        <Image src={logo} width={20} height={20} alt="Picture of the author" />
        <span className="text-black lg:text-white">DanRay</span>
      </div>
      <motion.div
        variants={hideNavItemsVariant}
        className="md:hidden flex items-center gap  flex-col"
        onClick={() => setMobileNavOpen(true)}
      >
        <button className="text-white focus:outline-none">
          <Icon
            icon="icon-park:hamburger-button"
            width="24px"
            height="24px"
            // style={{ color: "white" }}
          />
        </button>
        {/* mobile menu */}
        <ul className="flex flex-col  space-y-6 items-center   md:hidden">
          {links.map((link) => {
            return (
              <motion.li key={link.href}>
                <MotionLink
                  key={link.href}
                  href={link.href}
                  style={{ textDecoration: "none" }}
                  className="cursor-pointer  text-black lg:text-white hover:text-[#0081FF]"
                >
                  {" "}
                  <motion.span>{link.label} </motion.span>
                </MotionLink>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      <ul className="md:flex  space-x-6   hidden">
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
