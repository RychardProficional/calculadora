import styled from "styled-components"
import { ClockHistoryIcon } from "../../general/icons"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  padding: 30px;
  border-radius: 5px;

  box-shadow:
    ${(props) => props.theme.longShadow(props.theme.colors.secondary1, 10, 0)},
    11px 11px 25px #00000099;
  background-image: linear-gradient(
    to left top,
    ${(props) => props.theme.colors.secondary3} 20%,
    ${(props) => props.theme.colors.secondary4}
  );
`

export const Table = styled.table`
  border-spacing: 7px 7px;
`

export const ContantTerminal = styled.div`
  background-color: ${(props) => props.theme.colors.secondary5};
  height: 55px;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  position: relative;
`

export const ClockHistory = styled(ClockHistoryIcon)`
  color: ${(props) => props.theme.colors.contrastColor2};
  position: absolute;
  height: 20px;
  width: 20px;

  &:hover {
    color: ${(props) => props.theme.colors.contrastColor1};
  }
`

export const Terminal = styled.input.attrs((props) => ({
  type: "text",
  disabled: "disabled",
}))`
  text-align: right;
  width: 100%;
  height: 25px;
  margin-top: 5px;

  border: none;
  color: ${(props) => props.theme.colors.contrastColor1};
`
