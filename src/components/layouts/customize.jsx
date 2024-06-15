import { useContext } from "react";
import CustomizeContext from "@/context/customize";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/sheet";
import ButtonCustomize from "@/components/container/button-customize";

export default function Customize({ open, setOpen }) {
  const { dataContent } = useContext(CustomizeContext);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Customize Section</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-2 mt-5">
          {dataContent?.map((item, index) => (
            <ButtonCustomize key={index} data={item} />
          ))}
        </div>

        <SheetFooter>
          <button
            className="mt-6 flex justify-between uppercase py-2 px-2 items-center w-full bg-black text-white rounded-xl hover:bg-[#00000068] transition-all ease-in-out"
            onClick={() => router.push(`${urlCheckout}/katalog/${data?.id}`)}
          >
            <h1>Save</h1>
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
