import "./style.css";
import { Montserrat } from "next/font/google";

import {
  Main,
  Template,
} from "@/components/container/template/wrapper-template";
import LockScreen from "./_components/LockScreen";
import Cover from "./_components/Cover";
import Music from "./_components/Music";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <Main className={`${montserrat.className}`}>
      <Cover />
      <Music />
      <LockScreen type="lock" />
      <Template />
    </Main>
  );
}
