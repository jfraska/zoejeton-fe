"use client";

import { useState } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { Button } from "@/components/UI/button";
import { ArrowRight } from "lucide-react";
import { Switch } from "@/components/UI/switch";
import Counter from "@/components/UI/counter";

const items = [
  { name: "Tamu Undangan", baseQuantity: 50, isCounter: true },
  { name: "WhatsApp", baseQuantity: 0, isCounter: true },
  { name: "Penyimpanan Media", baseQuantity: 0, isCounter: true },
  { name: "Guestbook", baseQuantity: 0, isCounter: true },
  { name: "Fitur Premium", baseQuantity: "-", isToggle: true },
  { name: "Custom Domain (.com)", baseQuantity: "-", isToggle: true },
];

export default function Addons() {
  const [quantities, setQuantities] = useState(
    items.map((item) => ({
      ...item,
      quantity: item.baseQuantity,
      enabled: item.baseQuantity !== "-",
    }))
  );

  return (
    <Card>
      <CardContent className="grid gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Paket Aktif</TableHead>
              <TableHead>Tambahan</TableHead>
              <TableHead>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quantities.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell className={index === 0 ? "font-medium" : ""}>
                  {item.baseQuantity}
                </TableCell>
                <TableCell>
                  {item.isCounter ? (
                    <Counter />
                  ) : item.isToggle ? (
                    <Switch />
                  ) : (
                    <span>{item.quantity}</span>
                  )}
                </TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right align-top">Total</TableCell>
              <TableCell colSpan="2" className="space-y-2">
                <p>-</p>
                <Button className="space-x-2">
                  <h1>Pembayaran</h1>
                  <ArrowRight className="w-4 aspect-square" />
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
