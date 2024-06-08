import LockScreen from "./_components/LockScreen";
import Cover from "./_components/Cover";
import Beranda from "./_components/Beranda";
import Couple from "./_components/Couple";
import LoveStory from "./_components/LoveStory";
import Event from "./_components/Event";
import Rsvp from "./_components/Rsvp";
import FloatingBar from "./_components/FloatingBar";
import prisma from "@/libs/prisma";
import Thanks from "./_components/Thanks";
import Galery from "./_components/Galery";
import LiveStream from "./_components/LiveStream";

import { GlobalStyles } from "@mui/material";

async function getTemplate() {
  return await prisma.Template.findFirst({
    where: { slug: "nostalgia" },
  });
}

export default async function Page() {
  const result = await getTemplate();
  console.log(result);

  return (
    <>
      <Cover />
      <LockScreen />
      <div className="relative w-full md:max-w-[430px] overflow-y-auto bg-primary">
        <Beranda />
        <Couple />
        <LoveStory />
        <Event />
        <Rsvp />
        <LiveStream />
        <Galery />
        <Thanks />
      </div>
      <FloatingBar />

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
    </>
  );
}
