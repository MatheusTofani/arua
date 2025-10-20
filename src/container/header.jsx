"use client"
import { useState } from "react";
import Container from "@/components/container";
import nav from "@/data/nav";
import { Menu, X } from "lucide-react"; // Ícones

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#06542E] h-[80px] border-b-4 border-[#FF914D] fixed top-0 left-0 w-full z-[50] shadow-md">
            <Container className="h-full flex justify-between items-center text-[#fffdfd] text-[17px] font-medium">
                {/* Logo */}
                <a href="/" aria-label="Página inicial - Arua">
                    <img
                        src="/logo_branca.png"
                        className="h-[60px] w-auto"
                        alt="Logo da Arua - Turismo e Passeios"
                    />
                </a>

                {/* Navegação Desktop */}
                <nav aria-label="Menu principal" className="hidden md:block">
                    <ul className="flex gap-6 items-center">
                        {nav.map((item, index) => (
                            <li key={index}>
                                <a
                                    className="hover:text-[#FF914D] transition duration-200"
                                    href={item.href}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/reserva"
                                className="bg-[#FF914D] text-[#fffdfd] px-4 py-2 rounded-md hover:bg-[#FD6122] transition duration-300"
                            >
                                Reserve Agora
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Botão Menu Mobile */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            {/* Menu Mobile */}
            {menuOpen && (
                <div className="md:hidden bg-[#06542E] text-[#fffdfd] text-center border-t border-[#FF914D] shadow-lg absolute top-[80px] left-0 w-full p-6 z-40">
                    <ul className="flex flex-col gap-4 text-lg">
                        {nav.map((item, index) => (
                            <li key={index}>
                                <a
                                    className="hover:text-[#FF914D] transition duration-200"
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/reserva"
                                className="block text-center bg-[#FF914D] text-[#fffdfd] px-4 py-2 rounded-md hover:opacity-90 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                Reserve Agora
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
