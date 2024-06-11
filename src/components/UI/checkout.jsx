"use client";

import { useEffect } from "react";

export default function Checkout({ product }) {
  const checkoutHandler = async () => {
    const data = {
      id: 1,
      productName: "template",
      price: 3,
      quantity: 2,
    };

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      if (!responseData || !responseData.token) {
        throw new Error("Invalid response data");
      }

      window.snap.pay(responseData.token);
    } catch (error) {
      console.error("Error during checkout:", error.message);
    }
  };

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.MIDTRANS_CLIENT_KEY;

    const script = document.createElement("script");
    script.src = snapScript;

    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <button
      onClick={checkoutHandler}
      className="flex justify-between items-center px-2 py-px text-xl w-full bg-black rounded-full"
    >
      <h1 className="uppercase text-white">checkout</h1>
      <span
        className="mt-1 w-8 aspect-square icon-[carbon--arrow-up]"
        style={{ color: "white", transform: "rotate(90deg)" }}
      />
    </button>
  );
}
