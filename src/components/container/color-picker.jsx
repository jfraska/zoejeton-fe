import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { SketchPicker } from "react-color";

export default function ColorPicker({
  color,
  preset,
  name,
  setColor = () => {},
}) {
  const [state, setState] = useState(color);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex gap-2 p-2 bg-gray-100 rounded-lg">
          <div
            className="w-5 aspect-square rounded border border-gray-300 shadow-sm"
            style={{ backgroundColor: color }}
          />
          <h1>{name}</h1>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={2} className="p-0">
        <SketchPicker
          color={state}
          onChange={setState}
          presetColors={preset}
          onChangeComplete={(e) => setColor(e.hex, name)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
