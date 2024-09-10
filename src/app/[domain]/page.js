"use client";

import { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
import CustomizeContext from "@/context/CustomizeContext";
import { GlobalStyles } from "@mui/material";
import dynamic from "next/dynamic";
import Loading from "@/app/template/loading";

export default function Publish({ params }) {
  const [loading, setLoading] = useState(true);
  // const searchParams = useSearchParams();
  const { initData, dataColor, setDataGuest, data } =
    useContext(CustomizeContext);
  const domain = decodeURIComponent(params.domain);

  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(`/api/template/${subdomain}`);
        if (!res.ok) {
          throw new Error(res);
        }

        let result = await res.json();
        initData(result.data);

        // if (searchParams.has("guest")) {
        //   res = await fetch(
        //     `/api/guest/${searchParams.get(
        //       "guest"
        //     )}?invitation=${pathname.slice(1)}`
        //   ).then((res) => res.json());
        //   if (!res.ok) {
        //     return;
        //   }
        //   setDataGuest(res.data);
        // }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    })();
  }, []);

  const Template = dynamic(async () => {
    const slug = data.parent ?? data.slug;

    const module = await import(`@/app/template/${slug}/page`);
    return {
      default: module.default,
      ssr: false,
    };
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Template />
          <GlobalStyles
            styles={{
              ":root": {
                // primary
                "--primary-bg": dataColor?.value.primary,
                "--primary-text": dataColor?.value["primary-text"],

                // secondary
                "--secondary-bg": dataColor?.value.secondary,
                "--secondary-text": dataColor?.value["secondary-text"],

                // accent
                "--accent-bg": dataColor?.value.accent,
                "--accent-text": dataColor?.value["accent-text"],
              },
              body: {
                backgroundColor: "var(--primary-bg)",
                color: "var(--primary-text)",
              },
            }}
          />
        </>
      )}
    </>
  );
}
