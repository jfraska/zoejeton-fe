"use client";

import { useContext, useEffect, useState } from "react";
import InvitationContext from "@/context/invitation";
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/libs/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { Button } from "@/components/UI/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/UI/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";

export default function InvitationSwitcher({ className }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [invitation, setInvitation] = useState([]);
  const { selectedInvitation, selectInvitation } =
    useContext(InvitationContext);

  useEffect(() => {
    (async () => {
      try {
        const params = new URLSearchParams({
          search,
          limit: 5,
        });
        const response = await fetch(`/api/invitation?${params.toString()}`);
        const result = await response.json();
        setInvitation(result.data);
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
          aria-label="Select a team"
          className={cn(
            "w-32 md:w-[200px] text-sm md:text-base justify-between",
            className
          )}
        >
          <Avatar className="mr-2 h-5 w-5 hidden md:block">
            <AvatarImage
              src={`https://avatar.vercel.sh/${selectedInvitation?.id}.png`}
              alt={selectedInvitation?.title}
              className="grayscale"
            />
            <AvatarFallback>JZ</AvatarFallback>
          </Avatar>
          {selectedInvitation?.title}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput
              placeholder="Search invitation..."
              value={search}
              onValueChange={setSearch}
            />
            <CommandEmpty>No invitation found.</CommandEmpty>
            {loading && <Command.Loading>Fetching words…</Command.Loading>}
            {invitation?.map((item) => {
              return (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    selectInvitation(item);
                    setOpen(false);
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
                      selectedInvitation?.id === item.id
                        ? "opacity-100"
                        : "opacity-0"
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
                  setOpen(false);
                  // setShowNewInvitationDialog(true);
                }}
              >
                <PlusCircledIcon className="mr-2 h-5 w-5" />
                Create Invitation
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
