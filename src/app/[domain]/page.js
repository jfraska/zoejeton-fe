"use client";

import { GlobalStyles } from "@mui/material";
import dynamic from "next/dynamic";
import Loading from "@/app/template/loading";
import useCustomize from "@/hooks/useCustomize";

export default function Publish({ params }) {
  const domain = decodeURIComponent(params.domain);

  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  const { loading, data, dataColor } = useCustomize(`/${subdomain}`);

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
