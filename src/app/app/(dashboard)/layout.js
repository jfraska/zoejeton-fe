import CreateInvitation from "@/components/container/create-invitation";
import Switcher from "@/components/container/switcher";
import Nav from "@/components/layouts/nav";
import Sidebar from "@/components/layouts/sidebar";

export const metadata = {
  title: "Dashboard | ZoeJeton",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="grid h-screen w-full md:pl-[220px] lg:pl-[280px]">
      <Sidebar />
      <div className="flex flex-col">
        <Nav />
        <main className="grid items-start flex-1 gap-4 overflow-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
      <Switcher />
      <CreateInvitation />
    </div>
  );
}
