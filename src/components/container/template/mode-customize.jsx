"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/UI/navigation-menu";
import CustomizeContext from "@/context/customize";
import ConfirmSave from "@/components/container/template/confirm-save";

export default function ModeCustomize({ handleOpenTool = () => {} }) {
  const [alertSave, setAlertSave] = React.useState(false);
  const { isEdit, setIsEdit } = React.useContext(CustomizeContext);

  const components = [
    {
      title: "Edit tool",
      click: () => {
        handleOpenTool(true);
      },
    },
    {
      title: "Preview",
      click: () => {
        setIsEdit(false);
      },
    },
    {
      title: "Save",
      click: () => setAlertSave(true),
    },
  ];

  return (
    <>
      {isEdit && (
        <NavigationMenu className="fixed top-4 right-4 z-50">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-white text-[#0a0a0a] hover:bg-[#f6f6f6] hover:text-[#0a0a0a] focus:bg-[#f6f6f6] focus:text-[#0a0a0a] data-[active]:bg-[#f6f6f6]/50 data-[state=open]:bg-[#f6f6f6]/50">
                mode edit
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="grid gap-2 p-2 w-[100px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      onClick={component.click}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

      <ConfirmSave open={alertSave} onOpenChange={setAlertSave} />
    </>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <button
            ref={ref}
            className={cn(
              "flex gap-2 w-full select-none space-y-1 rounded-md p-3 text-[#0a0a0a] leading-none no-underline outline-none transition-colors hover:bg-[#f6f6f6] hover:text-[#0a0a0a] focus:bg-[#f6f6f6] focus:text-[#0a0a0a]",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </button>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
