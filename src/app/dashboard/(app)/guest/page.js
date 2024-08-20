import { File, ListFilter, PlusCircle } from "lucide-react";

import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { Progress } from "@/components/UI/progress";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import DataTable from "./_components/data-table";
import { columns } from "./_components/columns";
import Link from "next/link";
import PiechartPresence from "./_components/piechart-presence";
import DataGroup from "./_components/data-group";
import DataMeja from "./_components/data-meja";
import ButtonAddGuest from "./_components/button-add-guest";

export default function Tamu() {
  return (
    <section className="flex h-full flex-col gap-4 lg:gap-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tamu</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 grid-reverse">
        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>Total Tamu</CardDescription>
            <CardTitle className="text-4xl">
              5 <span className="text-3xl text-gray-500">/ 100</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={5} aria-label="5% increase" />
          </CardContent>
          <CardFooter>
            <Button>
              <Link href="settings/packages">Tambah Kuota</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>Tamu Datang</CardDescription>
            <CardTitle className="text-4xl">
              2 <span className="text-3xl text-gray-500">/ 5</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">40% kehadiran</div>
          </CardContent>
          <CardFooter>
            <Progress value={40} aria-label="40% increase" />
          </CardFooter>
        </Card>
        <PiechartPresence className="sm:col-span-2" />
      </div>
      <Tabs defaultValue="week">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="week">Semua Tamu</TabsTrigger>
            <TabsTrigger value="month">Group</TabsTrigger>
            <TabsTrigger value="year">Table</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Fulfilled
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Import</span>
            </Button>
            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Export</span>
            </Button>
            <ButtonAddGuest />
          </div>
        </div>
        <TabsContent value="week">
          <div className="grid">
            <DataTable data={tasks} columns={columns} />
          </div>
        </TabsContent>
        <TabsContent value="month">
          <div className="grid">
            <DataGroup />
          </div>
        </TabsContent>
        <TabsContent value="year">
          <div className="grid">
            <DataMeja />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

const tasks = [
  {
    nama: "Kylian Mbappuk",
    grup: "keluarga CPP",
    email: "mbapperacing@gmail.com",
    nohp: "089765457284",
    kode: "0001",
    status: "datang",
    jumlah: "3",
    date: "13 Agt 2024, 12:00",
  },
  {
    nama: "Ousmane Demblenger",
    grup: "keluarga CPP",
    email: "gedebuk@yahoo.com",
    nohp: "02724000356",
    kode: "0002",
    status: "datang",
    jumlah: "5",
    date: "13 Agt 2024, 12:09",
  },
  {
    nama: "Lionel Pessi",
    grup: "keluarga CPW",
    email: "messiunhaha@gmail.co.id",
    nohp: "088806646808",
    kode: "0003",
    status: "pulang",
    jumlah: "3",
    date: "13 Agt 2024, 12:18",
  },
  {
    nama: "Cristiano Penaldo",
    grup: "keluarga CPW",
    email: "penaldog123@gmail.com",
    nohp: "089765123424",
    kode: "0004",
    status: "pulang",
    jumlah: "7",
    date: "13 Agt 2024, 13:20",
  },
  {
    nama: "Onanana El Silahkan",
    grup: "keluarga CPW",
    email: "onanaelsilahkan@yahoo.co.id",
    nohp: "0274366687",
    kode: "0005",
    status: "pulang",
    jumlah: "2",
    date: "13 Agt 2024, 12:27",
  },
];
