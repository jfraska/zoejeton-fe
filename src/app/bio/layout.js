import "./style.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Bio | ZoeJeton",
  description: "by fraska",
};

export default function Layout({ children }) {
  return (
    <main className={`${montserrat.className} h-screen overflow-y-auto`}>
      {children}
    </main>
  );
}
