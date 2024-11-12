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
      <PopoverContent className="bg-neutral-200">
        <div className="flex flex-col gap-3">
          <Label htmlFor="link" className="capitalize">
            {name}
          </Label>
          <Input id="link" className="focus-visible:ring-0" {...props} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
