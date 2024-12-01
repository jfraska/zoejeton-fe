"use client";

import ButtonAction from "@/components/container/customize/button-action";
import CustomizeMode from "@/components/layouts/customize/customize-mode";
import useCustomize from "@/hooks/useCustomize";
import { getUrl } from "@/lib/utils";
import dynamic from "next/dynamic";

export default function Page({ params }) {
  const { isEdit, data } = useCustomize();

  const Invitation = dynamic(async () => {
    const module = await import(
      `@/app/customize/_invitations/${params.slug}/page`
    );
    return {
      default: module.default,
      ssr: false,
    };
  });

  return (
    <>
      {isEdit ? (
        <CustomizeMode>
          <iframe
            className="w-full h-full"
            src={getUrl(`/preview/${data.slug}?edit`, "customize")}
          />
        </CustomizeMode>
      ) : (
        <>
          <main>
            <Invitation />
          </main>
          <ButtonAction />
        </>
      )}
    </>
  );
}
