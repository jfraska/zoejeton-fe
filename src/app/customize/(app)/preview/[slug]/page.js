"use client";

import dynamic from "next/dynamic";

export default function Page({ params }) {
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
    <main>
      <Invitation />
    </main>
  );
}
