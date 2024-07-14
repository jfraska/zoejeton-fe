import "./style.css";
import { Montserrat } from "next/font/google";

import LockScreen from "./_components/LockScreen";
import Cover from "./_components/Cover";
import Beranda from "./_components/Beranda";
import Quotes from "./_components/Quotes";
import Couple from "./_components/Couple";
import Story from "./_components/Story";
import Event from "./_components/Event";
import Music from "./_components/Music";
import Thanks from "./_components/Thanks";
import Galery from "./_components/Galery";
import LiveStream from "./_components/LiveStream";

import { ScrollArea } from "@/components/UI/scroll-area";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <LockScreen
      className={`${montserrat.className} absolute inset-0 flex justify-between w-full h-full bg-primary`}
    >
      <Cover />
      <Music />
      <div className="w-full h-full overflow-y-auto md:max-w-md">
        <Beranda />
        <Quotes />
        <Couple />
        <Story />
        <Event />
        <LiveStream />
        <Galery />
        <Thanks />
      </div>
    </LockScreen>
  );
}
