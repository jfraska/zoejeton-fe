import localFont from "next/font/local";

export const MonumentExtended = localFont({
  src: [
    {
      path: "./assets/fonts/monument-extended/MonumentExtended-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-MonumentExtended",
});

export const NeueMontreal = localFont({
  src: [
    {
      path: "./assets/fonts/neue-montreal/NeueMontreal-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/neue-montreal/NeueMontreal-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/neue-montreal/NeueMontreal-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/neue-montreal/NeueMontreal-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-NeueMontreal",
});

export const Runalto = localFont({
  src: "./assets/fonts/runalto/runalto.ttf",
  variable: "--font-Runalto",
});

export const Radwave = localFont({
  src: "./assets/fonts/radwave/radwavefont-demo.woff",
  variable: "--font-Radwave",
});

export const Gunterz = localFont({
  src: "./assets/fonts/gunterz/gunterz-mediumitalic.woff",
  variable: "--font-Gunterz",
});
