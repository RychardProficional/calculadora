import styled from "styled-components"
import { ClockHistoryIcon } from "../../general/icons"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Table = styled.table`
  background-image: linear-gradient(
    to left top,
    ${(props) => props.theme.colors.secondary3} 20%,
    ${(props) => props.theme.colors.secondary4}
  );
  padding: 30px;
  border-radius: 5px;
  border-spacing: 7px 7px;
  transform: translate(-10px, -10px);
  box-shadow:
    ${(props) => props.theme.longShadow(props.theme.colors.secondary1, 10, 0)},
    11px 11px 25px #00000099;
`

export const ContantTerminal = styled.div`
  background-color: #b6cbf4;
  height: 55px;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  position: relative;
`

export const ClockHistory = styled(ClockHistoryIcon)`
  position: absolute;
  height: 20px;
  width: 20px;

  &:hover {
    color: black;
  }
`

export const Terminal = styled.input.attrs((props) => ({
  type: "text",
  disabled: "disabled",
}))`
  text-align: right;
  width: 100%;
  height: 25px;
  background-color: #22222222;
  border: none;
  color: black;
`
