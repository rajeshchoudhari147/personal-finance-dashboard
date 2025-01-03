import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
interface Transaction {
  id: string
  name: string
  amount: number
  date: string
}

interface TransactionListProps {
  transactions: Transaction[]
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={`${transaction.name}-${transaction.date}`}
              className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium text-card-foreground">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
              <p
                className={cn(
                  "font-medium tabular-nums",
                  transaction.amount > 0 ? "text-chart-4" : "text-chart-5"
                )}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 