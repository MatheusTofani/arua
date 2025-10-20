
import passeio from "@/data/passeios";
import Image from "next/image";
import Link from "next/link";

const { default: Container } = require("@/components/container")

const PasseiosSection = () => {
    return (
        <div className=" pb-[80px]">
            <Container>
                <div className="md:grid flex flex-col gap-[40px] md:grid-cols-[repeat(2,_45%)] md:gap-[5%]">
                    {passeio.map((item, index) => (
                        <div className="relative" key={index}>
                            <Image className="w-full h-[200px] object-cover" src={item.images.image1} width={500} height={500} alt={item.nome} />
                            <div className="h-auto gap-5 text-center text-[#fffdfd] bg-[#06542E] flex items-center justify-between flex-col p-5">
                                <span className="text-[24px] font-semibold"> {item.name}</span>
                                <p>
                                    {item.shortDescription}
                                </p>
                                <Link href={`/passeios/${item.slug}`}>     <button className="cursor-pointer rounded-md hover:bg-[#FD6122] transition duration-300 bg-[#FF914D] w-[200px] h-[40px] font-bold">Ver Mais</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default PasseiosSection;