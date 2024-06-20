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
        <button
          className="w-5 aspect-square rounded border"
          style={{ backgroundColor: color }}
        />
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
