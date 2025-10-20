import Container from "@/components/container";

const Map = () => {
    return (
        <Container className={"mt-[80px]"}>
            <div className="flex-col-reverse gap-[20px] md:gap-[0]  md:flex-row w-full p-8 bg-[#032916] rounded-lg flex md:justify-between md:items-center">
                <iframe className=" w-full md:w-[40%] h-[300px] md:h-[400px] rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.555524435194!2d-44.7181421!3d-23.222863499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9d6dffe1919589%3A0x74a71661b1968758!2sPouso%20de%20%C3%8Dcaro%20POUSADA%20EM%20PARATY!5e0!3m2!1spt-BR!2sbr!4v1759332031729!5m2!1spt-BR!2sbr" loading="lazy" ></iframe>
                <div className="text-center flex flex-col gap-[20px] text-[#fffdfd] w-full md:w-[50%]">
                    <h4 className=" text-[30px] font-bold ">
                        Onde estamos
                    </h4>
                    <p>
                        Estamos localizados no coração de Paraty, oferecendo fácil acesso às principais atrações da cidade e proporcionando uma estadia confortável e acolhedora para nossos hóspedes.
                    </p>
                    <address>
                        Rua Dr. Samuel Costa, 123 - Centro, Paraty - RJ, 23970-000
                    </address>
                </div>
            </div>
        </Container>
    );
}

export default Map;