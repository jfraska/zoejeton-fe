import { Runalto } from "@/styles/fonts";

export default function Cover() {
  return (
    <div
      className="relative hidden md:flex w-full h-full bg-cover flex-col justify-end gap-5 items-start p-32"
      style={{
        backgroundImage: "url('/templates/minimalis/5.heic')",
      }}
    >
      <h2 className="text-xl mt-16">THE WEDDING OF</h2>
      <h1 className={`${Runalto.className} text-7xl font-medium`}>
        Jeton & Zoe
      </h1>
    </div>
  );
}
