import { Suspense } from "react";
import { SessionProvider } from "@/context/SessionContext";
import { Toaster } from "@/components/UI/sonner";
import { PortalProvider } from "@/context/PortalContext";
import Switcher from "@/components/container/switcher";
import CreateInvitation from "@/components/container/create-invitation";
import SWRWrapper from "@/context/SWRWrapper";

export async function Providers({ children }) {
  return (
    <Suspense>
      <SWRWrapper>
        <SessionProvider>
          <PortalProvider>
            {children}
            <Switcher />
            <CreateInvitation />
          </PortalProvider>
          <Toaster />
        </SessionProvider>
      </SWRWrapper>
    </Suspense>
  );
}
