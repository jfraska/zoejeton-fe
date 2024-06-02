import Header from "./_components/Header";
import TemplateList from "./_components/TemplateList";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by fraska",
};

export default function Page() {
  return (
    <>
      <Header />
      <TemplateList />
      <Footer />
    </>
  );
}
