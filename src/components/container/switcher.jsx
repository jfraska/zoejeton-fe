"use client";

import { useContext, useEffect, useState } from "react";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
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
  CommandLoading,
  CommandSeparator,
} from "@/components/UI/command";
import PortalContext from "@/context/PortalContext";
import { Drawer, DrawerContent } from "@/components/UI/drawer";
import { toast } from "sonner";
import { getAllInvitation } from "@/services/invitation-service";

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
      <CommandDialog
        open={stateSwitcher}
        onOpenChange={setStateSwitcher}
        className="p-2"
      >
        <ListInvitation
          invitation={invitation}
          create={setStateCreateInvitation}
          updateInvitation={updateInvitation}
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
            create={setStateCreateInvitation}
            updateInvitation={updateInvitation}
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
  setStateSwitcher,
  create,
}) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [datainvitation, setDataInvitation] = useState(null);

  const handleSelectedInvitation = (data) => {
    updateInvitation(data);
    setStateSwitcher(false);
    toast.success(`${data.title} selected`);
  };

  useEffect(() => {
    (async () => {
      try {
        const params = {
          filters: {
            title: {
              $contains: search,
            },
          },
        };

        const result = await getAllInvitation(params);

        if (result.data.data < 1) {
          create(true);
          setStateSwitcher(false);
          return;
        }

        setDataInvitation(result.data.data);
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
        {loading && <CommandLoading>Fetching words…</CommandLoading>}
        {datainvitation?.map((item) => {
          return (
            <CommandItem
              key={item.id}
              onSelect={() => handleSelectedInvitation(item)}
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
              create(true);
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
