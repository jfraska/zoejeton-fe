"use client";

import { signIn } from "@/services/auth-service";
import LoadingDots from "@/components/icons/loading-dots";
// import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
// import useOauth from "@/hooks/useOauth";

export default function LoginButton({ children, provider }) {
  const { login, loading, setLoading } = useAuth();
  // const { onClick } = useOauth();

  function openOAuthPopup(url, width = 500, height = 600) {
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;
    return window.open(
      url,
      "Oauth Login",
      `width=${width},height=${height},top=${top},left=${left},toolbar=0,scrollbars=1,status=1,resizable=0,location=1,menuBar=0`
    );
  }

  const handleLogin = async () => {
    try {
      const auth = await signIn(provider);

      const popup = openOAuthPopup(auth?.data?.provider_redirect);

      const checkPopupClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkPopupClosed);
          setLoading(false);
        }
      }, 500);

      const messageListener = (event) => {
        try {
          if (event.origin === "https://api.zoejeton.com") {
            const token = event.data.token;
            if (token) {
              login(token);
              setLoading(false);
              window.removeEventListener("message", messageListener);
            }
          }
        } catch (e) {
          window.removeEventListener("message", messageListener);
        }
      };

      window.addEventListener("message", messageListener);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        handleLogin();
        // onClick(provider);
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
