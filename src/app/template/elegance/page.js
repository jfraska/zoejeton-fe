import "./style.css";
import { Montserrat } from "next/font/google";
import { ScrollArea } from "@/components/UI/scroll-area";

import LockScreen from "./_components/LockScreen";
import Cover from "./_components/Cover";
import Beranda from "./_components/Beranda";
import Couple from "./_components/Couple";
import LoveStory from "./_components/LoveStory";
import Event from "./_components/Event";
import CountDown from "./_components/CountDown";
import Rsvp from "./_components/Rsvp";
import FloatingBar from "./_components/FloatingBar";
import Gift from "./_components/Gift";
import Thanks from "./_components/Thanks";
import Galery from "./_components/Galery";
import LiveStream from "./_components/LiveStream";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <section className={`${montserrat.className} flex w-full h-screen`}>
      <Cover />
      <LockScreen />
      <ScrollArea className="w-full md:max-w-[430px] h-screen bg-primary">
        <Beranda />
        <Couple />
        <LoveStory />
        <Event />
        <CountDown />
        <Rsvp />
        <LiveStream />
        <Gift />
        <Galery />
        <Thanks />
      </ScrollArea>
      <FloatingBar />
    </section>
  );
}
