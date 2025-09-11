"use client";

import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    return (
        <ParallaxProvider>
            <div className="relative w-full h-[300px] overflow-hidden mt-[80px]">
                <div className="!flex justify-center items-center h-[300px] text-white text-4xl font-bold w-full absolute z-10" >
                    Acomodações
                </div>



                {/* Overlay */}
                <div className="absolute top-0 left-0 bg-[#25100296] h-full w-full z-[1]"></div>

                {/* Parallax Background */}
                <Parallax speed={-100} className="absolute top-0 left-0 z-0">
                    <Image
                        src="/pousada.jpg"
                        alt="pousada"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover object-center"
                    />
                </Parallax>
            </div>
        </ParallaxProvider>
    );
};

export default Banner;
