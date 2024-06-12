import { Suspense } from "react";
import Header from "./_components/header";
import TemplateList from "./_components/template-list";
import Loading from "@/components/UI/loading";

export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by fraska",
};

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <TemplateList />
      </Suspense>
    </>
  );
}
