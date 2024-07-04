"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { getCookie, hasCookie } from "cookies-next";
import CustomizeContext from "@/context/customize";
import { GlobalStyles } from "@mui/material";

import CustomizeTool from "@/components/layouts/customize-tool";
import ButtonShare from "@/components/container/button-share";
import ButtonAction from "@/components/container/button-action";
import ModeCustomize from "@/components/container/mode-customize";
import PortalContext from "@/context/portal";
import Loading from "./loading";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const [isOpenTool, setIsOpenTool] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const { initData, dataColor, setDataGuest } = useContext(CustomizeContext);
  const { invitation, setStateSwitcher } = useContext(PortalContext);

  const urlShare = process.env.NEXT_PUBLIC_ROOT_DOMAIN
    ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${pathname}`
    : `http://template.localhost:3000/${pathname}`;

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(`/api/template${pathname}`).then((res) =>
          res.json()
        );

        if (session) {
          const selected = hasCookie("invitation")
            ? JSON.parse(getCookie("invitation"))
            : null;

          if (selected?.template) {
            const template = await fetch(
              `/api/template/${selected.template.slug}`
            ).then((res) => res.json());

            if (template.data > 0) {
              response.data = {
                ...response.data,
                ...template.data,
              };
            }
          } else {
            setStateSwitcher(true);
            return;
          }
        } else {
          const template = localStorage?.getItem("template")
            ? JSON.parse(localStorage.getItem("template"))
            : null;

          if (template) {
            response.data = {
              ...response.data,
              ...template,
            };
          }
        }

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
  }, [invitation]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {children}

          <ButtonAction handleOpenShare={setIsOpenShare} />
          <ModeCustomize handleOpenTool={setIsOpenTool} />
          <ButtonShare
            open={isOpenShare}
            onOpenChange={setIsOpenShare}
            link={urlShare}
          />
          <CustomizeTool open={isOpenTool} setOpen={setIsOpenTool} />
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
