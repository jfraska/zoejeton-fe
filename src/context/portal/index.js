"use client";

import { getCookie, hasCookie, setCookie } from "cookies-next";
import { createContext, useState } from "react";

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
  const [stateSwitcher, setStateSwitcher] = useState(false);
  const [stateCreateInvitation, setStateCreateInvitation] = useState(false);
  const [invitation, setInvitation] = useState(null);
  const [template, setTemplate] = useState(null);

  const options = {
    path: "/",
    domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN
      ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : null,
  };

  const updateInvitation = (invitation) => {
    setCookie("invitation", JSON.stringify(invitation), options);
    setInvitation(
      hasCookie("invitation", options)
        ? JSON.parse(getCookie("invitation", options))
        : null
    );
  };

  const updateTemplate = (template) => {
    setCookie("template", JSON.stringify(template), options);
    setTemplate(
      hasCookie("template", options)
        ? JSON.parse(getCookie("template", options))
        : null
    );
  };

  console.log(invitation, template);

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
