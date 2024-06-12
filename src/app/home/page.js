import Hero from "@/components/pages/hero";
import About from "@/components/pages/about";
import Feature from "@/components/pages/feature";
import AddOn from "@/components/pages/addon";
import ScrollVelocity from "@/components/pages/ScrollVelocity";
import Katalog from "@/components/pages/katalog";
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
    </>
  );
}
