import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MonumentExtended, NeueMontreal } from "@/styles/fonts";
import { cn } from "@/libs/utils";
import { Providers } from "./providers";

const title = "";
const description = "";
const image = "";

export const metadata = {
  title,
  description,
  icons: ["/favicon.ico"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title,
  //   description,
  //   images: [image],
  //   creator: "@vercel",
  // },
  // metadataBase: new URL("https://vercel.pub"),
};

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
