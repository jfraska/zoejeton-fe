import Nav from "@/components/layouts/template/nav";
import Sidebar from "@/components/layouts/template/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export default function CustomizeMode({ children }) {
  const [mode, setMode] = useState("mobile");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="grid h-screen w-full md:pl-[250px] lg:pl-[320px]">
      <Sidebar />
      <div className="flex h-full w-full flex-col bg-[#f3f3f3] overflow-hidden">
        <Nav />
        <main className="flex-1 w-full flex flex-col items-center p-4">
          {isDesktop ? (
            <Tabs
              value={mode}
              onValueChange={setMode}
              className={`${mode === "mobile" ? "h-5/6" : "w-5/6"} mt-2`}
            >
              <TabsList>
                <TabsTrigger value="desktop">Desktop</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
              </TabsList>
              <TabsContent
                value="desktop"
                className="relative aspect-video w-full overflow-hidden rounded-lg border border-[#737373] bg-[#b4b4b4]"
              >
                {children}
              </TabsContent>
              <TabsContent
                value="mobile"
                className="relative aspect-9/16 h-full overflow-hidden rounded-lg border border-[#737373] bg-[#b4b4b4]"
              >
                {children}
              </TabsContent>
            </Tabs>
          ) : (
            <div className="relative w-full h-full overflow-hidden rounded-lg border border-[#737373] bg-[#b4b4b4]">
              {children}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
