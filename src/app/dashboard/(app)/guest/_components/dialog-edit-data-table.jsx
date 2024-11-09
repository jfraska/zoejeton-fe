import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/UI/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/UI/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/UI/select"
import { Input } from "@/components/UI/input"
import { Label } from "@/components/UI/label"
import { Button } from "@/components/UI/button";
import { useForm } from "react-hook-form";
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PlusCircle } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    group_id: z.string().optional(),
    category: z.string().min(1),
    whatsapp: z.string().min(1),
    // instagram: z.string().min(1),
    code: z.string().min(8).max(50),
    address: z.string().min(8).max(50),
});

export function DialogEditDataTable({ setOpen, open }) {
    const onSubmit = async (e) => {
        try {
            const response = await fetch("/api/invitation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nama: e.nama, grup: e.grup, email: e.email }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            group_id: "",
            category: "",
            whatsapp: "",
            code: "",
            address: "",
        },
    });

    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogContent className="h-3/4 overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle>Edit Tamu</DialogTitle>
                    <DialogDescription>Edit tamu's data</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div>
                            <div className="space-y-4 py-2 pb-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nama</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Zoe Hinata" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="group_id"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Grup</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a grup" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Keluarga Mempelai Pria">Keluarga Mempelai Pria</SelectItem>
                                                    <SelectItem value="Keluarga Mempelai Wanita">Keluarga Mempelai Wanita</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Kategori</FormLabel>
                                            <FormDescription>
                                                Pilih kategori guest.
                                            </FormDescription>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select category for guest" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="reguler">Reguler</SelectItem>
                                                    <SelectItem value="vip">VIP</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="whatsapp"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>WhatsApp</FormLabel>
                                            <FormControl>
                                                <Input placeholder="085740636055" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="code"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Kode</FormLabel>
                                            <FormControl>
                                                <Input placeholder="47289" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Alamat</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Sleman, Yogyakarta" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Simpan</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
