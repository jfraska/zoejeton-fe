import { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
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
import PortalContext from "@/context/portal";
import axios from "axios";

export default function ConfirmSave({ open, onOpenChange }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { saveDraftContent, deleteDraftContent, data, dataContent, dataColor } =
    useContext(CustomizeContext);
  const { invitation, updateInvitation, setStateSwitcher } =
    useContext(PortalContext);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("save")) {
      handleSave();
      router.push(data.slug);
    }
  }, [searchParams]);

  const handleLogin = () => {
    saveDraftContent();
    router.push(
      `${
        process.env.NEXT_PUBLIC_ROOT_DOMAIN
          ? `https://dashboard.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
          : `http://dashboard.localhost:3000`
      }?&back=${data.slug}`
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
      setStateSwitcher(true);
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
            color: [dataColor],
          }),
        }).then((res) => res.json());

        if (!res.ok) throw new Error("Save gagal");

        deleteDraftContent();
        onOpenChange(false);
        toast.success("Berhasil disimpan");
        return;
      }

      const res = await axios.put(
        `/api/invitation/${invitation.id}`,
        {
          ...invitation,
          template: {
            ...data,
            slug: invitation.subdomain,
            parent: data.slug,
            content: dataContent,
            color: [dataColor],
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status !== 200) {
        throw new Error(res);
      }

      const { data } = res;

      updateInvitation(data);

      deleteDraftContent();
      onOpenChange(false);
      toast.success("Berhasil disimpan");
    } catch (error) {
      toast.error(error.statusText);
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  if (!session) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-medium">Save Customize</DialogTitle>
            <DialogDescription>
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
