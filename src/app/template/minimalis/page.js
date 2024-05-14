import Beranda from "./_components/Beranda";
import Quotes from "./_components/Quotes";
import Couple from "./_components/Couple";
import Story from "./_components/Story";
import Date from "./_components/Date";
import LockScreen from "./_components/LockScreen";
import FloatingBar from "./_components/FloatingBar";
import prisma from "@/libs/prisma";
import Thanks from "./_components/Thanks";
import Galery from "./_components/Galery";
import LiveStream from "./_components/LiveStream";

async function getInvitation() {
  const invitation = await prisma.Invitation.findFirst({
    where: { title: "default" },
  });
  return invitation;
}

export default async function Page() {
  const result = await getInvitation();

  return (
    <>
      {/* <LockScreen data={result} /> */}
      <Beranda data={result} />
      <Quotes />
      <Couple />
      <Story />
      <Date />
      <LiveStream />
      <Galery />
      <Thanks />
      <FloatingBar />
    </>
  );
}
