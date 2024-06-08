import "./style.css";
import { Montserrat } from "next/font/google";
import RecomendPlatform from "@/components/container/RecomendPlatform";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalis | ZoeJeton",
  description: "by zoe",
};

export default function Layout({ children }) {
  return (
    <>
      {/* <RecomendPlatform /> */}
      <main className={`${montserrat.className} flex w-full h-screen`}>
        {children}
      </main>
    </>
  );
}
