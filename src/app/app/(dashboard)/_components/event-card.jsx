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

export default function EventCard() {
  return (
    <div className="col-span-4 flex flex-col gap-4">
      <Card className="h-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Rangkaian Acara</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-start justify-start gap-4 space-x-2">
            <div className="flex flex-col w-1/4 justify-start items-center">
              <h1>29</h1>
              <h1>June 2022</h1>
            </div>
            <div className="h-full w-px bg-neutral-800" />
            <div className="flex flex-col justify-start items-start">
              <h1>Akad Nikah</h1>
              <h2>lokasi</h2>
              <h1 className="mt-2">Resepsi</h1>
              <h2>lokasi</h2>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-auto text-sm">
          Ubah Rangkaian Acara
        </CardFooter>
      </Card>
      <Card>
        <CardContent className="grid gap-4">
          <div className="flex items-center justify-between space-x-2 mt-4">
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
      </Card>
    </div>
  );
}
