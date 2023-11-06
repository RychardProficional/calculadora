import styled from "styled-components"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs"

const github = ({ className }) => <BsGithub className={className} />
const linkedin = ({ className }) => <BsLinkedin className={className} />
const instagram = ({ className }) => <BsInstagram className={className} />

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary2};
  height: 100px;
`

export const GithubIcon = styled(github)`
  color: purple;
`

export const LinkedinIcon = styled(linkedin)`
  color: blue;
`

export const InstagramIcon = styled(instagram)`
  color: red;
`

export default Container
