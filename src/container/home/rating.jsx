"use client";

import Container from "@/components/container";
import Slider from "react-slick";

const Rating = () => {
    const card = [
        {
            name: "Matheus",
            country: "Brasil",
            image: "/pousada.jpg",
            rating: 10,
            mensage: "Great experience!",
        },
        {
            name: "Maria",
            country: "Brasil",
            image: "/pousada.jpg",
            rating: 9,
            mensage: "Adorei a pousada, voltarei em breve!",
        },
        {
            name: "João",
            country: "Portugal",
            image: "/pousada.jpg",
            rating: 10,
            mensage: "Atendimento impecável e local incrível!",
        },
    ];

    // Configuração do Slick
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <section className="bg-[#06542E] w-full py-[80px]">
            <Container>
                {/* Desktop - lista normal */}
                <ul className="hidden md:flex justify-between">
                    {card.map((item, index) => (
                        <li key={index} className="text-[#fffdfd] max-w-[300px]">
                            <div className="flex justify-center items-end gap-4 text-[20px]">
                                <p className="font-semibold">{item.name}</p> |{" "}
                                <p className="font-light">{item.country}</p>
                            </div>

                            <p className="italic text-center text-[18px] my-3">
                                "{item.mensage}"
                            </p>

                            <div className="text-center text-[20px]">
                                <p className="font-[400]">
                                    ★ <span className="font-bold">{item.rating}</span>/10
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Mobile - slider */}
                <div className="md:hidden">
                    <Slider {...settings}>
                        {card.map((item, index) => (
                            <div key={index} className="text-[#fffdfd] px-6">
                                <div className="flex justify-center items-end gap-4 text-[20px]">
                                    <p className="font-semibold">{item.name}</p> |{" "}
                                    <p className="font-light">{item.country}</p>
                                </div>

                                <p className="italic text-center text-[18px] my-3">
                                    "{item.mensage}"
                                </p>

                                <div className="text-center text-[20px]">
                                    <p className="font-[400]">
                                        ★ <span className="font-bold">{item.rating}</span>/10
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    );
};

export default Rating;
