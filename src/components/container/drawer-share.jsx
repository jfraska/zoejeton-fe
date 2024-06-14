"use client";

import * as React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import CustomizeContext from "@/context/customize";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/UI/drawer";
import { Button } from "@/components/UI/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Label } from "@/components/UI/label";
import { Input } from "@/components/UI/input";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function DrawerShare() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { dataContent } = React.useContext(CustomizeContext);
  const router = useRouter();

  const urlShare = process.env.NEXT_PUBLIC_VERCEL_ENV
    ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/`
    : `http://template.localhost:3000/`;

  const urlCheckout = process.env.NEXT_PUBLIC_VERCEL_ENV
    ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
    : `http://localhost:3000`;

  const handleCopy = () => {
    const link = document.getElementById("link").value;
    navigator.clipboard.writeText(link).then(
      () => {
        toast.success("Link copied to clipboard");
      },
      (err) => {
        toast.error("Failed to copy");
      }
    );
  };

  // if (isDesktop) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="fixed left-4 top-4 w-10 aspect-square z-10 flex justify-center items-center rounded-lg bg-white backdrop-filter backdrop-blur-md bg-opacity-60 shadow-lg transition-all ease-linear duration-100 hover:scale-105 hover:bg-opacity-90 focus:outline-none">
          <Image
            src={"/assets/icons/qrcode.svg"}
            width={30}
            height={30}
            alt=""
            className="w-8 aspect-square"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-black font-default">
        <DialogHeader>
          <DialogTitle className="font-medium">Share link</DialogTitle>
          <DialogDescription className="text-[#737373]">
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              className="bg-white ring-offset-white border-[#c3b8b8] placeholder:text-[#737373] focus-visible:ring-[#0a0a0a]"
              id="link"
              defaultValue={urlShare + dataContent.slug}
              readOnly
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3 bg-black"
            onClick={handleCopy}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4 text-white" />
          </Button>
        </div>
        <DialogFooter>
          <button
            className="mt-6 flex justify-between uppercase py-2 px-2 items-center w-full bg-black text-white rounded-lg hover:bg-[#00000068] transition-all ease-in-out"
            onClick={() =>
              router.push(`${urlCheckout}/katalog/${dataContent.slug}`)
            }
          >
            <h1>Checkout</h1>
            <Image
              src={"/assets/icons/cart.svg"}
              width="20"
              height="20"
              alt="cart"
              className="w-5 aspect-square"
            />
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
  // }

  // return (
  //   <Drawer open={open} onOpenChange={setOpen}>
  //     <DrawerTrigger asChild>
  //       <button className="fixed top-4 right-4 w-10 aspect-square z-10 flex justify-center items-center rounded-lg bg-white backdrop-filter backdrop-blur-md bg-opacity-60 shadow-lg transition-all ease-linear duration-100 hover:scale-105 hover:bg-opacity-90 focus:outline-none">
  //         <Image
  //           src={"/assets/icons/qrcode.svg"}
  //           width={30}
  //           height={30}
  //           alt=""
  //           className="w-8 aspect-square"
  //         />
  //       </button>
  //     </DrawerTrigger>
  //     <DrawerContent className="font-default">
  //       <DrawerHeader>
  //         <DrawerTitle className="text-black text-lg font-medium">
  //           Share link
  //         </DrawerTitle>
  //         <DrawerDescription>
  //           Anyone who has this link will be able to view this.
  //         </DrawerDescription>
  //       </DrawerHeader>
  //       <div className="flex items-center space-x-2 p-4">
  //         <div className="grid flex-1 gap-2">
  //           <Label htmlFor="link" className="sr-only">
  //             Link
  //           </Label>
  //           <Input
  //             className="bg-white ring-offset-white border-[#e5e5e5] placeholder:text-[#737373] text-black focus-visible:ring-[#0a0a0a]"
  //             id="link"
  //             defaultValue={urlShare + dataContent.slug}
  //             readOnly
  //           />
  //         </div>
  //         <Button
  //           type="submit"
  //           size="sm"
  //           className="px-3 bg-black"
  //           onClick={handleCopy}
  //         >
  //           <span className="sr-only">Copy</span>
  //           <Copy className="h-4 w-4" />
  //         </Button>
  //       </div>
  //       <DrawerFooter>
  //         <button
  //           className="mt-6 flex justify-between uppercase py-2 px-2 items-center w-full bg-black text-white rounded-lg hover:bg-[#00000068] transition-all ease-in-out"
  //           onClick={() =>
  //             router.push(`${urlCheckout}/katalog/${dataContent.id}`)
  //           }
  //         >
  //           <h1>Checkout</h1>
  //           <Image
  //             src={"/assets/icons/cart.svg"}
  //             width="20"
  //             height="20"
  //             alt="cart"
  //             className="w-5 aspect-square"
  //           />
  //         </button>
  //         {/* <DrawerClose asChild>
  //           <Button variant="outline">Cancel</Button>
  //         </DrawerClose> */}
  //       </DrawerFooter>
  //     </DrawerContent>
  //   </Drawer>
  // );
}
