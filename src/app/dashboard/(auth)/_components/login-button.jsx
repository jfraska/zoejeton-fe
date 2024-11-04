"use client";

import LoadingDots from "@/components/icons/loading-dots";
import { useAuth } from "@/hooks/useAuth";
import AuthService from "@/services/auth-service";

export default function LoginButton({ children, provider }) {
  const { loading, setLoading } = useAuth();

  const handleLogin = async () => {
    try {
      const auth = await AuthService.signIn(
        provider,
        `dashboard.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      );
      window.location.href = auth?.data?.provider_redirect;

      setLoading(false);
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
