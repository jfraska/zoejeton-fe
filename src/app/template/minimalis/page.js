import "./style.css";
import { Montserrat } from "next/font/google";

import LockScreen from "./_components/LockScreen";
import Cover from "./_components/Cover";
import Beranda from "./_components/Beranda";
import Quotes from "./_components/Quotes";
import Couple from "./_components/Couple";
import Story from "./_components/Story";
import Event from "./_components/Event";
import FloatingBar from "./_components/FloatingBar";
import Thanks from "./_components/Thanks";
import Galery from "./_components/Galery";
import LiveStream from "./_components/LiveStream";
import { ScrollArea } from "@/components/UI/scroll-area";

export const metadata = {
  title: "Minimalis | ZoeJeton",
  description: "by zoe",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <section className={`${montserrat.className} flex w-full h-screen`}>
      <Cover />
      <LockScreen />
      <ScrollArea className="w-full md:max-w-[430px] h-screen bg-primary">
        <Beranda />
        <Quotes />
        <Couple />
        <Story />
        <Event />
        <LiveStream />
        <Galery />
        <Thanks />
      </ScrollArea>
      <FloatingBar />
    </section>
  );
}
