import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, Paragraph, UL } from "./components/Styles";


const exec = () =>{
  return(
    <Container>
      <Navigation/>
      <Content>
      <Header>VEC 2022 Executive Team</Header>
        <Paragraph>
          Our volunteers which make sure our events are run, our funding is secured, and Howard's dad jokes are contained.
        </Paragraph>
        <UL>
          <LI><Header>President:</Header><Paragraph>Leon Bowie</Paragraph></LI>
          <LI><Header>Vice President:</Header><Paragraph>Shae West</Paragraph></LI>
          <LI><Header>Treasurer:</Header><Paragraph>Alex Pol</Paragraph></LI>
          <LI><Header>Secretary:</Header><Paragraph>Georgia Barrand</Paragraph></LI>
          <LI>
            <Header>General Executives:</Header>
            <Paragraph>- Naruebet Thanuwohan</Paragraph>
            <Paragraph>- Brandon Ru</Paragraph>
            <Paragraph>- Rachel Bartram</Paragraph>
            <Paragraph>- Isabelle Isaacs</Paragraph>
            <Paragraph>- Tristan Basinnag</Paragraph>
            <Paragraph>- Quinten Smit</Paragraph>


            </LI>



        </UL>
      </Content>
      <Footer/>
    </Container>
  )
}

export default exec;