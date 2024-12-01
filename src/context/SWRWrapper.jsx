"use client";

import { SWRConfig } from "swr";

const SWRWrapper = ({ children }) => {
  return (
    <SWRConfig
      value={{ revalidateOnFocus: false, revalidateOnReconnect: true }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRWrapper;
