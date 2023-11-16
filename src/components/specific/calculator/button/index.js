import { useState } from "react"
import { Btn, Container } from "./style"

function Button({
  onMouseDown = () => {},
  onMouseUp = () => {},
  longPressEffect = false,
  children,
  ...rest
}) {
  const [typeAnimation, setTypeAnimation] = useState("")
  const [backButton, setBackButton] = useState(0)

  const animationDown = () => {
    setTypeAnimation("down")
    if (longPressEffect) {
      setBackButton(
        setTimeout(() => {
          setTypeAnimation("up")
          setTimeout(() => setTypeAnimation(""), 80)
        }, 1000),
      )
    } else {
      setTimeout(() => setTypeAnimation(""), 20)
    }
  }

  const animationUp = () => {
    clearTimeout(backButton)
    setTypeAnimation("")
  }

  return (
    <Container>
      <Btn
        onMouseDown={() => {
          onMouseDown()
          animationDown()
        }}
        onMouseUp={() => {
          onMouseUp()
          if (longPressEffect) animationUp()
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
