"use client";

import useSnap from "@/hooks/useSnap";

export default function Page({ params }) {
  const { snapEmbed } = useSnap();

  snapEmbed(params.slug, "snap-container");
  return (
    <section className="flex h-full flex-col gap-4 lg:gap-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Pembayaran</h1>
      </div>
      <div id="snap-container" className="w-full" />
    </section>
  );
}
