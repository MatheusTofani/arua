import Container from "@/components/container";

const Sections = () => {

    const card = [
        {
            title: "Suites",
            image: "/suite.jpg",
            border: "border-[6px_3px_6px_6px]"
        },
        {
            title: "Cafe da Manha",
            image: "/cafe.jpg",
            border: "border-[6px_3px_6px_3px]"
        },
        {
            title: "Passeios",
            image: "/passeio.jpg",
            border: "border-[6px_6px_6px_3px]"
        },
    ]


    return (
        <section className="bg-[url('/pousada.jpg')] w-full h-[500px] bg-cover bg-center bg-no-repeat relative z-[0] mb-[240px]">
            <div className="absolute  bg-[#da54013f] h-full w-full z-[-1]"></div>
            <Container className={" text-[#fffdfd] h-full flex flex-col items-center w-full"}>

                <div className="text-center my-[80px]">
                    <h3 className="mb-4  font-bold text-[40px]">Experiencias</h3>
                    <p className="text-[24px]">Criamos atmosfera perfeta para atender suas necessiidades</p>
                </div>


                <ul className="mb-[-300px] flex">
                    {
                        card.map((item, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer group w-[300px] h-[400px] relative ${item.border} border-[#fffdfd] z-0 flex justify-center items-center overflow-hidden `}
                            >
                                <p className="font-medium text-[25px] text-white z-10">{item.title}</p>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover absolute top-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute top-0 left-0 bg-[#61260188] h-full w-full z-5 transition-opacity duration-500 "></div>
                            </li>
                        ))
                    }
                </ul>
            </Container>

        </section>
    );
}
export default Sections;