"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
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
  { month: "January", rate: 5.2, stroke: "hsl(var(--chart-2))"  },
  { month: "February", rate: 4.8, stroke: "hsl(var(--chart-2))" },
  { month: "March", rate: 6.1, stroke: "hsl(var(--chart-2))" },
  { month: "April", rate: 3.5, stroke: "hsl(var(--chart-2))" },
  { month: "May", rate: 5.5, stroke: "hsl(var(--chart-2))" },
  { month: "June", rate: 4.9, stroke: "hsl(var(--chart-2))" },
]

const chartConfig = {
  rate: {
    label: "Churn Rate (%)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChurnRateChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Churn Rate</CardTitle>
        <CardDescription>Monthly customer churn rate percentage.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <LineChart accessibilityLayer data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis 
              tickFormatter={(value) => `${value}%`}
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="rate"
              type="monotone"
              strokeWidth={2}
              dot={{
                fill: "var(--color-rate)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
