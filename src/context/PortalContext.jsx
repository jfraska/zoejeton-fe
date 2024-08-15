"use client";

import { createContext, useState } from "react";
import { setCookie } from "cookies-next";

const options = {
  path: "/",
  domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN
    ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
    : null,
};

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
  const [stateCreateInvitation, setStateCreateInvitation] = useState(false);
  const [stateSwitcher, setStateSwitcher] = useState(false);
  const [invitation, setInvitation] = useState(null);

  const updateInvitation = (data) => {
    setCookie("invitation", JSON.stringify(data), options);
    setInvitation(data);
  };

  return (
    <PortalContext.Provider
      value={{
        stateSwitcher,
        setStateSwitcher,
        stateCreateInvitation,
        setStateCreateInvitation,
        invitation,
        updateInvitation,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export default PortalContext;
