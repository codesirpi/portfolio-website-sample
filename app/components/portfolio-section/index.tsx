import Image, { StaticImageData } from "next/image";
import React from "react";
import { cambay, coustard, leckerliOne, montserrat } from "../../layout";
import { ProjectContainer } from "./project-container";
import { ImageDetailCard } from './image-detail-card';

import image1 from "../../assets/portfolio-section/svg1.png";
import image2 from "../../assets/portfolio-section/svg2.png";
import image3 from "../../assets/portfolio-section/svg3.png";
import image4 from "../../assets/portfolio-section/svg4.png";
import image5 from "../../assets/portfolio-section/svg5.png";

const projectImages = [
    {
      img: image1,
      title: "Web Design",
      description: "Elegant Web Design",
    },
  
    {
      img: image2,
      title: "Web Design",
      description: "Elegant Web Design",
    },
    {
      img: image3,
      title: "Web Design",
      description: "Elegant Web Design",
    },
    {
      img: image4,
      title: "Web Design",
      description: "Elegant Web Design",
    },
    {
      img: image5,
      title: "Web Design",
      description: "Elegant Web Design",
    },
    {
      img: image1,
      title: "Web Design",
      description: "Elegant Web Design",
    },
  
    {
      img: image4,
      title: "Web Design",
      description: "Elegant Web Design",
    },
    {
      img: image1,
      title: "Web Design",
      description: "Elegant Web Design",
    },
  ];
  
  export const PortFolioSection = () => {
    return (
      <div className="flex flex-col w-full">
        <ProjectContainer />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projectImages.map(({ img, title, description }) => (
            <ImageDetailCard key={title} {...{ img, title, description }} />
          ))}
        </div>
      </div>
    );
  };