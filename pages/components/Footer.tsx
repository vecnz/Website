//Package imports
import styled from "styled-components";

//CSS for footer
const StyledFooter = styled.div`
  height: 5rem;
  background-color: #28375d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  bottom: 0px;
  left: 0px;
`;

const Text = styled.p`
  color: #f8f9fa;
  text-align: center;
`;

//Component returned
const Footer = () => {
  return (
    <StyledFooter>
        <Text>Copyright 2022 @ Victoria Engineering Club</Text>
    </StyledFooter>
  );
};

export default Footer;
