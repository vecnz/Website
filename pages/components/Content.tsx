import styled from "styled-components"

const Content = styled.div`
    margin-bottom:3%;
    background-clip:margin-box;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    overflow-x:hidden;
    overflow-y:scroll;
    padding-left:20%;
    padding-right:20%;
    
    @media only screen
    and (max-device-width: 480px){
      padding:0px;
    }
`

export default Content