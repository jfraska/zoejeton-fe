"use client";

import { cloneElement, useContext, useState } from "react";
import CustomizeContext from "@/context/customize";
import ContentEditable from "react-contenteditable";
import EditableDate from "@/components/container/editable-date";
import EditableImage from "@/components/container/editable-image";
import { cn, getDataContent } from "@/libs/utils";

export default function Editable({
  children,
  className,
  section,
  field,
  type,
  propChild = "deadline",
}) {
  const { dataContent, setDataContent, isEdit } = useContext(CustomizeContext);
  const [state, setState] = useState(
    getDataContent(dataContent, section, field)
  );

  const handleChange = (e) => {
    const data = e.target?.value ? e.target.value : e;
    setState(data?.getFileEncodeDataURL() ? data.getFileEncodeDataURL() : data);

    const updatedData = dataContent?.map((item) => {
      if (item.key === section) {
        return {
          ...item,
          value: {
            ...item.value,
            [field]: data,
          },
        };
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
                className: "image",
              })}
          </button>
        </EditableImage>
      )}
    </>
  );
}
