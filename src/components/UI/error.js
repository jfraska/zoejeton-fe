"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.refresh()}
      className="flex justify-center items-center gap-2 px-2 py-1 border border-neutral-300 rounded-full w-fit mx-auto"
    >
      <span className="w-4 aspect-square text-black icon-[ant-design--reload-outlined]" />
      <h1>reload</h1>
    </button>
  );
}
