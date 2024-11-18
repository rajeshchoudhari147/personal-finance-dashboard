import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { expenseBreakdown, EXPENSE_COLORS } from '@/data/mock-financial-data'
import { ChartContainer } from "@/components/ui/chart"

const formatLegend = (value: string) => (
  <span className="text-sm">{value}</span>
);

export function ExpenseBreakdownChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseBreakdown}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={(entry) => `${entry.value}`}
              >
                {expenseBreakdown.map((entry) => (
                  <Cell 
                    key={entry.name} 
                    fill={EXPENSE_COLORS[entry.name as keyof typeof EXPENSE_COLORS]} 
                  />
                ))}
              </Pie>
              <Legend formatter={formatLegend} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
} 