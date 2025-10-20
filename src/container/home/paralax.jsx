"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const words = ["Paz e Tranquilidade", "Refúgio na natureza", "Amanhecer dourado"];

const Paralax = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <ParallaxProvider>
      <div className="relative w-full h-[300px]   overflow-hidden">
        {/* Overlay */}
        <div className="absolute top-0 left-0 bg-[#25100296] h-full w-full z-[1]" />

        {/* Parallax Background */}
        <Parallax speed={isMobile ? -10 : -100} className="absolute top-0 left-0 z-0">
          <img
            src="/pousada.jpg"
            alt="pousada"
            className="w-full h-full md:object-cover object-center"
          />
        </Parallax>

        {/* Slider */}
        <div className="relative z-10 w-full h-full">
          <Slider {...settings} className="w-full h-full">
            {words.map((word, index) => (
              <div
                key={index}
                className="!flex justify-center items-center h-[300px] text-white text-2xl md:text-4xl font-bold"
              >
                <i className="font-[400]">"{word}"</i>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Paralax;
