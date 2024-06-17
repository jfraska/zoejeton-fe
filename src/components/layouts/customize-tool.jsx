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
      <SheetContent side="left" overlay="false">
        <SheetHeader>
          <SheetTitle>Customize Tool</SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
        <h1 className="text-black mt-5">Color</h1>
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
