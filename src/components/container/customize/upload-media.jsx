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
import { Trash, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import MediaService from "@/services/media-service";
import useSWR from "swr";
import Image from "next/image";

registerPlugin(
  // FilePondPluginFilePoster,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
  // FilePondPluginImageExifOrientation,
);

const UploadMedia = () => {
  const invitationId = "9d89f6b1-dccd-480f-8c4d-dbf20709eb35";

  const { data: media, mutate } = useSWR(
    `/${invitationId}?type=templates`,
    MediaService.getAllMedia
  );

  const handleDeleteFile = async (payload) => {
    const params = `/${invitationId}?type=templates&index=${payload}`;

    const res = await MediaService.deleteMedia(params);

    if (!res.success) {
      return;
    }

    mutate();
  };

  return (
    <div className="mt-2 px-2 py-2 bg-neutral-300 rounded-xl">
      <FilePond
        dropOnPage
        maxFileSize="50MB"
        acceptedFileTypes={["image/png", "image/jpeg"]}
        files={[]}
        server={{
          process: (
            fieldName,
            file,
            metadata,
            load,
            error,
            progress,
            abort
          ) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("type", "templates");

            MediaService.createMedia(invitationId, formData)
              .then((response) => {
                // Callback success, berikan ID file ke FilePond
                load(response.data.id);
                mutate();
              })
              .catch((err) => {
                // Callback error
                console.error("Upload failed:", err);
                error("Failed to upload file.");
              });

            // Fungsi abort untuk membatalkan permintaan jika diperlukan
            return {
              abort: () => {
                console.log("Upload aborted.");
                abort();
              },
            };
          },
        }}
        credits={false}
      />

      <h1>{media?.data.storage_usage} MB / 25 MB</h1>
      <Progress
        value={(media?.data.storage_usage / 25) * 100}
        className="w-full h-2"
      />

      <Tabs defaultValue="image" className="w-full mt-4">
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
          <div className="w-full flex flex-wrap gap-2">
            {media?.data.files.map((data, index) => (
              <button
                key={data.id}
                className="relative w-[calc(34%-8px)] aspect-square bg-slate-800 rounded-lg group overflow-hidden"
              >
                <Image
                  fill
                  src={data.url}
                  alt={data.name}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-1 inset-x-1 flex gap-2">
                  <button
                    onClick={() => handleDeleteFile(index)}
                    className="group-hover:scale-100 scale-0 transition-all duration-200 rounded-full w-5 aspect-square bg-slate-950 flex justify-center items-center opacity-70"
                  >
                    <Trash color="#fff" size={"14px"} />
                  </button>
                  <h1 className="text-[10px] group-hover:scale-100 scale-0 transition-all duration-200">
                    {data.size} Mb
                  </h1>
                </div>
              </button>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="video"></TabsContent>
        <TabsContent value="music"></TabsContent>
      </Tabs>
    </div>
  );
};

export default UploadMedia;
