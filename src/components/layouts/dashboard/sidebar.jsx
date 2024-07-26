"use client";

import { useMemo } from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Users, Home, SendHorizontal, LogOut, Settings } from "lucide-react";
import { Separator } from "@/components/UI/separator";
import { DescriptionOutlined } from "@mui/icons-material";
import { Badge } from "@/components/UI/badge";
import Notification from "@/components/container/notification";

export default function Sidebar() {
  const { data: session } = useSession();
  const segments = useSelectedLayoutSegments();

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
    <aside className="hidden inset-y fixed left-0 z-20 md:w-[220px] lg:w-[280px] h-full bg-background border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href={
              process.env.NEXT_PUBLIC_ROOT_DOMAIN
                ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                : `http://localhost:3000`
            }
            className="flex items-center gap-4 font-medium"
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
          <Notification />
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {tabs.map(({ name, href, isActive, icon }) => (
              <Link
                key={name}
                href={href}
                className={`${
                  isActive ? "bg-muted text" : null
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto py-4 px-2 lg:px-4">
          <Link
            href="/setting"
            className={`${
              segments[0] === "setting" ? "bg-muted text" : null
            } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
          >
            <Settings className="w-5 aspect-square" />
            <span className="text-sm font-medium">Setting</span>
            <Badge className="ml-auto flex h-6 px-2 bg-muted-foreground shrink-0 items-center justify-center rounded-md font-normal">
              Unpaid
            </Badge>
          </Link>
          <Separator className="my-2" />
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Image
              src={
                session?.user.image ??
                `https://avatar.vercel.sh/${session?.user.email}`
              }
              width={40}
              height={40}
              alt={session?.user.name ?? "User avatar"}
              className="h-6 w-6 rounded-full"
              onClick={() => signOut("github")}
            />
            <span className="text-sm font-medium">{session?.user.name}</span>
            <div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-end rounded-full">
              <LogOut className="w-5 aspect-square" />
              <span className="sr-only">arrow</span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
}
