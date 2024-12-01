"use client";

import { GlobalStyles } from "@mui/material";

import useCustomize from "@/hooks/useCustomize";

export default function Template({ children }) {
  const { loading, dataColor } = useCustomize();

  return (
    <>
      {!loading && (
        <>
          {children}

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
