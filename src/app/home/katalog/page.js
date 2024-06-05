import Header from "./_components/Header";
import TemplateList from "./_components/TemplateList";
import prisma from "@/libs/prisma";

export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by fraska",
};

export default function Page() {
  return (
    <>
      <Header />
      <TemplateList />
    </>
  );
}
