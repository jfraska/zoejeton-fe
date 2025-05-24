"use client";

import useCustomize from "@/hooks/useCustomize";
import dynamic from "next/dynamic";

export default function Page() {
  const { data } = useCustomize();

  const Invitation = dynamic(async () => {
    const module = await import(`@/templates/${data.path}/page`);
    return {
      default: module.default,
      ssr: false,
    };
  });

  return (
    <main>
      <Invitation />
    </main>
  );
}
