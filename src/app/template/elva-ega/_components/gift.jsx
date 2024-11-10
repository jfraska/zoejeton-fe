import { Section } from "@/components/container/template/wrapper-template";
import { Button } from "@/components/UI/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/UI/collapsible";
import { Selina } from "@/styles/fonts";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function Gift() {
  const handleCopy = () => {
    navigator.clipboard.writeText("085943146709").then(
      () => {
        toast.success("Berhasil di copy");
      },
      (err) => {
        toast.error("Failed to copy");
      }
    );
  };

  return (
    <Section className="text-secondary-text w-full p-8" id="gift">
      <div className="w-full px-10 py-20">
        <div className="z-20">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className={`${Selina.className} text-4xl font-medium uppercase`}
          >
            Wedding Gift
          </h1>
          <p data-aos="fade-right" data-aos-duration="1000" className="mt-4">
            Kehadiran dan doa restu Anda sudah cukup bagi kami. Namun, jika Anda
            ingin memberikan hadiah, kami menyediakan Amplop Digital untuk
            mempermudah. Terima kasih.
          </p>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <button
                data-aos="fade-right"
                data-aos-duration="1000"
                className="flex items-center justify-center bg-white text-gray-800 px-4 py-1 rounded-full mt-10"
              >
                Klik disini
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex w-full rounded-xl mt-5 p-6 bg-white shadow-lg text-gray-900 backdrop-filter backdrop-blur-md bg-opacity-60">
                <div className="w-full flex flex-col gap-1 ">
                  <h1 className="text-xl font-medium">E-Wallet Dana</h1>
                  <h2 className="text-lg mt-2">0859-4314-6709</h2>
                  <h2>a.n. Elva Asy Syifa Mujahidin</h2>
                </div>
                <Button
                  className="space-x-2 w-fit"
                  type="submit"
                  size="sm"
                  onClick={handleCopy}
                >
                  <Copy className="h-4 w-4" />
                  <span>Copy </span>
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </Section>
  );
}
