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
    <div
      className={`${montserrat.className} relative w-full md:w-[430px] mx-auto bg-[#4F4E48] pb-32`}
    >
      <main>{children}</main>
      <FloatingBar />
      <BottomNavbar />
    </div>
  );
}
