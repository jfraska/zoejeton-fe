import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import Feature from "@/components/pages/Feature";
import AddOn from "@/components/pages/addon";
import ScrollVelocity from "@/components/pages/ScrollVelocity";
import Katalog from "@/components/pages/Katalog";
import Footer from "@/components/pages/Footer";
import BreakMain from "@/components/pages/BreakMain";
import Galery from "@/components/pages/galery";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Feature />
      <ScrollVelocity />
      <Katalog />
      <AddOn />
      <Galery />
      <BreakMain />
      <Footer />
    </>
  );
}
