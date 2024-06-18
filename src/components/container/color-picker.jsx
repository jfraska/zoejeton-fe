import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker({
  color,
  preset,
  name,
  setColor = () => {},
}) {
  const [state, setState] = useState(color);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="w-5 aspect-square rounded"
          style={{ backgroundColor: color }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-0 w-fit">
        <SketchPicker
          color={state}
          onChange={setState}
          presetColors={preset}
          onChangeComplete={(e) => setColor(e.hex, name)}
        />
      </PopoverContent>
    </Popover>
  );
}
