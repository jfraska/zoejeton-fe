"use client";

import { signIn } from "@/api/auth";
import LoadingDots from "@/components/icons/loading-dots";
import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginButton({ children, provider }) {
  const [loading, setLoading] = useState(false);

  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  function openOAuthPopup(url, width = 500, height = 600) {
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    return window.open(
      url,
      "OAuthLogin",
      `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars,status`
    );
  }

  const options = {
    path: "/",
    domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN
      ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : null,
    secure: true,
  };

  const handleLogin = async () => {
    try {
      const auth = await signIn(provider);
      const redirectUrl = auth?.data?.data?.provider_redirect;

      if (redirectUrl) {
        const popup = openOAuthPopup(redirectUrl);
        if (popup) {
          const messageListener = (event) => {
            if (event.origin === "https://api.zoejeton.com") {
              const token = event.data.token;
              if (token) {
                setCookie("client", token, options);
                window.removeEventListener("message", messageListener);
              }
            }
          };

          window.addEventListener("message", messageListener);
        } else {
          console.error("Popup failed to open.");
        }
      } else {
        console.error("Invalid provider redirect URL.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={() => {
        handleLogin();
        setLoading(true);
      }}
      className={`${
        loading
          ? "cursor-not-allowed bg-stone-50 dark:bg-stone-800"
          : "bg-white hover:bg-stone-50 active:bg-stone-100 dark:bg-black dark:hover:border-white dark:hover:bg-black"
      } group flex h-10 w-full items-center justify-center space-x-2 rounded-md border border-stone-200 transition-colors duration-75 focus:outline-none dark:border-stone-700`}
    >
      {loading ? <LoadingDots color="#A8A29E" /> : <>{children}</>}
    </button>
  );
}
