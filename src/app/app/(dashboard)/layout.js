import "./style.css";
import Nav from "@/components/layouts/nav";
import Sidebar from "@/components/layouts/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Nav />
        {children}
      </div>
    </div>
  );
}
