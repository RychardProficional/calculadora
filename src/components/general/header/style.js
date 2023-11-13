import styled from "styled-components"

const velTransition = ".3s"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 75px;
  padding: 0 50px;

  font-family: ${(props) => props.theme.fonts.secondaryTitle};
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.secondary5};
  color: ${(props) => props.theme.colors.contrastColor1};
`

export const Div = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.div`
  margin-left: 20px;
  font-size: 20px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const LinkNav = styled.a`
  position: relative;

  padding: 5px;
  margin: 0 5px;
  color: ${(props) => props.theme.colors.contrastColor1};

  font-size: 1.2rem;

  transition: ${velTransition} ease-in-out;
  &:nth-child(4) {
    margin-right: 30px;
  }
  &::before {
    content: "";
    position: absolute;
    margin: auto;

    left: 50%;
    transform: translateX(-50%);
    top: 90%;

    transition: ${velTransition};
    border-radius: 2px;

    height: 2px;
    width: 0px;

    background-color: ${(props) => props.theme.colors.yellow1};
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`
