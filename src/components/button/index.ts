import styled from 'styled-components'

const btn = {
    equal: {
        colors: {
            primary: "#fff",
            letter: "letter",
        },
    },
}
const getTypeBtn = (theme, type) => {
    
    return `
        background-color: ;
        color: ;
        box-shadow: ;
    `
}

export const Container = styled.div`
    ${props => getTypeBtn(props.theme, (props.type || "default"))}
    color: ${props => props.theme.btn.equal.colors.letter}
`