"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import CustomizeContext from "@/context/customize";
import { GlobalStyles } from "@mui/material";

import Customize from "@/components/container/customize";
import DrawerShare from "@/components/container/drawer-share";

export default function Template({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setDataContent, dataColor, setDataColor } =
    useContext(CustomizeContext);

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(`/api/template/${pathname}`);
        let result = await response.json();
        setDataContent(result.data);
        setDataColor(result.data.color[0]);
        if (searchParams) {
          response = await fetch(
            `/api/guest/${searchParams?.get("guest")}?slug=${pathname}`
          );
          result = await response.json();
          setDataGuest(result.data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log(dataColor);
  return (
    <>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <main>{children}</main>

          <DrawerShare />
          <Customize />
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
