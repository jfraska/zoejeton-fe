import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
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
  image,
  setImage = () => {},
}) {
  const handleFileUpload = (items) => {
    if (items.length > 0) {
      setImage(items[0]);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <FilePond
          files={[image]}
          onupdatefiles={handleFileUpload}
          acceptedFileTypes={["image/*"]}
          labelFileTypeNotAllowed={"File of invalid type"}
        />
      </PopoverContent>
    </Popover>
  );
}
