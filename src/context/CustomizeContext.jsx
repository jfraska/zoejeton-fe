"use client";

import { createContext, useState } from "react";

const CustomizeContext = createContext();

export const CustomizeProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [dataContent, setDataContent] = useState([]);
  const [dataColor, setDataColor] = useState({});
  const [dataGuest, setDataGuest] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const saveDraftContent = () => {
    localStorage.setItem(
      "template",
      JSON.stringify({
        ...data,
        content: dataContent,
        color: dataColor,
      })
    );
  };

  const deleteDraftContent = () => {
    localStorage.removeItem("template");
  };

  const initData = (data) => {
    setData(data);
    setDataContent(data.content);
    setDataColor(data.color[0]);
  };

  return (
    <CustomizeContext.Provider
      value={{
        initData,
        data,
        setData,
        dataContent,
        setDataContent,
        dataColor,
        setDataColor,
        dataGuest,
        setDataGuest,
        isEdit,
        setIsEdit,
        saveDraftContent,
        deleteDraftContent,
      }}
    >
      {children}
    </CustomizeContext.Provider>
  );
};

export default CustomizeContext;
