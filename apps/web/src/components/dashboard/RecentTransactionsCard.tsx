import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { recentTransactions } from '@/data/mock-financial-data'
import { cn } from "@/lib/utils"

export function RecentTransactionsCard() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div
              key={`${transaction.name}-${transaction.date}`}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
              <p
                className={cn(
                  "font-medium tabular-nums",
                  transaction.amount > 0 ? "text-green-400" : "text-red-400"
                )}
              >
                {transaction.amount > 0 ? "+" : "-"}
                ${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 