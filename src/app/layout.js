import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MonumentExtended, NeueMontreal } from "@/styles/fonts";
import { cn } from "@/libs/utils";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${cn(
          MonumentExtended.variable,
          NeueMontreal.variable
        )} font-default bg-white`}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
