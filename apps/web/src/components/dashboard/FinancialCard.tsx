import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FinancialCardProps {
  title: string
  amount: string
  description: string
  icon: LucideIcon
  trend?: "positive" | "negative" | "neutral"
}

export function FinancialCard({
  title,
  amount,
  description,
  icon: Icon,
  trend = "neutral",
}: FinancialCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <p
          className={cn(
            "text-xs text-muted-foreground",
            trend === "positive" && "text-green-600",
            trend === "negative" && "text-red-600"
          )}
        >
          {description}
        </p>
      </CardContent>
    </Card>
  )
} 