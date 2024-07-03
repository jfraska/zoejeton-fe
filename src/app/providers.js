import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/UI/sonner";
import { auth } from "@/libs/auth";

export async function Providers({ children }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      {children}
      <Toaster />
    </SessionProvider>
  );
}
