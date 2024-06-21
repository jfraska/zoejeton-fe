"use client";

import { useMemo, useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Home,
  LineChart,
  Package,
  PanelLeft,
  Search,
  ShoppingCart,
  CircleUser,
  Share,
  PanelsTopLeft,
  SendHorizontal,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/UI/sheet";
import InvitationSwitcher from "@/components/container/invitation-switcher";

export default function Nav() {
  const { data: session } = useSession();
  const segments = useSelectedLayoutSegments();
  const [open, setOpen] = useState(false);

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
        href: "/tamu",
        isActive: segments[0] === "tamu",
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
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
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
            {tabs.map(({ name, href, isActive, icon }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className={`${
                  isActive ? "bg-muted text" : null
                } mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center gap-4 rounded-lg py-2 text-muted-foreground transition-all hover:text-primary">
                  <Image
                    src={
                      session?.user.image ??
                      `https://avatar.vercel.sh/${session?.user.email}`
                    }
                    width={40}
                    height={40}
                    alt={session?.user.name ?? "User avatar"}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm font-medium">
                    {session?.user.name}
                  </span>
                  <div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-end rounded-full">
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">arrow</span>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="right">
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button onClick={() => signOut("github")}>Logout</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <InvitationSwitcher />
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
      <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
        <Share className="w-5 aspect-square" />
        <h1 className="hidden md:block">Publish</h1>
      </Button>
    </header>
  );
}
