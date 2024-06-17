"use client";

import { cloneElement, useContext, useEffect } from "react";
import CustomizeContext from "@/context/customize";
import ContentEditable from "react-contenteditable";
import EditableDate from "@/components/container/editable-date";
import EditableImage from "@/components/container/editable-image";
import { cn, getDataContent, isImageUrl } from "@/libs/utils";

export default function Editable({
  children,
  className,
  section,
  field,
  type,
  path,
  propChild = "deadline",
}) {
  const { dataContent, setDataContent, isEdit } = useContext(CustomizeContext);

  const handleChangeText = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === section) {
        return { ...item, value: { ...item.value, [field]: e.target.value } };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  const handleChangeDate = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === section) {
        return { ...item, value: { ...item.value, [field]: e } };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  const handleChangeImage = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === section) {
        return { ...item, value: { ...item.value, [field]: e } };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  const imageContent = getDataContent(dataContent, section, field);
  const imageSrc =
    imageContent && imageContent.getFileEncodeDataURL
      ? imageContent.getFileEncodeDataURL()
      : imageContent;

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
          setDate={handleChangeDate}
        >
          <button
            className={` ${
              isEdit
                ? "outline-blue-100 outline focus:outline-blue-300 p-2"
                : null
            } w-full`}
            disabled={!isEdit}
          >
            {children &&
              cloneElement(children, {
                [propChild]: getDataContent(dataContent, section, field),
              })}
          </button>
        </EditableDate>
      )}

      {type === "image" && (
        <EditableImage
          image={getDataContent(dataContent, section, field)}
          setImage={handleChangeImage}
        >
          <button
            className={cn(
              isEdit
                ? "outline-blue-100 outline focus:outline-blue-300 p-2"
                : null,
              className
            )}
            disabled={!isEdit}
          >
            {children &&
              cloneElement(children, {
                src: imageSrc,
              })}
          </button>
        </EditableImage>
      )}
    </>
  );
}
