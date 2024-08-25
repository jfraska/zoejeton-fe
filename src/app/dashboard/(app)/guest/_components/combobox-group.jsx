"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/UI/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { getAllGroup } from "@/services/group-service";
import PortalContext from "@/context/PortalContext";

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [dataGroup, setDataGroup] = React.useState([]);
  const {
    invitation,
  } = React.useContext(PortalContext);

  const handleSelectedGroup = (data) => {
    // updateInvitation(data);
    setStateSwitcher(false);
    toast.success(`${data.name} selected`);
  };

  React.useEffect(() => {
    (async () => {
      try {
        const params = {
          invitation: invitation.id
        };
        // const res = await fetch(`/api/invitation?${params.toString()}`);
        // const result = await res.json();
        const result = await getAllGroup(params);

        if (result.data.data < 1) {
          // create(true);
          return;
        }

        setDataGroup(result.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [search]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {name
            ? dataGroup.find((group) => group.name === name)?.name
            : "Select group..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search group..." value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <CommandList>
            <CommandEmpty>No group found.</CommandEmpty>
            {loading && <CommandLoading>Fetching words…</CommandLoading>}
            <CommandGroup>
              {dataGroup?.map((group) => (
                <CommandItem
                  key={group.id}
                  name={group.name}
                  onSelect={(currentName) => {
                    setName(currentName === name ? "" : currentName);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      name === group.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {group.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
