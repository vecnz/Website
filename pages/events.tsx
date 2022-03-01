import Iframe from "react-iframe";
import styled from "styled-components";
import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, Paragraph, UL } from "./components/Styles";

const CalendarDiv = styled.div`
  display:grid;
  grid-template-columns:2fr 1fr;
`

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
        <CalendarDiv>
        <Iframe
          url='https://calendar.google.com/calendar/embed?src=n24bj6sh2ckbafp9j7jjc092sg%40group.calendar.google.com&ctz=Pacific%2FAuckland&amp;showTabs=0&amp;showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showCalendar=0&amp;showTz=0&amp;showNav=0&amp;showCalendars=0&amp;bgcolor=%23f8f9fa&amp;'
          width="100%"
          height="500px"
          frameBorder={0}
        />
        <Iframe
          url='https://calendar.google.com/calendar/embed?src=n24bj6sh2ckbafp9j7jjc092sg%40group.calendar.google.com&ctz=Pacific%2FAuckland&amp;showTabs=0&amp;showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showCalendar=0&amp;showTz=0&amp;showNav=0&amp;showCalendars=0&amp;bgcolor=%23f8f9fa&amp;mode=AGENDA&amp;'
          width="100%"
          height="500px"
          frameBorder={0}
        />
        </CalendarDiv>        
      </Content>
      <Footer />
    </Container>
  );
};

export default events;
