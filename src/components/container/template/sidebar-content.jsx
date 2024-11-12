"use client";

import { useContext, useState } from "react";
import ButtonCustomize from "@/components/container/template/button-customize";
import { CloudUpload, Layers, Settings } from "lucide-react";
import CustomizeList from "@/components/container/template/customize-list";
import UploadMedia from "@/components/container/template/upload-media";
import CustomizeContext from "@/context/CustomizeContext";

const SidebarContent = () => {
  const [tabs, setTabs] = useState("page");
  const { dataContent, setDataContent } = useContext(CustomizeContext);

  return (
    <>
      <div className="flex h-12 w-full border-b mt-4 lg:mt-0">
        <button
          onClick={() => setTabs("page")}
          className={`w-full h-full flex flex-col justify-center items-center ${
            tabs === "page" && "bg-muted"
          }`}
        >
          <Layers className="w-5 aspect-square" />
        </button>
        <button
          onClick={() => setTabs("upload")}
          className={`w-full h-full flex flex-col justify-center items-center ${
            tabs === "upload" && "bg-muted"
          }`}
        >
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

          {tabs === "upload" && (
            <>
              <h1 className="mt-5">Upload</h1>
              <UploadMedia />
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
    </>
  );
};

export default SidebarContent;
