import ButtonTooltip from "@/components/container/button-tooltip";
import SidebarContent from "@/components/container/template/sidebar-content";
import { Button } from "@/components/UI/button";
import { getUrl } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden inset-y-0 fixed left-0 z-20 md:w-[250px] lg:w-[350px] h-full border-r md:block bg-background">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href={getUrl("/")}
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
          <ButtonTooltip content="Dashboard">
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Link href={getUrl("/", "dashboard")}>
                <LayoutDashboard className="h-4 w-4" />
                <span className="sr-only">Toggle Dashboard</span>
              </Link>
            </Button>
          </ButtonTooltip>
        </div>

        <SidebarContent />
      </div>
    </aside>
  );
}
