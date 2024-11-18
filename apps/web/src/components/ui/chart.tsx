import * as React from "react"
import { cn } from "@/lib/utils"

interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({
  config,
  className,
  children,
  ...props
}: ChartContainerProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

export function ChartTooltip({ active, payload, label }: any) {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {label}
            </span>
            {payload.map((item: any) => (
              <span key={item.name} className="font-bold text-muted-foreground">
                {item.value}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return null
}

export const ChartTooltipContent = ChartTooltip 