"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";
import Loading from "@/components/UI/loading";

export default function TemplateList() {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [category, setCategory] = useState("All");
  const [pagination, setPagination] = useState({ limit: 1, offset: 0 });

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
      const response = await fetch(`/api/templates?${params.toString()}`);
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
        <Suspense fallback={<Loading />}>
          {data.map((e) => (
            <div
              key={e.id}
              className="group flex justify-center items-center bg-cover w-[47%] md:w-[250px] h-[250px] md:h-[300px] relative bg-blend-overlay hover:bg-[#0000008e] border border-black rounded-md overflow-hidden transition-all duration-200 ease-in-out"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/collection/2091539/500x400')",
              }}
            >
              <div className="absolute top-0 left-0 md:text-base text-sm clip-polygon pr-8 pl-2 py-1 bg-black text-white shadow">
                {e.category}
              </div>

              <a
                href={
                  process.env.NEXT_PUBLIC_VERCEL_ENV
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

              <div className="absolute bottom-0 inset-x-0 p-4 flex justify-between items-center w-full">
                <div className="flex flex-col justify-start items-start">
                  <h1 className="font-medium md:text-base text-sm bg-black text-white w-fit leading-tight rounded">
                    {e.title}
                  </h1>
                  <h1 className="md:text-sm text-xs font-normal bg-black text-white w-fit leading-tight rounded">
                    <CurrencyFormat
                      value={e.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp. "}
                      // suffix={",00"}
                    />
                  </h1>
                </div>

                <Link
                  href={`/katalog/${e.id}`}
                  className="bg-black flex justify-center items-center p-2 rounded-md hover:bg-[#00000068] hover:scale-110 transition-all ease-in-out"
                >
                  <Image
                    src={"/assets/icons/cart.svg"}
                    width="20"
                    height="20"
                    alt="cart"
                    className="w-5 aspect-square"
                  />
                </Link>
              </div>
            </div>
          ))}
        </Suspense>
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
