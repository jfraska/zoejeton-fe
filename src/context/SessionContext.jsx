"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthService from "@/services/auth-service";
import { toast } from "sonner";
import { createSession, deleteSession, getSession } from "@/lib/session";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const token = getSession();
        if (token) {
          const auth = await AuthService.getSession();
          setSession(auth.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const login = (e) => {
    createSession(e.token, e.expires_in);
    router.push("/");
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      deleteSession();
      router.push("/login");
    } catch (error) {
      toast.error("Logout tidak berhasil.");
    }
  };

  return (
    <SessionContext.Provider
      value={{ loading, setLoading, session, login, logout }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
