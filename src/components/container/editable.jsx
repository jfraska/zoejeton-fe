"use client";

import { cloneElement, useContext, useState } from "react";
import CustomizeContext from "@/context/customize";
import ContentEditable from "react-contenteditable";
import EditableDate from "@/components/container/editable-date";
import EditableImage from "@/components/container/editable-image";
import { cn, getDataContent } from "@/libs/utils";
import EditableLink from "./editable-link";

export default function Editable({
  children,
  className,
  section,
  field,
  subfield,
  type,
  propChild = "deadline",
}) {
  const { dataContent, setDataContent, isEdit } = useContext(CustomizeContext);
  const [state, setState] = useState(
    getDataContent(dataContent, section, field, subfield)
  );

  const handleChange = (e) => {
    const data = e.target?.value ? e.target.value : e;

    if (type == "image") {
      setState(
        data.getFileEncodeDataURL() ? data.getFileEncodeDataURL() : data
      );
    } else {
      setState(data);
    }

    const updatedData = dataContent?.map((item) => {
      if (item.key === section) {
        return {
          ...item,
          value: {
            ...item.value,
            [field]: subfield ? { ...item[field], [subfield]: data } : data,
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
          className={cn(
            isEdit
              ? "outline-blue-100 outline focus:outline-blue-300 p-2"
              : null,
            className
          )}
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

      {type === "link" && (
        <EditableLink
          type="text"
          name={`${field} ${section} ${subfield ? subfield : ""}`}
          value={state}
          onChange={handleChange}
        >
          <button
            className={cn(
              `relative ${
                isEdit
                  ? "outline-blue-100 outline focus:outline-blue-300 p-2"
                  : null
              }`,
              className
            )}
            disabled={!isEdit}
          >
            <div
              className={`
                ${isEdit ? "block" : "hidden"} absolute inset-0 z-10 
              `}
            />
            {children &&
              cloneElement(children, {
                href: state,
              })}
          </button>
        </EditableLink>
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
