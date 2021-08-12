//Package imports
import styled, {css} from "styled-components";
import React from "react"
import Scroll from "react-scroll"
import MediaQuery from "react-responsive";

//Image imports
import Logo from "../assets/VEC_LOGO.png"

//CSS for Navigation Buttons
const Button = styled.button`
    background:transparent;
    color:#f8f8ff;
    border:none;
    height:4rem;
    font-size:1.5em;
    font-family:Helvetica;
    
    
    ${props => props.left && css`
        margin-right:auto;
    `};

    transition:  0.25s ease-out;


    //Desktop
    @media only screen 
    and (min-device-width: 1025px){
        :hover{
            background-color: #181b27;
        }
    }
    
`

//CSS for entire navigation bar
const StyledNavigation = styled.nav`
    background-color:#28375d;
    height:4rem;
    display:flex;

    ${props => props.mobile && css`
        background-color:#313e5e;
        border-top:dashed #333b50 2px;
    `};
`

//CSS for logo
const Image = styled.img`
    //Desktop
    @media only screen 
    and (min-device-width: 1025px){
            padding-left:1rem;
            padding-right:1rem;
            height:90%;
        
    }
`

//CSS for Navigation Button Container
const StyledDiv = styled.div`
    display:grid;
    grid-template-columns:repeat(5, 1fr);
`

//Function which controls the scrolling through the page
const scrollToPoint = (pixelsDown) =>{
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(pixelsDown, {duration: 750,
        delay: 25,
        smooth: true,
        containerId: 'ContainerElementID',
        offset: 50,});
}

//Prevents bad security, thanks stackoverflow
const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}




//Component returned
const  Navigation = () => {
    return (
        <div>
            <StyledNavigation>
                {/* Only shows logo on desktop */}
                <MediaQuery minWidth={480}>
                    <Image src={Logo}/>
                </MediaQuery>

                <Button left>Victoria Engineering Club NZ</Button>

                {/* Only shows scroll buttons on desktop */}
                <MediaQuery minWidth={480}>
                    <StyledDiv>
                            <Button  onClick={() => scrollToPoint(100)}>Who are we?</Button>
                            <Button  onClick={() => scrollToPoint(450)}>About us</Button>
                            <Button  onClick={() => scrollToPoint(800)}>Events</Button>
                            <Button  onClick={() => openInNewTab("https://github.com/vecnz/documents")}>Documents</Button>
                            <Button  onClick={() => openInNewTab("https://forms.gle/vwpFNM31P7Yo3UgW8")}>Register</Button>
                    </StyledDiv>
                </MediaQuery>     
            </StyledNavigation>

            <MediaQuery maxWidth={480}>
                <StyledNavigation mobile>
                    <StyledDiv>
                        <Button  onClick={() => openInNewTab("https://github.com/vecnz/documents")}>Documents</Button>
                        <Button  onClick={() => openInNewTab("https://forms.gle/vwpFNM31P7Yo3UgW8")}>Register</Button>
                    </StyledDiv>
                </StyledNavigation>
            </MediaQuery>
        </div>
    )
    
}

export default Navigation;
