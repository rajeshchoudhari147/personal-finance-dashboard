import * as React from "react";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, CreditCard, DollarSign, PieChart, User, Settings } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navigationItems = [
  { name: "Overview", icon: Home },
  { name: "Expenses", icon: CreditCard },
  { name: "Bills", icon: DollarSign },
  { name: "Savings", icon: PieChart },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
] as const

export function Sidebar({ activeTab, onTabChange, className }: SidebarProps) {
  return (
    <aside className={cn("w-64 bg-background border-r", className)}>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary">WealthWise</h1>
      </div>
      <nav className="mt-6 space-y-1">
        {navigationItems.map((item) => (
          <Button
            key={item.name}
            variant={activeTab === item.name.toLowerCase() ? "secondary" : "ghost"}
            className="w-full justify-start px-4 py-2 text-left"
            onClick={() => onTabChange(item.name.toLowerCase())}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Button>
        ))}
      </nav>
    </aside>
  )
} 