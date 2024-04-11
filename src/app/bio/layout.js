import "./style.css";

export const metadata = {
  title: "Bio | ZoeJeton",
  description: "by zoejeton",
};

export default function Layout({ children }) {
  return <div className="h-screen overflow-y-auto">{children}</div>;
}
