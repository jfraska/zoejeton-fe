import Header from "./_components/Header";
import TemplateList from "./_components/TemplateList";

export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by fraska",
};

export default function page() {
  return (
    <>
      <Header />
      <TemplateList />
    </>
  );
}
