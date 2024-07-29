import { Button } from "@/components/UI/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { Label } from "@/components/UI/label";
import { Switch } from "@/components/UI/switch";
import Link from "next/link";
import { Skeleton } from "@/components/UI/skeleton";
import { Plus } from "lucide-react";

export default function TemplateCard({ result }) {
  if (result) {
    const data = result.data;

    return (
      <Card className="col-span-4 md:col-span-3">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{data.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative w-full aspect-video bg-secondary rounded-lg overflow-hidden">
            <Image
              fill
              src={`/templates/${data.slug}/${data.thumbnail}`}
              alt="thumbnail"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="brightness-75"
            />
          </div>
          <div className="flex items-center gap-5 space-x-2">
            <Label
              htmlFor="functional"
              className="space-y-1 flex gap-1 items-center w-2/5"
            >
              {/* <Eye className="h-4 w-4" /> */}
              <span>Published</span>
            </Label>
            <Switch id="functional" />
          </div>
          <div className="flex items-center gap-5 space-x-2">
            <Label htmlFor="link" className="space-y-1 flex gap-1 w-2/5">
              {/* <Globe className="w-3 aspect-square" /> */}
              <h1 className="leading-tight">Link Preview</h1>
            </Label>
            <Link
              href={
                process.env.NEXT_PUBLIC_ROOT_DOMAIN
                  ? `https://${data.slug}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                  : `http://${data.slug}.localhost:3000`
              }
              className="h-6 text-sm bg-background border border-input px-3 rounded-md"
            >
              {process.env.NEXT_PUBLIC_ROOT_DOMAIN
                ? `${data.slug}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                : `${data.slug}.localhost:3000`}
            </Link>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link
              href={
                process.env.NEXT_PUBLIC_ROOT_DOMAIN
                  ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${data.parent}?customize`
                  : `http://template.localhost:3000/${data.parent}?customize`
              }
            >
              Customize
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="col-span-4 md:col-span-3 border-dashed">
      <CardContent className="mt-4 grid gap-4">
        <Button variant="outline" className="border-dashed space-x-2">
          <Plus className="w-4 aspect-square" />
          <h1>Tambah Template</h1>
        </Button>
      </CardContent>
    </Card>
  );
}
