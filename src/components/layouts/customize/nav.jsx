"use client";

import { useContext, useEffect, useState } from "react";
import {
  Check,
  Cloud,
  MoreHorizontal,
  PanelLeft,
  PlayCircle,
  Save,
  Share,
} from "lucide-react";
import { Button } from "@/components/UI/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/UI/sheet";
import CustomizeContext from "@/context/CustomizeContext";
import ConfirmSave from "@/components/container/customize/confirm-save";
import PortalContext from "@/context/PortalContext";
import Link from "next/link";
import Image from "next/image";
import { getCookie, hasCookie } from "cookies-next";
import SidebarContent from "@/components/container/customize/sidebar-content";
import { DropdownShare } from "@/components/container/customize/dropdown-share";
import { Input } from "@/components/UI/input";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [alertSave, setAlertSave] = useState(false);
  const { invitation, updateInvitation, setStateSwitcher } =
    useContext(PortalContext);
  const { data, dataContent, setIsEdit } = useContext(CustomizeContext);

  useEffect(() => {
    const selected = hasCookie("invitation")
      ? JSON.parse(getCookie("invitation"))
      : null;

    updateInvitation(selected);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 flex h-14 justify-between items-center border-b px-4 lg:h-[60px] lg:px-6 bg-background">
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
            className="h-full px-2 overflow-y-auto scrollbar-default md:scrollbar-hide"
          >
            <SheetHeader>
              <Link
                href={
                  process.env.NEXT_PUBLIC_ROOT_DOMAIN
                    ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                    : `http://localhost:3000`
                }
                className="flex px-4 items-center gap-4 text-lg font-medium w-fit"
              >
                <Image
                  src="/assets/icons/zoejeton.svg"
                  width={200}
                  height={200}
                  alt="logo"
                  className="h-6 w-6"
                />
                <span className="">ZoeJeton</span>
              </Link>
            </SheetHeader>
            <SidebarContent />
          </SheetContent>
        </Sheet>
        <div className="space-x-4 hidden md:block">
          <Image
            src={"/assets/icons/cloud-success.png"}
            width={24}
            height={24}
            alt="cloud"
          />
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <h1 className="z-10">customize / </h1>
          <Input
            className="bg-transparent px-1 py-1 h-fit w-fit border-none focus-visible:ring-muted focus-visible:ring-offset-0"
            placeholder="Jeton & Zoe"
          />
        </div>

        <div className="flex gap-4">
          <button className="md:hidden block">
            <MoreHorizontal className="w-5 aspect-square" />
          </button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 text-sm"
            onClick={() => setIsEdit(false)}
          >
            <PlayCircle className="w-5 aspect-square" />
            <h1 className="hidden md:block">Preview</h1>
          </Button>

          <DropdownShare>
            <Button
              size="sm"
              className="gap-1.5 text-sm"
              // onClick={() => setAlertSave(true)}
            >
              <Share className="w-5 aspect-square" />
              <h1 className="hidden md:block">Publish</h1>
            </Button>
          </DropdownShare>
        </div>
      </header>

      {/* <ConfirmSave open={alertSave} onOpenChange={setAlertSave} /> */}
    </>
  );
}
