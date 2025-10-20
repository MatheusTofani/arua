import Container from "@/components/container";

const Sections = () => {
    const card = [
        {
            title: "Acomodações",
            image: "/suite.jpg",
            border: "border-[6px_3px_6px_6px]",
            href: "/acomodacoes",
        },
        {
            title: "Café da Manhã",
            image: "/cafe.jpg",
            border: "border-[6px_3px_6px_3px]",
            href: "/cafe",
        },
        {
            title: "Passeios",
            image: "/passeio.jpg",
            border: "border-[6px_6px_6px_3px]",
            href: "/passeios",
        },
    ];

    return (
        <section className="bg-[url('/pousada.jpg')] w-full min-h-[500px] bg-cover bg-center bg-no-repeat relative z-[0] mb-[320px]">
            <div className="absolute bg-[#25100296] h-full w-full z-[-1]" aria-hidden="true"></div>

            <Container className="text-[#fffdfd] h-full flex flex-col items-center w-full">
                {/* Título */}
                <div className="text-center my-[80px] px-4">
                    <h3 className="mb-4 font-bold text-3xl md:text-[40px]">Experiências</h3>
                    <p className="text-lg md:text-[24px]">
                        Criamos a atmosfera perfeita para atender suas necessidades
                    </p>
                </div>

                {/* Cards */}
                <ul className="flex flex-col md:flex-row gap-6 md:gap-0 md:mb-[-300px] pb-5">
                    {card.map((item, index) => (
                        <li
                            key={index}
                            className={` cursor-pointer group w-[280px] md:w-[300px] h-[380px] md:h-[400px] relative ${item.border} border-[#fffdfd] z-0 flex justify-center items-center overflow-hidden`}
                        >
                            <a
                                href={item.href}
                                aria-label={`Ir para a página de ${item.title}`}
                                className="w-full h-full flex justify-center items-center relative"
                            >
                                <p className="font-medium text-xl md:text-[25px] text-white z-10 text-center">
                                    {item.title}
                                </p>
                                <img
                                    src={item.image}
                                    alt={`${item.title} na pousada Aruá`}
                                    className="w-full h-full object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute top-0 left-0 bg-[#25100296] h-full w-full z-5 transition-opacity duration-500" />
                            </a>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Sections;
