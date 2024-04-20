import Header from "./_components/Header";
import TemplateList from "./_components/TemplateList";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by fraska",
};

export default function page() {
  return (
    <>
      <Header />
      <TemplateList />
      <Footer />
    </>
  );
}
