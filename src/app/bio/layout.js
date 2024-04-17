import "./style.css";

export const metadata = {
  title: "Bio | ZoeJeton",
  description: "by zoejeton",
};

export default function Layout({ children }) {
  return <main className="h-screen overflow-y-auto">{children}</main>;
}
