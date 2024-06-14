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

export default function Customize() {
  const { dataContent } = useContext(CustomizeContext);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="fixed top-4 right-4 w-10 aspect-square z-10 flex justify-center items-center rounded-lg bg-white backdrop-filter backdrop-blur-md bg-opacity-60 shadow-lg transition-all ease-linear duration-100 hover:scale-105 hover:bg-opacity-90 focus:outline-none"></button>
      </SheetTrigger>
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
