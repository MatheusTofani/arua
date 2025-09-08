import Whatsapp from "@/components/Whatsapp";
import Footer from "@/container/footer";
import Header from "@/container/header";
import AboutUs from "@/container/home/aboutUs";
import Diferenciais from "@/container/home/diferenciais";
import Faq from "@/container/home/faq";
import Hero from "@/container/home/hero";
import Paralax from "@/container/home/paralax";
import Rating from "@/container/home/rating";
import Restaurantes from "@/container/home/restaurantes";
import Sections from "@/container/home/sections";
import Skills from "@/container/home/skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <Hero />
      <AboutUs />
      <Sections />
      <Rating />
      <Paralax />
      <Diferenciais />
      <Restaurantes />
      <Faq />
      <Footer />
      <Whatsapp />
    </div>
  );
}
