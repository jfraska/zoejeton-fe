"use client";

import { createContext, useState, useEffect } from "react";

const InvitationContext = createContext();

export const InvitationProvider = ({ children }) => {
  const [selectedInvitation, setSelectedInvitation] = useState(null);

  useEffect(() => {
    setSelectedToState();
  }, []);

  const setSelectedToState = () => {
    setSelectedInvitation(
      localStorage.getItem("invitation")
        ? JSON.parse(localStorage.getItem("invitation"))
        : null
    );
  };

  const selectInvitation = (invitation) => {
    localStorage.setItem("invitation", JSON.stringify(invitation));
    setSelectedToState();
  };

  return (
    <InvitationContext.Provider
      value={{
        selectedInvitation,
        selectInvitation,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
};

export default InvitationContext;
