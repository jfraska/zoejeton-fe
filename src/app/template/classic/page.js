import "./style.css";
import { Montserrat } from "next/font/google";

import LockScreen from "./_components/LockScreen";
import Cover from "./_components/Cover";
import Beranda from "./_components/Beranda";
import Couple from "./_components/Couple";
import LoveStory from "./_components/LoveStory";
import Event from "./_components/Event";
import CountDown from "./_components/CountDown";
import Rsvp from "./_components/Rsvp";
import Music from "./_components/Music";
import Gift from "./_components/Gift";
import Thanks from "./_components/Thanks";
import Galery from "./_components/Galery";
import LiveStream from "./_components/LiveStream";
import {
  Main,
  Template,
} from "@/components/container/template/wrapper-template";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <Main className={`${montserrat.className}`}>
      <Cover />
      <Music />
      <LockScreen type="lock" />
      <Template className="w-full h-full">
        <LockScreen id="lockscreen" />
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
      </Template>
    </Main>
  );
}
