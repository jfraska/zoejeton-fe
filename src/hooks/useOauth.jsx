"use client";

import { signIn } from "@/services/auth-service";
import { useEffect, useState, useRef } from "react";

const createPopup = ({ url, title = "", height = 500, width = 500 }) => {
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2.5;
  return window.open(
    url,
    title,
    `width=${width},height=${height},left=${left},top=${top}`
  );
};

const useOauth = () => {
  const [externalWindow, setExternalWindow] = useState(null);
  const intervalRef = useRef(null);

  const clearTimer = () => {
    window.clearInterval(intervalRef.current);
  };

  const onClick = async (provider) => {
    try {
      const auth = await signIn(provider);

      const url = auth?.data?.data?.provider_redirect;

      setExternalWindow(
        createPopup({
          url,
        })
      );
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (externalWindow) {
      intervalRef.current = window.setInterval(() => {
        try {
          const currentUrl = externalWindow.location.href;
          const params = new URL(currentUrl).searchParams;
          const code = params.get("code");
          if (!code) {
            return;
          }
          // onCode(code, params);
          clearTimer();
          externalWindow.close();
        } catch (error) {
          // eslint-ignore-line
        } finally {
          if (!externalWindow || externalWindow.closed) {
            onClose();
            clearTimer();
          }
        }
      }, 700);
    }
    return () => {
      if (externalWindow) externalWindow.close();
      // if (onClose) onClose();
    };
  }, [externalWindow]);

  return { onClick };
};

export default useOauth;
