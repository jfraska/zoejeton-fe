import "./style.scss";
import prisma from "@/libs/prisma";
import Detail from "./detail";

export default async function page({ params }) {
  const data = await prisma.Template.findFirst({
    where: { slug: params.slug },
  });

  return <Detail data={data} />;
}
