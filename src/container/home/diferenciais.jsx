import Container from "@/components/container";
import { FaLeaf } from "react-icons/fa";
import { PiSecurityCamera } from "react-icons/pi";
import { PiHeadset } from "react-icons/pi";
const Diferenciais = () => {

    const card = [
        {
            icon: <FaLeaf size={40} color="#fffdfd" />,
            title: "Ambiente Tranquilo",
            description: "Nosso compromisso com o meio ambiente é refletido em nossas práticas sustentáveis, desde a construção até as operações diárias."
        },
        {
            icon: <PiSecurityCamera size={40} color="#fffdfd" />,
            title: "Estacionamento Monitorado",
            description: "Nosso compromisso com o meio ambiente é refletido em nossas práticas sustentáveis, desde a construção até as operações diárias."
        },
        {
            icon: <PiHeadset size={40} color="#fffdfd" />,
            title: "Recepção 24 Horas",
            description: "Nosso compromisso com o meio ambiente é refletido em nossas práticas sustentáveis, desde a construção até as operações diárias."
        },
    ]

    return (
        <section className="bg-[#FF914D] h-[400px]  pt-[40px]" >
            <Container className={"flex justify-around items-center h-full w-full gap-[3%]"}>
                {card.map((item, index) => (
                    <div key={index} className="text-[#fffdfd] flex flex-col items-center justify-center  p-4 w-[30%} h-auto bg-[#06542E] relative">
                        <div className="absolute top-[-5] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[80px] h-[80px] bg-[#06542E] border-2 border-[#fffdfd] flex items-center justify-center"> {item.icon}</div>
                        <div className="pt-8 text-[24px] font-bold">{item.title}</div>
                        <div>
                            <p className="pt-[10px] text-[18px]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
}

export default Diferenciais;