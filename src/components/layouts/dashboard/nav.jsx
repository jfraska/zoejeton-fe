"use client";

import { useContext, useMemo, useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import PortalContext from "@/context/portal";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Home,
  PanelLeft,
  Share,
  SendHorizontal,
  ChevronRight,
  UserPlus,
} from "lucide-react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/UI/sheet";
import { DescriptionOutlined } from "@mui/icons-material";
import { Separator } from "@/components/UI/separator";
import { TeamMembers } from "@/components/container/team-members";

export default function Nav() {
  const { data: session } = useSession();
  const segments = useSelectedLayoutSegments();
  const [open, setOpen] = useState(false);
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
            <Link
              href="/invoice"
              className={`${
                segments[0] === "invoice" ? "bg-muted text" : null
              } flex items-center gap-3 rounded-lg py-2 text-muted-foreground transition-all hover:text-primary`}
            >
              <DescriptionOutlined width={18} />
              <span className="text-sm font-medium">Invoice</span>
            </Link>
            <Separator className="my-2" />
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
          {invitation?.title}
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <UserPlus className="w-5 aspect-square" />
            <h1 className="hidden md:block">Share</h1>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="p-0 relative w-80">
          <TeamMembers />
        </DropdownMenuContent>
        {/* <Card className="rounded-none border-none bg-transparent shadow-none"></Card> */}
      </DropdownMenu>

      {/* {invitation?.templateId ? ( */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="w-5 aspect-square" />
            <h1 className="hidden md:block">Publish</h1>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="bottom">
          <DropdownMenuLabel>Preview</DropdownMenuLabel>
          <DropdownMenuItem>
            {/* <Link
              href={
                process.env.NEXT_PUBLIC_ROOT_DOMAIN
                  ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${invitation.slug}`
                  : `http://template.localhost:3000/${invitation.slug}`
              }
              className="h-6 text-sm bg-background border border-input px-3 rounded-md"
            >
              {process.env.NEXT_PUBLIC_ROOT_DOMAIN
                ? `template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${invitation.slug}`
                : `template.localhost:3000/${invitation.slug}`}
            </Link> */}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button className="w-full">Publish</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* ) : (
        <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
          <Share className="w-5 aspect-square" />
          <h1 className="hidden md:block">Publish</h1>
        </Button>
      )} */}
    </header>
  );
}
