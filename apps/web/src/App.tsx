import { ThemeProvider } from "@/components/providers/theme-provider"
import Dashboard from "@/pages/Dashboard"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="wealthwise-theme">
      <Dashboard />
    </ThemeProvider>
  )
}

export default App 