import { DollarSign, CreditCard, PieChart } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { FinancialCard } from './FinancialCard'

export function OverviewCards() {
  return (
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
        extraContent={
          <Progress 
            value={50} 
            className="mt-2" 
            indicatorColor="bg-chart-3" 
          />
        }
      />
    </div>
  )
} 