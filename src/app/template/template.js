"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import CustomizeContext from "@/context/customize";
import { GlobalStyles } from "@mui/material";

import Customize from "@/components/layouts/customize";
import ButtonShare from "@/components/container/button-share";
import ButtonAction from "@/components/container/button-action";
export default function Template({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const { initData, dataColor } = useContext(CustomizeContext);

  const urlShare = process.env.NEXT_PUBLIC_VERCEL_ENV
    ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${pathname}`
    : `http://template.localhost:3000/${pathname}`;

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(`/api/template/${pathname}`);
        let result = await response.json();
        initData(result.data);
        // if (searchParams) {
        //   response = await fetch(
        //     `/api/guest/${searchParams?.get("guest")}?slug=${pathname}`
        //   );
        //   result = await response.json();
        //   setDataGuest(result.data);
        // }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [pathname]);

  // console.log(dataContent, dataColor);
  return (
    <>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <main>{children}</main>

          <ButtonAction handleOpenShare={setIsOpenShare} />
          <ButtonShare
            open={isOpenShare}
            setOpen={setIsOpenShare}
            link={urlShare}
          />
          {/* <Customize /> */}
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

                // card
                "--card": dataColor?.value.card,
                "--card-foreground": dataColor?.value["card-foreground"],
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
