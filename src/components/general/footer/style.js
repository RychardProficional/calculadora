import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.secondary2};
  padding: 25px 0;
`

export const ContainsIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 20px;

  width: 200px;
`
