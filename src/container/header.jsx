import Container from "@/components/container";
import nav from "@/data/nav";

const Header = () => {
    return (
        <header className="bg-[#06542E] h-[80px] border-[#FF914D] border-b-5 fixed top-0 left-0 w-full z-[50]">
            <Container className={"h-full flex justify-between items-center text-[#fffdfd] text-[17px] font-medium"}>
                <h1 className="text-[24px] font-bold">Logo</h1>
                <nav>
                    <ul className="flex gap-6">
                        {nav.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;