import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 75px;
  padding: 0 50px;
  background-color: ${(props) => props.theme.colors.secondaryBackground};
`
