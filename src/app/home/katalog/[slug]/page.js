import Detail from "../_components/detail";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by fraska",
};

async function getData(id) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_ROOT_DOMAIN
      ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api/template/${id}`
      : `http://localhost:3000/api/template/${id}`
  );

  if (!res.ok) return undefined;

  return res.json();
}

export default async function Page({ params }) {
  const template = await getData(params.slug);

  if (!template) {
    notFound();
  }

  return <Detail data={template} />;
}
