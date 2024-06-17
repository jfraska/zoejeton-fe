"use client";

import { cloneElement, useContext, useEffect, useState } from "react";
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
  const [state, setState] = useState(
    getDataContent(dataContent, section, field)
  );

  const handleChange = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === section) {
        return {
          ...item,
          value: {
            ...item.value,
            [field]: e.target?.value ? e.target.value : e,
          },
        };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  useEffect(() => {
    if (type === "image") {
      const image = getDataContent(dataContent, section, field);
      setState(
        image?.getFileEncodeDataURL ? image.getFileEncodeDataURL() : image
      );
    } else {
      setState(getDataContent(dataContent, section, field));
    }
  }, [dataContent]);

  return (
    <>
      {type === "text" && (
        <ContentEditable
          className={
            isEdit
              ? "outline-blue-100 outline focus:outline-blue-300 p-2"
              : null
          }
          html={state}
          disabled={!isEdit}
          onChange={handleChange}
        />
      )}

      {type === "date" && (
        <EditableDate date={state} setDate={handleChange}>
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
                [propChild]: state,
              })}
          </button>
        </EditableDate>
      )}

      {type === "image" && (
        <EditableImage image={state} setImage={handleChange}>
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
                src: state,
              })}
          </button>
        </EditableImage>
      )}
    </>
  );
}
