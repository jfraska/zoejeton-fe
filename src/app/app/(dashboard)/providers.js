import { PortalProvider } from "@/context/portal";

export async function Providers({ children }) {
  return <PortalProvider>{children}</PortalProvider>;
}
