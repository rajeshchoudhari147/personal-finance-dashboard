import { Bell, CreditCard, DollarSign, Home, User, Wallet, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend, PieChart, Pie, Cell } from 'recharts'

// Mock data - replace with actual data from API
const monthlyData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
]

const yearlyData = [
  { name: '2020', income: 45000, expenses: 38000 },
  { name: '2021', income: 52000, expenses: 42000 },
  { name: '2022', income: 61000, expenses: 48000 },
  { name: '2023', income: 58000, expenses: 45000 },
]

const expenseBreakdown = [
  { name: 'Housing', value: 1200 },
  { name: 'Food', value: 400 },
  { name: 'Transportation', value: 200 },
  { name: 'Utilities', value: 150 },
  { name: 'Entertainment', value: 100 },
]

const COLORS = ['#00D8FF', '#FF007A', '#FFD700', '#00FF7F', '#FF4500']

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header Navbar */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-cyan-400">WealthWise</h1>
            <nav className="flex space-x-4">
              {[
                { name: 'Dashboard', icon: Home },
                { name: 'Transactions', icon: CreditCard },
                { name: 'Budgets', icon: Wallet },
                { name: 'Goals', icon: TrendingUp },
                { name: 'Profile', icon: User },
              ].map((item) => (
                <Button key={item.name} variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              ))}
            </nav>
            <Button variant="outline" size="icon" className="text-gray-300 hover:text-white border-gray-600">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$12,345.67</div>
              <p className="text-xs text-green-400">+2.5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Monthly Expenses</CardTitle>
              <CreditCard className="h-4 w-4 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$2,345.00</div>
              <p className="text-xs text-red-400">-5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Savings Goal</CardTitle>
              <PieChart className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$10,000.00</div>
              <Progress value={50} className="mt-2 bg-gray-700" indicatorColor="bg-yellow-400" />
              <p className="text-xs text-gray-400 mt-2">50% achieved</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="monthly" className="mb-8">
          <TabsList className="bg-gray-800 text-gray-300">
            <TabsTrigger value="monthly" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              Monthly Overview
            </TabsTrigger>
            <TabsTrigger value="yearly" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              Yearly Overview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Monthly Income vs Expenses</CardTitle>
                <CardDescription className="text-gray-400">A comparison of your monthly income and expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  income: {
                    label: "Income",
                    color: "#00D8FF",
                  },
                  expenses: {
                    label: "Expenses",
                    color: "#FF007A",
                  },
                }} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <XAxis dataKey="name" stroke="#718096" />
                      <YAxis stroke="#718096" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="income" fill="#00D8FF" />
                      <Bar dataKey="expenses" fill="#FF007A" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="yearly">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Yearly Income vs Expenses</CardTitle>
                <CardDescription className="text-gray-400">A comparison of your yearly income and expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  income: {
                    label: "Income",
                    color: "#00D8FF",
                  },
                  expenses: {
                    label: "Expenses",
                    color: "#FF007A",
                  },
                }} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={yearlyData}>
                      <XAxis dataKey="name" stroke="#718096" />
                      <YAxis stroke="#718096" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="income" fill="#00D8FF" />
                      <Bar dataKey="expenses" fill="#FF007A" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Expense Breakdown</CardTitle>
              <CardDescription className="text-gray-400">Your spending categories this month</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                expenses: {
                  label: "Expenses",
                  color: "#00D8FF",
                },
              }} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expenseBreakdown.map((entry) => (
                        <Cell key={entry.name} fill={COLORS[expenseBreakdown.indexOf(entry) % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Budget Overview</CardTitle>
              <CardDescription className="text-gray-400">Your budget progress for this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenseBreakdown.map((category, index) => (
                  <div key={category.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{category.name}</span>
                      <span className="text-sm font-medium text-gray-300">
                        ${category.value} / ${category.value * 1.2}
                      </span>
                    </div>
                    <Progress 
                      value={(category.value / (category.value * 1.2)) * 100} 
                      className="bg-gray-700" 
                      indicatorColor={COLORS[index % COLORS.length]} 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Grocery Store', amount: -85.32, date: '2023-06-15' },
                { name: 'Electric Bill', amount: -120.00, date: '2023-06-14' },
                { name: 'Paycheck', amount: 2500.00, date: '2023-06-13' },
                { name: 'Restaurant', amount: -45.60, date: '2023-06-12' },
              ].map((transaction) => (
                <div key={`${transaction.name}-${transaction.date}`} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-200">{transaction.name}</p>
                    <p className="text-sm text-gray-400">{transaction.date}</p>
                  </div>
                  <p className={`font-medium ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
} 