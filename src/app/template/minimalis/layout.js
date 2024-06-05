import "./style.css";
import { GlobalStyles } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Minimalis | ZoeJeton",
  description: "by zoe",
};

export default function Layout({ children }) {
  return (
    <div className={`${montserrat.className} flex w-full h-screen`}>
      <GlobalStyles
        styles={{
          ":root": {
            "--background": "#000",
            "--foreground": "#fff",

            // primary
            "--primary": "#263234",
            "--primary-foreground": "#fff",

            // secondary
            "--secondary": "#9D9E9A",
            "--secondary-foreground": "#fff",

            // accent
            "--accent": "#ff4081",
            "--accent-foreground": "#fff",

            // card
            "--card": "#fff",
            "--card-foreground": "#000",
          },
          body: {
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
          },
        }}
      />
      {children}
    </div>
  );
}
