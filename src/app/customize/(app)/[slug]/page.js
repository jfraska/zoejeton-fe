"use client";

import ButtonAction from "@/components/container/customize/button-action";
import CustomizeMode from "@/components/layouts/customize/customize-mode";
import useCustomize from "@/hooks/useCustomize";
import dynamic from "next/dynamic";

export default function Page({ params }) {
  const { isEdit } = useCustomize();

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
            src="http://customize.localhost:3000/preview/minimalis?edit"
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