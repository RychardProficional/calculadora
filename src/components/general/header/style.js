import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 75px;
  padding: 0 50px;

  font-family: ${(props) => props.theme.fonts.secondaryTitle};
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.secondaryBackground};
`

export const Div = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.div`
  margin-left: 20px;
  font-size: 20px;
`

export const Nav = styled.nav``

const velTransition = ".2s"

export const LinkNav = styled.a`
  position: relative;

  padding: 5px;
  margin: 0 5px;

  font-size: 1.2rem;

  transition: ${velTransition};

  &::before {
    content: "";
    position: absolute;
    margin: auto;

    left: 50%;
    transform: translateX(-50%);
    top: 90%;

    transition: ${velTransition};

    height: 2px;
    width: 0px;

    background-color: blue;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondaryLetter};
    &::before {
      width: 100%;
    }
  }
`
