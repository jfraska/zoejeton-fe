import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
// import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";
import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";
import { useEffect } from "react";

registerPlugin(
  // FilePondPluginFilePoster,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageEdit,
  FilePondPluginImageTransform
);

export default function BackgroundCustomize({ image, setImage }) {
  const handleFileUpload = (items) => {
    if (items && items.length > 0) {
      setImage(items);
    }
  };

  return (
    <div>
      <h1 className="my-2 text-black">Background</h1>
      <FilePond
        files={image}
        allowMultiple
        onupdatefiles={handleFileUpload}
        acceptedFileTypes={["image/*"]}
        labelFileTypeNotAllowed={"File of invalid type"}
      />
    </div>
  );
}
