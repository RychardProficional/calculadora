import styled from "styled-components"

export const Container = styled.div`
  display: ${(props) => (props.hidden ? "flex" : "none")};
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary5};
  border-radius: 5px;

  margin: 6px 0px 6px 15px;
  padding: 0 10px;
  width: 300px;
`

export const Element = styled.div`
  margin: 10px 0;

  text-align: right;
`

export const Calculation = styled.div`
  color: ${(props) => props.theme.colors.contrastColor1};
`
export const Result = styled.div`
  color: ${(props) => props.theme.colors.contrastColor2};
`
