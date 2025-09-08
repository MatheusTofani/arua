import Container from "@/components/container";

const AboutUs = () => {
    return (
        <section>
            <Container className={"flex justify-between items-center mb-[80px]"}>
                <div className="flex gap-3">
                    <div className="grid grid-cols-[repeat(2,150px)] gap-1">
                        <div className="w-full h-[150px] rounded-[0px_100%_0px_0px] bg-[#FF914D]"></div>
                        <div className="w-full h-[150px]  bg-[#032916]"> <img src="/pousada.jpg" className="h-full w-full object-cover rounded-full" alt="" /> </div>
                        <div className="w-full h-[150px] rounded-[0px_0px_0px_100%] bg-[#06542E]"></div>
                        <div className="w-full h-[150px]  bg-[#464646]"> <img src="/cafe.jpg" className="h-full w-full object-cover rounded-full" alt="" /> </div>
                        <div className="w-full h-[150px] rounded-[100%_0px_0_100%] bg-[#FF914D]"></div>
                        <div className="w-full h-[150px]  bg-[#06542E] "> <img src="/passeio.jpg" className="h-full w-full object-cover rounded-full" alt="" /> </div>
                    </div>

                    <div className="flex flex-col-reverse gap-4">
                        <div className="rounded-full w-[50px] h-[50px] bg-[#FF914D]"></div>
                        <div className="rounded-full w-[50px] h-[50px] bg-[#032916]"></div>
                        <div className="rounded-full w-[50px] h-[50px] bg-[#06542E]"></div>
                        <div className="rounded-full w-[50px] h-[50px] bg-[#464646]"></div>
                    </div>
                </div>

                <article className="w-[50%]">
                    <h2 className="font-bold text-[30px] text-center">Sobre a pousada</h2>
                    <p className="text-[20px] mb-4">
                        Localizada em um dos destinos mais encantadores do litoral brasileiro, nossa pousada é o refúgio perfeito para quem busca descanso, conforto e momentos inesquecíveis.
                        Entre ruas de pedra, casarões coloniais e paisagens deslumbrantes, oferecemos uma experiência única, onde a tranquilidade se encontra com a beleza natural de Paraty.
                    </p>

                    <p className="text-[20px] ">
                        Cada detalhe foi pensado para que você se sinta em casa: acomodações aconchegantes, café da manhã especial e um atendimento personalizado que valoriza cada hóspede.
                        Seja para uma escapada romântica, dias de lazer em família ou aventuras pela cidade histórica, aqui você encontra o equilíbrio perfeito entre charme, conforto e hospitalidade.
                    </p>
                </article>
            </Container>
        </section>  
    );
};
export default AboutUs;