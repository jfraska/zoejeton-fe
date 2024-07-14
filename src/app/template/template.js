"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { getCookie, hasCookie } from "cookies-next";
import CustomizeContext from "@/context/customize";
import { GlobalStyles } from "@mui/material";

import ButtonAction from "@/components/container/button-action";
import CustomizeMode from "@/components/layouts/template/customize-mode";

export default function Template({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const { initData, dataColor, isEdit } = useContext(CustomizeContext);

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(`/api/template${pathname}`).then((res) =>
          res.json()
        );

        const local = localStorage?.getItem("template")
          ? JSON.parse(localStorage.getItem("template"))
          : null;

        if (local) {
          res.data = {
            ...res.data,
            ...local,
          };
        } else {
          const selected = hasCookie("invitation")
            ? JSON.parse(getCookie("invitation"))
            : null;

          if (selected?.templateId) {
            const template = await fetch(
              `/api/template/${selected.templateId}`
            ).then((res) => res.json());

            if (template.data > 0) {
              res.data = {
                ...res.data,
                ...template.data,
              };
            }
          }
        }

        initData(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div />
      ) : (
        <>
          {isEdit ? (
            <CustomizeMode>{children}</CustomizeMode>
          ) : (
            <>
              <div className="relative w-full h-screen">{children}</div>
              <ButtonAction />
            </>
          )}

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
