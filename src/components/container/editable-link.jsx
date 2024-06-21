import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";

export default function EditableLink({ children, name, ...props }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <Label htmlFor="link" className="capitalize">
            {name}
          </Label>
          <Input
            id="link"
            className="bg-white border-[#e5e5e5] ring-offset-white placeholder:text-[#737373] focus-visible:ring-[#0a0a0a]"
            {...props}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
