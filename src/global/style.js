import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    transition: background-color .5s;
  }

  body{
    background-image: radial-gradient(circle,  ${(props) => props.theme.colors.primary1} 50%, ${(
      props,
    ) => props.theme.colors.primary2}   )

  }
  
  a {
    text-decoration: none;
    color: black;
  }
`

export default GlobalStyle
