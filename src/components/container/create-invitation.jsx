"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PortalContext from "@/context/portal";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/UI/alert-dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { generateSlug } from "@/libs/utils";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  template: z.string().optional(),
  fitur: z.array().optional(),
  addon: z.array().optional(),
});

export default function CreateInvitation() {
  const searchParams = useSearchParams();
  const [template, setTemplate] = useState(null);
  const router = useRouter();
  const {
    stateCreateInvitation,
    setStateCreateInvitation,
    invitation,
    updateInvitation,
  } = useContext(PortalContext);

  useEffect(() => {
    (async () => {
      try {
        if (searchParams.get("template")) {
          const response = await fetch(
            `/api/template/${searchParams.get("template")}`
          ).then((res) => res.json());

          setTemplate(response.data);
          setStateCreateInvitation(true);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    })();

    if (searchParams.get("back") && invitation) {
      router.back();
    }
  }, [invitation]);

  const onSubmit = async (e) => {
    try {
      setTemplate(
        template && {
          ...template,
          title: e.title,
          slug: e.subdomain,
          parent: template.slug,
        }
      );

      const response = await fetch("/api/invitation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: e.title,
          template,
          fitur: e.fitur,
          addon: e.addon,
        }),
      }).then((res) => res.json());

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      updateInvitation(response.data);
      setStateCreateInvitation(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subdomain: "",
      template: "",
      fitur: searchParams.get("fitur") ?? [],
      addon: searchParams.get("addon") ?? [],
    },
  });

  return (
    <AlertDialog
      open={stateCreateInvitation}
      onOpenChange={setStateCreateInvitation}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create Invitaion</AlertDialogTitle>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <div className="space-y-4 py-2 pb-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="jeton & zoe"
                          {...field}
                          className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subdomain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subdomain</FormLabel>
                      <FormControl>
                        <div className="flex w-full">
                          <Input
                            placeholder="jeton-zoe"
                            {...field}
                            value={generateSlug(form.watch("title", ""))}
                            readOnly
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                          <div className="flex items-center rounded-r-lg border border-l-0 border-stone-200 bg-stone-100 px-3 text-sm dark:border-stone-600 dark:bg-stone-800 dark:text-stone-400">
                            .
                            {process.env.NEXT_PUBLIC_ROOT_DOMAIN ??
                              "localhost:3000"}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {template && (
                  <FormField
                    control={form.control}
                    name="template"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Template</FormLabel>
                        <FormControl>
                          <Input {...field} value={template?.title} readOnly />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button type="submit">Create</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
