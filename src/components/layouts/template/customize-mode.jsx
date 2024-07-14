import Nav from "@/components/layouts/template/nav";
import Sidebar from "@/components/layouts/template/sidebar";

export default function CustomizeMode({ children }) {
  return (
    <div className="grid h-screen w-full md:pl-[300px] lg:pl-[380px]">
      <Sidebar />
      <div className="flex flex-col">
        <Nav />
        <main className="flex justify-center items-center flex-1 gap-4 p-4 bg-[#f3f3f3]">
          <div className="relative aspect-9/16 h-full md:aspect-video md:h-5/6 overflow-hidden rounded-lg border border-[#737373] bg-[#737373]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
