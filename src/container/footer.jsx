"use client";

import Container from "@/components/container";
import nav from "@/data/nav";
import { FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";

const Footer = () => {
  const redes = [
    { icon: <FaInstagram aria-label="Instagram" />, href: "#" },
    { icon: <FaWhatsapp aria-label="WhatsApp" />, href: "#" },
    { icon: <FaGoogle aria-label="Google" />, href: "#" },
  ];

 
  const legal = [
    { title: "Termos de Serviço", href: "#" },
    { title: "Políticas de Privacidade", href: "#" },
  ];

  return (
    <footer className="mt-[80px]">
      <div className="bg-[#06542E] py-20">
        <Container className="flex flex-col md:flex-row justify-between text-[#fffdfd] gap-10 md:gap-0">
          {/* Logo e redes sociais */}
          <div className="flex flex-col gap-6 md:w-[30%] items-center md:items-start">
            <img className="w-[200px]" src="/logo_branca.png" alt="Logo Arua" />
            <p className="text-[16px] md:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illum, doloribus labore ex inventore autem alias iusto hic officiis odit ea eveniet non tempore ullam velit, consequuntur nemo voluptates molestias?
            </p>
            <ul className="flex gap-5 text-[24px]">
              {redes.map((item, index) => (
                <li key={index}>
                  <a href={item.href} aria-label={item.icon.props["aria-label"]} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação e Legal */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-[200px]">
            <div className="text-center flex flex-col gap-5">
              <p className="text-[20px] font-semibold">Navegação</p>
              <ul className="flex flex-col gap-3">
                {nav.map((item, index) => (
                  <li key={index} className="hover:underline">
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center flex flex-col gap-5">
              <p className="text-[20px] font-semibold">Legal</p>
              <ul className="flex flex-col gap-3">
                {legal.map((item, index) => (
                  <li key={index} className="hover:underline">
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer copyright */}
      <div className="w-full bg-[#FF914D] text-[#fffdfd] text-center py-2 font-semibold text-[14px] md:text-[16px]">
        © 2025 Arua. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
