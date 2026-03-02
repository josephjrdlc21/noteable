import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { ChartNotes } from "@/types/admin/dashboard"

export const description = "A line chart"

const chartData = [
    { month: "January", notes: 186 },
    { month: "February", notes: 305 },
]

const chartConfig = {
    notes: {
        label: "Notes",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export default function NoteChart({ notes_charts }: { notes_charts: ChartNotes[] }) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Notes</CardTitle>
                <CardDescription>Activities over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={notes_charts}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="notes"
                            type="natural"
                            stroke="var(--color-notes)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing total notes for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
