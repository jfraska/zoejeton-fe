"use client";

import { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
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
import { generateSlug } from "@/lib/utils";
import PortalContext from "@/context/PortalContext";

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "title minimal 2 karakter" })
    .max(20, { message: "title tidak boleh lebih dari 20 karakter" }),
  subdomain: z.string().max(20),
  template: z.string().optional(),
});

export default function CreateInvitation() {
  const { updateInvitation, stateCreateInvitation, setStateCreateInvitation } =
    useContext(PortalContext);
  // const searchParams = useSearchParams();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subdomain: "",
      template: "",
    },
  });

  const onSubmit = async (e) => {
    try {
      let data = {
        ...e,
      };

      console.log(e);

      // if (template) {
      //   data = {
      //     ...data,
      //     template: {
      //       ...template,
      //       title: e.title,
      //       slug: e.subdomain,
      //       parent: template.slug,
      //     },
      //   };
      // }

      const res = await fetch("/api/invitation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(res);
      }

      const result = await res.json();

      updateInvitation(result.data);
      setStateCreateInvitation(false);
      form.reset();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

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
            <div className="space-y-4 py-2 pb-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jeton & Zoe"
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
              {/* <FormField
                  control={form.control}
                  name="paket"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Paket</FormLabel>
                      <FormControl>
                        <Input {...field} value={template?.title} readOnly />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline" onClick={form.reset}>
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button
                type="submit"
                onClick={() => {
                  form.setValue("subdomain", generateSlug(form.watch("title")));
                }}
              >
                Create
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
