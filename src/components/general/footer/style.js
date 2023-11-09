import { styled, css } from "styled-components"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs"

const createLink = (tag) => (props) => (
  <a {...props} target="_blanck">
    {tag}
  </a>
) // talves seja uma boa ideia mudar esta função de lugar

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

const IconBase = css`
  height: 30px;
  width: 30px;
  transition: 0.3s;
  color: black;
`

export const GithubIcon = styled(BsGithub)`
  ${IconBase}
  &:hover {
    color: #6f42c1;
  }
`

export const LinkedinIcon = styled(BsLinkedin)`
  ${IconBase}
  &:hover {
    color: #0a66c2;
  }
`

export const InstagramIcon = styled(BsInstagram)`
  ${IconBase}
  &:hover {
    color: #f7a88c;
  }
`
export const InstagramLink = createLink(<InstagramIcon />)
export const LinkedinLink = createLink(<LinkedinIcon />)
export const GithubLink = createLink(<GithubIcon />)

export default Container
