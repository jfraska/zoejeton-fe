import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/UI/breadcrum";
import { Button } from "@/components/UI/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Separator } from "@/components/UI/separator";
import {
  ArrowRight,
  Copy,
  CreditCard,
  MoreVertical,
  Printer,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import Addons from "./addons";

const packages = [
  {
    name: "Tamu Undangan",
    values: [50, 100, 250, 500, 1000],
  },
  {
    name: "WhatsApp",
    values: [0, 0, 250, 500, 1000],
  },
  {
    name: "Penyimpanan Media",
    values: [0, "25 Mb", "50 Mb", "50 Mb", "100 Mb"],
  },
  {
    name: "Guestbook",
    values: [0, 0, 1, 2, 4],
  },
  {
    name: "Template",
    values: ["-", "Basic", "Premium", "Diamond", "Diamond"],
  },
  {
    name: "Fitur Premium",
    values: ["-", "-", "✔", "✔", "✔"],
  },
  {
    name: "Custom Domain (.com)",
    values: ["-", "-", "-", "-", "✔"],
  },
];

const prices = [
  { price: "Rp 125k", package: "Lite Package" },
  { price: "Rp 200k", package: "Premium Package" },
  { price: "Rp 500k", package: "Intimate Package" },
  { price: "Rp 750k", package: "Ultimate Package" },
];

export default function Page() {
  return (
    <section className="flex h-full flex-col gap-4 lg:gap-6">
      <div className="flex items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/settings">Setting</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Paket & Tambahan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Tabs defaultValue="packages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="packages">Upgrade Paket</TabsTrigger>
          <TabsTrigger value="addons">Beli Tambahan</TabsTrigger>
        </TabsList>
        <TabsContent value="packages" className="space-y-4">
          <Card>
            <CardContent className="grid gap-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Paket Aktif</TableHead>
                    <TableHead>Lite Package</TableHead>
                    <TableHead>Premium Package</TableHead>
                    <TableHead>Intimate Package</TableHead>
                    <TableHead>Ultimate Package</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {packages.map((pkg, pkgIndex) => (
                    <TableRow key={pkgIndex}>
                      <TableCell>{pkg.name}</TableCell>
                      {pkg.values.map((value, valueIndex) => (
                        <TableCell
                          key={valueIndex}
                          className={pkgIndex === 0 ? "font-medium" : ""}
                        >
                          {value}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    {prices.map((price, index) => (
                      <TableCell key={index} className="space-y-2 w-fit">
                        <h1>{price.price}</h1>
                        <Button
                          className="space-x-2"
                          // onClick={() => handlePilihClick(price.package)}
                        >
                          <h1>Pilih</h1>
                          <ArrowRight className="w-4 aspect-square" />
                        </Button>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="addons" className="space-y-4">
          <Addons />
        </TabsContent>
      </Tabs>
    </section>
  );
}
