"use client";

import { useContext, useState } from "react";
import { MoreHorizontal, PanelLeft, PlayCircle, Save } from "lucide-react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { Button } from "@/components/UI/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/sheet";
import ButtonCustomize from "@/components/container/button-customize";
import CustomizeContext from "@/context/customize";
import ConfirmSave from "@/components/container/confirm-save";
import { useSession } from "next-auth/react";
import PortalContext from "@/context/portal";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const [alertSave, setAlertSave] = useState(false);
  const { invitation, setStateSwitcher } = useContext(PortalContext);
  const { dataContent, setIsEdit } = useContext(CustomizeContext);

  return (
    <>
      <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 bg-background">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            overlay="false"
            className="h-full overflow-y-auto scrollbar-default md:scrollbar-hide"
          >
            {/* <SheetHeader>
              <SheetTitle className="text-neutral-950 font-medium">
                Customize Tool
              </SheetTitle>
            </SheetHeader> */}
            <h1 className="mt-5 mb-2">Fitur</h1>
            <ButtonCustomize type="color" />

            <h1 className="mt-5">Page</h1>
            <div className="flex flex-col gap-2 mt-2">
              {dataContent?.map((item, index) => (
                <ButtonCustomize key={index} data={item} />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          {session && (
            <Button
              variant="outline"
              onClick={() => setStateSwitcher(true)}
              aria-label="Select a invitation"
              className="md:flex hidden w-32 md:w-[200px] text-sm justify-between"
            >
              <Avatar className="mr-2 h-5 w-5 hidden md:block">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${invitation?.id}.png`}
                  alt={invitation?.title}
                  className="grayscale"
                />
                <AvatarFallback>JZ</AvatarFallback>
              </Avatar>
              {invitation?.title}
              <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        </div>
        <button>
          <MoreHorizontal className="w-5 aspect-square" />
        </button>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto gap-1.5 text-sm"
          onClick={() => setIsEdit(false)}
        >
          <PlayCircle className="w-5 aspect-square" />
          <h1 className="hidden md:block">Preview</h1>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto gap-1.5 text-sm"
          onClick={() => setAlertSave(true)}
        >
          <Save className="w-5 aspect-square" />
          <h1 className="hidden md:block">Save</h1>
        </Button>
      </header>

      <ConfirmSave open={alertSave} onOpenChange={setAlertSave} />
    </>
  );
}
