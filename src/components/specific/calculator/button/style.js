import { styled, css } from "styled-components"

export const Container = styled.div`
  position: relative;
  height: 50px;
  width: 75px;
`

const baseButton = (theme, type, typeanimation) => {
  const btn = theme.colors.btn[type]
  let currentAnimation

  if (typeanimation === "down") {
    currentAnimation = css`
      transition: 0s;
      transform: translate(-3px, -3px);

      box-shadow:
        ${theme.longShadow(btn.secondary, 3, 0)},
        3px 3px 0 ${btn.secondary},
        3px 3px 0 ${btn.secondary},
        3px 3px 0 ${btn.secondary},
        3px 3px 0 ${btn.secondary},
        3px 3px 4px black;
    `
  } else if (typeanimation === "up") {
    currentAnimation = css`
      background-color: ${theme.colors.primary5};
      box-shadow: none;
    `
  } else {
    currentAnimation = css`
      transform: translate(-7px, -7px);

      &:hover {
        transform: translate(-5px, -5px);
        box-shadow:
          ${(props) => props.theme.longShadow(btn.secondary, 5, 0)},
          5px 5px 0 ${btn.secondary},
          5px 5px 0 ${btn.secondary},
          5px 5px 7px black;
      }
    `
  }

  return css`
    font: 20px ${theme.fonts.primaryNumber};

    background-color: ${btn.primary};
    color: ${btn.color};
    border: 2px solid ${btn.border};
    box-shadow:
      ${theme.longShadow(btn.secondary, 7, 0)},
      7px 7px 10px black;

    ${currentAnimation}
  `
}

export const Btn = styled.button`
  transition: 0.3s;

  border-radius: 5px;
  width: 100%;
  height: 100%;
  ${(props) =>
    baseButton(props.theme, props.typestyle || "default", props.typeanimation || undefined)}
`
