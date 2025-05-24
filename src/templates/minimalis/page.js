import "./style.css";
import { Montserrat } from "next/font/google";

import { Main } from "@/components/container/customize/wrapper-template";
import LockScreen from "./components/lockscreen";
import Cover from "./components/cover";
import Music from "./components/Music";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <Main className={`${montserrat.className}`}>
      <Cover />
      <Music />
      <LockScreen type="lock" />
    </Main>
  );
}
