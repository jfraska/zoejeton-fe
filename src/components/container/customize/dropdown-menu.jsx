import {
  Cloud,
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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";

export function DropdownMenu({ children }) {
  return (
    <DropdownMenuWrapper>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80">
        <DropdownMenuLabel className="text-xl">
          Judul Invitation
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          20 - 21 September 2024
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <User />
          <span>Buat invitaion baru</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <CreditCard />
          <span>Billing</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
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
