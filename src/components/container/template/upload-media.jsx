import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import FilePondPluginFilePoster from "filepond-plugin-file-poster";
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";

import { Progress } from "@/components/UI/progress";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";

registerPlugin(
  // FilePondPluginFilePoster,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
  // FilePondPluginImageExifOrientation,
);

const UploadMedia = () => {
  return (
    <div className="mt-2 px-2 py-2 bg-neutral-300 rounded-xl">
      <FilePond dropOnPage credits="" />

      <h1>5 MB / 25 MB</h1>
      <Progress value={30} className="w-full h-2" />

      <Tabs defaultValue="image" className="w-full mt-6">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="image">
            Image
          </TabsTrigger>
          <TabsTrigger className="w-full" value="video">
            Video
          </TabsTrigger>
          <TabsTrigger className="w-full" value="music">
            Music
          </TabsTrigger>
        </TabsList>
        <TabsContent value="image">
          <div className="flex w-full flex-wrap gap-2">
            <button className="relative w-[30%] aspect-square bg-slate-500 rounded-lg group">
              <button className="group-hover:scale-100 scale-0 transition-all duration-200 absolute top-1 left-1 rounded-full w-5 aspect-square bg-slate-950 flex justify-center items-center opacity-70">
                <X color="#fff" size={"16px"} />
              </button>

              <h1 className="m-auto text-primary-foreground text-xs group-hover:scale-100 scale-0 transition-all duration-200">
                25 MB
              </h1>
            </button>
            <button className="relative w-[30%] aspect-square bg-slate-500 rounded-lg"></button>
            <button className="relative w-[30%] aspect-square bg-slate-500 rounded-lg"></button>
            <button className="relative w-[30%] aspect-square bg-slate-500 rounded-lg"></button>
          </div>
        </TabsContent>
        <TabsContent value="video"></TabsContent>
        <TabsContent value="music"></TabsContent>
      </Tabs>
    </div>
  );
};

export default UploadMedia;
