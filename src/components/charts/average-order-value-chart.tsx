"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Line, ComposedChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart"

const chartData = [
  { month: "January", aov: 120, target: 115 },
  { month: "February", aov: 110, target: 115 },
  { month: "March", aov: 130, target: 120 },
  { month: "April", aov: 125, target: 120 },
  { month: "May", aov: 140, target: 125 },
  { month: "June", aov: 135, target: 125 },
]

const chartConfig = {
  aov: {
    label: "AOV ($)",
    color: "hsl(var(--chart-1))",
  },
  target: {
    label: "Target AOV ($)",
    color: "hsl(var(--chart-3))",
  }
} satisfies ChartConfig

export function AverageOrderValueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Order Value (AOV)</CardTitle>
        <CardDescription>Monthly AOV compared to target.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <ComposedChart accessibilityLayer data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis 
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="aov" fill="var(--color-aov)" radius={4} />
            <Line dataKey="target" stroke="var(--color-target)" strokeWidth={2} dot={false} type="monotone" />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
