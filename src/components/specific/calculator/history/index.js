import { Calculation, Container, Element, Result } from "./style"

const History = ({ content, ...rest }) => {
  return (
    <Container {...rest}>
      {content.map((key) => (
        <Element>
          <Calculation>{key[0]}</Calculation>
          <Result>{key[1]}</Result>
        </Element>
      ))}
    </Container>
  )
}
export default History
