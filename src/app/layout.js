import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MonumentExtended, NeueMontreal } from "@/styles/fonts";
import { Toaster } from "@/components/UI/sonner";
import { cn } from "@/libs/utils";
import Loading from "./loading";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${cn(
          MonumentExtended.variable,
          NeueMontreal.variable
        )} font-default bg-white`}
      >
        {children}
        <Loading />
        <Toaster />
      </body>
      <Analytics />
    </html>
  );
}
