import styled from "styled-components"

//CSS for all paragraph text
const Paragraph = styled.p`
    color: #123123;
    font-size:1.5rem;

    //Mobile
    @media only screen
    and (orientation: portrait)
    and (max-device-width: 480px){
        font-size:1.1rem;
    }
`

//CSS for all headers
const Header = styled.h1`
    color: #123123;
    font-size:2rem;

    //Mobile
    @media only screen
    and (orientation: portrait)
    and (max-device-width: 480px){
        font-size:1.5rem;
    }
`

//CSS for horizontal lines
const HorLine = styled.hr`
    color:#c8cedd;
    height:2px;
    background-color:#c8cedd;
    border:none;
    width:auto;

    margin-left:15rem;
    margin-right:15rem;
    margin-bottom:2rem;
    margin-top:2rem;

    //Mobile
    @media only screen
    and (orientation: portrait)
    and (max-device-width: 480px){
        margin:1rem;
    }
`

export {Paragraph, Header, HorLine}