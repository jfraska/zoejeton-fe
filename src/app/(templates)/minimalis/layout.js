import "./style.css";
import { Montserrat } from "next/font/google";
import BottomNavbar from "./_components/BottomNavbar";
import FloatingBar from "./_components/FloatingBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalis",
  description: "by jipies",
};

export default function Layout({ children }) {
  return (
    <div className={`${montserrat.className} `}>
      <div className="bg-[#272926]">{children}</div>
      <FloatingBar />
      <BottomNavbar />
    </div>
  );
}
