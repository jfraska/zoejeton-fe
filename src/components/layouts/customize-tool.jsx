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

export default function CustomizeTool({ open, setOpen }) {
  const { dataContent } = useContext(CustomizeContext);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="left"
        overlay="false"
        className="h-full overflow-y-auto scrollbar-default md:scrollbar-hide"
      >
        <SheetHeader>
          <SheetTitle>Customize Tool</SheetTitle>
        </SheetHeader>
        <h1 className="text-black mt-5 mb-2">Fitur</h1>
        <ButtonCustomize type="color" />

        <h1 className="text-black mt-5">Page</h1>
        <div className="flex flex-col gap-2 mt-2">
          {dataContent?.map((item, index) => (
            <ButtonCustomize key={index} data={item} />
          ))}
        </div>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
