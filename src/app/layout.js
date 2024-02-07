import "./globals.css";
import localFont from "next/font/local";

const MonumentExtended = localFont({
  src: [
    {
      path: "../assets/fonts/monument-extended/MonumentExtended-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-MonumentExtended",
});

const NeueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/neue-montreal/NeueMontreal-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-montreal/NeueMontreal-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-montreal/NeueMontreal-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/neue-montreal/NeueMontreal-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-NeueMontreal",
});

export const metadata = {
  title: "ZoeJeton",
  description: "by jipies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${MonumentExtended.variable} ${NeueMontreal.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
