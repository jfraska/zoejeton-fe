import Hero from "@/components/Hero";
import About from "@/components/About";
import Feature from "@/components/Feature";
// import Pricing from "@/components/Pricing";
import ScrollVelocity from "@/components/ScrollVelocity";
import Katalog from "@/components/Katalog";
import Footer from "@/components/Footer";
import Message from "@/components/Message";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Feature />
      <ScrollVelocity />
      <Katalog />
      {/* <Pricing /> */}
      <Message />
      <Footer />
    </>
  );
}
