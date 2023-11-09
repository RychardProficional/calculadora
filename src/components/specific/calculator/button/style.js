import { styled, css, keyframes } from "styled-components"

export const Container = styled.div`
  position: relative;
  height: 50px;
  width: 75px;
`

const baseButton = (theme, type, typeAnimation) => {
  console.log(`${theme.name}${type}`)
  const btn = theme.colors.btn[type]

  const up = keyframes`
    to{background-color: ${btn.secondary}};
  `
  const down = keyframes`
    to{background-color: green};
  `
  let currentAnimation

  if (typeAnimation === "up") {
    currentAnimation = css`
      animation: ${up} 0.1s forwards;
    `
  } else if (typeAnimation === "down") {
    currentAnimation = css`
      animation: ${down} 0.1s;
    `
  } else {
    currentAnimation = css`
      animation: none;
    `
  }

  return css`
    ${currentAnimation}

    background-color: ${btn.primary};
    color: ${btn.color};
    border: 2px solid ${btn.border};
    box-shadow:
      ${(props) => props.theme.longShadow(btn.secondary, 7, 0)},
      7px 7px 10px black;

    &:hover {
      box-shadow:
        ${(props) => props.theme.longShadow(btn.secondary, 5, 0)},
        5px 5px 0 ${btn.secondary},
        5px 5px 0 ${btn.secondary},
        5px 5px 7px black;
    }
  `
}

export const Btn = styled.button`
  ${(props) =>
    baseButton(props.theme, props.typeStyle || "default", props.typeAnimation || undefined)}

  transform: translate(-7px, -7px);
  transition: 0.5s;

  &:hover {
    transform: translate(-5px, -5px);
  }

  font: 20px ${(props) => props.theme.fonts.primaryNumber};
  border-radius: 5px;
  width: 100%;
  height: 100%;
`
