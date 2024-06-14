import { Copy } from "lucide-react";

import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import Image from "next/image";
import { toast } from "sonner";

export default function ButtonShare({ link, open = null, setOpen }) {
  const handleCopy = () => {
    const link = document.getElementById("link").value;
    navigator.clipboard.writeText(link).then(
      () => {
        toast.success("Link copied to clipboard");
      },
      (err) => {
        toast.error("Failed to copy");
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {open === null && (
        <DialogTrigger asChild>
          <button className="absolute top-4 right-4 w-10 aspect-square rounded-lg flex justify-center items-center bg-white backdrop-filter backdrop-blur-md bg-opacity-60 shadow-lg transition-all ease-linear duration-100 hover:scale-105 hover:bg-opacity-90 focus:outline-none">
            <Image
              src={"/assets/icons/qrcode.svg"}
              width={30}
              height={30}
              alt=""
              className="w-8 aspect-square"
            />
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-medium">Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={link} readOnly />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
