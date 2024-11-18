import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FinancialCardProps {
  title: string
  amount: string
  description: string
  icon: LucideIcon
  trend?: "positive" | "negative" | "neutral"
  extraContent?: React.ReactNode
}

export function FinancialCard({
  title,
  amount,
  description,
  icon: Icon,
  trend = "neutral",
  extraContent
}: FinancialCardProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-card-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-card-foreground">{amount}</div>
        <p
          className={cn(
            "text-xs",
            trend === "positive" && "text-chart-4",
            trend === "negative" && "text-chart-5",
            trend === "neutral" && "text-muted-foreground"
          )}
        >
          {description}
        </p>
        {extraContent}
      </CardContent>
    </Card>
  )
} 