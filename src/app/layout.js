import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MonumentExtended, NeueMontreal } from "@/styles/fonts";
import { cn } from "@/utils";

export const metadata = {
  title: "ZoeJeton",
  description: "by zoejeton",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={cn(MonumentExtended.variable, NeueMontreal.variable)}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
