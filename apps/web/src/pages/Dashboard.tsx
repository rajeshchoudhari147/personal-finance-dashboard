import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { OverviewCards } from "@/components/dashboard/OverviewCards"
import { IncomeExpenseChart } from "@/components/dashboard/IncomeExpenseChart"
import { ExpenseBreakdownChart } from "@/components/dashboard/ExpenseBreakdownChart"
import { RecentTransactionsCard } from "@/components/dashboard/RecentTransactionsCard"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OverviewCards />
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <IncomeExpenseChart />
          <ExpenseBreakdownChart />
          <RecentTransactionsCard />
        </div>
      </main>
    </div>
  )
} 