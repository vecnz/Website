//Package imports
import styled from "styled-components";

//Wraps all content on the page, excluding navbar and footer
const Content = styled.div`
    margin-left:20%;
    margin-right:20%;
    background-clip:margin-box;
    background-color:#f8f9fa;
    display:flex;
    flex-direction:column;

    //Mobile support
    @media only screen
    and (max-device-width: 480px){
        margin-left:1rem;
        margin-right:1rem;
    }
    
    
`

export default Content;