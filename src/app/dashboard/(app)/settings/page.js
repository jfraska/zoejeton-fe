"use client";

import { useContext } from "react";
import Link from "next/link";
import { Badge } from "@/components/UI/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import PortalContext from "@/context/portal";
import { DescriptionOutlined } from "@mui/icons-material";
import { Edit2, PackagePlus, UserPlus } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const { invitation } = useContext(PortalContext);

  return (
    <section className="flex h-full flex-col gap-4 lg:gap-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Setting</h1>
      </div>
      <div className="space-y-4">
        <Card className="space-y-4 col-span-4 md:col-span-6">
          <CardContent className="flex lg:flex-row flex-col gap-4 justify-between p-6">
            <div className="space-y-3">
              <h1 className="text-4xl font-medium leading-none tracking-tight truncate w-2/3">
                {invitation?.title}
              </h1>
              <h2>Deskripsi</h2>
              <div className="flex items-center gap-4">
                <Link
                  href={
                    process.env.NEXT_PUBLIC_ROOT_DOMAIN
                      ? `https://${invitation.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                      : `http://${invitation.subdomain}.localhost:3000`
                  }
                  className="flex gap-2 py-1 px-2 bg-muted text-muted-foreground rounded-md"
                >
                  <Image
                    src="/assets/icons/zoejeton.svg"
                    width={200}
                    height={200}
                    className="w-4 aspect-square"
                    alt="logo"
                  />
                  <h1>
                    {process.env.NEXT_PUBLIC_ROOT_DOMAIN
                      ? `${invitation.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                      : `${invitation.subdomain}.localhost:3000`}
                  </h1>
                </Link>
                <button className="flex items-center gap-2">
                  <Edit2 className="w-4 aspect-square" />
                  <h1>Edit</h1>
                </button>
              </div>
            </div>
            <div className="flex flex-col border w-full lg:w-5/12">
              <Link
                href="/settings/packages"
                className="flex gap-2 p-2 border-b hover:bg-muted"
              >
                <PackagePlus className="w-5 aspect-square" />
                <h1>Paket dan Tambahan</h1>
                <Badge className="ml-auto flex h-6 px-2 bg-muted-foreground shrink-0 items-center justify-center rounded-md font-normal">
                  Demo
                </Badge>
              </Link>
              <Link
                href="/settings/invoices"
                className="flex gap-2 p-2 border-b hover:bg-muted"
              >
                <DescriptionOutlined className="w-5 aspect-square" />
                <h1>Tagihan</h1>
                <Badge className="ml-auto flex h-6 px-2 bg-muted text-muted-foreground shrink-0 items-center justify-center rounded-full font-normal">
                  2
                </Badge>
              </Link>
              <Link href="#" className="flex gap-2 p-2 border-b hover:bg-muted">
                <UserPlus className="w-5 aspect-square" />
                <h1>Pengguna</h1>
                <Badge className="ml-auto flex h-6 aspect-square bg-muted text-muted-foreground shrink-0 items-center justify-center rounded-full font-normal">
                  2
                </Badge>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
