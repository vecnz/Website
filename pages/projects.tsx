import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, Paragraph } from "./components/Styles";


const projects = () =>{
  return(
    <Container>
      <Navigation/>
      <Content>
        <Header>Victoria Engineering Club Related projects</Header>
        <Paragraph>
          In the near future, you'll be able to see all sorts of projects created by members of our clubs.
          If you have something you'd like to be added, contact one of our executives.
        </Paragraph>
      </Content>
      <Footer/>
    </Container>
  )
}

export default projects;