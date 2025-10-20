import AcomodacoesSection from "@/container/Acomodacoes/acomodacoes";
import Banner from "@/components/banner";
import About from "@/components/description";

const { default: Footer } = require("@/container/footer")
const { default: Header } = require("@/container/header")

const Acomodacoes = () => {
    return (
        <>
            <Header />
            <Banner image={"/pousada.jpg"} title={"Acomodações"} />
            <About title={"Reserve a melhor opção para você"} desc={"Para curtir uma das mais belas praias de Maceió com todo conforto e comodidade que você e os seus familiares merecem."} />
            <AcomodacoesSection />
            <Footer />
        </>
    )
}

export default Acomodacoes;