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

export default function RecomendPlatform() {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-medium">Share link</DialogTitle>
          <DialogDescription>
            For a better experience use Google Chrome
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
