"use client";

import { createContext, useState, useEffect } from "react";

const CustomizeContext = createContext();

export const CustomizeProvider = ({ children }) => {
  const [dataContent, setDataContent] = useState([]);
  const [dataColor, setDataColor] = useState({});

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

  return (
    <CustomizeContext.Provider
      value={{
        dataContent,
        setDataContent,
        dataColor,
        setDataColor,
        saveDraftContent,
        deleteDraftContent,
      }}
    >
      {children}
    </CustomizeContext.Provider>
  );
};

export default CustomizeContext;
