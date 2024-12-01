"use client";

import { useContext, useMemo, useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import PortalContext from "@/context/PortalContext";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Home,
  PanelLeft,
  SendHorizontal,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { Button } from "@/components/UI/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/UI/sheet";
import { Separator } from "@/components/UI/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/UI/collapsible";
import { Badge } from "@/components/UI/badge";
import ButtonPublish from "@/components/container/customize/button-publish";
import { useAuth } from "@/hooks/useAuth";

export default function Nav() {
  const { session, logout } = useAuth();
  const segments = useSelectedLayoutSegments();
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { invitation, setStateSwitcher } = useContext(PortalContext);

  const tabs = useMemo(() => {
    return [
      {
        name: "Dashboard",
        href: "/",
        isActive: segments.length === 0,
        icon: <Home width={18} />,
      },
      // {
      //   name: "Template",
      //   href: "/template",
      //   isActive: segments[0] === "template",
      //   icon: <PanelsTopLeft width={18} />,
      // },
      {
        name: "Tamu",
        href: "/guest",
        isActive: segments[0] === "guest",
        icon: <Users width={18} />,
      },
      {
        name: "Share",
        href: "/share",
        isActive: segments[0] === "share",
        icon: <SendHorizontal width={18} />,
      },
    ];
  }, [segments]);

  return (
    <header className="sticky top-0 z-10 flex h-14 bg-background items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetHeader>
            <Link
              href={
                process.env.NEXT_PUBLIC_ROOT_DOMAIN
                  ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                  : `http://localhost:3000`
              }
              className="flex items-center gap-4 text-lg font-medium"
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
          <nav className="space-y-2 text-lg font-medium">
            {tabs.map(({ name, href, isActive, icon }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className={`${
                  isActive ? "bg-muted text" : null
                } flex items-center gap-4 rounded-xl p-2 text-muted-foreground hover:text-foreground`}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-2">
            <Link
              href="/settings"
              className={`${
                segments[0] === "settings" ? "bg-muted text" : null
              } flex items-center gap-3 rounded-lg p-2 text-muted-foreground transition-all hover:text-primary`}
              onClick={() => setOpen(false)}
            >
              <Settings className="w-5 aspect-square" />
              <span className="text-sm font-medium">Setting</span>
              <Badge className="ml-auto flex h-6 px-2 bg-muted-foreground shrink-0 items-center justify-center rounded-md font-normal">
                Unpaid
              </Badge>
            </Link>
            {/* <Separator className="my-2" /> */}
            <Collapsible open={openProfile} onOpenChange={setOpenProfile}>
              <CollapsibleTrigger asChild>
                <button className="flex w-full items-center gap-3 rounded-lg p-2 text-muted-foreground transition-all hover:text-primary">
                  <Image
                    src={
                      session?.user.linked_social_accounts[0]?.avatar ??
                      `https://avatar.vercel.sh/${session?.user.email}`
                    }
                    width={40}
                    height={40}
                    alt={session?.user.name ?? "User avatar"}
                    className="w-5 aspect-square rounded-full"
                  />
                  <span className="text-sm font-medium truncate">
                    {session?.user.name}
                  </span>
                  <div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-end rounded-full">
                    <ChevronDown
                      className={`${
                        openProfile ? "rotate-180" : "rotate-0"
                      } transition-all duration-100 ease-in-out w-5 aspect-square`}
                    />
                    <span className="sr-only">arrow</span>
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                <Separator className="my-2" />
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className={`${
                    segments[0] === "profile" ? "bg-muted text" : null
                  } flex items-center gap-3 rounded-lg p-2 text-muted-foreground transition-all hover:text-primary`}
                >
                  <User className="w-5 aspect-square" />
                  <span className="text-sm font-medium">Ubah Profile</span>
                </Link>
                <button
                  className={`w-full flex items-center gap-3 rounded-lg p-2 text-muted-foreground transition-all hover:text-primary`}
                  onClick={logout}
                >
                  <LogOut className="w-5 aspect-square" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <Button
          variant="outline"
          onClick={() => setStateSwitcher(true)}
          aria-label="Select a invitation"
          className="w-32 md:w-[200px] text-sm justify-between"
        >
          <Avatar className="mr-2 h-5 w-5 hidden md:block">
            <AvatarImage
              src={`https://avatar.vercel.sh/${invitation?.id}.png`}
              alt={invitation?.title}
              className="grayscale"
            />
            <AvatarFallback>JZ</AvatarFallback>
          </Avatar>
          <h1 className="truncate">{invitation?.title}</h1>
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </div>
      {/* <form>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </form> */}

      <ButtonPublish />
    </header>
  );
}
