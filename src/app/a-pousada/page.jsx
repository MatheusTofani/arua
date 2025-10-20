import Banner from "@/components/banner";
import Container from "@/components/container";
import About from "@/components/description";
import Galeria from "@/components/galeria";
import Footer from "@/container/footer";
import Header from "@/container/header";
import { pousadaImages } from "@/data/pousada";

const aPousada = () => {
    return (
        <div>
            <Header />
            <Banner image={"/pousada.jpg"} title={"A Pousada"} />
            <Container>
                <About title={"Reserve a melhor opção para você"} desc={"Para curtir uma das mais belas praias de Maceió com todo conforto e comodidade que você e os seus familiares merecem."} />
                <Galeria map={pousadaImages} />
            </Container>
            <Footer />
        </div>
    )
}

export default aPousada;