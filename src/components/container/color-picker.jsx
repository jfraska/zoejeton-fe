import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { SketchPicker } from "react-color";

export default function ColorPicker({ color, name, setColor = () => {} }) {
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
          color={"black"}
          onChangeComplete={(e) => setColor(e.hex, name)}
        />
      </PopoverContent>
    </Popover>
  );
}
