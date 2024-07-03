"use client";

import { useContext } from "react";
import PortalContext from "@/context/portal";
import { Button } from "@/components/UI/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { Label } from "@/components/UI/label";
import { Switch } from "@/components/UI/switch";
import { Input } from "@/components/UI/input";

export default function TemplateCard() {
  const { invitation } = useContext(PortalContext);

  return (
    <Card className="col-span-4 md:col-span-3">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          {invitation?.template?.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="relative w-full aspect-video bg-secondary rounded-lg overflow-hidden bg-black bg-blend-multiply bg-opacity-80">
          <Image
            fill
            src={`/templates/${invitation?.template?.slug}/${invitation?.template?.thumbnail}`}
            alt="thumbnail"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label
            htmlFor="functional"
            className="space-y-1 flex gap-1 items-center"
          >
            {/* <Eye className="h-4 w-4" /> */}
            <span>Published</span>
          </Label>
          <Switch id="functional" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="link" className="space-y-1 flex gap-1">
            {/* <Globe className="w-3 aspect-square" /> */}
            <h1 className="leading-tight">Link Preview</h1>
          </Label>
          <Input
            id="link"
            className="w-3/5 h-6 text-sm"
            defaultValue={"wait"}
            readOnly
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Customize</Button>
      </CardFooter>
    </Card>
  );
}
