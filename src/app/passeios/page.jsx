import AcomodacoesSection from "@/container/Acomodacoes/acomodacoes";
import Banner from "@/components/banner";
import About from "@/components/description";
import Header from "@/container/header";
import Footer from "@/container/footer";
import PasseiosSection from "@/container/Passeios/passeiosSection";



const Passeios = () => {
    return (
        <>
            <Header />
            <Banner image={"/pousada.jpg"} title={"Passeios"} />
            <About title={"Reserve a melhor opção para você"} desc={"Para curtir uma das mais belas praias de Maceió com todo conforto e comodidade que você e os seus familiares merecem."} />
            <PasseiosSection />
            <Footer />
        </>
    )
}

export default Passeios;