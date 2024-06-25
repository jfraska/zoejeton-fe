"use client";

import { createContext, useEffect, useState } from "react";

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
  const [stateSwitcher, setStateSwitcher] = useState(false);
  const [stateCreateInvitation, setStateCreateInvitation] = useState(false);
  const [invitation, setInvitation] = useState(
    localStorage.getItem("invitation")
      ? JSON.parse(localStorage.getItem("invitation"))
      : null
  );

  const setInvitationToState = () => {
    setInvitation(
      localStorage.getItem("invitation")
        ? JSON.parse(localStorage.getItem("invitation"))
        : null
    );
  };

  const updateInvitation = (invitation) => {
    localStorage.setItem("invitation", JSON.stringify(invitation));
    setInvitationToState();
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
