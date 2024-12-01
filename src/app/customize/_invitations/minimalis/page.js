import "./style.css";
import { Montserrat } from "next/font/google";

import { Main } from "@/components/container/customize/wrapper-template";
import LockScreen from "./_components/lockscreen";
import Cover from "./_components/cover";
import Music from "./_components/Music";

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
