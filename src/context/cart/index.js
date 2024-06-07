"use client";

import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const addItemsToCart = (items) => {
    let newCartItems = [...(cart?.cartItems || [])];

    items.forEach((item) => {
      const isItemExist = newCartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        newCartItems = newCartItems.map((i) =>
          i.id === isItemExist.id ? item : i
        );
      } else {
        newCartItems.push(item);
      }
    });

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const addItemToCart = ({
    id,
    title,
    category,
    image,
    fitur,
    price,
    type,
  }) => {
    const item = {
      id,
      title,
      category,
      image,
      fitur,
      price,
      type,
    };

    const isItemExist = cart?.cartItems?.find((i) => i.id === item.id);

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.id === isItemExist.id ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        addItemsToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
