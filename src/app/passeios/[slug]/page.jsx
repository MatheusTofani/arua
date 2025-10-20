import Footer from "@/container/footer";
import Header from "@/container/header";
import PasseioDetail from "@/container/Passeios/passeiosDetailView";
import passeio from "@/data/passeios";

export default function PasseioPage({ params }) {
    const { slug } = params;

    const item = passeio.find((p) => p.slug === slug);


    return (
    <div>
        <Header />
<PasseioDetail acomodacao={item} />
        <Footer />
    </div>

    );
}
