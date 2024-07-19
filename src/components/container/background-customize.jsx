import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import path from "path";

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

registerPlugin(
  // FilePondPluginFilePoster,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageEdit,
  FilePondPluginImageTransform
);

export default function BackgroundCustomize({ image, setImage, slug }) {

  // const handleAddFile = (error,file) => {
  //   if (error) {
  //     return;
  //   }

  //   setFile(file);
  //     console.log(file)
    
  // };

  const handleFileUpload = (files) => {
    
    if (files.length > 0) {
      if(files[0].status === 2 || files[0].status === 8) {
        setImage(files)
      }
    }
  };

  return (
    <div className="overflow-hidden">
      <h1 className="my-2">Background</h1>
      <FilePond
        files={image.map((item) =>
          item?.getFileEncodeDataURL ? item : `/templates/${slug}/${item}`
        )}
        allowMultiple
        allowReorder
        maxFiles={3}
        dropOnPage
        onupdatefiles={handleFileUpload}
        // onaddfile={handleAddFile}
        acceptedFileTypes={["image/*"]}
        labelFileTypeNotAllowed={"File of invalid type"}
        credits=""
      />
    </div>
  );
}
