import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
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
import CustomizeContext from "@/context/customize";
import PortalContext from "@/context/portal";

export default function ConfirmSave({ open, onOpenChange }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { saveDraftContent, data, dataContent, dataColor } =
    useContext(CustomizeContext);
  const { invitation, updateTemplate } = useContext(PortalContext);

  const handleLogin = () => {
    updateTemplate({
      ...data,
      content: dataContent,
      color: [dataColor, ...data.color],
    });
    // router.push(
    //   process.env.NEXT_PUBLIC_ROOT_DOMAIN
    //     ? `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
    //     : `http://app.localhost:3000`
    // );
  };

  const handleSaveDatabase = async () => {
    try {
      if (!invitation) {
        handleLogin();
      }

      const response = await fetch(
        `/api/template/${invitation.template.slug}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            content: dataContent,
            color: [dataColor, ...data.color],
          }),
        }
      ).then((res) => res.json());

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

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
              session ? handleSaveDatabase() : saveDraftContent();

              onOpenChange(false);
              toast.success("Save berhasil");
            }}
          >
            Continue
          </Button>
          {!session && (
            <Button
              className="bg-black hover:bg-white hover:text-black"
              onClick={handleLogin}
            >
              Sign in
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
