import { ThemeProvider } from "styled-components"
import theme from "./theme.js"
import Calculator from "./components/specific/calculator/index.js"
import Header from "./components/general/header"

function App() {
  return (
    <ThemeProvider theme={theme.lite}>
      <Header />
      <div className="App">
        <Calculator />
      </div>
      <footer></footer>
    </ThemeProvider>
  )
}

export default App
