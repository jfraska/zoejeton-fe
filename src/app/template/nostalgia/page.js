import "./style.css";
import { Montserrat } from "next/font/google";

import LockScreen from "./_components/LockScreen";
import Cover from "./_components/Cover";
import Music from "./_components/Music";
import { Main, Template } from "@/components/container/wrapper-template";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Page() {
  return (
    <Main className={`${montserrat.className}`}>
      <Cover />
      <Music />
      <LockScreen type="lock" />
      <Template className="w-full h-full" />
    </Main>
  );
}
