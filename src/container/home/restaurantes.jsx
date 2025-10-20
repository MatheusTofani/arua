"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Restaurantes = () => {
  const restaurantes = [
    { nome: "Restaurante A", imagem: "/pousada.jpg", distancia: "500m" },
    { nome: "Restaurante B", imagem: "/pousada.jpg", distancia: "500m" },
    { nome: "Restaurante C", imagem: "/pousada.jpg", distancia: "500m" },
    { nome: "Restaurante D", imagem: "/pousada.jpg", distancia: "500m" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
  };

  return (
    <section className="mt-[80px]">
      <h5 className="text-center mb-[60px] md:mb-[200px] text-[30px] font-bold text-[#032916]">
        Restaurantes Próximos
      </h5>

      <div className="w-full bg-[url('/cidade.jpg')] bg-cover bg-center flex justify-center items-center relative py-10 md:h-[300px]">
        {/* Overlay apenas no desktop */}
        <div className="hidden md:block absolute top-0 left-0 bg-[#1a0a013d] h-full w-full z-[1]"></div>

        {/* Desktop */}
        <div className="hidden md:flex justify-center items-center flex-wrap w-full">
          {restaurantes.map((restaurante, index) => (
            <div
              key={index}
              className="cursor-pointer hover:-translate-y-5 transition duration-300 w-[250px] h-[400px] bg-white m-4 p-4 py-10 rounded-md shadow-lg z-10 relative mb-[150px] text-[#fffdfd] flex flex-col items-center justify-between"
            >
              <h3 className="text-lg font-semibold">{restaurante.nome}</h3>
              <p className="text-[14px] font-semibold p-2 rounded-full bg-[#FF914D]">
                {restaurante.distancia} de distância
              </p>
              <img
                src={restaurante.imagem}
                alt={restaurante.nome}
                className="w-full h-full object-cover rounded-md absolute top-0 left-0 z-[-2]"
              />
              <div className="absolute top-0 left-0 bg-[#1a0a0173] rounded-md h-full w-full z-[-1]"></div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden w-full relative z-10">
          <Slider {...settings}>
            {restaurantes.map((restaurante, index) => (
              <div key={index} className="px-2">
                <div className="cursor-pointer w-[90vw] max-w-xs bg-white rounded-md shadow-lg relative overflow-hidden mx-auto">
                  {/* Imagem com proporção */}
                  <div className="relative w-full aspect-[4/3]">
                    <img
                      src={restaurante.imagem}
                      alt={restaurante.nome}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay suave */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#1a0a0173] to-transparent"></div>
                    {/* Conteúdo sobre a imagem */}
                    <div className="absolute bottom-4 left-0 w-full px-4 text-center text-white">
                      <h3 className="text-lg font-semibold drop-shadow-md">{restaurante.nome}</h3>
                      <p className="text-[14px] font-semibold p-2 rounded-full bg-[#FF914D] inline-block mt-2">
                        {restaurante.distancia} de distância
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Restaurantes;
