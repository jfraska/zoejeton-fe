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
      className={`${montserrat.className} flex w-full h-screen overflow-hidden`}
    >
      <div
        className="hidden md:block w-full h-full bg-cover"
        style={{
          backgroundImage: "url('/assets/templates/minimalis/5.heic')",
        }}
      ></div>
      <div className="relative w-full md:max-w-[430px] overflow-y-auto bg-color">
        {children}
      </div>
    </div>
  );
}
