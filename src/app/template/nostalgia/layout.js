import "./style.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Nostalgia | ZoeJeton",
  description: "by koko",
};

export default function Layout({ children }) {
  return (
    <div className={`${montserrat.className} flex w-full h-screen`}>
      {children}
    </div>
  );
}
