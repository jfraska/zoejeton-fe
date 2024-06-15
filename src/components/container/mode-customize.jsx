"use client";

import * as React from "react";

import { cn } from "@/libs/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/UI/navigation-menu";
import CustomizeContext from "@/context/customize";

export function ModeCustomize({ handleOpenTool = () => {} }) {
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
      click: () => {},
    },
  ];

  return (
    <>
      {isEdit && (
        <NavigationMenu className="fixed top-4 right-4 z-50">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>mode edit</NavigationMenuTrigger>
              <NavigationMenuContent>
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
              "flex gap-2 w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
