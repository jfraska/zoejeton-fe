import { SessionProvider } from "@/context/SessionContext";
import { Toaster } from "@/components/UI/sonner";
import { PortalProvider } from "@/context/PortalContext";
import Switcher from "@/components/container/switcher";
import CreateInvitation from "@/components/container/create-invitation";

export async function Providers({ children }) {
  return (
    <SessionProvider>
      <PortalProvider>
        {children}
        <Switcher />
        <CreateInvitation />
      </PortalProvider>
      <Toaster />
    </SessionProvider>
  );
}
