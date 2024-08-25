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
import { useEffect, useState } from "react";
import { getAllGroup } from "@/services/group-service";

export default function DataGroup() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAllGroup();

                console.log(result.data.data)
                setData(result.data.data)
            } catch (error) {
                console.log("Error fetching data:", error);
            } finally {
                // setLoading(false);
            }
        })();
    }, []);

    return (
        <Card className="w-full overflow-hidden flex-wrap">
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
                {data.map((group, index) => (
                    <Card key={index} className="w-[300px] h-[300px] flex flex-col items-center justify-center">
                        <CardHeader className="text-center">
                            <CardDescription>
                                <h1 className="text-yellow-500 hover:underline">
                                    {group.name}
                                </h1>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
}
