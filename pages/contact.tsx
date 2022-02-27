import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, Paragraph, UL } from "./components/Styles";

const contact = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <Header>Contact Methods</Header>
        <br />
        <UL>
          <LI><Paragraph>VEC Email: contact@vec.ac.nz</Paragraph></LI>
          <LI><Paragraph>VISDA Email: visda@vec.ac.nz</Paragraph></LI>
          <LI><Paragraph>Website: <a href="https://vec.ac.nz">vec.ac.nz</a></Paragraph></LI>
          <LI><Paragraph>Discord: <a href="https://discord.gg/vec">discord.gg/vec</a></Paragraph></LI>
        </UL>
      </Content>
      <Footer />
    </Container>
  );
};

export default contact;
