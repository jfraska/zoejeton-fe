import { CartProvider } from "@/providers/CartProvider";

export default function GlobalProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
