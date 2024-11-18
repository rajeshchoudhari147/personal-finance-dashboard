import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { monthlyData, yearlyData } from '@/data/mock-financial-data'
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const chartConfig = {
  income: { label: 'Income', color: 'var(--chart-1)' },
  expenses: { label: 'Expenses', color: 'var(--chart-2)' },
}

export function IncomeExpenseChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Income vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="space-y-4">
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Legend />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="income" fill={chartConfig.income.color} />
                  <Bar dataKey="expenses" fill={chartConfig.expenses.color} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="yearly" className="space-y-4">
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Legend />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="income" fill={chartConfig.income.color} />
                  <Bar dataKey="expenses" fill={chartConfig.expenses.color} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 