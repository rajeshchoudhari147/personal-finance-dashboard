import { useState } from "react"
import { Bell, CreditCard, DollarSign, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/layout/Sidebar"
import { FinancialCard } from "@/components/dashboard/FinancialCard"
import { TransactionList } from "@/components/dashboard/TransactionList"

const transactions = [
  { name: "Grocery Store", amount: -85.32, date: "2023-06-15" },
  { name: "Electric Bill", amount: -120.0, date: "2023-06-14" },
  { name: "Paycheck", amount: 2500.0, date: "2023-06-13" },
  { name: "Restaurant", amount: -45.6, date: "2023-06-12" },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex h-screen bg-muted/50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <FinancialCard
            title="Total Balance"
            amount="$12,345.67"
            description="+2.5% from last month"
            icon={DollarSign}
            trend="positive"
          />
          <FinancialCard
            title="Monthly Expenses"
            amount="$2,345.00"
            description="-5% from last month"
            icon={CreditCard}
            trend="negative"
          />
          <FinancialCard
            title="Savings Goal"
            amount="$10,000.00"
            description="50% achieved"
            icon={PieChart}
            trend="neutral"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full bg-muted rounded-md" />
          </CardContent>
        </Card>

        <TransactionList transactions={transactions} />
      </main>
    </div>
  )
} 