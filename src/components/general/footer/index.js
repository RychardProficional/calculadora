import { Container, GithubLink, InstagramLink, LinkedinLink, ContainsIcons } from "./style"

export const Footer = () => (
  <Container>
    <div>Rychard Antony Pereira de Arruda</div>
    <ContainsIcons>
      <GithubLink href="https://github.com/RychardProfissional/" />
      <LinkedinLink href="https://linkedin.com/in/rychardprofissional" />
      <InstagramLink href="https://www.instagram.com/rychardprofissional/" />
    </ContainsIcons>
  </Container>
)

export default Footer
