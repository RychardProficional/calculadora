import { ThemeProvider, styled } from "styled-components"
import Calculator from "./components/specific/calculator/"
import Header from "./components/general/header"
import Footer from "./components/general/footer"
import GlobalStyle from "./global-style.js"
import theme from "./theme.js"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme.lite}>
      <Container>
        <GlobalStyle />
        <>
          <Header />
          <Calculator />
          {/* Aqui tera o mecanismo de mudança de página */}
          <Footer />
        </>
      </Container>
    </ThemeProvider>
  )
}

export default App
