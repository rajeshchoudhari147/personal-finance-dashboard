export const monthlyData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
]

export const yearlyData = [
  { name: '2020', income: 45000, expenses: 38000 },
  { name: '2021', income: 52000, expenses: 42000 },
  { name: '2022', income: 61000, expenses: 48000 },
  { name: '2023', income: 58000, expenses: 45000 },
]

export const expenseBreakdown = [
  { name: 'Housing', value: 1200 },
  { name: 'Food', value: 400 },
  { name: 'Transportation', value: 200 },
  { name: 'Utilities', value: 150 },
  { name: 'Entertainment', value: 100 },
]

export const recentTransactions = [
  { id: '1', name: 'Grocery Store', amount: -85.32, date: '2023-06-15' },
  { id: '2', name: 'Electric Bill', amount: -120.00, date: '2023-06-14' },
  { id: '3', name: 'Paycheck', amount: 2500.00, date: '2023-06-13' },
  { id: '4', name: 'Restaurant', amount: -45.60, date: '2023-06-12' },
] as const;

export const CHART_COLORS = ['#00D8FF', '#FF007A', '#FFD700', '#00FF7F', '#FF4500']

export const EXPENSE_COLORS = {
  Housing: '#00D8FF',    // Cyan
  Food: '#FF007A',       // Pink
  Transportation: '#FFD700', // Yellow
  Utilities: '#00FF7F',  // Green
  Entertainment: '#FF4500' // Red
} 