"use client";

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AcomodacaoDetalheView = ({ acomodacao }) => {
    const images = Object.values(acomodacao.image);
    const skill = Object.values(acomodacao.skills);
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <section
            className="mt-[80px] min-h-[calc(100vh-80px)] flex items-center py-10 md:py-0"
            aria-labelledby="acomodacao-title"
        >
            <Container>
                <article
                    className="flex flex-col lg:flex-row w-full justify-between gap-10"
                    itemScope
                    itemType="https://schema.org/HotelRoom"
                >
                    {/* Galeria */}
                    <div className="flex flex-col items-center lg:items-start">
                        {/* Imagem principal */}
                        <Image
                            className="h-[300px] w-full lg:h-[500px] lg:w-[600px] object-cover rounded-lg"
                            src={activeImage}
                            height={1000}
                            width={1000}
                            alt={`Foto da acomodação ${acomodacao.nome}`}
                            priority
                            itemProp="photo"
                        />

                        {/* Miniaturas */}
                        <div className="flex gap-4 mt-4 flex-wrap justify-center lg:justify-start">
                            {images.map((item, index) => (
                                <Image
                                    key={index}
                                    src={item}
                                    alt={`Miniatura ${index + 1} da acomodação ${acomodacao.nome}`}
                                    width={100}
                                    height={100}
                                    className={`cursor-pointer rounded-md object-cover border-2 transition ${activeImage === item
                                        ? "border-[#FF914D]"
                                        : "border-transparent"
                                        }`}
                                    onClick={() => setActiveImage(item)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="w-full lg:w-[600px] text-[#032916] gap-[20px] flex flex-col items-center md:items-start">
                        <h1
                            id="acomodacao-title"
                            className="text-[24px] md:text-[28px] font-bold"
                            itemProp="name"
                        >
                            {acomodacao.nome}
                        </h1>

                        <p
                            className="text-[16px] md:text-[18px] leading-relaxed"
                            itemProp="description"
                        >
                            {acomodacao.description}
                        </p>

                        {/* Lista de skills */}
                        <ul className="bg-[#032916] w-fit px-5 text-[16px] md:text-[20px] justify-center rounded-full flex flex-wrap gap-3 p-3 text-[#fffdfd]">
                            {skill.map((item, index) => (
                                <li key={index} itemProp="amenityFeature">
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <Link href={`/reservar/${acomodacao.slug}`} className="w-full" passHref>
                            <button
                                className="rounded-md  text-[#fffdfd] bg-[#FF914D] cursor-pointer w-full h-[40px] font-bold hover:bg-[#FD6122] transition duration-300 rounded-md"
                                aria-label={`Reservar agora a acomodação ${acomodacao.nome}`}
                            >
                                Reservar Agora
                            </button>
                        </Link>
                    </div>
                </article>
            </Container>
        </section>
    );
};

export default AcomodacaoDetalheView;
