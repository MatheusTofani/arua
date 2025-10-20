"use client";

import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ title, image }) => {
    return (
        <ParallaxProvider>
            <div className="relative w-full h-[300px] overflow-hidden mt-[80px]">
                <h1 className="!flex justify-center items-center h-[300px] text-white text-4xl font-bold w-full absolute z-10" >
                    {title}
                </h1>



                {/* Overlay */}
                <div className="absolute top-0 left-0 bg-[#25100296] h-full w-full z-[1]"></div>

                {/* Parallax Background */}
                <Parallax speed={-100} className="absolute top-0 left-0 z-0">
                    <img
                        src={image}
                        alt={`Imagem de ${title}`}
                        className="w-full h-full object-cover object-center"
                    />
                </Parallax>
            </div>
        </ParallaxProvider>
    );
};

export default Banner;
