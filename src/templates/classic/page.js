import "./style.css";
import { Montserrat } from "next/font/google";

import LockScreen from "./components/LockScreen";
import Cover from "./components/Cover";

import Music from "./components/Music";
import { Main } from "@/components/container/customize/wrapper-template";

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
