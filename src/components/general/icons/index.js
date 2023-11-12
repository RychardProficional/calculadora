import { ImContrast } from "react-icons/im"
import { BsClockHistory, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs"
import { styled, css } from "styled-components"

const createLink = (tag) => (props) => (
  <a {...props} target="_blanck">
    {tag}
  </a>
)

const IconBase = css`
  height: 30px;
  width: 30px;
  transition: 0.3s ease;
  color: #000000bc;
`

export const ThemeIcon = styled(ImContrast)`
  ${IconBase}
  padding: 0px;
  border-radius: 20px;
  &:hover {
    border-radius: 3px;
    padding: 2px;
    background-color: blue;
    color: red;
  }
`

export const ClockHistoryIcon = styled(BsClockHistory)`
  ${IconBase}
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
