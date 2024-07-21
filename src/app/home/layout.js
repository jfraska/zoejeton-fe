import Loading from "./loading";
import "./style.css";

import { CartProvider } from "@/context/cart";

export const metadata = {
  title: "Home | ZoeJeton",
  description: "by zoejeton",
};

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Loading>{children}</Loading>
    </CartProvider>
  );
}
