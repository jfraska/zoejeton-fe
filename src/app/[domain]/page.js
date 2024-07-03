"use client";

import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CustomizeContext from "@/context/customize";
import { GlobalStyles } from "@mui/material";
import dynamic from "next/dynamic";
import Loading from "@/app/template/loading";

export default function Publish({ params }) {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const { initData, dataColor, setDataGuest, data } =
    useContext(CustomizeContext);
  const domain = decodeURIComponent(params.domain);

  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(`/api/template/${subdomain}`).then((res) =>
          res.json()
        );
        // if (!response.ok) {
        //   notFound();
        // }
        initData(response.data);
        if (searchParams?.get("guest")) {
          response = await fetch(
            `/api/guest/${searchParams.get(
              "guest"
            )}?invitation=${pathname.slice(1)}`
          ).then((res) => res.json());
          if (!response.ok) {
            return;
          }
          setDataGuest(response.data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    })();
  }, []);

  const Template = dynamic(() => {
    const slug = data.parent ?? data.slug;

    return import(`@/app/template/${slug}/page`).then((module) => ({
      default: module.default,
      ssr: false,
    }));
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Template />{" "}
          <GlobalStyles
            styles={{
              ":root": {
                "--background": dataColor?.value.background,
                "--foreground": dataColor?.value.foreground,

                // primary
                "--primary": dataColor?.value.primary,
                "--primary-foreground": dataColor?.value["primary-foregroundd"],

                // secondary
                "--secondary": dataColor?.value.secondary,
                "--secondary-foreground":
                  dataColor?.value["secondary-foreground"],

                // accent
                "--accent": dataColor?.value.accent,
                "--accent-foreground": dataColor?.value["accent-foreground"],
              },
              body: {
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              },
            }}
          />
        </>
      )}
    </>
  );
}
