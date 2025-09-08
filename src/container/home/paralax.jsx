"use client";

import React from "react";
import Slider from "react-slick";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  arrows: false,
};

const words = ["Paz e Tranquilidade", "Refúgio na natureza", "Amanhecer dourado"];

const Paralax = () => {
  return (
    <ParallaxProvider>
      <div className="relative w-full h-[300px] overflow-hidden">
        {/* Slider */}
        <Slider {...settings} className="w-full h-full z-10">
            {words.map((word, index) => (
              <div key={index} className="!flex justify-center items-center h-[300px] text-white text-4xl font-bold">
                <i className="font-[400]">"{word}"</i>
              </div>
            ))}
        </Slider>

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

export default Paralax;
