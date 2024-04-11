import Hero from "@/components/Hero";
import About from "@/components/About";
import Feature from "@/components/Feature";
import AddOn from "@/components/AddOn";
import ScrollVelocity from "@/components/ScrollVelocity";
import Katalog from "@/components/Katalog";
import Footer from "@/components/Footer";
import Message from "@/components/Message";
import Galery from "@/components/Galery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Feature /> */}
      <ScrollVelocity />
      <Katalog />
      <AddOn />
      <Galery />
      <Message />
      <Footer />
    </>
  );
}