import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginImageEditor from "@pqina/filepond-plugin-image-editor";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";
import "@pqina/pintura/pintura.css";

import {
  openEditor,
  createDefaultImageReader,
  createDefaultImageWriter,
  processImage,
  getEditorDefaults,
} from "@pqina/pintura";

registerPlugin(
  FilePondPluginImageEditor,
  FilePondPluginFilePoster,
  FilePondPluginFileValidateType
);

export default function EditableImage({ children, image, setImage }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <FilePond
          files={image.map((file) => ({
            source: file,
            options: { type: "local" },
          }))}
          onupdatefiles={(e) => setImage(e.map((fileItem) => fileItem.file))}
          acceptedFileTypes={["image/*"]}
          labelFileTypeNotAllowed={"File of invalid type"}
          // allowImageEditor={false}
          imageEditorAllowEdit={false}
          imageEditor={{
            createEditor: openEditor,
            imageReader: [createDefaultImageReader],
            imageWriter: [
              // The image writer to use
              createDefaultImageWriter,
              // optional image writer instructions, this instructs the image writer to resize the image to match a width of 384 pixels
              {
                targetSize: {
                  width: 128,
                },
              },
            ],

            // used to generate poster images, runs an editor in the background
            imageProcessor: processImage,

            // Pintura Image Editor properties
            editorOptions: {
              // pass the editor default configuration options
              ...getEditorDefaults({}),

              imageCropAspectRatio: 1,
            },
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
