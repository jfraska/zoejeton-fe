import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/UI/sonner";
import { PortalProvider } from "@/context/portal";
import { auth } from "@/libs/auth";

export async function Providers({ children }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <PortalProvider>
        {children}
        <Toaster />
      </PortalProvider>
    </SessionProvider>
  );
}
