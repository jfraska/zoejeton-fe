"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/UI/card"
import {
    ChartConfig,
    ChartContainer,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/UI/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/UI/select"
const desktopData = [
    { month: "january", desktop: 186, fill: "var(--color-january)" },
    { month: "february", desktop: 305, fill: "var(--color-february)" },
    { month: "march", desktop: 237, fill: "var(--color-march)" },
    { month: "april", desktop: 173, fill: "var(--color-april)" },
    { month: "may", desktop: 209, fill: "var(--color-may)" },
]

const chartConfig = {
    visitors: {
        label: "visitors",
    },
    desktop: {
        label: "Desktop",
    },
    mobile: {
        label: "Mobile",
    },
    january: {
        label: "New",
        color: "hsl(var(--chart-1))",
    },
    february: {
        label: "Invited",
        color: "hsl(var(--chart-2))",
    },
    march: {
        label: "Opened",
        color: "hsl(var(--chart-3))",
    },
    april: {
        label: "Hadir",
        color: "hsl(var(--chart-4))",
    },
    may: {
        label: "Tidak Hadir",
        color: "hsl(var(--chart-5))",
    },
}

export default function PiechartPresence({ className }) {
    const id = "pie-interactive"
    const [activeMonth, setActiveMonth] = React.useState(desktopData[0].month)

    const activeIndex = React.useMemo(
        () => desktopData.findIndex((item) => item.month === activeMonth),
        [activeMonth]
    )
    const months = React.useMemo(() => desktopData.map((item) => item.month), [])

    return (
        <Card data-chart={id} className={`${className} flex flex-col`}>
            <ChartStyle id={id} config={chartConfig} />
            <CardHeader className="flex-row items-start space-y-0 pb-0">
                <div className="grid gap-1">
                    <CardTitle>Diagram Tamu</CardTitle>
                    <CardDescription>Tamu berbagai kategori</CardDescription>
                </div>
                <Select value={activeMonth} onValueChange={setActiveMonth}>
                    <SelectTrigger
                        className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-xl">
                        {months.map((key) => {
                            const config = chartConfig[key]

                            if (!config) {
                                return null
                            }

                            return (
                                <SelectItem
                                    key={key}
                                    value={key}
                                    className="rounded-lg [&_span]:flex"
                                >
                                    <div className="flex items-center gap-2 text-xs">
                                        <span
                                            className="flex h-3 w-3 shrink-0 rounded-sm"
                                            style={{
                                                backgroundColor: `var(--color-${key})`,
                                            }}
                                        />
                                        {config?.label}
                                    </div>
                                </SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center pb-0">
                <ChartContainer
                    id={id}
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[300px]"
                >
                    <PieChart className="w-[200px] h-[200px]">
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={desktopData}
                            dataKey="desktop"
                            nameKey="month"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({
                                outerRadius = 0,
                                ...props
                            }) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius + 10} />
                                    <Sector
                                        {...props}
                                        outerRadius={outerRadius + 25}
                                        innerRadius={outerRadius + 12}
                                    />
                                </g>
                            )}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {desktopData[activeIndex].desktop.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Tamu
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
