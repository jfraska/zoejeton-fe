import {
  ArrowDownRight,
  Cloud,
  Copy,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  Link,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu as DropdownMenuWrapper,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import useCustomize from "@/hooks/useCustomize";
import { getUrl } from "@/lib/utils";

export function DropdownShare({ children }) {
  const { data } = useCustomize();

  return (
    <DropdownMenuWrapper>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="font-medium text-lg">
          Publish Invitation
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="px-2">
          <div className="py-2 text-sm font-medium">Publish URL</div>
          <div className="flex gap-2 h-8">
            <Input disabled className="h-full" />
            <Button className="h-full">
              <Copy size={16} />
            </Button>
          </div>

          <DropdownMenuSeparator className="mt-4" />

          <Button
            variant="outline"
            className="border-none w-full justify-between px-2 py-2"
          >
            <span>Publish settings</span>
            <ArrowDownRight />
          </Button>

          <DropdownMenuSeparator className="mb-2" />

          <Button className="w-full mt-2">Publish</Button>

          <DropdownMenuSeparator className="mt-4" />

          <div className="flex justify-around py-4">
            <div className="w-[20%] text-center">
              <div className="w-full aspect-square rounded-full bg-muted flex justify-center items-center">
                <Link size={20} />
              </div>
              <span className="text-sm w-full">Tamu</span>
            </div>

            <div className="w-[20%] text-center">
              <div className="w-full aspect-square rounded-full bg-muted flex justify-center items-center">
                <Link size={20} />
              </div>
              <span className="text-sm w-full">Generate link</span>
            </div>

            <div className="w-[20%] text-center">
              <div className="w-full aspect-square rounded-full bg-muted flex justify-center items-center">
                <Link size={20} />
              </div>
              <span className="text-sm w-full">Whatsapp</span>
            </div>

            <div className="w-[20%] text-center">
              <div className="w-full aspect-square rounded-full bg-muted flex justify-center items-center">
                <Link size={20} />
              </div>
              <span className="text-sm w-full">Dashboard</span>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenuWrapper>
  );
}
