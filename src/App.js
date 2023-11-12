import { ThemeProvider, styled } from "styled-components"
import Calculator from "./components/specific/calculator/"
import Header from "./components/general/header"
import Footer from "./components/general/footer"
import GlobalStyle from "./global/style"
import theme from "./global/theme"
import { useState } from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
`

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme.lite)

  const changeTheme = () => {
    if (currentTheme.name === theme.lite.name) setCurrentTheme(theme.dark)
    else setCurrentTheme(theme.lite)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <GlobalStyle />
        <>
          <Header changeTheme={changeTheme} />
          <Calculator />
          {/* Aqui tera o mecanismo de mudança de página */}
          <Footer />
        </>
      </Container>
    </ThemeProvider>
  )
}

export default App
