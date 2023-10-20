import { ThemeProvider } from "styled-components"
import { theme } from "./theme.ts"
import Calculator from "./components/calculator"

function App() {
  return (
    <ThemeProvider theme={theme.lite}>
      <div className="App">
        <Calculator />
      </div>
    </ThemeProvider>
  )
}

export default App
