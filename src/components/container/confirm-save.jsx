import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
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

export default function ConfirmSave({ open, onOpenChange }) {
  const router = useRouter();
  const [invitation, setInvitation] = useState(
    hasCookie("invitation") ? JSON.parse(getCookie("invitation")) : null
  );
  const { data: session } = useSession();
  const { saveDraftContent, data, dataContent, dataColor } =
    useContext(CustomizeContext);

  const handleLogin = () => {
    setCookie(
      "template",
      JSON.stringify({
        ...data,
        content: dataContent,
        color: [dataColor, ...data.color],
      }),
      {
        path: "/",
        domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN
          ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
          : null,
      }
    );
    router.push(
      process.env.NEXT_PUBLIC_ROOT_DOMAIN
        ? `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
        : `http://app.localhost:3000`
    );
  };

  const handleSave = async () => {
    if (!session) {
      saveDraftContent();
      onOpenChange(false);
      toast.success("Save draft");
      return;
    }

    if (!invitation) {
      handleLogin();
      return;
    }

    try {
      if (invitation.template) {
        await fetch(`/api/template/${invitation.template.slug}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            content: dataContent,
            color: [dataColor, ...data.color],
          }),
        }).then((res) => res.json());
      } else {
        const response = await fetch(`/api/invitation/${invitation.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...invitation,
            template: {
              ...data,
              content: dataContent,
              color: [dataColor, ...data.color],
            },
          }),
        }).then((res) => res.json());

        setCookie("invitation", JSON.stringify(response.data), {
          path: "/",
          domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN
            ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
            : null,
        });
        setInvitation(response.data);
      }

      onOpenChange(false);
      toast.success("Berhasil disimpan");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white text-black">
        <DialogHeader>
          <DialogTitle className="font-medium">Save Customize</DialogTitle>
          <DialogDescription className="text-[#737373]">
            sign-in untuk menyimpan data secara permanen, atau klik continue
            untuk save draft
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col-reverse gap-2">
          <Button
            className="text-black bg-white border-black border hover:bg-black hover:text-white"
            onClick={handleSave}
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
