import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/UI/sonner";
import { auth } from "@/libs/auth";
import { PortalProvider } from "@/context/portal";
import Switcher from "@/components/container/switcher";
import CreateInvitation from "@/components/container/create-invitation";

export async function Providers({ children }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <PortalProvider>
        {children}
        <Switcher />
        <CreateInvitation />
      </PortalProvider>
      <Toaster />
    </SessionProvider>
  );
}
