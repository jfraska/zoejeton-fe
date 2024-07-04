"use client";

import { setCookie } from "cookies-next";
import { createContext, useState } from "react";

const options = {
  path: "/",
  domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN
    ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
    : null,
};

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
  const [stateSwitcher, setStateSwitcher] = useState(false);
  const [stateCreateInvitation, setStateCreateInvitation] = useState(false);
  const [invitation, setInvitation] = useState(null);

  const updateInvitation = (invitation) => {
    setCookie("invitation", JSON.stringify(invitation), options);
    setInvitation(invitation);
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
