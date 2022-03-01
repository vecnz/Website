import Iframe from "react-iframe";
import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, Paragraph, UL } from "./components/Styles";

const events = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <Header>Official 2022 VEC Events</Header>
        <Paragraph>
          Keep up to date with all the officially run events put on by the
          Victoria Engineering Club!
        </Paragraph>
        <Iframe 
                    url = "https://calendar.google.com/calendar/embed?src=n24bj6sh2ckbafp9j7jjc092sg%40group.calendar.google.com&ctz=Pacific%2FAuckland"
                    width="100%"
                    height="1000px"
                />
      </Content>
      <Footer />
    </Container>
  );
};

export default events;
