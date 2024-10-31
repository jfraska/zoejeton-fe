"use client";

import { GlobalStyles } from "@mui/material";

import ButtonAction from "@/components/container/template/button-action";
import CustomizeMode from "@/components/layouts/template/customize-mode";
import useCustomize from "@/hooks/useCustomize";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  const { loading, isEdit, dataColor } = useCustomize(pathname);

  return (
    <>
      {!loading && (
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
                "--primary-bg": dataColor.value.primary,
                "--primary-text": dataColor.value["primary-text"],

                // secondary
                "--secondary-bg": dataColor.value.secondary,
                "--secondary-text": dataColor.value["secondary-text"],

                // accent
                "--accent-bg": dataColor.value.accent,
                "--accent-text": dataColor.value["accent-text"],

                //breakpoint
                "--mobile": isEdit ? "	640px" : "768px",
                "--tablet": isEdit ? "	1536px" : "1024px",
                "--desktop": isEdit ? "	1536px" : "1280px",
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
