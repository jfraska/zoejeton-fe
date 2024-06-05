import "./style.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalis | ZoeJeton",
  description: "by zoe",
};

export default function Layout({ children }) {
  return (
    <div className={`${montserrat.className} flex w-full h-screen`}>
      {children}
    </div>
  );
}
