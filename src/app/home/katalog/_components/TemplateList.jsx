"use client";

import { useContext } from "react";
import { templates } from "@/constants";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import CartContext from "@/providers/CartProvider";
import TransitionLink from "@/components/TransitionLink";

export default function TemplateList() {
  const { addItemToCart } = useContext(CartContext);

  const numberOfColumns = 4;
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
      // image: product.images[0].url,
    });
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row mt-6 w-full justify-between items-center">
        {columns.map((column, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "flex" : "hidden md:flex"
            } flex-col md:max-w-[340px] w-11/12 md:w-[24%] gap-5`}
          >
            {column.map((e) => (
              <div
                key={e.id}
                className="group relative w-full h-[370px] lg:h-[400px] border border-black rounded-lg hover:bg-[#00000068] transition-all ease-in-out bg-cover bg-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/collection/2091539/500x400')",
                }}
              >
                <TransitionLink
                  className="absolute top-4 right-4 group-hover:scale-100 scale-0 transition-transform ease-in-out bg-black p-3 rounded-full hover:bg-[#00000068]"
                  href={e.href}
                >
                  {/* <Icon icon="ph:eye" width="20" color="white" /> */}
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
                <button
                  onClick={() => addToCartHandler(e)}
                  className="absolute bottom-4 right-4 bg-black w-fit p-2 rounded-md hover:bg-[#00000068]"
                >
                  <Image
                    src={"/assets/icons/cart.svg"}
                    width="20"
                    height="20"
                    alt="cart"
                    className="w-5 aspect-square"
                  />
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
