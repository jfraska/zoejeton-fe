import Header from "./_components/Header";
import TemplateList from "./_components/TemplateList";
import prisma from "@/libs/prisma";

export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by fraska",
};

export default async function Page() {
  const data = await prisma.Template.findMany();

  return (
    <>
      <Header />
      <TemplateList data={data} />
    </>
  );
}
