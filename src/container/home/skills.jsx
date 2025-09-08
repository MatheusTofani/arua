import Container from "@/components/container";
import skill from "@/data/skills";

const Skills = () => {

    // Duplicamos a lista para criar o efeito de loop no mobile
    const duplicatedList = [...skill, ...skill];

    return (
        <div className="">
            {/* Mobile: Slider com animação */}
            <div className="block md:hidden overflow-hidden py-2" role="list" aria-live="polite">
                <div className="flex w-fit animate-slideMobile">
                    {duplicatedList.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 text-[#06542E] font-semibold min-w-[220px] flex-shrink-0 "
                            role="listitem"
                        >
                            <div className="rounded-full p-1 bg-[#06542E] text-[#fffdfd]">
                                {item.icon}
                            </div>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </div>
            </div>

            <Container>
                {/* Desktop: Lista fixa (mantido igual) */}
                <div className="hidden md:block py-2">
                    <ul className="flex justify-around items-center w-full">
                        {skill.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-[#06542E] font-semibold"
                            >
                                <div className="rounded-full p-1 bg-[#06542E] text-[#fffdfd]">
                                    {item.icon}
                                </div>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Skills;
