"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonCustomize from "@/components/container/template/button-customize";
import CustomizeContext from "@/context/CustomizeContext";
import { Button } from "@/components/UI/button";
import { CloudUpload, Layers, LayoutDashboard, Settings } from "lucide-react";
import ButtonTooltip from "@/components/container/button-tooltip";
import CustomizeList from "@/components/container/template/customize-list";
import { getUrl } from "@/lib/utils";

export default function Sidebar() {
  const [tabs, setTabs] = useState("page");
  const { dataContent, setDataContent } = useContext(CustomizeContext);

  return (
    <aside className="hidden inset-y-0 fixed left-0 z-20 md:w-[250px] lg:w-[350px] h-full border-r md:block bg-background">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href={getUrl("/")}
            className="flex items-center gap-4 font-medium"
          >
            <Image
              src="/assets/icons/zoejeton.svg"
              width={200}
              height={200}
              alt="logo"
              className="h-6 w-6"
            />
            <span className="">ZoeJeton</span>
          </Link>
          <ButtonTooltip content="Dashboard">
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Link href={getUrl("/", "dashboard")}>
                <LayoutDashboard className="h-4 w-4" />
                <span className="sr-only">Toggle Dashboard</span>
              </Link>
            </Button>
          </ButtonTooltip>
        </div>
        <div className="flex h-12 w-full border-b">
          <button
            onClick={() => setTabs("page")}
            className={`w-full h-full flex flex-col justify-center items-center ${
              tabs === "page" && "bg-muted"
            }`}
          >
            <Layers className="w-5 aspect-square" />
          </button>
          <button className="w-full h-full flex flex-col justify-center items-center">
            <CloudUpload className="w-5 aspect-square" />
          </button>
          <button
            onClick={() => setTabs("setting")}
            className={`w-full h-full flex flex-col justify-center items-center ${
              tabs === "setting" && "bg-muted"
            }`}
          >
            <Settings className="w-5 aspect-square" />
          </button>
        </div>

        <div className="flex-1 flex items-start text-sm font-medium">
          <div className="overflow-y-auto w-full scrollbar-default md:scrollbar-hide px-2 lg:px-4">
            {tabs === "page" && (
              <>
                <h1 className="mt-5">Page</h1>
                <CustomizeList content={dataContent} />
              </>
            )}

            {tabs === "setting" && (
              <>
                <h1 className="mt-5 mb-2">Setting</h1>
                <ButtonCustomize type="color" />
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
