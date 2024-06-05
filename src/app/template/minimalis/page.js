import Beranda from "./_components/Beranda";
import Quotes from "./_components/Quotes";
import Couple from "./_components/Couple";
import Story from "./_components/Story";
import Event from "./_components/Event";
import LockScreen from "./_components/LockScreen";
import FloatingBar from "./_components/FloatingBar";
// import prisma from "@/libs/prisma";
import Thanks from "./_components/Thanks";
import Galery from "./_components/Galery";
import LiveStream from "./_components/LiveStream";
import Cover from "./_components/Cover";

// async function getInvitation() {
//   const invitation = await prisma.Invitation.findFirst({
//     where: { title: "default" },
//   });
//   return invitation;
// }

export default async function Page() {
  // const result = await getInvitation();

  return (
    <>
      <Cover />
      <LockScreen />
      <div className="relative w-full md:max-w-[430px] overflow-y-auto bg-primary">
        <Beranda />
        <Quotes />
        <Couple />
        <Story />
        <Event />
        <LiveStream />
        <Galery />
        <Thanks />
      </div>
      <FloatingBar />
    </>
  );
}
