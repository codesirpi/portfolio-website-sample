import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { cambay, coustard, leckerliOne, montserrat } from "../layout";


import image1 from "../assets/portfolio-section/svg1.png";
import image2 from "../assets/portfolio-section/svg2.png";
import image3 from "../assets/portfolio-section/svg3.png";
import image4 from '../assets/portfolio-section/svg4.png';
import image5 from '../assets/portfolio-section/svg5.png';



export const ProjectContainer  = () => {
    return (
        <div className="flex flex-col bg-white w-full items-center justify-center">
           <div className='flex flex-col w-[50%] h-[374.38px] justify-center'>
                {/* container section */}

                <div className={`flex flex-row text-[#B3B3B3] font-normal text-lg py-2 ${leckerliOne.className}`}>Portfolio...</div>

                <div className='flex flex-col'> 
                    <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-stretch justify-end">
                        {/* Text show*/}
                        <div className="font-extrabold  md:text-[52px]">
                            I Make Beautiful<br/> Things!
                        </div>
                        {/* button */}
                        <div className="flex justify-center text-xs items-end">
                            <button className="h-12 shadow-2xl mb-4 bg-[#0081FF] hover:bg-sky-500 lg:w-60 w-full rounded-3xl px-4 text-[#FFF] font-bold">VIEW ALL PROJECTS</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

const ImageCardInfo = ({img , title, description } : {img : StaticImageData , title: string; description: string;}) => {
    return (
        <div className="relative fit  overflow-hidden group">
            <Image
                src={img}
                alt="Image"
                className="relative w-full h-auto transition-all duration-500 ease-in-out transform group-hover:blur-sm group-hover:scale-125"
            />
            <div className="absolute w-full h-full inset-0 flex items-center justify-center opacity-0 bg-gray-800 bg-opacity-75 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex flex-col justify-end w-full ml-4 text-white h-full py-5">
                    <h5 className={`mx-2 sm:text-sm lg:text-xl md:text-lg  font-normal ${leckerliOne.className} `}>{ title }</h5>
                    <h2 className=" flex justify-start font-extrabold  mx-2 lg:text-4xl sm:text-xl md:text-lg ">{description}</h2>
                </div>
            </div>
        </div>
    );
};

const projectImages = [
    {
      img: image1,
      title: "Web Design",
      description: "Elegant Web Design"
    },

    {
      img: image2,
      title: "Web Design",
      description: "Elegant Web Design"
    },
    {
      img: image3,
      title: "Web Design",
      description: "Elegant Web Design"
    },
    {
      img: image4,
      title: "Web Design",
      description: "Elegant Web Design"
    },
    {
      img: image5,
      title: "Web Design",
      description: "Elegant Web Design"
    },
    {
      img: image1,
      title: "Web Design",
      description: "Elegant Web Design"
    },

    {
      img: image4,
      title: "Web Design",
      description: "Elegant Web Design"
    },
    {
      img: image1,
      title: "Web Design",
      description: "Elegant Web Design"
    },

];

export const PortFolioSection = () => {
    return (
        <div className="flex flex-col w-full">
            <ProjectContainer/>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                {
                    projectImages.map(({img, title, description}) => (
                        <ImageCardInfo {...{ img, title, description }}/>
                    ))
                }
            </div>
        </div>
    )
}