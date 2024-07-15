import "./style.css";
import { Montserrat } from "next/font/google";

import LockScreen from "./_components/LockScreen";
import Cover from "./_components/Cover";
import Beranda from "./_components/Beranda";
import Couple from "./_components/Couple";
import LoveStory from "./_components/LoveStory";
import Event from "./_components/Event";
import Rsvp from "./_components/Rsvp";
import Music from "./_components/Music";
import Thanks from "./_components/Thanks";
import Galery from "./_components/Galery";
import LiveStream from "./_components/LiveStream";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <section
      className={`${montserrat.className} absolute inset-0 flex justify-between w-full h-full bg-primary-bg`}
    >
      <Cover />
      <LockScreen />
      <div className="w-full h-full overflow-y-auto md:max-w-md scroll">
        <Beranda />
        <Couple />
        <LoveStory />
        <Event />
        <Rsvp />
        <LiveStream />
        <Galery />
        <Thanks />
      </div>
      <Music />
    </section>
  );
}
