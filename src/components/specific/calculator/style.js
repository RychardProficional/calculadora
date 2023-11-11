import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Table = styled.table`
  background-color: ${(props) => props.theme.colors.secondary1};
  padding: 30px;
  border-radius: 5px;
  border-spacing: 7px 7px;
`

export const ContantTerminal = styled.div`
  background-color: #b6cbf4;
  height: 75px;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`

export const Terminal = styled.input.attrs((props) => ({
  type: "text",
  disabled: "disabled",
}))`
  text-align: right;
  width: 100%;
  background-color: #22222222;
  border: none;
  color: black;
`
