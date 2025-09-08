import Container from "@/components/container";
import { FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";

const Footer = () => {

    const redes = [
        {
            icon: <FaInstagram />,
            href: "",
        },
        {
            icon: <FaWhatsapp />,
            href: "",
        },
        {
            icon: <FaGoogle />,
            href: "",
        },
    ]

    const nav = [
        {
            title: "Inicio",
            href: "",
        },
        {
            title: "A pousada",
            href: "",
        },
        {
            title: "Acomodações",
            href: "",
        },
         {
            title: "Café",
            href: "",
        },
          {
            title: "Contato",
            href: "",
        },
    ]

        const legal = [
        {
            title: "Termos de Serviço",
            href: "",
        },
        {
            title: "Politicas de Privacidade",
            href: "",
        },
    ]

    return (
        <footer className="  mt-[80px]">
            <div className=" bg-[#06542E] h-full py-20">
                <Container className={"flex justify-between text-[#fffdfd]"}>

                    <div className="flex flex-col gap-8 w-[30%]">
                        <h6 className="text-[40px] font-bold ">Logo</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illum, doloribus labore ex inventore autem alias iusto hic officiis odit ea eveniet non tempore ullam velit, consequuntur nemo voluptates molestias?</p>
                        <ul className="flex gap-5 text-[24px]">
                            {redes.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.icon}</a>
                                </li>

                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-[200px]">
                        <div className="text-center flex flex-col gap-5">
                        <p className="text-[20px] font-semibold">Navegações</p>
                           <ul className="flex flex-col gap-3">
                            {nav.map((item, index) => (
                                <li key={index}  className="hover:underline ">
                                    <a href={item.href}>{item.title}</a>
                                </li>

                            ))}
                        </ul>
                        </div>

                         <div className="text-center flex flex-col gap-5">
                        <p className="text-[20px] font-semibold">Legal</p>
                           <ul className="flex flex-col gap-3">
                            {legal.map((item, index) => (
                                <li key={index}  className="hover:underline ">
                                    <a href={item.href}>{item.title}</a>
                                </li>

                            ))}
                        </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="w-full  bg-[#FF914D] text-[#032916] text-center py-2 font-semibold">
© 2025 Arua. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer;