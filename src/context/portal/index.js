"use client";

import { getCookie, hasCookie, setCookie } from "cookies-next";
import { createContext, useState } from "react";

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
  const [stateSwitcher, setStateSwitcher] = useState(false);
  const [stateCreateInvitation, setStateCreateInvitation] = useState(false);
  const [invitation, setInvitation] = useState(
    hasCookie("invitation") ? getCookie("invitation") : null
  );
  const [template, setTemplate] = useState(
    hasCookie("template") ? getCookie("template") : null
  );

  const updateInvitation = (invitation) => {
    setCookie("invitation", invitation);
    setInvitation(hasCookie("invitation") ? getCookie("invitation") : null);
  };

  const updateTemplate = (invitation) => {
    setCookie("template", invitation);
    setInvitation(hasCookie("template") ? getCookie("template") : null);
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
        template,
        updateTemplate,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export default PortalContext;
