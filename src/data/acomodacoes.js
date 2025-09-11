import { MdOutlineWifi } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdTv } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";

const acomodacoes = [
    {
        nome: "Suite 1",
        image: {
            image1: "/pousada.jpg",
            image2: "/cidade.jpg",
        },
        skills: {
            skill1: <MdOutlineWifi />,
            skill2: <TbAirConditioning />,
            skill3: <IoMdTv />,
            skill4: <MdOutlinePets />
            
        },
        number: "2",
        description: "Para curtir uma das mais belas praias de Maceió com todo conforto e comodidade que você e os seus familiares merecem.",
        slug: "suite-1",
    },
    {
        nome: "Suite 1",
        image: {
            image1: "/pousada.jpg",
            image2: "/pousada.jpg",
        },
        number: "2",
        description: "Para curtir uma das mais belas praias de Maceió com todo conforto e comodidade que você e os seus familiares merecem. ",
        slug: "suite-1",
    },
    {
        nome: "Suite 1",
        image: {
            image1: "/pousada.jpg",
            image2: "/pousada.jpg",
        },
        number: "2",
        description: " Para curtir uma das mais belas praias de Maceió com todo conforto e comodidade que você e os seus familiares merecem.    ",
        slug: "suite-1",
    },
]

export default acomodacoes;