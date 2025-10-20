"use client";

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PasseioDetail = ({ acomodacao }) => {
    const images = Object.values(acomodacao.images);
    const skills = acomodacao.skills ? Object.values(acomodacao.skills) : [];
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div>
            <Container className="flex mt-[80px] min-h-[calc(100vh-80px)] items-center">
                <div className="flex w-full justify-between gap-10 flex-wrap">
                    <div>
                        {/* Imagem principal */}
                        <Image
                            className="h-[500px] w-[600px] object-cover rounded-lg"
                            src={activeImage}
                            height={1000}
                            width={1000}
                            alt={acomodacao.name}
                        />

                        {/* Miniaturas */}
                        <div className="flex gap-4 mt-4 flex-wrap">
                            {images.map((item, index) => (
                                <Image
                                    key={index}
                                    src={item}
                                    alt={`${acomodacao.name} ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className={`cursor-pointer rounded-md object-cover border-4 ${activeImage === item
                                        ? "border-[#FF914D]"
                                        : "border-transparent"
                                        }`}
                                    onClick={() => setActiveImage(item)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-[600px] text-[#032916] gap-[20px] flex flex-col">
                        <h1 className="text-[28px] font-bold">{acomodacao.name}</h1>

                        <p className="text-[18px] whitespace-pre-line">
                            {acomodacao.description}
                        </p>

                        {skills.length > 0 && (
                            <ul className="bg-[#032916] w-[200px] text-[20px] justify-center rounded-full flex gap-5 p-3 text-[#fffdfd]">
                                {skills.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}

                        <Link href={acomodacao.href} target="_blank">
                            <button className="cursor-pointer rounded-md text-[#fffdfd] bg-[#FF914D] w-[200px] h-[40px] font-bold w-full hover:bg-[#FD6122] transition duration-300">
                                Reservar Agora
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PasseioDetail;
