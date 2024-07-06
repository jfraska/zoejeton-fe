import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/UI/dialog";
import { Button } from "@/components/UI/button";
import CustomizeContext from "@/context/customize";

export default function ConfirmSave({ open, onOpenChange }) {
  const [invitation, setInvitation] = useState(
    hasCookie("invitation") ? JSON.parse(getCookie("invitation")) : null
  );
  const router = useRouter();
  const { data: session } = useSession();
  const { saveDraftContent, deleteDraftContent, data, dataContent, dataColor } =
    useContext(CustomizeContext);

  useEffect(() => {
    (async () => {
      try {
        const local = localStorage.getItem("template")
          ? JSON.parse(localStorage.getItem("template"))
          : null;

        if (!local) return;

        await handleSave();
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    })();
  }, []);

  const handleLogin = () => {
    saveDraftContent();
    router.push(
      process.env.NEXT_PUBLIC_ROOT_DOMAIN
        ? `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}?template=${data.id}&back=true`
        : `http://app.localhost:3000?template=${data.id}&back=true`
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
      saveDraftContent();
      router.push(
        process.env.NEXT_PUBLIC_ROOT_DOMAIN
          ? `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}?back=true`
          : `http://app.localhost:3000?back=true`
      );
      return;
    }

    try {
      if (invitation.templateId) {
        await fetch(`/api/template/${invitation.templateId}`, {
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
        const response = await fetch(
          `/api/invitation/${invitation.templateId}`,
          {
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
          }
        ).then((res) => res.json());

        setCookie("invitation", JSON.stringify(response.data), {
          path: "/",
          domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN
            ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
            : null,
        });
        setInvitation(response.data);
      }

      toast.success("Berhasil disimpan");
      onOpenChange(false);
      deleteDraftContent();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    if (open && session) {
      handleSave();
    }
  }, [open]);

  if (!session) {
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
}
