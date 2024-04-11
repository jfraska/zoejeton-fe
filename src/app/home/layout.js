import "./style.css";

import { CartProvider } from "@/providers/CartProvider";

export default function Layout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
