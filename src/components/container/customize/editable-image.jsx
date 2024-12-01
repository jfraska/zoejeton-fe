import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import path from "path";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImageEdit from "filepond-plugin-image-edit";
// import FilePondPluginImageTransform from "filepond-plugin-image-transform";
// import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";
// import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";

registerPlugin(
  // FilePondPluginFilePoster,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
  // FilePondPluginImageExifOrientation,
  // FilePondPluginImageEdit,
  // FilePondPluginImageTransform
);

export default function EditableImage({
  children,
  slug,
  image,
  setImage = () => {},
}) {
  // const handleFileUpload = (items) => {
  //   if (items.length > 0) {
  //     const itemFileName = items[0].file.name;
  //     const imageFileName = image?.file?.name || path.basename(image);

  //     if (!image?.getFileEncodeDataURL) {
  //       if (imageFileName !== itemFileName) {
  //         setImage(items[0]);
  //       }
  //     } else if (imageFileName !== itemFileName) {
  //       setImage(items[0]);
  //     }
  //   }
  // };

  const handleAddFile = (error, file) => {
    if (error) {
      return;
    }

    setImage(file);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="bg-neutral-200">
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="upload">
              Upload
            </TabsTrigger>
            <TabsTrigger className="w-full" value="setting">
              Setting
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upload">
            <FilePond
              // files={
              //   image?.getFileEncodeDataURL
              //     ? [image.getFileEncodeDataURL()]
              //     : [`/templates/${slug}/${image}`]
              // }
              allowMultiple
              allowRemove={false}
              dropOnPage
              // onupdatefiles={handleFileUpload}
              onaddfile={handleAddFile}
              acceptedFileTypes={["image/*"]}
              labelFileTypeNotAllowed={"File of invalid type"}
              credits=""
            />

            <div className="flex w-full flex-wrap gap-2">
              <button className="relative w-[30%] aspect-square bg-slate-500 rounded-lg group"></button>
              <button className="relative w-[30%] aspect-square bg-slate-500 rounded-lg"></button>
              <button className="relative w-[30%] aspect-square bg-slate-500 rounded-lg"></button>
              <button className="relative w-[30%] aspect-square bg-slate-500 rounded-lg"></button>
            </div>
          </TabsContent>
          <TabsContent value="setting"></TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
