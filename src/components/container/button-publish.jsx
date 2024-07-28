import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/UI/drawer";
import { Button } from "@/components/UI/button";
import { Share } from "lucide-react";

export default function ButtonPublish() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
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
        <DropdownMenuContent
          align="end"
          side="bottom"
          className="w-screen max-w-sm"
        >
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
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
          <Share className="w-5 aspect-square" />
          <h1 className="hidden md:block">Publish</h1>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerFooter>
          <Button className="w-full">Publish</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function Publish() {}
