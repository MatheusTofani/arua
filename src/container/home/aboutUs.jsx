import Container from "@/components/container";

const AboutUs = () => {
  return (
    <section>
      <Container className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 my-20 md:my-[160px]">
        {/* Lado esquerdo (imagens) */}
        <div className="flex gap-3">
          {/* Grade principal */}
          <div className="grid grid-cols-[repeat(2,120px)] md:grid-cols-[repeat(2,150px)] gap-1">
            <div className="w-full h-[120px] md:h-[150px] rounded-[0px_100%_0px_0px] bg-[#FF914D]" />
            <div className="w-full h-[120px] md:h-[150px] bg-[#032916]">
              <img
                src="/pousada.jpg"
                className="h-full w-full object-cover rounded-full"
                alt="Vista da pousada"
              />
            </div>
            <div className="w-full h-[120px] md:h-[150px] rounded-[0px_0px_0px_100%] bg-[#06542E]" />
            <div className="w-full h-[120px] md:h-[150px] bg-[#464646]">
              <img
                src="/cafe.jpg"
                className="h-full w-full object-cover rounded-full"
                alt="Café da manhã servido na pousada"
              />
            </div>
            <div className="w-full h-[120px] md:h-[150px] rounded-[100%_0px_0_100%] bg-[#FF914D]" />
            <div className="w-full h-[120px] md:h-[150px] bg-[#06542E]">
              <img
                src="/passeio.jpg"
                className="h-full w-full object-cover rounded-full"
                alt="Passeio turístico oferecido"
              />
            </div>
          </div>

          {/* Bolinhas coloridas */}
          <div className="flex flex-col-reverse gap-3 md:gap-4">
            <div className="rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#FF914D]" />
            <div className="rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#032916]" />
            <div className="rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#06542E]" />
            <div className="rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#464646]" />
          </div>
        </div>

        {/* Lado direito (texto) */}
        <article className="w-full md:w-1/2 text-[#032916] text-center md:text-left">
          <h2 className="font-bold text-2xl md:text-[30px] mb-5">
            Sobre a pousada
          </h2>
          <p className="text-lg md:text-[20px] mb-4 leading-relaxed">
            Localizada em um dos destinos mais encantadores do litoral brasileiro,
            nossa pousada é o refúgio perfeito para quem busca descanso, conforto e
            momentos inesquecíveis. Entre ruas de pedra, casarões coloniais e
            paisagens deslumbrantes, oferecemos uma experiência única, onde a
            tranquilidade se encontra com a beleza natural de Paraty.
          </p>

        </article>
      </Container>
    </section>
  );
};

export default AboutUs;
