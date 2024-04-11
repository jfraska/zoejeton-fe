import "./style.css";

import { CartProvider } from "@/providers/CartProvider";

export const metadata = {
  title: "Home | ZoeJeton",
  description: "by zoejeton",
};

export default function Layout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
