"use client";

import { useContext, useEffect, useState } from "react";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@/libs/utils";
import { useMediaQuery } from "@mui/material";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/UI/command";
import PortalContext from "@/context/portal";
import { Drawer, DrawerContent } from "@/components/UI/drawer";

export default function Switcher() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const {
    invitation,
    updateInvitation,
    stateSwitcher,
    setStateSwitcher,
    setStateCreateInvitation,
  } = useContext(PortalContext);

  if (isDesktop) {
    return (
      <CommandDialog open={stateSwitcher} onOpenChange={setStateSwitcher}>
        <ListInvitation
          invitation={invitation}
          updateInvitation={updateInvitation}
          setStateCreateInvitation={setStateCreateInvitation}
          setStateSwitcher={setStateSwitcher}
        />
      </CommandDialog>
    );
  }

  return (
    <Drawer open={stateSwitcher} onOpenChange={setStateSwitcher}>
      <DrawerContent>
        <Command className="px-4 py-2">
          <ListInvitation
            invitation={invitation}
            updateInvitation={updateInvitation}
            setStateCreateInvitation={setStateCreateInvitation}
            setStateSwitcher={setStateSwitcher}
          />
        </Command>
      </DrawerContent>
    </Drawer>
  );
}

export function ListInvitation({
  invitation,
  updateInvitation,
  setStateCreateInvitation,
  setStateSwitcher,
}) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [datainvitation, setDataInvitation] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const params = new URLSearchParams({
          search,
          limit: 5,
        });
        const response = await fetch(`/api/invitation?${params.toString()}`);
        const result = await response.json();
        setDataInvitation(result.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [search]);

  return (
    <>
      <CommandList className="h-[50vh]">
        <CommandInput
          placeholder="Search invitation..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandEmpty>No invitation found.</CommandEmpty>
        {loading && <Command.Loading>Fetching words…</Command.Loading>}
        {datainvitation?.map((item) => {
          return (
            <CommandItem
              key={item.id}
              onSelect={() => {
                updateInvitation(item);
                setStateSwitcher(false);
              }}
              className="text-sm"
            >
              <Avatar className="mr-2 h-5 w-5">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${item.id}.png`}
                  alt={item.title}
                  className="grayscale"
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              {item.title}
              <CheckIcon
                className={cn(
                  "ml-auto h-4 w-4",
                  invitation?.id === item.id ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          );
        })}
      </CommandList>
      <CommandSeparator />
      <CommandList>
        <CommandGroup>
          <CommandItem
            className="cursor-pointer"
            onSelect={() => {
              setStateCreateInvitation(true);
              setStateSwitcher(false);
            }}
          >
            <PlusCircledIcon className="mr-2 h-5 w-5" />
            Create Invitation
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </>
  );
}
