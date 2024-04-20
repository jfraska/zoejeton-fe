"use client";

import { useContext } from "react";
import { templates } from "@/constants";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import CartContext from "@/providers/CartProvider";
import TransitionLink from "@/components/TransitionLink";
import LoadingButton from "@/components/LoadingButton";

export default function TemplateList() {
  const { addItemToCart } = useContext(CartContext);

  const numberOfColumns = 2;
  const elementsPerColumn = Math.ceil(templates.length / numberOfColumns);

  const columns = [];
  for (let i = 0; i < numberOfColumns; i++) {
    columns.push(
      templates.slice(i * elementsPerColumn, (i + 1) * elementsPerColumn)
    );
  }

  const addToCartHandler = (product) => {
    addItemToCart({
      product: product.id,
      name: product.name,
      price: product.price,
      type: product.type,
      // image: product.images[0].url,
    });
  };

  return (
    <section data-scroll-section className="w-full">
      <div className="flex justify-between items-center px-[3%] text-base mt-6 gap-10">
        <h1 className="text-3xl">Katalog</h1>
        <h1 className="md:block hidden">Showing 8/12</h1>
        <div className="flex justify-between items-center h-full">
          <button
            type="submit"
            className="flex px-1 md:text-base text-sm uppercase justify-center items-center border border-black rounded-full text-black"
          >
            latest tamplate
          </button>
        </div>
      </div>

      {columns.map((column, index) => (
        <div
          key={index}
          className="py-6 mt-6 w-full overflow-x-auto no-scrollbar"
        >
          <div className={`px-[3%] flex gap-10 w-fit`}>
            {column.map((e) => (
              <div
                key={e.id}
                className="group relative w-[300px] h-[400px] border border-black rounded-lg hover:bg-[#0000008e] transition-all ease-in-out bg-cover bg-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/collection/2091539/500x400')",
                }}
              >
                <TransitionLink
                  className="absolute aspect-square top-4 right-4 group-hover:scale-100 scale-0 transition-transform ease-in-out bg-black flex justify-center items-center px-3 rounded-full hover:bg-[#00000068]"
                  href={
                    process.env.NEXT_PUBLIC_VERCEL_ENV
                      ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${e.href}`
                      : `http://template.localhost:3000/${e.href}`
                  }
                >
                  <span
                    className="w-5 aspect-square icon-[ph--eye]"
                    style={{ color: "white" }}
                  />
                </TransitionLink>

                <div className="absolute bottom-4 left-4">
                  <h1 className="text-lg font-medium bg-black text-white w-fit leading-tight rounded">
                    {e.name}
                  </h1>
                  <h1 className="text-base font-normal bg-black text-white w-fit leading-tight rounded">
                    <CurrencyFormat
                      value={e.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"IDR "}
                      suffix={".-"}
                    />
                  </h1>
                </div>
                <LoadingButton
                  onClick={() => addToCartHandler(e)}
                  className="absolute bottom-4 right-4 bg-black flex justify-center items-center p-2 rounded-md hover:bg-[#00000068]"
                >
                  <Image
                    src={"/assets/icons/cart.svg"}
                    width="20"
                    height="20"
                    alt="cart"
                    className="w-5 aspect-square"
                  />
                </LoadingButton>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
