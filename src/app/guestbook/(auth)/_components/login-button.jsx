"use client";

import { signIn } from "@/api/auth";
import LoadingDots from "@/components/icons/loading-dots";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import OauthPopup from "react-oauth-popup";
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

  const handleLogin = async () => {
    const authResponse = await signIn(provider);

    const authUrl = authResponse.data.data?.provider_redirect;

    if (!authUrl) {
      throw new Error("Redirect URL tidak tersedia");
    }

    const popup = window.open(authUrl, "myPopup", "width=500,height=600");

    window.addEventListener("message", (event) => {
      console.log(event);
    });
  };

  return (
    <button
      disabled={loading}
      onClick={async () => {
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
