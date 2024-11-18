import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { expenseBreakdown, EXPENSE_COLORS } from '@/data/mock-financial-data'

export function BudgetOverview() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>Your budget progress for this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenseBreakdown.map((category) => (
            <div key={category.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-sm font-medium">
                  ${category.value} / ${(category.value * 1.2).toFixed(2)}
                </span>
              </div>
              <Progress 
                value={(category.value / (category.value * 1.2)) * 100} 
                className="bg-muted" 
                indicatorColor={`bg-[${EXPENSE_COLORS[category.name as keyof typeof EXPENSE_COLORS]}]`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 