import { Container } from "./style"

const Header = () => {
  return (
    <Container>
      <div>
        <img alt="logo" />
        Calculadora - portiforio rychard
      </div>
      <nav>
        <a href=".">Home</a>
        <a href=".">Projetos</a>
        <a href=".">Contato</a>
        <a href=".">Sobre</a>
      </nav>
    </Container>
  )
}

export default Header
