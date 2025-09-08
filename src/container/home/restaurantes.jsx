const Restaurantes = () => {

    const restaurantes = [
        {
            nome: "Restaurante A",
            imagem: "/pousada.jpg",
            distancia: "500m"
        },
        {
            nome: "Restaurante A",
            imagem: "/pousada.jpg",
            distancia: "500m"
        },
        {
            nome: "Restaurante A",
            imagem: "/pousada.jpg",
            distancia: "500m"
        },
        {
            nome: "Restaurante A",
            imagem: "/pousada.jpg",
            distancia: "500m"
        },
    ]

    return (
        <section className="mt-[80px]">
            <h4 className="text-center mb-[200px] text-[30px] font-bold text-[#032916]">Restaurantes Próximos</h4>
            <div className="w-full  h-[300px] bg-[url('/cidade.jpg')] bg-cover bg-center flex justify-center items-center relative">
                <div className="absolute top-0 left-0 bg-[#1a0a013d] h-full w-full z-[1]"></div>

                {restaurantes.map((restaurante, index) => (
                    <div key={index} className="w-[250px] h-[400px] bg-white m-4 p-4 py-10 rounded-md shadow-lg z-10 relative mb-[150px] text-[#fffdfd] flex flex-col items-center justify-between">
                        <h3 className="text-lg font-semibold">{restaurante.nome}</h3>
                        <p className="text-[14px] font-semibold p-2 rounded-full bg-[#06542E]">{restaurante.distancia} de distância</p>
                        <img src={restaurante.imagem} alt={restaurante.nome} className="w-full h-full object-cover rounded-md absolute top-0 left-0 z-[-2]" />
                        <div className="absolute top-0 left-0 bg-[#1a0a0173] rounded-md h-full w-full z-[-1]"></div>

                    </div>
                ))}

            </div>
        </section>
    )
}

export default Restaurantes;