import Editable from "@/components/container/editable";
import { Runalto } from "@/styles/fonts";

export default function Cover() {
  return (
    <div
      className="relative hidden md:block w-full h-full bg-cover"
      style={{
        backgroundImage: "url('/templates/minimalis/5.heic')",
      }}
      id="cover"
    >
      <div className="absolute bottom-32 left-20 flex flex-col justify-end gap-2 items-start">
        <h2 className="text-xl">THE WEDDING OF</h2>
        <h1 className={`${Runalto.className} text-7xl font-medium`}>
          <Editable type="text" field="heading" section="cover" />
        </h1>
      </div>
    </div>
  );
}
