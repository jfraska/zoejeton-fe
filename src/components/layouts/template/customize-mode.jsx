import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import Nav from "@/components/layouts/template/nav";
import Sidebar from "@/components/layouts/template/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/UI/tabs";

export default function CustomizeMode({ children }) {
  const [mode, setMode] = useState("mobile");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="grid h-screen w-full md:pl-[250px] lg:pl-[320px]">
      <Sidebar />
      <div className="flex flex-col bg-[#f3f3f3]">
        <Nav />
        <main className="flex-1 flex justify-start lg:justify-center h-full p-4 overflow-hidden">
          <Tabs
            value={mode}
            onValueChange={setMode}
            className={`${mode === "mobile" && isDesktop && "h-full"} ${
              mode === "desktop" && isDesktop && "w-full xl:w-10/12"
            } 
            ${!isDesktop && "w-full h-full"} max-w-full max-h-full`}
          >
            <TabsList className="xl:block hidden">
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            <div
              className={`relative overflow-hidden ${
                mode === "mobile" &&
                isDesktop &&
                "aspect-9/16 h-full max-h-[90%]"
              } ${
                mode === "desktop" &&
                isDesktop &&
                "aspect-video w-full min-h-[90%]"
              } 
              ${!isDesktop && "w-full h-full"}
              rounded-lg border border-[#737373] bg-[#b4b4b4]`}
            >
              {children}
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
