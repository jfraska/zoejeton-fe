"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { DialogEditDataTable } from "./dialog-edit-data-table";
import { useState } from "react";
import { deleteGuest } from "@/services/guest-service";

// import { labels } from "../data/data";
// import { taskSchema } from "../data/schema";

export function DataTableRowActions({ row }) {
  //   const task = taskSchema.parse(row.original);
  const [edit, setEdit] = useState(false)

  const handleDelete = async () => {
    try {
      await deleteGuest(row.original.id); // Pastikan `id` ada di `row.original`
      console.log("Guest deleted successfully.");
      // Refresh data table or perform additional actions after deletion
    } catch (error) {
      console.error("Error deleting guest:", error);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem><button className="w-full text-left" onClick={() => setEdit(true)}>Edit</button></DropdownMenuItem>
          {/* <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={task.label}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className="w-full text-left" onClick={handleDelete}>Delete</button>
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogEditDataTable setOpen={setEdit} open={edit} />
    </>
  );
}
