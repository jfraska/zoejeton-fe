import { PortalProvider } from "@/context/portal";
import CreateInvitation from "@/components/container/create-invitation";
import Switcher from "@/components/container/switcher";

export function Providers({ children }) {
  return (
    <PortalProvider>
      {children}
      <Switcher />
      <CreateInvitation />
    </PortalProvider>
  );
}
