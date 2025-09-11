import acomodacoes from "@/data/acomodacoes";
import Image from "next/image";
import Link from "next/link";

const { default: Container } = require("@/components/container")

const AcomodacoesSection = () => {
    return (
        <div>
            <Container>
                <div className="text-center mt-[80px] flex flex-col gap-2 text-[#032916]">
                    <h2 className="text-[24px]">Reserve a melhor opção para você</h2>
                    <p>Para curtir uma das mais belas praias de Maceió com todo conforto e comodidade que você e os seus familiares merecem.</p>
                </div>

                <div className="grid grid-cols-[repeat(2,_45%)] gap-[5%] mt-[80px]">

                    {acomodacoes.map((item, index) => (
                        <div className="relative" key={index}>
                            <Image className="w-full h-[50%] object-cover" src={item.image.image1} width={500} height={500} alt={item.nome} />
                            <div className="h-[50%] text-center text-[#fffdfd] bg-[#06542E] flex items-center justify-between flex-col p-5">
                                <span className="text-[24px] font-semibold"> {item.nome}</span>
                                <p>
                                    {item.description}
                                </p>

                                <Link href={`/acomodacoes/${item.slug}`}>     <button className="bg-[#FF914D] w-[200px] h-[40px] font-bold">Ver Mais</button></Link>

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