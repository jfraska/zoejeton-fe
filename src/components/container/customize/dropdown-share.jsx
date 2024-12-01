import {
  Cloud,
  Copy,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
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

export function DropdownShare({ children }) {
  return (
    <DropdownMenuWrapper>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>
          <div className="group relative w-full aspect-square bg-muted p-1 rounded-xl overflow-hidden">
            <iframe
              src="http://customize.localhost:3000/preview/minimalis"
              className="w-full aspect-9/16 rounded-xl "
            />
            <div className="group-hover:opacity-30 absolute inset-0 bg-black z-10 opacity-5" />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem className="gap-2">
          <span>Publish settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Button className="w-full">Publish</Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled className="gap-2">
          <Cloud />
          <span>Save</span>
          <DropdownMenuShortcut>All changes saved</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuWrapper>
  );
}
