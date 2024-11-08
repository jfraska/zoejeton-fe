"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AuthService from "@/services/auth-service";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import LoadingDots from "@/components/icons/loading-dots";

const formSchema = z.object({
  email: z.string().email({ message: "Masukkan alamat email yang benar" }),
  password: z.string().min(1, { message: "Password tidak boleh kosong" }),
});

export default function CredentialLogin() {
  const { login, loading, setLoading } = useAuth();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (payload) => {
    try {
      setLoading(true);
      const auth = await AuthService.login(payload);
      login(auth?.data);
      form.reset();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error(
        "Login tidak berhasil. Silakan periksa kembali email dan password Anda."
      );
    }
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="zoe@example.com"
                  type="email"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <Input
                  placeholder="password"
                  type="password"
                  {...field}
                  className="focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit" className="w-full">
          {loading ? <LoadingDots color="#A8A29E" /> : "Login"}
        </Button>
      </form>
    </Form>
  );
}
