import { ThemeProvider, styled } from "styled-components"
import { ImContrast } from "react-icons/im"
import theme from "./theme.js"
import Calculator from "./components/specific/calculator/"
import Header from "./components/general/header"
import Footer from "./components/general/footer"
import GlobalStyle from "./global-style.js"

function App() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100vh;
  `
  return (
    <Container>
      <ThemeProvider theme={theme.lite}>
        <GlobalStyle />
        <>
          <Header />
          <ImContrast />
          <div>
            <Calculator />
          </div>
          <Footer />
        </>
      </ThemeProvider>
    </Container>
  )
}

export default App
