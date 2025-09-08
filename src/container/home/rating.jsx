import Container from "@/components/container";
import Image from "next/image";

const Rating = () => {

    const card = [
        {
            name: 'Matheus',
            country: 'Brasil',
            image: '/pousada.jpg',
            rating: 10,
            mensage: 'Great experience!'
        },
        {
            name: 'Matheus',
            country: 'Brasil',
            image: '/pousada.jpg',
            rating: 10,
            mensage: 'Great experience!'
        }, {
            name: 'Matheus',
            country: 'Brasil',
            image: '/pousada.jpg',
            rating: 10,
            mensage: 'Great experience!'
        },
    ]

    return (
        <section className="bg-[#06542E] w-full py-[80px]">
            <Container>
                <ul className="flex justify-between">
                    {
                        card.map((item, index) => (
                            <li key={index} className="text-[#fffdfd]">
                                <div className="flex justify-center items-end gap-4 text-[24px]">
                                    <p className="font-semibold">{item.name}</p>
                                    |
                                    <p className="font-light">{item.country}</p>
                                </div>

                                <p className="italic text-center text-[20px]">
                                    "{item.mensage}""
                                </p>

                                <div className="text-center text-[24px]">
                                    <p className="font-[400]"> ★ <span className="font-bold">{item.rating}</span>/10</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    )
}

export default Rating;