import Container from "@/components/container";

const Hero = () => {
    return (
        <section
            className="relative w-full h-[700px]  text-[#fffdfd] flex items-center px-4 mb-[80px]"
            aria-label="Seção principal com vídeo de fundo e chamada para reserva"
        >
            <Container>
                <p>Bem-vindos ao</p>
                <h1 className="text-[50px]">Logo</h1>
                <p>
                    Descubra a magia de Aruá: conforto, natureza e experiências
                    inesquecíveis esperam por você.
                </p>
                <button className="w-[300px] h-[50px] border-2 border-[#fffdfd] text-[20px] hover:text-[#06542E] hover:bg-[#fffdfd] transition duration-300 cursor-pointer">Reserve já</button>
            </Container>

            {/* Camada escura para contraste */}
            <div
                className="absolute inset-0 bg-[#61260188] z-[-1]"
                aria-hidden="true"
            />
            {/* Vídeo de fundo */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-[-2]"
                aria-hidden="true"
            // loading="lazy" // vídeo autoplay pode ignorar isso, avaliar uso
            >
                <source src="/Hero.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
        </section>
    );
};

export default Hero;
