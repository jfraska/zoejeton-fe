"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie, hasCookie, setCookie } from "cookies-next";
import { getSession, logout as logoutService } from "@/services/auth-service";
import { toast } from "sonner";

const SessionContext = createContext();

const options = {
  path: "/",
  domain:
    process.env.NODE_ENV === "production"
      ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : null,
  secure: true,
};

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const token = hasCookie("client");
        if (token) {
          const auth = await getSession();
          setSession(auth.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const login = (token) => {
    setCookie("client", token, options);
    router.push("/");
  };

  const logout = async () => {
    try {
      await logoutService();
      deleteCookie("client", options);
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
