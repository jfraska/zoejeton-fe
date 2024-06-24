import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/UI/dialog";
import { Button } from "@/components/UI/button";

export default function ConfirmSave({ open, onOpenChange, handleSave }) {
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm bg-white text-black">
        <DialogHeader>
          <DialogTitle>Save Customize</DialogTitle>
          <DialogDescription className="text-[#737373]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col-reverse gap-2">
          <Button
            className="text-black bg-white border-black border hover:bg-black hover:text-white"
            onClick={() => {
              handleSave();
              onOpenChange(false);
              toast.success("berhasil disave");
            }}
          >
            Continue
          </Button>
          <Button
            className="bg-black hover:bg-white hover:text-black"
            onClick={() =>
              router.push(
                process.env.NEXT_PUBLIC_VERCEL_ENV
                  ? `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                  : `http://app.localhost:3000`
              )
            }
          >
            Sign in
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
