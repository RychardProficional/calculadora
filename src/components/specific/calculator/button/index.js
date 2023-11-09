import { Btn, Container } from "./style"

const animationDown = (e) => {}
const animationUp = (e) => {}

const Button = ({ children, onMouseUp = () => {}, onMouseDown = () => {}, ...rest }) => (
  <Container>
    <Btn
      onMouseDown={(e) => {
        onMouseDown()
        animationDown(e)
      }}
      onMouseUp={(e) => {
        onMouseUp()
        animationUp(e)
      }}
      {...rest}
    >
      {children}
    </Btn>
  </Container>
)

export default Button
