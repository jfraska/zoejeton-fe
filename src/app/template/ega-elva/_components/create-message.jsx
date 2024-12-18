import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import LoadingDots from "@/components/icons/loading-dots";
import { Selina } from "@/styles/fonts";
import GreetingService from "@/services/greeting-service";
import { Textarea } from "@/components/UI/textarea";
import Template from "../../template";

const formSchema = z.object({
  name: z.string().min(1, { message: "Nama tidak boleh kosong" }),
  message: z.string().min(1, { message: "Pesan tidak boleh kosong" }),
});

const CreateMessage = ({ mutate, data }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const onSubmit = async (payload) => {
    setLoading(true);
    payload = {
      ...payload,
      template_id: data.id,
    };

    try {
      await GreetingService.createGreeting(payload);
      mutate();
      toast.success("Pesan berhasil dikirim");
      form.reset();
      setState(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={setState} open={state}>
      <DialogTrigger asChild>
        <button className="w-full py-2 rounded-xl bg-white text-black backdrop-filter backdrop-blur-md bg-opacity-90">
          Kirim Ucapan
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Kirim Ucapan & Doa</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4 mb-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="zoe"
                        type="text"
                        {...field}
                        className="text-primary-text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pesan</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="selamat ya"
                        className="resize-none text-primary-text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button disabled={loading} type="submit" className="w-full">
                {loading ? <LoadingDots color="#A8A29E" /> : "Kirim"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMessage;
