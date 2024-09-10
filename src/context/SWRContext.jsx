"use client";

import { SWRConfig } from "swr";

const SWRWrapper = ({ children }) => {
  return <SWRConfig value={{}}>{children}</SWRConfig>;
};

export default SWRWrapper;
