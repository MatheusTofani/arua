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
        <div>
            <Container className="flex mt-[80px] h-[calc(100vh-80px)] items-center">
                <div className="flex w-full justify-between">
                    <div>
                        {/* Imagem principal */}
                        <Image
                            className="h-[500px] w-[600px] object-cover rounded-lg"
                            src={activeImage}
                            height={1000}
                            width={1000}
                            alt={acomodacao.nome}
                        />

                        {/* Miniaturas */}
                        <div className="flex gap-4 mt-4">
                            {images.map((item, index) => (
                                <Image
                                    key={index}
                                    src={item}
                                    alt={`${acomodacao.nome} ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className={`cursor-pointer rounded-md object-cover border-3 ${activeImage === item ? "border-[#FF914D]" : "border-transparent"}`}
                                    onClick={() => setActiveImage(item)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-[600px] text-[#032916] gap-[20px] flex flex-col">
                        <h1 className="text-[28px] font-bold">{acomodacao.nome}</h1>



                        <p className="text-[18px]">
                            {acomodacao.description}
                        </p>

                        <ul className="bg-[#032916] w-[200px] text-[20px] justify-center rounded-full flex gap-5 p-3 text-[#fffdfd]">
                            {skill.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link href={``}>   <button className="text-[#fffdfd] bg-[#FF914D] w-[200px] h-[40px] font-bold">Reservar Agora</button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AcomodacaoDetalheView;
