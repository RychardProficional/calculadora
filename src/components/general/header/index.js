import { Container, Div, Name, Nav, LinkNav, IconStyle } from "./style"
import logo from "../../../logo.ico"

const Header = () => {
  return (
    <Container>
      <Div>
        <img alt="logo" src={logo} />
        <Name>Calculadora</Name>
      </Div>
      <Nav>
        <LinkNav href=".">Home</LinkNav>
        <LinkNav href=".">Projetos</LinkNav>
        <LinkNav href=".">Contato</LinkNav>
        <LinkNav href=".">Sobre</LinkNav>
        <IconStyle />
      </Nav>
    </Container>
  )
}

export default Header
