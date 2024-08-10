"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import blueLogo from "../../assets/logoWhite.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const NavBarSection = () => {
  const [bgColor, setBgColor] = useState("bg-transparent text-white");
  const [logoColor, setLogoColor] = useState("text-white");
  useEffect(() => {
    const handleScroll = () => {
      const currentSection = document.getElementById("about");
      if (currentSection) {
        const sectionTop = currentSection.getBoundingClientRect().top;
        if (sectionTop <= 0) {
          setBgColor("bg-white text-black");
          setLogoColor("text-[#0081FF]");
        } else {
          setBgColor("bg-transparent text-white");
          setLogoColor("text-white");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    { label: "Intro", href: "home-target" },
    { label: "About me", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Clients", href: "clients" },
    { label: "Stacks", href: "stacks" },
    { label: "Contacts", href: "contacts" },
  ];
  // const MotionLink = motion(Link);
  return (
    <div
      className={`w-full  h-screen  md:h-[80px]  flex  justify-between px-12  items-center  ${bgColor}`}
    >
      <div className="text-2xl font-bold flex gap-2  ">
        {" "}
        {logoColor === "text-white" ? (
          <Image src={logo} width={24} height={28} alt="logo" />
        ) : (
          <Image src={blueLogo} width={24} height={28} alt="logo" />
        )}
        {/* <Image src={logo} width={24} height={28} alt="logo" /> */}
        <span className={`${logoColor}`}>DanRay</span>
      </div>
      <motion.div
        variants={hideNavItemsVariant}
        className="md:hidden flex items-center gap   flex-col bg-white w-full fixed top-0"
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
        <ul className="flex flex-col  space-y-10 items-center   md:hidden absolute">
          {links.map((link) => {
            return (
              <motion.li key={link.href}>
                <Link
                  to={link.href}
                  smooth={true}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  className="cursor-pointer  text-black lg:text-white text-sm md:text-lg font-medium hover:text-primary"
                >
                  {" "}
                  <motion.span>{link.label} </motion.span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      <ul className="md:flex space-x-6 hidden">
        {links.map((link) => {
          return (
            <motion.li key={link.href}>
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                style={{ textDecoration: "none" }}
                className="cursor-pointer text-sm md:text-lg font-medium  hover:text-primary"
              >
                {" "}
                <motion.span>{link.label} </motion.span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
