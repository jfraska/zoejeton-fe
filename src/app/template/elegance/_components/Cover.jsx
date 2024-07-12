import { Selina, Catamaran } from "@/styles/fonts";

export default function Cover() {
  return (
    <div
      className="relative hidden md:flex w-full h-full bg-cover bg-top flex-col justify-end gap-5 items-start p-32"
      style={{
        backgroundImage: "url('/templates/elegance/lockscreen.png')",
      }}
    >
      <h2 className={`${Catamaran.className} text-xl mt-16 text-white`}>THE WEDDING OF</h2>
      <h1 className={`${Selina.className} text-7xl font-medium text-white`}>
        Zoel & Cali
      </h1>
    </div>
  );
}
