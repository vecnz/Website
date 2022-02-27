import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, Paragraph } from "./components/Styles";


const sponsors = () =>{
  return(
    <Container>
      <Navigation/>
      <Content>
        <Header>Club Sponsors</Header>
        <Paragraph>At the Victoria Engineering Club, we have awesome members of the community supporting our goals as a club. To be expanded</Paragraph>
        <Header>Atlassian</Header>
        <Header>VUWSA</Header>
        <Header>ECS Department</Header>
      </Content>
      <Footer/>
    </Container>
  )
}

export default sponsors;