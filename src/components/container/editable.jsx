import { useContext, useState } from "react";
import CustomizeContext from "@/context/customize";
import ContentEditable from "react-contenteditable";
import EditableDate from "@/components/container/editable-date";
import EditableImage from "@/components/container/editable-image";
import { getDataContent } from "@/libs/utils";

export default function Editable({ children, section, field, type }) {
  const { dataContent, setDataContent, isEdit } = useContext(CustomizeContext);
  const [image, setImage] = useState([]);

  const handleChangeText = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === section) {
        return { ...item, value: { ...item.value, [field]: e.target.value } };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  const handleChangeImage = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === section) {
        return { ...item, value: { ...item.value, [field]: e.target.value } };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  return (
    <>
      {type === "text" && (
        <ContentEditable
          className={
            isEdit
              ? "outline-blue-100 outline focus:outline-blue-300 p-2"
              : null
          }
          html={getDataContent(dataContent, section, field)}
          disabled={!isEdit}
          onChange={handleChangeText}
        />
      )}

      {type === "date" && (
        <EditableDate
          date={getDataContent(dataContent, section, field)}
          setDate={handleChangeText}
        >
          <button
            className={` ${
              isEdit
                ? "outline-blue-100 outline focus:outline-blue-300 p-2"
                : null
            } w-full`}
            disabled={!isEdit}
          >
            {children}
          </button>
        </EditableDate>
      )}

      {type === "image" && (
        <EditableImage
          image={getDataContent(dataContent, section, field)}
          setImage={handleChangeImage}
          // image={image}
          // setImage={setImage}
        >
          <button
            className={` ${
              isEdit
                ? "outline-blue-100 outline focus:outline-blue-300 p-2"
                : null
            }`}
            disabled={!isEdit}
          >
            {children}
          </button>
        </EditableImage>
      )}
    </>
  );
}
