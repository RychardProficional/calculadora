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
