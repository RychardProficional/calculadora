import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.colors.primary1};
  }
  
  a {
    text-decoration: none;
    color: black;
  }
`

export default GlobalStyle
