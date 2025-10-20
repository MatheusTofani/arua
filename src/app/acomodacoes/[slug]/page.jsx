import AcomodacaoDetalheView from "@/container/Acomodacoes/AcomodacaoDetalheView";
import Footer from "@/container/footer";
import Header from "@/container/header";
import acomodacoes from "@/data/acomodacoes";



export async function generateStaticParams() {
    return acomodacoes.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params; 

    const acomodacao = acomodacoes.find((a) => a.slug === slug);

    if (!acomodacao) return {};

    return {
        title: `${acomodacao.nome} | Arua`,
        description: acomodacao.description?.substring(0, 150) || "Conheça nossa acomodação exclusiva.",
    };
}

export default async function AcomodacaoPage({ params }) {

  const { slug } = await params;

    const acomodacao = acomodacoes.find((a) => a.slug === slug);


    return (
        <div>
            <Header />
            <AcomodacaoDetalheView acomodacao={acomodacao} />
            <Footer />
        </div>
    );
}