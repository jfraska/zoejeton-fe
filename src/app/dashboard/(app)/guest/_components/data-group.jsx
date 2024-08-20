"use client";

import { Button } from "@/components/UI/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/UI/card";
import { PiechartGroup } from "./piechart-group";
import Link from "next/link";
import DialogCreateGroup from "./dialog-create-group";

export default function DataGroup() {
    return (
        <Card className="w-full overflow-hidden">
            <CardHeader>
                <CardTitle>Data Grup</CardTitle>
                <CardDescription>Grup Mempelai Pria dan Wanita</CardDescription>
            </CardHeader>
            <CardContent className="flex items-start justify-start gap-10 flex-wrap">
                <Card className="w-[300px] h-[300px] flex flex-col items-center justify-center">
                    <CardHeader className="text-center">
                        <CardDescription>Kelompokkan tamu undangan pernikahan</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                        <DialogCreateGroup />
                    </CardContent>
                </Card>
                <Card className="w-[300px] h-[300px] flex flex-col items-center justify-center">
                    <CardHeader className="text-center">
                        <CardDescription><Link href={''} className="text-yellow-500 hover:underline">Keluarga Mempelai Pria</Link></CardDescription>
                    </CardHeader>
                    <PiechartGroup />
                </Card>
                <Card className="w-[300px] h-[300px] flex flex-col items-center justify-center">
                    <CardHeader className="text-center">
                        <CardDescription><Link href={''} className="text-yellow-500 hover:underline">Keluarga Mempelai Wanita</Link></CardDescription>
                    </CardHeader>
                    <PiechartGroup />
                </Card>
                <Card className="w-[300px] h-[300px] flex flex-col items-center justify-center">
                    <CardHeader className="text-center">
                        <CardDescription><Link href={''} className="text-yellow-500 hover:underline">Bapak Bapak Garing</Link></CardDescription>
                    </CardHeader>
                    {/* <PiechartGroup /> */}
                </Card>
            </CardContent>
        </Card>
    );
}
