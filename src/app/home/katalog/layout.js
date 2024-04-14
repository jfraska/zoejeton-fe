export const metadata = {
  title: "Katalog | ZoeJeton",
  description: "by zoejeton",
};

export default function Layout({ children }) {
  return <div className="w-full h-screen overflow-auto">{children}</div>;
}
