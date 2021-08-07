//Package imports
import styled from "styled-components";
import MediaQuery from "react-responsive";

//Image imports
import GithubLogo from "../assets/GITHUB_LOGO.png"

//CSS for footer
const StyledFooter = styled.div`
    height:5rem;
    background-color:#28375d;
    display:flex;
    justify-content:center;
    align-items:center;

    //Mobile
    @media only screen
    and (orientation: portrait)
    and (max-device-width: 480px){
        display:grid;
        height:10rem;
    }
`

//CSS for Footer text
const Paragraph = styled.p`
    text-align:center;
    margin:0.75rem;
`

//CSS for anchor text
const Anchor = styled.a`
    color:#f8f9fa;
    height:auto;
`

const Image = styled.img`
    //Desktop
    @media only screen 
    and (min-device-width: 1025px){
        :hover{
            opacity:0.7;
        }
    }

`

//Component returned
const Footer = () =>{
    return(
        <StyledFooter>
            <Paragraph>Copyright 2021 @ Victoria Engineering Club</Paragraph>
            <Paragraph>Contact email: contact@vec.ac.nz</Paragraph>

            {/* Desktop */}
            <MediaQuery minWidth={480}>
                <Paragraph>Access Github {">>"}</Paragraph>
                <Anchor href="https://github.com/vecnz/vecnz.github.io" target="_blank"><Image src={GithubLogo}/></Anchor>
            </MediaQuery>

            {/* Mobile */}
            <MediaQuery maxWidth={480}>
                <Paragraph>Github link: <Anchor href="https://github.com/vecnz/vecnz.github.io" target="_blank">github.com</Anchor></Paragraph>
            </MediaQuery>
            

        </StyledFooter>
    )
}

export default Footer;