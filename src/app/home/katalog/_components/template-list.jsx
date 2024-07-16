"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import LoadingButton from "@/components/UI/loading-button";
import { useRouter } from "next/navigation";

export default function TemplateList() {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [category, setCategory] = useState("All");
  const [pagination, setPagination] = useState({ limit: 5, offset: 0 });
  const router = useRouter();

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleNextPage = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      offset: prevPagination.offset + 1,
    }));
  };

  const handlePrevPage = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      offset: prevPagination.offset - 1,
    }));
  };

  useEffect(() => {
    const params = new URLSearchParams({
      category,
      limit: pagination.limit,
      offset: pagination.offset,
    });

    const fetchData = async () => {
      const response = await fetch(`/api/template?${params.toString()}`);
      const result = await response.json();
      setData(result.data);
      setMeta(result.meta);
    };

    fetchData();
  }, [category, pagination]);

  return (
    <section className="w-full p-[3%] mb-10">
      <div className="flex justify-between items-center text-base border-b border-black">
        <div className="relative hover-underline-animation py-2">
          <select
            className="appearance-none focus:outline-none pr-4 md:pr-10 text-lg md:text-xl bg-transparent"
            value={category}
            onChange={handleCategory}
          >
            <option value="All">All Template</option>
            <option value="Premium">Premium</option>
            <option value="Basic">Basic</option>
          </select>
          <span className="absolute right-0 bottom-4 w-3 text-black aspect-square icon-[foundation--play] rotate-90" />
        </div>
        <h1>
          Page {pagination.offset + 1} of {meta.totalPage}
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-between my-5 w-full">
        {data.map((e) => (
          <div
            key={e.id}
            className="group flex justify-center items-center bg-cover w-[47%] md:w-[18%] aspect-9/16 relative bg-blend-overlay hover:bg-[#0000008e] border border-black rounded-md overflow-hidden transition-all duration-200 ease-in-out"
            style={{
              backgroundImage: `url(/templates/${e.slug}/${e.thumbnail})`,
            }}
          >
            <div className="absolute top-0 left-0 md:text-lg text-sm clip-polygon pr-8 pl-2 py-1 bg-black text-white bg-opacity-70">
              {e.category}
            </div>

            <a
              href={
                process.env.NEXT_PUBLIC_ROOT_DOMAIN
                  ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${e.slug}`
                  : `http://template.localhost:3000/${e.slug}`
              }
              target="_blank"
              className="flex items-center justify-center w-fit gap-1 border bg-white border-black px-2 rounded-full transition-transform ease-in-out group-hover:scale-100 scale-0"
            >
              <span
                className="w-5 aspect-square icon-[ph--eye]"
                style={{ color: "black" }}
              />
              <h1 className="md:text-base text-sm">Demo Invitation</h1>
            </a>

            <div className="absolute bottom-0 inset-x-0 px-2 md:py-1 py-2 bg-black text-white flex justify-between items-center w-full bg-blend-multiply bg-opacity-30">
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-medium md:text-lg text-sm">{e.title}</h1>
                <h1 className="md:text-base text-xs">
                  <CurrencyFormat
                    value={e.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp. "}
                    // suffix={",00"}
                  />
                </h1>
              </div>

              <LoadingButton
                onClick={() => router.push(`/katalog/${e.slug}`)}
                className="flex justify-center items-center p-2 rounded-md hover:scale-110 transition-all ease-in-out"
              >
                <Image
                  src={"/assets/icons/cart.svg"}
                  width="20"
                  height="20"
                  alt="cart"
                  className="md:w-6 w-5 aspect-square"
                />
              </LoadingButton>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full h-fit">
        {pagination.offset > 0 && (
          <button
            onClick={handlePrevPage}
            className="absolute top-0 left-0 flex justify-center items-center gap-1 border border-black py-1 px-2 rounded-full hover:bg-black hover:scale-110 hover:text-white group transition-all duration-200 ease-in-out"
          >
            <span
              className="w-5 group-hover:text-white text-black aspect-square icon-[carbon--arrow-up]"
              style={{ transform: "rotate(270deg)" }}
            />
            <h1>Prev</h1>
          </button>
        )}

        {pagination.offset + 1 < meta.totalPage && (
          <button
            onClick={handleNextPage}
            className="absolute top-0 right-0 flex justify-center items-center gap-1 border border-black py-1 px-2 rounded-full hover:bg-black hover:scale-110 hover:text-white group transition-all duration-200 ease-in-out"
          >
            <h1>Next</h1>
            <span
              className="w-5 group-hover:text-white text-black aspect-square icon-[carbon--arrow-up]"
              style={{ transform: "rotate(90deg)" }}
            />
          </button>
        )}
      </div>
    </section>
  );
}
