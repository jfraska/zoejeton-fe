"use client";

import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PortalContext from "@/context/portal";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/UI/dialog";
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
  const {
    stateCreateInvitation,
    setStateCreateInvitation,
    updateInvitation,
    template,
    updateTemplate,
  } = useContext(PortalContext);

  useEffect(() => {
    (async () => {
      try {
        if (searchParams.get("template")) {
          const response = await fetch(
            `/api/template/${searchParams.get("template")}`
          ).then((res) => res.json());

          updateTemplate(response.data);
          return;
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    })();
  }, []);

  console.log(template);

  const onSubmit = async (e) => {
    try {
      const data = template && {
        ...template,
        title: e.title,
        slug: e.subdomain,
        parent: template.slug,
      };

      const response = await fetch("/api/invitation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: e.title,
          // template: data,
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
      template: template?.title,
      fitur: searchParams.get("fitur") ?? [],
      addon: searchParams.get("addon") ?? [],
    },
  });

  return (
    <Dialog
      open={stateCreateInvitation}
      onOpenChange={setStateCreateInvitation}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Invitaion</DialogTitle>
          <DialogDescription>Add a new invitation</DialogDescription>
        </DialogHeader>
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
                          <Input {...field} readOnly />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
