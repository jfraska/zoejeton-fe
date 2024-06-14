import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/UI/switch";
import { Cross2Icon, RowSpacingIcon, TokensIcon } from "@radix-ui/react-icons";

export default function ButtonCustomize({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible className="px-2 py-2 bg-neutral-300 rounded-xl">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CollapsibleTrigger asChild>
          <div className="flex gap-2 cursor-pointer text-black">
            <button className="IconButton">
              <TokensIcon />
            </button>
            <h1 className="">{data.key}</h1>
          </div>
        </CollapsibleTrigger>

        <Switch />
      </div>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  );
}
