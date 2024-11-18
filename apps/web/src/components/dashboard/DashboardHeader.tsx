import { Bell, CreditCard, Home, User, Wallet, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

const navigationItems = [
  { name: 'Dashboard', icon: Home },
  { name: 'Transactions', icon: CreditCard },
  { name: 'Budgets', icon: Wallet },
  { name: 'Goals', icon: TrendingUp },
  { name: 'Profile', icon: User },
] as const

export function DashboardHeader() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-cyan-400">WealthWise</h1>
          <nav className="flex space-x-4">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="text-gray-300 hover:text-white border-gray-600"
          >
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
} 