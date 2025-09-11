import AcomodacoesSection from "@/container/Acomodacoes/acomodacoes";
import Banner from "@/container/Acomodacoes/banner";

const { default: Footer } = require("@/container/footer")
const { default: Header } = require("@/container/header")

const Acomodacoes = () => {
    return (
        <>
            <Header />
            <Banner />
           <AcomodacoesSection />
            <Footer />
        </>
    )
}

export default Acomodacoes;