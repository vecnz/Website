//package imports
import styled from "styled-components"

//CSS for 'section' container
const SectionDiv = styled.div`
    padding-left:10%;
    padding-right:10%;
    padding-bottom:2rem;
    padding-top:2rem;

    //Mobile
    @media only screen
    and (orientation: portrait)
    and (max-device-width: 480px){
        padding:1rem;
    }

`

export default SectionDiv;