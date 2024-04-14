import "./style.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalis | ZoeJeton",
  description: "by zoe",
};

export default function Layout({ children }) {
  return (
    <div
      className={`${montserrat.className} relative w-full md:max-w-[430px] mx-auto h-screen overflow-hidden`}
    >
      {children}
    </div>
  );
}
