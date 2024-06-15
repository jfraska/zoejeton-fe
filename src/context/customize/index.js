"use client";

import { createContext, useState, useEffect } from "react";

const CustomizeContext = createContext();

export const CustomizeProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [dataContent, setDataContent] = useState([]);
  const [dataColor, setDataColor] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  //   useEffect(() => {
  //     setDataContent(
  //       localStorage.getItem("customize")
  //         ? JSON.parse(localStorage.getItem("customize"))
  //         : []
  //     );
  //   }, []);

  const saveDraftContent = () => {
    localStorage.setItem("customize", JSON.stringify({ content: dataContent }));
  };

  const deleteDraftContent = () => {
    localStorage.removeItem("customize");
    setDataContent([]);
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
