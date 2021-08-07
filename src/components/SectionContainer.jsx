//package imports
import styled from "styled-components"

//CSS for 'section' container
const SectionDiv = styled.div`
    padding-left:15rem;
    padding-right:15rem;
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