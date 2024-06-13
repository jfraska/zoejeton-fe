import { CustomizeProvider } from "@/context/customize";

export default function Layout({ children }) {
  return <CustomizeProvider>{children}</CustomizeProvider>;
}
