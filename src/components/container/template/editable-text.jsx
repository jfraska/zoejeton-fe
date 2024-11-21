import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";

export default function EditableText({ children, date, setDate }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="bg-slate-200" side="top">
        
      </PopoverContent>
    </Popover>
  );
}
