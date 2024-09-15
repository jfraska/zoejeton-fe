"use client";

import { signIn } from "@/services/auth-service";
import LoadingDots from "@/components/icons/loading-dots";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

export default function LoginButton({ children, provider }) {
  const { login, loading, setLoading } = useAuth();

  function openOAuthPopup(url, width = 500, height = 600) {
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    return window.open(
      url,
      "OAuthLogin",
      `width=${width},height=${height},top=${top},left=${left},status,noopener,noreferrer`
    );
  }

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
                login(token);
                setLoading(false);
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
