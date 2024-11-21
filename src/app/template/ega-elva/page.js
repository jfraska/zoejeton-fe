import "./style.css";
import { Catamaran } from "next/font/google";

import Lockscreen from "./_components/lockscreen";
import Music from "./_components/Music";
import { Main } from "@/components/container/template/wrapper-template";

const catamaran = Catamaran({ subsets: ["latin"] });

export default function Page() {
  return (
    <Main className={`${catamaran.className}`}>
      <Music />
      <Lockscreen type="lock" />
    </Main>
  );
}
