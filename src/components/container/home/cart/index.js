import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import CartContext from "@/context/cart";
import CurrencyFormat from "react-currency-format";
import { WaCheckout } from "@/lib/contact";

export default function Cart({ state, setState }) {
  let sidebarMenu = useRef(null);
  const menuTimeline = useRef();
  const { deleteItemFromCart, cart } = useContext(CartContext);

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenu],
      {
        duration: 0,
        x: "100%",
      },
      {
        duration: 0.75,
        x: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    state ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [state]);

  const totalPrice = cart?.cartItems?.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const checkoutHandle = () => {
    const formatter = Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    const temp = {
      name: "Davin",
      order_id: "123",
      diskon: formatter.format(0),
      subtotal: formatter.format(totalPrice),
      template: cart?.cartItems?.filter(
        (cartItem) => cartItem.type === "template"
      ),
      fitur: cart?.cartItems?.filter((cartItem) => cartItem.type === "fitur"),
      addon: cart?.cartItems?.filter((cartItem) => cartItem.type === "addon"),
    };

    WaCheckout(temp);
  };

  return (
    <>
      <div
        ref={(el) => (sidebarMenu = el)}
        className={`fixed h-full top-0 right-0 z-[60] lg:w-1/4 w-11/12 bg-white text-black`}
      >
        <div className="w-full h-4/5 pb-20 overflow-y-auto px-5">
          <div className="flex py-5 justify-between items-center w-full">
            <h1 className="text-xl leading-none font-medium text-[#282828]">
              Shopping Cart ({cart?.cartItems?.length})
            </h1>

            <button
              onClick={() => setState(false)}
              className="flex justify-center items-center"
            >
              <span
                className="mt-1 w-4 aspect-square icon-[grommet-icons--close]"
                style={{ color: "black" }}
              />
            </button>
          </div>

          {cart?.cartItems?.some(
            (cartItem) => cartItem.type === "template"
          ) && (
            <h1 className="mt-4 text-lg font-medium leading-none text-neutral-950">
              Template
            </h1>
          )}

          <div className="mt-2 flex flex-col gap-2">
            {cart?.cartItems?.map(
              (cartItem) =>
                cartItem.type === "template" && (
                  <div
                    key={cartItem.id}
                    className="w-full flex justify-between items-stretch gap-4 p-4 bg-white rounded shadow-[0_2px_20px_-10px_rgba(0,0,0,0.2)]"
                  >
                    <div
                      className="w-32 aspect-square rounded bg-white bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${cartItem.image})`,
                      }}
                    />
                    <div className="w-2/5 flex flex-col items-start gap-2">
                      <h1 className="font-medium text-lg leading-none">
                        {cartItem.title}
                      </h1>

                      <ul className="flex flex-col">
                        {cartItem.fitur?.length > 0 && (
                          <li className="text-xs font-medium">Extra fitur</li>
                        )}
                        {cartItem.fitur?.map((e) => (
                          <li className="flex items-center" key={e.id}>
                            <span className="inline-block w-1 aspect-square mr-2 bg-black rounded-full" />
                            <h1 className="text-xs">{e.title}</h1>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-2/5 flex flex-col items-end justify-between">
                      <button
                        className="flex justify-center items-center"
                        onClick={() => deleteItemFromCart(cartItem?.id)}
                      >
                        <span
                          className="mt-1 w-4 aspect-square icon-[lucide--trash]"
                          style={{ color: "black" }}
                        />
                      </button>
                      <h1 className="font-medium text-sm leading-none">
                        <CurrencyFormat
                          value={cartItem.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp. "}
                        />
                      </h1>
                    </div>
                  </div>
                )
            )}

            {cart?.cartItems?.some((cartItem) => cartItem.type === "addon") && (
              <h1 className="mt-4 text-lg font-medium leading-none text-neutral-950">
                Addon
              </h1>
            )}
            {cart?.cartItems?.map(
              (cartItem) =>
                cartItem.type === "addon" && (
                  <div
                    key={cartItem.id}
                    className="w-full min-h-[100px] flex justify-between items-stretch gap-4 p-4 bg-white rounded shadow-[0_2px_20px_-10px_rgba(0,0,0,0.2)]"
                  >
                    <div className="w-3/5 flex flex-col items-start gap-2">
                      <h1 className="font-medium text-lg leading-none">
                        {cartItem.title}
                      </h1>
                      <h1 className="text-xs">{cartItem.id}</h1>
                    </div>
                    <div className="w-2/5 flex flex-col items-end justify-between">
                      <button
                        className="flex justify-center items-center"
                        onClick={() => deleteItemFromCart(cartItem?.id)}
                      >
                        <span
                          className="mt-1 w-4 aspect-square icon-[lucide--trash]"
                          style={{ color: "black" }}
                        />
                      </button>
                      <h1 className="font-medium text-sm leading-none">
                        <CurrencyFormat
                          value={cartItem.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp. "}
                        />
                      </h1>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        <div className="fixed bottom-0 inset-x-0 w-full flex flex-col items-end gap-5 p-4 bg-white shadow-[0_-4px_60px_-25px_rgba(0,0,0,0.4)]">
          <div className="flex w-full justify-between items-center font-medium">
            <h1 className="text-lg">Estimasi Total</h1>
            <h1 className="text-sm">
              <CurrencyFormat
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"IDR "}
                suffix={".-"}
              />
            </h1>
          </div>
          <p className="text-xs leading-none">
            *Taxes are calculated at checkout.
          </p>
          {cart?.cartItems?.length > 0 ? (
            <button
              onClick={() => checkoutHandle()}
              className="flex justify-between items-center px-2 py-px text-xl w-full bg-black rounded-full"
            >
              <h1 className="uppercase text-white">checkout</h1>
              <span
                className="mt-1 w-8 aspect-square icon-[carbon--arrow-up]"
                style={{ color: "white", transform: "rotate(90deg)" }}
              />
            </button>
          ) : (
            <button
              onClick={() => setState(false)}
              className="flex justify-between items-center px-2 py-px text-xl w-full bg-black rounded-full"
            >
              <h1 className="uppercase text-white">continue browsing</h1>
              <span
                className="mt-1 w-8 aspect-square icon-[carbon--arrow-up]"
                style={{ color: "white", transform: "rotate(90deg)" }}
              />
            </button>
          )}
        </div>
      </div>

      <div
        className={`${
          state ? "z-50 bg-opacity-30" : "-z-10 bg-opacity-0"
        } fixed inset-0 bg-black transition-all ease-linear delay-200`}
        onClick={() => setState(false)}
      />
    </>
  );
}
