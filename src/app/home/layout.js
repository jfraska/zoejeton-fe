import "./style.css";

import { CartProvider } from "@/providers/CartProvider";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      <div>{children}</div>
    </CartProvider>
  );
}
