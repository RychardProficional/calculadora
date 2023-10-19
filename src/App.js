import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme.lite}>
      <div className="App">Hello World!!!</div>
    </ThemeProvider>
  );
}

export default App;
