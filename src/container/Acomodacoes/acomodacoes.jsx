import acomodacoes from "@/data/acomodacoes";
import Image from "next/image";
import Link from "next/link";

const { default: Container } = require("@/components/container")

const AcomodacoesSection = () => {
    return (
        <div className=" pb-[80px]">
            <Container>
                <div className="md:grid flex flex-col gap-[40px] md:grid-cols-[repeat(2,_45%)] md:gap-[5%]">
                    {acomodacoes.map((item, index) => (
                        <div className="relative" key={index}>
                            <Image className="w-full h-[200px] object-cover" src={item.image.image1} width={500} height={500} alt={item.nome} />
                            <div className="h-auto gap-5 text-center text-[#fffdfd] bg-[#06542E] flex items-center justify-between flex-col p-5">
                                <span className="text-[24px] font-semibold"> {item.nome}</span>
                                <p>
                                    {item.description}
                                </p>
                                <Link href={`/acomodacoes/${item.slug}`}>     <button className="rounded-md cursor-pointer hover:bg-[#FD6122] transition duration-300 bg-[#FF914D] w-[200px] h-[40px] font-bold">Ver Mais</button></Link>
                                <div className="absolute top-[-10] right-[-10] w-[200px] h-[30px] flex items-center justify-center bg-[#FF914D]">
                                    Máximo de {item.number} hóspedes
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AcomodacoesSection;