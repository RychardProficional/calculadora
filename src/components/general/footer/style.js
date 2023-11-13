import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.secondaryTitle};

  background-color: ${(props) => props.theme.colors.secondary2};
  padding: 25px 0;
  color: ${(props) => props.theme.colors.contrastColor1};
`

export const ContainsIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 20px;

  width: 200px;
`
