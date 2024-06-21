"use client";

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

export default function TemplateCard() {
  return (
    <Card className="col-span-3">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Jeton & Zoe</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="relative w-full aspect-video bg-secondary rounded-lg">
          <Image
            fill
            src="/"
            alt="thumbnail"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Functional Cookies</span>
            <span className="font-normal leading-snug text-muted-foreground">
              These cookies allow the website to provide personalized
              functionality.
            </span>
          </Label>
          <Switch id="functional" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Customize</Button>
      </CardFooter>
    </Card>
  );
}
