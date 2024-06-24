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

export const metadata = {
  title: "Minimalis | ZoeJeton",
  description: "by jSfraska",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <main
      className={`${montserrat.className} w-full bg-primary md:max-w-md ml-auto`}
    >
      <Cover />
      <LockScreen>
        <Beranda />
        <Quotes />
        <Couple />
        <Story />
        <Event />
        <LiveStream />
        <Galery />
        <Thanks />
        <Music />
      </LockScreen>
    </main>
  );
}
