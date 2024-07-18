"use client";

import { useContext } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ButtonCustomize from "@/components/container/button-customize";
import CustomizeContext from "@/context/customize";
import { Button } from "@/components/UI/button";
import { LayoutDashboard } from "lucide-react";
import ButtonTooltip from "@/components/container/button-tooltip";

export default function Sidebar() {
  const { data: session } = useSession();
  const { dataContent } = useContext(CustomizeContext);

  return (
    <aside className="hidden inset-y-0 fixed left-0 z-20 md:w-[250px] lg:w-[320px] h-full border-r md:block bg-background">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-4 font-medium">
            <Image
              src="/assets/icons/zoejeton.svg"
              width={200}
              height={200}
              alt="logo"
              className="h-6 w-6"
            />
            <span className="">ZoeJeton</span>
          </Link>
          <ButtonTooltip content="Dashboard">
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Link
                href={
                  process.env.NEXT_PUBLIC_ROOT_DOMAIN
                    ? `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                    : `http://app.localhost:3000`
                }
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="sr-only">Toggle Dashboard</span>
              </Link>
            </Button>
          </ButtonTooltip>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-default md:scrollbar-hide">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <h1 className="mt-5 mb-2">Fitur</h1>
            <ButtonCustomize type="color" />

            <h1 className="mt-5">Page</h1>
            <div className="flex flex-col gap-2 mt-2">
              {dataContent?.map((item, index) => (
                <ButtonCustomize key={index} data={item} />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
}
