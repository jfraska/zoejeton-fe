"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalStyles } from "@mui/material";
import dynamic from "next/dynamic";
import Loading from "@/app/customize/loading";
import CustomizeContext from "@/context/CustomizeContext";
import InvitationService from "@/services/invitation-service";

export default function Publish({ params }) {
  const [loading, setLoading] = useState(true);
  const domain = decodeURIComponent(params.domain);

  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  const { initData, dataColor, setDataGuest, data } =
    useContext(CustomizeContext);

  useEffect(() => {
    (async () => {
      try {
        const res = await InvitationService.showInvitation(`${subdomain}`);

        if (!res.success) {
          throw new Error(res);
        }

        initData(res.data.template);

        // if (searchParams.has("guest")) {
        //   res = await fetch(
        //     `/api/guest/${searchParams.get(
        //       "guest"
        //     )}?invitation=${pathname.slice(1)}`
        //   ).then((res) => res.json());
        //   if (!res.ok) {
        //     return;
        //   }
        //   setDataGuest(res.data);
        // }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    })();
  }, []);

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
