import Beranda from "./_components/Beranda";
import Quotes from "./_components/Quotes";
import Couple from "./_components/Couple";
import Story from "./_components/Story";
import Date from "./_components/Date";
import LockScreen from "./_components/LockScreen";
import BottomNavbar from "./_components/BottomNavbar";
import FloatingBar from "./_components/FloatingBar";
import prisma from "@/libs/prisma";
import Back from "@/components/Back";

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
      <Back />
      <LockScreen data={result} />
      <div className="relative w-full h-screen overflow-y-auto bg-[#272926]">
        <Beranda data={result} />
        <Quotes />
        <Couple />
        <Story />
        <Date />
      </div>
      <FloatingBar />
      <BottomNavbar />
    </>
  );
}
