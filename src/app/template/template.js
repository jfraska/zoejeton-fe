"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { getCookie, hasCookie } from "cookies-next";
import CustomizeContext from "@/context/customize";
import { GlobalStyles } from "@mui/material";

import ButtonAction from "@/components/container/button-action";
import CustomizeMode from "@/components/layouts/template/customize-mode";
import Loading from "./loading";

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
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {isEdit ? (
            <CustomizeMode>{children}</CustomizeMode>
          ) : (
            <>
              <main>{children}</main>
              <ButtonAction />
            </>
          )}

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
              main: {
                color: "var(--primary-text)",
              },
              body: {
                backgroundColor: "var(--primary-bg)",
              },
            }}
          />
        </>
      )}
    </>
  );
}
