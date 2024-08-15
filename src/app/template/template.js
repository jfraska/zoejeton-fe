"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { getCookie, hasCookie } from "cookies-next";
import CustomizeContext from "@/context/customize";
import PortalContext from "@/context/PortalContext";
import { GlobalStyles } from "@mui/material";

import ButtonAction from "@/components/container/template/button-action";
import CustomizeMode from "@/components/layouts/template/customize-mode";

export default function Template({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const { initData, dataColor, isEdit, deleteDraftContent } =
    useContext(CustomizeContext);
  const { invitation, setStateSwitcher } = useContext(PortalContext);

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
          deleteDraftContent();
        } else if (session) {
          const selected = hasCookie("invitation")
            ? JSON.parse(getCookie("invitation"))
            : null;

          if (!selected) {
            setStateSwitcher(true);
            return;
          }

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
  }, [invitation]);

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
