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
  const handleFileUpload = (items) => {
    if (items.length > 0) {
      let data = [];

      if (
        (image[0]?.file?.name || path.basename(image[0])) === items[0].file.name
      ) {
        return;
      }

      items.map((item, index) => {
        const itemFileName = item.file.name;
        const imageFileName =
          image[index]?.file?.name || path.basename(image[index]);

        if (!image[index]?.getFileEncodeDataURL) {
          if (imageFileName !== itemFileName) {
            data = [...data, item];
          }
        } else if (imageFileName !== itemFileName) {
          data = [...data, item];
        }
      });

      setImage(data);
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
        onupdatefiles={handleFileUpload}
        acceptedFileTypes={["image/*"]}
        labelFileTypeNotAllowed={"File of invalid type"}
      />
    </div>
  );
}
