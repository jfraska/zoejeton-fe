import "./style.css";
import { Montserrat } from "next/font/google";

import LockScreen from "./components/LockScreen";
import Cover from "./components/Cover";
import Beranda from "./components/Beranda";
import Couple from "./components/Couple";
import LoveStory from "./components/LoveStory";
import Event from "./components/Event";
import CountDown from "./components/CountDown";
import Rsvp from "./components/Rsvp";
import Music from "./components/Music";
import Gift from "./components/Gift";
import Thanks from "./components/Thanks";
import Galery from "./components/Galery";
import LiveStream from "./components/LiveStream";
import {
  Main,
  Template,
} from "@/components/container/customize/wrapper-template";

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
