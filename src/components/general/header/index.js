import { Container, Div, Name, Nav, LinkNav } from "./style"
import logo from "../../../logo.ico"
import { ThemeIcon } from "../icons"

const Header = ({ changeTheme = () => {} }) => (
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
      <ThemeIcon onClick={changeTheme} />
    </Nav>
  </Container>
)

export default Header
