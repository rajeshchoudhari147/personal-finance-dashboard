import { ThemeProvider } from "@/components/providers/theme-provider"
import Dashboard from "@/pages/Dashboard"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="wealthwise-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Dashboard />
      </div>
    </ThemeProvider>
  )
}

export default App 