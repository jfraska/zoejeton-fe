import "./style.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalis",
  description: "by zoe",
};

export default function Layout({ children }) {
  return (
    <div
      className={`${montserrat.className} relative w-full md:w-[430px] mx-auto h-screen overflow-hidden`}
    >
      {children}
    </div>
  );
}
