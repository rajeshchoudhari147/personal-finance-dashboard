import { DollarSign, CreditCard, PieChart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          <DollarSign className="h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$12,345.67</div>
          <p className="text-xs text-green-400">+2.5% from last month</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
          <CreditCard className="h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$2,345.00</div>
          <p className="text-xs text-red-400">-5% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
          <PieChart className="h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$10,000.00</div>
          <Progress 
            value={50} 
            className="mt-2" 
            indicatorColor="bg-yellow-400" 
          />
          <p className="text-xs text-muted-foreground mt-2">50% achieved</p>
        </CardContent>
      </Card>
    </div>
  )
} 