import Container from "@/components/container";

const Hero = () => {
    return (
        <section
            className="relative w-full min-h-screen text-[#fffdfd] flex items-center justify-center px-4 mb-[80px]"
            aria-label="Seção principal com vídeo de fundo e chamada para reserva"
        >
            <Container className="flex flex-col gap-[40px] items-center text-center max-w-3xl">
                <span className="text-xl md:text-2xl">Bem-vindos a</span>
                <img
                    className="w-[220px] md:w-[300px]"
                    src="/logo_branca.png"
                    alt="Logo da Arua - Turismo e Passeios"
                    loading="lazy"
                />
                <h1 className="text-xl md:text-2xl font-semibold leading-snug">
                    Descubra a magia de Aruá: conforto, natureza e experiências inesquecíveis esperam por você.
                </h1>
                <a
                    href="/reserva"
                    aria-label="Fazer uma reserva agora"
                    className="font-bold w-[220px] md:w-[300px] h-[50px] flex items-center justify-center border-2 border-[#fffdfd] text-lg hover:text-[#06542E] hover:bg-[#fffdfd] transition duration-300 rounded-md"
                >
                    Reserve já
                </a>
            </Container>

            {/* Camada escura para contraste */}
            <div
                className="absolute inset-0 bg-black/60 z-[-1]"
                aria-hidden="true"
            />

            {/* Vídeo de fundo */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/hero-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover z-[-2]"
                aria-hidden="true"
            >
                <source src="/Hero.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
        </section>
    );
};

export default Hero;
