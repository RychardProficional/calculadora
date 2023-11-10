import { useState } from "react"
import { Btn, Container } from "./style"

function Button({
  children,
  onMouseUp = () => {},
  onMouseDown = () => {},
  longPressEffect = false,
  ...rest
}) {
  const [typeAnimation, setTypeAnimation] = useState("")
  const [backButton, setBackButton] = useState(0)

  const animationDown = () => {
    setTypeAnimation("down")
    setBackButton(
      setTimeout(() => {
        if (longPressEffect) {
          setTypeAnimation("up")
          setTimeout(() => setTypeAnimation(""), 100)
        } else {
          setTypeAnimation("")
        }
      }, 1000),
    )
  }

  const animationUp = () => {
    clearTimeout(backButton)
    setTypeAnimation("")
  }

  return (
    <Container>
      <Btn
        onMouseDown={(e) => {
          onMouseDown()
          animationDown()
        }}
        onMouseUp={(e) => {
          onMouseUp()
          animationUp()
        }}
        typeanimation={typeAnimation}
        {...rest}
      >
        {children}
      </Btn>
    </Container>
  )
}

export default Button
